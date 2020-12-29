import _ from 'lodash';
import { getNamesUsersList } from './UsersActions';
import { ICourseList } from '../Interfaces/ICourse';
import Courses from '../Models/Courses';
import { IUserSimpleInfo } from '../Interfaces/IUser';

export default async function getCoursesList({ query, skip, sort, limit, infoUser, isPublic } : any) : Promise<ICourseList[]> {
  const ret: ICourseList[] = [];

  const courses = await Courses.find(query, { __v: 0 })
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .exec() as ICourseList[];

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
        description: c.description,
        toRoles: c.toRoles,
        draft: c.draft,
        enable: c.enable,
        created_at: c.created_at,
        updated_at: c.updated_at,
      };

      if (isPublic) {
        delete d.draft;
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

export async function getCourseDetails({ query, infoUser, isPublic } : any) : Promise<ICourseList | null> {
  let ret: ICourseList = {} as ICourseList;

  const course = await Courses.findOne(query, { __v: 0 }).exec() as ICourseList;

  if (course) {
    ret = {
      _id: course._id,
      user: null,
      speaker: course.speaker,
      speakerPosition: course.speakerPosition,
      code: course.code,
      title: course.title,
      description: course.description,
      temary: course.temary,
      test: course.test,
      toRoles: course.toRoles,
      draft: course.draft,
      enable: course.enable,
      created_at: course.created_at,
      updated_at: course.updated_at,
    };

    if (isPublic) {
      delete ret.test;
      delete ret.draft;
      delete ret.enable;
      delete ret.created_at;
      delete ret.updated_at;
    }

    if (infoUser) {
      const users: IUserSimpleInfo[] = await getNamesUsersList([course.userid]);
      if (users.length > 0) ret.user = users[0] ? users[0] : null;
      else delete ret.user;
    }
    else delete ret.user;
  }

  return ret;
}

export async function checkIfExistCode(code : string) : Promise<boolean> {
  const course = await Courses.findOne({ code }, { _id: 1 }).exec();
  return !!course;
}
