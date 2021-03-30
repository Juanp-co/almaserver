import _ from 'lodash';
import { Response } from 'express';
import { getNamesUsersList } from './UsersActions';
import ICourse, {
  ICourseList,
  ICourseTemary,
  ICourseSimpleList
} from '../Interfaces/ICourse';
import ICourseUser, { ICourseUserData } from '../Interfaces/ICourseUser';
import { IUserSimpleInfo } from '../Interfaces/IUser';
import Courses from '../Models/Courses';
import CoursesUsers from '../Models/CoursesUsers';

export function getModelReturnContent(data: ICourseTemary | null, admin = false) : ICourseTemary | null {
  if (!data) return null;

  const ret = {
    _id: data._id,
    title: data.title,
    description: data.description,
    urlVideo: data.urlVideo,
    quiz: data.quiz,
  } as ICourseTemary;

  if (!admin) ret.view = 0;
  return ret;
}

// =====================================================================================================================

/*
  data: ICourseList      <= data with any this schemas
  admin: boolean         <= to get extra params
  counters: boolean      <= to get totals users with the course
 */

export async function getModelReturnCourseOrTheme({ data, admin, counters }: any) : Promise<ICourseList | null> {

  let ret: ICourseList | null = null;

  if (data) {
    ret = {} as ICourseList;

    ret._id = data._id;
    if (admin) ret.user = data.user;
    ret.speaker = data.speaker;
    ret.speakerPosition = data.speakerPosition;
    ret.code = data.code;
    ret.title = data.title;
    ret.slug = data.slug;
    ret.description = data.description;
    ret.level = data.level;
    ret.temary = [];

    if (admin) {
      ret.toRoles = data.toRoles;
      ret.enable = data.enable;
      ret.created_at = data.created_at;
      ret.updated_at = data.updated_at;
    }

    if (counters)
      ret.totalsUsers = await CoursesUsers.find({ 'courses.courseId': data._id.toString() }).countDocuments().exec() || 0;

    for (const t of data.temary) {
      const themeD = getModelReturnContent(t, admin);
      if (themeD) ret.temary.push(themeD);
    }
  }

  return ret;
}

// =====================================================================================================================

export default async function getCoursesList({ query, skip, sort, limit, infoUser, isPublic, projection }: any): Promise<ICourseList[]>{
  const ret: ICourseList[] = [];

  const courses = await Courses.find(query, projection || { __v: 0 })
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .exec();

  if (courses.length > 0) {
    let users: IUserSimpleInfo[] = [];
    let totalUsers = 0;

    if (infoUser) {
      const listIds = _.uniq(_.map(courses, 'userid'));
      users = await getNamesUsersList(listIds);
      totalUsers = users.length;
    }

    courses.forEach(c => {
      const d: ICourseList = {
        _id: c._id,
        user: null,
        speaker: c.speaker,
        speakerPosition: c.speakerPosition,
        code: c.code,
        title: c.title,
        slug: c.slug,
        description: c.description,
        level: c.level,
        toRoles: c.toRoles,
        enable: c.enable,
        created_at: c.created_at,
        updated_at: c.updated_at,
      } as ICourseList;

      if (isPublic) {
        delete d.enable;
        delete d.created_at;
        delete d.updated_at;
      }

      if (totalUsers > 0) {
        const index: number = _.findIndex(users, (v: any) => v._id.toString() === c.userid);
        if (index > -1) d.user = users[index] || null;
        else delete d.user;
      }
      else delete d.user;

      ret.push(d);
    });
  }

  return ret;
}

export async function getCoursesSimpleList(listIds: string[]): Promise<ICourseSimpleList[]>{
  let courses: ICourseSimpleList[] = [];

  if (listIds.length > 0) {
    courses = await Courses.find(
      { _id: { $in: listIds } },
      { _id: 1, title: 1, slug: 1, description: 1, level: 1 }
    ).exec() as ICourseSimpleList[];
  }

  return courses;
}

export async function getCourseDetails({ query, infoUser, isPublic, projection } : any) : Promise<ICourseList | null> {
  let ret: ICourseList | null = null;

  const course = await Courses.findOne(query, projection || { __v: 0, 'temary.quiz.correctAnswer': 0 }).exec();

  if (course) {
    ret = {
      _id: course._id,
      user: null,
      speaker: course.speaker,
      speakerPosition: course.speakerPosition,
      code: course.code,
      title: course.title,
      slug: course.slug,
      description: course.description,
      temary: course.temary,
      level: course.level,
      toRoles: course.toRoles,
      enable: course.enable,
      created_at: course.created_at,
      updated_at: course.updated_at,
    };

    if (isPublic) {
      delete ret.created_at;
      delete ret.updated_at;
    }

    if (infoUser) {
      const users: IUserSimpleInfo[] = await getNamesUsersList([course.userid]);
      if (users.length > 0) ret.user = users[0] || null;
      else delete ret.user;
    }
    else delete ret.user;
  }

  return ret;
}

export async function checkIfUsersOwnCourse(courseId : string) : Promise<boolean> {
  const course = await CoursesUsers.find({ courseId }).countDocuments().exec();
  return course > 0;
}

export async function checkIfExistSlug(slug : string) : Promise<number> {
  return Courses.find({ slug }).countDocuments().exec();
}

// =====================================================================================================================

/*
  PARTICULAR USERS
 */

export async function getCoursesDataUser({ query } : any) : Promise<ICourseUserData | null> {
  const course = await CoursesUsers.findOne(query, { 'courses.$': 1 }).exec();
  return !course ? null : {
    _id: course._id,
    course: course.courses[0] || null,
    created_at: course.created_at,
    updated_at: course.updated_at,
  }
}

export async function addCoursesToUser(userid: string) : Promise<ICourseUser | null> {
  const courseList: any = [];
  const courses = await Courses.find({}, { temary: 1, level: 1 }).exec();

  // get list courses with temaryIds and levels
  if (courses.length > 0) {
    for (const c of courses) {
      const temary: any = [];
      for (const t of c.temary) {
        temary.push({ temaryId: t._id });
      }

      courseList.push({
        courseId: c._id.toString(),
        level: c.level,
        approved: false,
        temary
      });
    }
  }

  // create register
  const courseU = new CoursesUsers({
    userid,
    courses: courseList
  });
  await courseU.save();

  return courseU;
}

// =====================================================================================================================

/*
  Others functions
 */

export function returnNotFound(res: Response, code: string | null) : Response {
  const ret: any = { msg: 'Respuesta no determinada.' };
  let statusCode = 500;

  if (code === '404Course') {
    ret.msg = 'Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.';
    statusCode = 404;
  }
  else if (code === '404CourseUser') {
    ret.msg = 'Disculpe, pero no ha registrado el curso en su listado.';
    statusCode = 404;
    ret.addCourse = true;
  }
  else if (code === '404GetDataTemaryUser') {
    ret.msg = 'Disculpe, pero no se logró encontrar la relación de la prueba en su cuenta.';
    statusCode = 404;
  }
  else if (code === '404Theme') {
    ret.msg = 'Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.';
    statusCode = 404;
  }
  else if (code === 'errorAction') {
    ret.msg = 'Disculpe, pero no se logró determinar la acción a realizar.';
    statusCode = 422;
  }
  else if (code === 'errorThemeId') {
    ret.msg = 'Disculpe, pero el tema seleccionado es incorrecto.';
    statusCode = 422;
  }
  else if (code === 'slug') {
    ret.msg = 'Disculpe, pero el curso seleccionado es incorrecto.';
    statusCode = 422;
  }
  else if (code === 'wasRealized') {
    ret.msg = `Disculpe, pero ya has realizado esta acción anteriormente.`;
    statusCode = 422;
  }
  else if (code === 'wasRealizedAllTest') {
    ret.msg = `Disculpe, pero ya ha aprobado este curso.`;
    statusCode = 422;
  }
  else if (code === 'wasRealizedTest') {
    ret.msg = `Disculpe, pero ya ha realizado este Quiz anteriormente.`;
    statusCode = 422;
  }

  return res.status(statusCode).json(ret);
}

export function return404(res: Response, title = 0) : Response {
  const titles = ['curso', 'tema'];
  return res.status(404).json({
    msg: `Disculpe, pero el ${titles[title] || 'curso'} seleccionado no existe o no se encuentra disponible.`,
  });
}

export function returnErrorId(res: Response, title = 0) : Response {
  const titles = ['curso', 'tema'];
  return res.status(422).json({
    msg: `Disculpe, pero el ${titles[title] || 'curso'} seleccionado es incorrecto.`,
  });
}

export function returnCantEdit(res: Response, index = 0) : Response {
  const msg = [
    'Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.',
    'Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listas.',
  ];
  return res.status(422).json({
    msg: msg[index],
  });
}

function checkAnswerCheckbox(value: string | null, correctAnswer: number | null): boolean {
  if (value && value.indexOf(',') > -1) {
    const ans = value.split(',') || []; // separate values
    if (correctAnswer !== null) {
      // check if assignate points if the correctAnswer exists in the received answer
      return ans && ans.indexOf(correctAnswer.toString()) > -1
    }
  }
  return false;
}

export function setPointToTest(question: any, inputAnswer: any): number {
  if (question.inputType === 'checkbox') {
    // check if answer cotains comma (,)
    if (inputAnswer.answer && inputAnswer.answer.indexOf(',') > -1) {
      // assignate points if the correctAnswer exists in the received answer
      return checkAnswerCheckbox(inputAnswer.answer, question.correctAnswer) ? 1 : 0;
    }
  }

  // check if questions has a default answer
  if (question.correctAnswer !== null)
    return question.correctAnswer.toString() === inputAnswer.answer ? 1 : 0;

  return 1;
}

export function validateToPublish(data: ICourse): string|null {
  if (!data.description) return 'Disculpe, pero el curso debe contener una descripción.';
  if (!data.speaker) return 'Disculpe, pero el curso debe contener el nombre del ponente.';
  if (!data.speakerPosition) return 'Disculpe, pero el curso debe contener el cargo o posición del ponente.';
  if (!data.toRoles || (data.toRoles && data.toRoles.length === 0))
    return 'Disculpe, pero se debe indicar a que roles va dirigido el curso.';

  if (!data.temary || (data.temary && data.temary.length === 0))
    return 'Disculpe, pero se debe el curso no puede ser publicado sin temas.';

  return null;
}
