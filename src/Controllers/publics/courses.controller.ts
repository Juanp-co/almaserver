import { Request, Response } from 'express';
import getCoursesList, {
  addCoursesToUser,
  getCourseDetails,
  getCoursesDataUser,
  getModelReturnCourseOrTheme, returnNotFound, setPointToTest
} from '../../ActionsData/CoursesActions';
import {
  setDate,
  getLimitSkipSortSearch,
  returnError, returnErrorParams
} from '../../Functions/GlobalFunctions';
import { checkObjectId, checkSlug } from '../../Functions/Validations';
import { ICourseList } from '../../Interfaces/ICourse';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';
import { validateTestData } from '../../FormRequest/CoursesRequest';

const path = 'Controllers/publics/courses.controller';

export default async function getCourses(req: Request, res: Response) : Promise<Response>{
  try {
    const { tokenRoles, tokenId } = req.body;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const { title } = req.query;
    const query: any = { toRoles: { $in: tokenRoles } || [], enable: { $eq: true } };
    const ret: any[] = [];

    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};
    const courses = await getCoursesList({
      query,
      limit,
      skip,
      sort,
      isPublic: true,
      projection: { _id: 1, title: 1, slug: 1, description: 1, speaker: 1, speakerPosition: 1, level: 1 }
    });

    const courseUser = await CoursesUsers.findOne(
      { userid: tokenId },
      { 'courses.courseId': 1, 'courses.level': 1, 'courses.approved': 1 }
    ).exec();

    if (courses.length > 0) {
      courses.forEach(c => {
        let enable = false;

        if (c.level !== undefined && c.level !== null) {
          if (c.level === 1) enable = true;
          else {
            const courseU = courseUser ? courseUser.courses.find(cu => cu.level === ((c.level || 0) - 1)) : null;
            enable = courseU ? courseU.approved : false;
          }
        }
        ret.push({ ...c, enable });
      });
    }

    return res.json({
      msg: 'Cursos',
      courses: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCourses`);
  }
}

export async function showCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug } = req.params;
    const { tokenId, tokenRoles } = req.body;

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');

    const course: ICourseList | null = await getCourseDetails({
      query: { slug, toRoles: { $in: tokenRoles } },
      isPublic: true,
    });
    if (!course) return returnNotFound(res, '404Course');

    if (!course.enable) return returnNotFound(res, '404Course');

    // check and get data user course user
    let dataCourseUser = await getCoursesDataUser({
      query: {
        userid: tokenId,
        'courses.courseId': course._id.toString()
      }
    });

    // if data not found, create register and find the courses in the list.
    if (!dataCourseUser) {
      const data = await addCoursesToUser(tokenId);
      if (data) {
        const index = data.courses.findIndex(c => c.courseId === course._id.toString());
        if (index > -1) {
          dataCourseUser = {
            _id: data._id,
            course: data.courses[index]
          };
        }
        else return returnNotFound(res, '404Course');
      }
    }

    delete course.enable;

    const ret = await getModelReturnCourseOrTheme({ data: course });

    if (ret) {
      if (ret.temary) {
        for (const t of ret.temary) {
          const i = dataCourseUser ? dataCourseUser.course?.temary.findIndex(tcu => tcu.temaryId === t._id.toString()) : -1;
          if (i !== undefined && i > -1) ret.temary[i].view = dataCourseUser?.course?.temary[i].view || 0;
        }
      }
    }

    return res.json({
      msg: 'Curso',
      course: ret,
      dataCourseUser
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourse`);
  }
}

export async function updateHistoricalCourseContent(req: Request, res: Response) : Promise<Response>{
  try {
    const { slug, _id, action } = req.params;
    const { tokenId } = req.body;

    if (!/[12]{1}/.test(`${action}`)) return returnNotFound(res, 'errorAction');
    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const course = await getCourseDetails({
      query: { slug, 'temary._id': _id },
      isPublic: true,
      projection: { 'temary.$': 1, enable: 1 }
    });
    if (!course) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne(
      { userid: tokenId, 'courses.courseId': course._id.toString() },
      { 'courses': 1 }
    ).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');
    if (!myCourse && !course.enable) return returnNotFound(res, '404Course');

    // get theme
    if ((!course.temary) || (course.temary && course.temary.length === 0)) {
      return returnNotFound(res, '404Theme');
    }

    const i = myCourse.courses.findIndex(c => c.courseId === course._id.toString());

    if (i === -1) return returnNotFound(res, '404CourseUser');

    // set the new theme in viewing
    const index = myCourse.courses[i].temary.findIndex(t => t.temaryId === _id);

    if (index > -1) {
      myCourse.courses[i].temary[index].view = action === '1' ? 1 : 2;
      myCourse.courses[i].temary[index].date = setDate();

      // check if all content was viewed
      if (action === '2') {
        let acc = 0;
        myCourse.courses[i].temary.forEach(t => { acc += t.view === 2 ? 1 : 0 });

        if (myCourse.courses[i].temary.length === acc)
          myCourse.courses[i].approved = true;
      }

      myCourse.courses[i].temary[index].date = setDate();
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

export async function evaluateQuiz(req: Request, res: Response) : Promise<Response> {
  try {
    const { slug, _id } = req.params;
    const { tokenId } = req.body;
    let points = 0; // points to test
    let pointsIgnored = 0; // points to test

    if (!checkSlug(slug)) return returnNotFound(res, 'slug');
    if (!checkObjectId(_id)) return returnNotFound(res, 'errorThemeId');

    const validate = validateTestData(req.body.data || []);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { slug, 'temary._id': _id },
      { 'temary.$': 1, enable: 1 }
    ).exec();

    if (!course) return returnNotFound(res, '404Course');
    if (!course.enable) return returnNotFound(res, '404Course');

    // check if the course belonging to user
    const myCourse = await CoursesUsers.findOne(
      { userid: tokenId, 'courses.courseId': course._id, 'courses.temary.temaryId': _id },
      { 'courses': 1 }
    ).exec();
    if (!myCourse) return returnNotFound(res, '404CourseUser');

    const i = myCourse.courses.findIndex(c => c.courseId === course._id.toString());

    // check if course is approved
    if (i === -1) return returnNotFound(res, 'wasRealizedAllTest');

    if (myCourse.courses[i].approved) return returnNotFound(res, 'wasRealizedAllTest');

    // check if exists temary in myCourse data
    const index = myCourse.courses[i].temary.findIndex(t => t.temaryId === _id);

    if (index === -1) return returnNotFound(res, '404GetDataTemaryUser');
    if (myCourse.courses[i].temary[index].view === 2) return returnNotFound(res, 'wasRealizedTest');

    // validate answer test
    validate.data.forEach(a => {
      // get questions
      const question = course.temary[0]?.quiz?.find(q => q._id.toString() === a.questionId);
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
      'Ha aprobado el examen exitosamente.' :
      'Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del examen.';

    // update data course user
    myCourse.courses[i].temary[index].view = approved ? 2 : 0;
    myCourse.courses[i].temary[index].date = setDate();

    // check if approved all themes
    const listApproved = myCourse.courses[i].temary.map(t => t.view);
    const filter = listApproved.filter(v => v === 2);
    if (filter.length === listApproved.length) myCourse.courses[i].approved = true;

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
