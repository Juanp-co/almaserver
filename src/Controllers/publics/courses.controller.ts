import _ from 'lodash';
import { Request, Response } from 'express';
import getCoursesList, {
  getCourseDetails,
  getCoursesDataUsers,
  getModelReturnCourseOrTheme
} from '../../ActionsData/CoursesActions';
import { validateTestData } from '../../FormRequest/CoursesRequest';
import { checkObjectId, checkSlug, checkTitlesOrDescriptions } from '../../Functions/Validations';
import { setDate, getLimitSkipSortSearch, returnError } from '../../Functions/GlobalFunctions';
import { ICourseList } from '../../Interfaces/ICourse';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';

const path = 'src/Controllers/publics/courses.controller';

function returnNotFound(res: Response, code: string | null) : Response {
  switch (code) {
    case '404Course':
      return res.status(404).json({
        msg: 'Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.'
      });
    case '404Comment':
      return res.status(404).json({
        msg: 'Disculpe, pero el comentario no existe o no se encuentra disponible.'
      });
    case '404CourseUser':
      return res.status(404).json({
        msg: 'Disculpe, pero no ha registrado el curso en su listado.',
        addCourse: true // to add course
      });
    case '404Theme':
      return res.status(404).json({
        msg: 'Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.'
      });
    case 'errorCommentId':
      return res.status(422).json({
        msg: 'Disculpe, pero el comentario seleccionado es incorrecto.'
      });
    case 'errorComment':
      return res.status(422).json({
        msg:
          'Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\\-+"\'/@.'
      });
    case 'errorThemeId':
      return res.status(422).json({
        msg: 'Disculpe, pero el tema seleccionado es incorrecto.'
      });
    case 'like':
      return res.status(422).json({
        msg: 'Disculpe, pero no se determinó la acción a realizar.'
      });
    case 'slug':
      return res.status(422).json({
        msg: 'Disculpe, pero el curso seleccionado es incorrecto.'
      });
    case 'wasRealized':
      return res.status(422).json({
        msg: `Disculpe, pero ya has realizado esta acción anteriormente.`
      });
    default:
      return res.status(500).json({
        msg: 'Ha ocurrido un error al momento de obtener la respuesta a notificar'
      });
  }
}

// =====================================================================================================================

export default async function getCourses(req: Request, res: Response) : Promise<Response>{
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const { code, title } = req.query;
    const { userrole } = req.body;
    const query: any = { toRoles: userrole, enable: true };

    if (code) query.code = code.toString().toUpperCase();
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};

    const courses = await getCoursesList({
      query,
      limit,
      skip,
      sort,
      isPublic: true,
      projection: { _id: 1, title: 1, banner: 1, slug: 1, description: 1, speaker: 1, speakerPosition: 1, created_at: 1 }
    });

    return res.json({
      msg: 'Cursos',
      courses
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCourses`);
  }
}

export async function getCoursesCounters(req: Request, res: Response) : Promise<Response>{
  try {
    const { code, title } = req.query;
    const query: any = { enable: true };

    if (code) query.code = { $regex: new RegExp(`${code}`, 'i')};
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};

    const totals = await Courses.find(query).countDocuments().exec();

    return res.json({
      msg: 'Total de cursos.',
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCoursesCounters`);
  }
}

export async function addCourseUser(req: Request, res: Response) : Promise<Response> {
  try {
    const { userid, slug } = req.params;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');

    const courseExist = await getCourseDetails({ query: { slug } });
    if (!courseExist) return returnNotFound(res, '404Course');

    // check if exists course
    const myCourse = await CoursesUsers.find({ userid, courseId: courseExist._id.toString() }).countDocuments().exec();

    if (myCourse > 0) {
      return res.status(422).json({
        msg: 'Disculpe, pero ya tiene disponible este curso en su cuenta.'
      });
    }

    // get temary list ids
    const temaryIds: string[] = _.map(courseExist ? courseExist.temary : [], 'errorThemeId');

    if (temaryIds.length === 0) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso actual no cuenta con temas.',
      });
    }

    const course = new CoursesUsers({
      userid,
      courseId: courseExist._id
    });

    temaryIds.forEach((t: string) => course.temary.push({ temaryId: t }));

    await course.save();

    return res.status(201).json({
      msg: 'Se ha agregado el curso exitosamente.',
      added: course
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/addCourseUser`);
  }
}

export async function showCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug } = req.params;
    const { userrole } = req.body;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');

    const course: ICourseList | null = await getCourseDetails({
      query: { slug, toRoles: userrole, enable: true },
      isPublic: true,
      projection: { 'temary.comments': 0, 'temary.likes': 0, 'temary.unlikes': 0 }
    });
    if (!course) return returnNotFound(res, '404Course');

    // check and get data user course user
    const dataCourseUser = await getCoursesDataUsers({ query: { courseId: course._id } });

    return res.json({
      msg: 'Curso',
      course: await getModelReturnCourseOrTheme(course, false),
      dataCourseUser: dataCourseUser || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourse`);
  }
}

export async function showCourseTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id } = req.params;
    const { prevThemeId } = req.query;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const course = await getCourseDetails({
      query: { slug, enable: true },
      isPublic: true,
      projection: { temary: 1 }
    });
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne({ courseId: course._id }, { temary: 1 }).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // get theme
    const theme = _.find(course.temary, v => v._id.toString() === _id);
    if (!theme) return returnNotFound(res, '404Theme');

    // check if exist prev to update view
    if (prevThemeId && checkObjectId(prevThemeId)) {
      const index = _.findIndex(myCourse.temary, t => t.temaryId === prevThemeId);
      if (index > -1) {
        if (myCourse.temary[index].view !== 2) {
          myCourse.temary[index].view = 2;
          myCourse.temary[index].date = setDate();
          await myCourse.save();
        }
      }
    }

    // set the new theme in viewing
    const index2 = _.findIndex(myCourse.temary, t => t.temaryId === _id);

    if (index2 > -1) {
      if (myCourse.temary[index2].view !== 2) {
        myCourse.temary[index2].view = 1;
        myCourse.temary[index2].date = setDate();
        await myCourse.save();
      }
    }

    return res.json({
      msg: 'Tema',
      theme: await getModelReturnCourseOrTheme(theme, true),
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourseTheme`);
  }
}

/*
  Comments Course
 */

export async function likeOrUnlikeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, userid} = req.params;
    const { like } = req.body;
    let ret: any = null;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!/[01]{1}/.test(like)) return returnNotFound(res, 'like');

    const course = await Courses.findOne({ slug, enable: true, }, { 'likes': 1, 'unlikes': 1 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');

    if (!course.likes) course.likes = [];
    if (!course.unlikes) course.unlikes = [];

    if (like && _.findIndex(course.likes, l => l.userid === userid) === -1) {
      course.likes.push({ userid });
      // remove unlike if exist
      course.unlikes = _.filter(course.unlikes, u => u.userid !== userid);
      const totalLikes = course.likes.length;
      ret = { like: course.likes[totalLikes - 1] };
    }
    else if (!like && _.findIndex(course.unlikes, u => u.userid === userid) === -1) {
      course.unlikes.push({ userid });
      // remove like in case if exists
      course.likes = _.filter(course.likes, u => u.userid !== userid);
      const totalUnlikes = course.unlikes.length;
      ret = { unlike: course.unlikes[totalUnlikes - 1] }
    }
    else return returnNotFound(res, 'wasRealized');

    await Courses.updateOne(
      { _id: course._id },
      { $set: { likes: course.likes, unlikes: course.unlikes } }
    ).exec();

    return res.status(201).json({
      msg: `${like ? 'Me gusta' : 'No me gusta'} agregado exitosamente.`,
      data: ret,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/likeOrUnlikeCourse`);
  }
}

export async function commentCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, userid } = req.params;
    const { comment } = req.body;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkTitlesOrDescriptions(comment)) return returnNotFound(res, 'errorComment');

    const course = await Courses.findOne({ slug, enable: true },{ comments: 1 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');
    if (!course.comments) course.comments = [];

    // add comment
    course.comments.push({
      userid,
      comment,
      likes: [],
      unlikes: []
    });

    // save
    await course.save();

    return res.status(201).json({
      msg: 'Se ha agregado el comentario exitosamente.',
      comment: course.comments[course.comments.length - 1],
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/commentCourse`);
  }
}

export async function likeOrUnlikeCourseComment(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, userid } = req.params;
    const { like } = req.body;
    let ret: any = null;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorCommentId');
    if (!/[01]{1}/.test(like)) return returnNotFound(res, 'like');

    const course = await Courses.findOne({ slug, enable: true, 'comments._id': _id }, { 'comments': 1 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');

    const index = _.findIndex(course.comments, c => c._id.toString() === _id);
    if (index === -1) return returnNotFound(res, '404Comment');

    if (!course.comments[index].likes) course.comments[index].likes = [];
    if (!course.comments[index].unlikes) course.comments[index].unlikes = [];

    if (like) {
      if (_.findIndex(course.comments[index].likes, l => l.userid === userid) === -1) {
        course.comments[index].likes.push({ userid });
        // remove unlike if exist
        course.comments[index].unlikes = _.filter(course.comments[index].unlikes, u => u.userid !== userid);
        const totalLikes = course.comments[index].likes.length;
        ret = { like: course.comments[index].likes[totalLikes - 1] };
      }
    }
    else if (!like && _.findIndex(course.comments[index].unlikes, u => u.userid === userid) === -1) {
      course.comments[index].unlikes.push({ userid });
      // remove like in case if exists
      course.comments[index].likes = _.filter(course.comments[index].likes, u => u.userid !== userid);
      const totalUnlikes = course.comments[index].unlikes.length;
      ret = { unlike: course.comments[index].unlikes[totalUnlikes - 1] }
    }
    else return returnNotFound(res, 'wasRealized');

    await Courses.updateOne({ _id: course._id }, { $set: { comments: course.comments } } ).exec();

    return res.status(201).json({
      msg: `${like ? 'Me gusta' : 'No me gusta'} agregado exitosamente.`,
      data: ret,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/likeOrUnlikeCourseComment`);
  }
}

/*
  Comments theme
 */

export async function likeOrUnlikeTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, userid } = req.params;
    const { like } = req.body;
    let ret: any = null;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');
    if (!/[01]{1}/.test(like)) return returnNotFound(res, 'like');

    const course = await Courses.findOne({ slug, enable: true, }, { 'temary': 1 }).exec() as any;
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');

    const index = _.findIndex(course.temary || [], (t: any) => t._id.toString() === _id);
    if (index === -1 || !course.temary || !course.temary[index]) return returnNotFound(res, '404Theme');

    if (!course.temary[index].likes) course.temary[index].likes = [];
    if (!course.temary[index].unlikes) course.temary[index].unlikes = [];

    if (like && _.findIndex(course.temary[index].likes, (l: any) => l.userid === userid) === -1) {
      course.temary[index].likes.push({ userid });
      // remove unlike if exist
      course.unlikes = _.filter(course.temary[index].unlikes, u => u.userid !== userid);
      ret = { like: course.temary[index].likes[course.temary[index].likes.length - 1] };
    }
    else if (!like && _.findIndex(course.temary[index].unlikes, (u: any) => u.userid === userid) === -1) {
      if (course.temary[index].unlikes){
        course.temary[index].unlikes.push({ userid });
      }
      // remove like in case if exists
      course.temary[index].likes = _.filter(course.temary[index].likes, u => u.userid !== userid);
      ret = { unlike: course.temary[index].unlikes[course.temary[index].unlikes.length - 1] }
    }
    else return returnNotFound(res, 'wasRealized');

    await Courses.updateOne(
      { _id: course._id },
      { $set: { temary: course.temary, } }
    ).exec();

    return res.status(201).json({
      msg: `${like ? 'Me gusta' : 'No me gusta'} agregado al tema exitosamente.`,
      data: ret,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/likeOrUnlikeCourse`);
  }
}

export async function commentCourseTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, userid } = req.params;
    const { comment } = req.body;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');
    if (!checkTitlesOrDescriptions(comment)) return returnNotFound(res, 'errorComment');

    const course = await Courses.findOne({ slug, enable: true },{ temary: 1 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');
    if (course.temary.length === 0) return returnNotFound(res, '404Theme');

    // get theme
    const index = _.findIndex(course.temary, v => v._id.toString() === _id);
    if (index === -1 || !course.temary[index]) return returnNotFound(res, '404Theme');

    if (!course.temary[index].comments) course.temary[index].comments = [];

    // add comment
    course.temary[index].comments.push({
      userid,
      comment,
      likes: [],
      unlikes: []
    });

    // save
    await course.save();

    return res.status(201).json({
      msg: 'Se ha agregado el comentario exitosamente.',
      comment: course.temary[index].comments[course.temary[index].comments.length - 1],
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/commentCourseTheme`);
  }
}

export async function likeOrUnlikeCourseThemeComment(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, commentId, userid } = req.params;
    const { like } = req.body;
    let ret: any = null;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');
    if (!checkObjectId(commentId)) return returnNotFound(res, 'errorCommentId');
    if (!/[01]{1}/.test(like)) return returnNotFound(res, 'like');

    const course = await Courses.findOne(
      { slug, enable: true, 'temary._id': _id, 'temary.comments._id': commentId },
      { 'temary.$': 1, 'temary.comments.likes': 1, 'temary.comments.unlikes': 1 }
    ).exec();

    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');
    if (course.temary.length === 0) return returnNotFound(res, '404Theme');

    const index = _.findIndex(course.temary[0].comments, v => v._id.toString() === commentId);

    if (!course.temary[0].comments[index]) return returnNotFound(res, '404Comment');

    if (!course.temary[0].comments[index].likes) course.temary[0].comments[index].likes = [];
    if (!course.temary[0].comments[index].unlikes) course.temary[0].comments[index].unlikes = [];

    if (like && _.findIndex(course.temary[0].comments[index].likes, l => l.userid === userid) === -1) {
      course.temary[0].comments[index].likes.push({ userid });
      // remove unlike if exist
      course.temary[0].comments[index].unlikes = _.filter(course.temary[0].comments[index].unlikes, u => u.userid !== userid);
      const totalLikes = course.temary[0].comments[index].likes.length;
      ret = { like: course.temary[0].comments[index].likes[totalLikes - 1] };
    }
    else if (!like && _.findIndex(course.temary[0].comments[index].unlikes, u => u.userid === userid) === -1) {
      course.temary[0].comments[index].unlikes.push({ userid });
      // remove like in case if exists
      course.temary[0].comments[index].likes = _.filter(course.temary[0].comments[index].likes, u => u.userid !== userid);
      const totalUnlikes = course.temary[0].comments[index].unlikes.length;
      ret = { unlike: course.temary[0].comments[index].unlikes[totalUnlikes - 1] }
    }
    else return returnNotFound(res, 'wasRealized');

    await Courses.updateOne(
      { _id: course._id, 'temary._id': _id, 'temary.comments._id': commentId },
      { $set: { 'temary.$.comments': course.temary[0].comments } }
    ).exec();

    return res.status(201).json({
      msg: `${like ? 'Me gusta' : 'No me gusta'} agregado exitosamente.`,
      data: ret,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/likeOrUnlikeCourseThemeComment`);
  }
}

/*
  Test course
 */

export async function getTestCourse(req: Request, res: Response) : Promise<Response> {
  try {
    const { slug, userid } = req.params;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');

    const course = await Courses.findOne({ slug, enable: true, }, { 'test.correctAnswer': 0 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.find({ userid, courseId: course._id }).countDocuments().exec();
    if (myCourse === 0) return returnNotFound(res, '404CourseUser');

    return res.json({
      msg: 'Prueba del curso',
      test: course.test
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/getTestCourse`);
  }
}

export async function evaluateTestCourse(req: Request, res: Response) : Promise<Response> {
  try {
    const { slug, userid } = req.params;
    const validate = validateTestData(req.body.data || []);

    if (validate.errors.length > 0) {
      return res.status(404).json({
        msg: '¡Error en los parámetros!',
        errors: validate.errors
      });
    }

    const course = await Courses.findOne({ slug, enable: true, }, { 'test': 1 }).exec();
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne({ userid, courseId: course._id }, { tests: 1, approved: 1 }).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // check if course is approved
    if (myCourse.approved) {
      return res.status(422).json({
        msg: 'Disculpe, pero ya ha aprobado este curso anteriormente.'
      });
    }

    // points to test
    let points = 0;

    validate.data.forEach(a => {
      // get questions
      const question = _.find(course.test, t => t._id.toString() === a.questionId);
      if (question) {
        // check if questions has a default answer
        if (question.correctAnswer !== null) points += question.correctAnswer.toString() === a.answer ? 1 : 0;
        else points++;
      }
    });

    // get average and check if the user approved the test
    const average = points > 0 ? points * 100 / validate.data.length : 0;
    const approved = (average === 100 || average >= 75);
    const msg = approved ?
      'Ha aprobado el curso exitosamente.' :
      'Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del curso.';

    // update data course user
    myCourse.tests.push({ points: average });
    myCourse.approved = approved;
    await myCourse.save();

    return res.json({
      msg,
      average,
      approved
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/evaluateTestCourse`);
  }
}
