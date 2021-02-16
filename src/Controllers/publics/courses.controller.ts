import _ from 'lodash';
import { Request, Response } from 'express';
import getCoursesList, {
  checkIfUserApprovedPreviousCourses,
  getCourseDetails,
  getCoursesDataUser,
  getModelReturnCourseOrTheme, returnNotFound, setPointToTest
} from '../../ActionsData/CoursesActions';
import { validateTestData } from '../../FormRequest/CoursesRequest';
import {
  setDate,
  getLimitSkipSortSearch,
  returnError,
  returnErrorParams
} from '../../Functions/GlobalFunctions';
import { checkObjectId, checkSlug, checkTitlesOrDescriptions } from '../../Functions/Validations';
import { ICourseList, ICourseTemary } from '../../Interfaces/ICourse';
import { ICourseUserTemary } from '../../Interfaces/ICourseUser';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';

const path = 'src/Controllers/publics/courses.controller';

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

    if (courseExist.temary && courseExist.temary.length === 0) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso actual no cuenta con temas.',
      });
    }

    const course = new CoursesUsers({
      userid,
      courseId: courseExist._id
    });

    let error = false;

    for (const temary of courseExist.temary || []) {
      const model = {
        temaryId: temary._id.toString(),
        content: [],
        test: [],
      } as ICourseUserTemary;

      for (const content of temary.content) {
        model.content.push({ contentId: content._id.toString() });
      }

      if (model.content.length === 0) {
        error = true;
        break;
      }
      else course.temary.push(model);
    }

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
    const dataCourseUser = await getCoursesDataUser({ query: { courseId: course._id } });

    return res.json({
      msg: 'Curso',
      course: await getModelReturnCourseOrTheme({ data: course }),
      dataCourseUser: dataCourseUser || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourse`);
  }
}

export async function showCourseContentTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id } = req.params;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const course = await getCourseDetails({
      query: { slug, 'temary._id': _id, enable: true },
      isPublic: true,
      projection: { 'temary.$': 1, levels: 1 }
    });
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne({ courseId: course._id.toString() }, { temary: 1 }).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // check if previous courses is approved
    if (
      course.levels
      && course.levels.length > 0
      && !(await checkIfUserApprovedPreviousCourses(_.map(course.levels, '_id')))
    ) {
      return returnNotFound(res, 'wasNotPreviousCourse');
    }

    const theme: ICourseTemary = await getModelReturnCourseOrTheme({ data: course, theme: true, showContent: true }) as ICourseTemary;

    if (theme) {
      if (theme.content.length > 0) {
        const index = _.findIndex(myCourse.temary, t => t.temaryId === theme._id.toString());

        if (index > -1) {
          // set view values
          theme.view = myCourse.temary[index].view;
          myCourse.temary[index].content.forEach(c => {
            const index2 = _.findIndex(theme.content, c2 => c2._id.toString() === c.contentId);
            if (index2 > -1) theme.content[index2].view = c.view;
          });
        }
      }
    }

    return res.json({
      msg: 'Tema',
      theme,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourseTheme`);
  }
}

export async function updateHistoricalCourseContent(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, contentId, action } = req.params;

    if (['watching', 'viewed'].indexOf(`${action}`) === -1) return returnNotFound(res, 'errorAction');
    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');
    if (!checkObjectId(contentId)) return returnNotFound(res, 'errorContentId');

    const course = await getCourseDetails({
      query: { slug, 'temary._id': _id, enable: true },
      isPublic: true,
      projection: { 'temary.$.content': 1, levels: 1 }
    });
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne({ courseId: course._id }, { temary: 1 }).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // check if previous courses is approved
    if (course.levels && course.levels.length > 0) {
      if (!(await checkIfUserApprovedPreviousCourses(_.map(course.levels, '_id')))) {
        return returnNotFound(res, 'wasNotPreviousCourse');
      }
    }

    // get theme
    if ((!course.temary) || (course.temary && course.temary.length === 0)) {
      return returnNotFound(res, '404Theme');
    }

    const temary = course.temary[0] || [];
    const indexContent = _.findIndex(temary.content, v => v._id.toString() === contentId);

    if (indexContent === -1) return returnNotFound(res, '404Content');

    // set the new theme in viewing
    const index = _.findIndex(myCourse.temary, t => t.temaryId === _id);

    if (index > -1) {
      const index2 = _.findIndex(myCourse.temary[index].content, c => c.contentId === contentId);

      if (index2 > -1) {
        myCourse.temary[index].content[index2].view = action === 'watching' ? 1 : 2;
        myCourse.temary[index].content[index2].date = setDate();
      }

      // check if all content was viewed
      if (action === 'viewed') {
        let acc = 0;
        myCourse.temary[index].content.forEach(c => {
          if (c.view === 2) acc++;
        });

        if (myCourse.temary[index].content.length === acc)
          myCourse.temary[index].view = 2;
      }

      myCourse.temary[index].date = setDate();
      await myCourse.save();
    }

    return res.json({
      msg: '¡Éxito al guardar el progreso!',
      updated: true
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

    await Courses.updateOne({ _id: course._id }, { $set: { likes: course.likes, unlikes: course.unlikes } }).exec();

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
    course.comments.push({ userid, comment, likes: [], unlikes: [] });

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
      if (course.temary[index].unlikes) course.temary[index].unlikes.push({ userid });
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

export async function getTest(req: Request, res: Response) : Promise<Response> {
  try {
    const { slug, _id, userid } = req.params;
    const ret: any = [];

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const course = await Courses.findOne(
      { slug, 'temary._id': _id, enable: true, },
      { 'temary.$.test': 1, levels: 1 }
    ).exec();

    if (!course) return returnNotFound(res, '404Course');
    if (!course.temary) return returnNotFound(res, '404Theme');

    // check if previous courses is approved
    if (course.levels && course.levels.length > 0) {
      if (!(await checkIfUserApprovedPreviousCourses(_.map(course.levels, '_id')))) {
        return returnNotFound(res, 'wasNotPreviousCourse');
      }
    }

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne(
      { userid, courseId: course._id },
      { 'temary.temaryId': 1, 'temary.test': 1, 'temary.approved': 1, 'temary.view': 1, approved: 1 }
      ).exec();

    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // check if theme is approved or course
    if (myCourse.approved) return returnNotFound(res, 'wasRealizedAllTest');
    const index = _.findIndex(myCourse.temary, t => t.temaryId === _id);

    if (index === -1) return returnNotFound(res, '404GetDataTemaryUser');
    if (myCourse.temary[index].view !== 2) return returnNotFound(res, 'notFinishTheme');
    if (myCourse.temary[index].approved) return returnNotFound(res, 'wasRealizedTest');

    course.temary[0].test.forEach(t => {
      ret.push({
        _id: t._id,
        title: t.title,
        description: t.description,
        extra: t.extra,
        inputType: t.inputType,
        placeholder: t.placeholder,
        require: t.require,
        values: t.values
      });
    });

    return res.json({
      msg: 'Examen del tema',
      test: ret
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/getTest`);
  }
}

export async function evaluateTest(req: Request, res: Response) : Promise<Response> {
  try {
    const { slug, _id, userid } = req.params;
    let points = 0; // points to test
    let pointsIgnored = 0; // points to test

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const validate = validateTestData(req.body.data || []);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { slug, 'temary._id': _id, enable: true, },
      { 'temary.$.test': 1, approved: 1 }
    ).exec();

    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne(
      { userid, courseId: course._id, 'temary.temaryId': _id },
      { 'temary.temaryId': 1, 'temary.approved': 1, 'temary.test': 1, approved: 1 }
    ).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    // check if course is approved
    if (myCourse.approved) return returnNotFound(res, 'wasRealizedAllTest');

    // check if exists temary in myCourse data
    const index = _.findIndex(myCourse.temary, t => t.temaryId === _id);

    if (index === -1) return returnNotFound(res, '404GetDataTemaryUser');
    if (myCourse.temary[index].approved) return returnNotFound(res, 'wasRealizedTest');

    // validate answer test
    validate.data.forEach(a => {
      // get questions
      const question = _.find(course.temary[0].test, t => t._id.toString() === a.questionId);
      if (question) {
        if (!question.require && a.answer) points += setPointToTest(question, a);
        else if (question.require) points += setPointToTest(question, a);
        else pointsIgnored++;
      }
    });

    // get average and check if the user approved the test
    const average = points > 0 ? points * 100 / (validate.data.length - pointsIgnored) : 0;
    const approved = (average === 100 || average >= 75);
    const msg = approved ?
      'Ha aprobado la prueba exitosamente.' :
      'Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del tema.';

    // update data course user
    myCourse.temary[index].test.push({ points: average });
    myCourse.temary[index].approved = approved;
    if (approved) myCourse.temary[index].approvedDate = setDate();

    // check if approved all themes
    const listApproved = _.map(myCourse.temary, 'approved');
    const filter = _.filter(listApproved, v => v);
    if (filter.length === listApproved.length) myCourse.approved = true;

    await myCourse.save();

    return res.json({
      msg,
      average: average.toString().indexOf('.') > -1 ? average.toFixed(2) : average,
      approved
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/evaluateTest`);
  }
}
