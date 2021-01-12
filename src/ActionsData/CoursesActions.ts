import _ from 'lodash';
import { getNamesUsersList } from './UsersActions';
import { ICourseList, ICourseTemary, ICourseTemaryComments, ICourseTemaryCommentsLikes } from '../Interfaces/ICourse';
import Courses from '../Models/Courses';
import { IUserSimpleInfo } from '../Interfaces/IUser';
import { ICourseUserList } from '../Interfaces/ICourseUser';
import CoursesUsers from '../Models/CoursesUsers';

function getModelLikesAndUnlikes(data: ICourseTemaryCommentsLikes) : ICourseTemaryCommentsLikes {
  return {
    _id: data._id,
    userid: data.userid,
    user: null,
    created_at: data.created_at,
  }
}

function getModelLikesAndUnlikesList(data: ICourseTemaryCommentsLikes[]) : ICourseTemaryCommentsLikes[] {
  const ret = [] as ICourseTemaryCommentsLikes[];
  if (data.length > 0) data.forEach(d => ret.push(getModelLikesAndUnlikes(d)));
  return ret;
}

function getModelComments(data: ICourseTemaryComments) : ICourseTemaryComments {
  return {
    _id: data._id,
    answer: data.answer,
    userid: data.userid,
    user: null,
    comment: data.comment,
    likes: getModelLikesAndUnlikesList(data.likes),
    unlikes: getModelLikesAndUnlikesList(data.unlikes),
    created_at: data.created_at,
    updated_at: data.updated_at,
  }
}

function getModelCommentsList(data: ICourseTemaryComments[]) : ICourseTemaryComments[] {
  const ret = [] as ICourseTemaryComments[];
  if (data.length > 0) data.forEach(d => ret.push(getModelComments(d)));
  return ret;
}

function setUserDataInList(list: any[], listUsers: IUserSimpleInfo[]): any[] {
  if (list.length > 0) {
    const total = list.length;
    for (let i = 0; i < total; i++) {
      list[i].user = _.find(listUsers, u => u._id.toString() === list[i].userid);
      if (list[i].likes) list[i].likes = setUserDataInList(list[i].likes, listUsers);
      if (list[i].unlikes) list[i].unlikes = setUserDataInList(list[i].unlikes, listUsers);
      if (list[i].comments) list[i].comments = setUserDataInList(list[i].comments, listUsers);
    }
  }
  return list;
}

// =====================================================================================================================



export async function getModelReturnCourseOrTheme(data: any, theme: boolean) : Promise<ICourseList | ICourseTemary | null> {
  let ret: ICourseList | ICourseTemary | null = null;
  let listIds: any[] = [];

  if (!theme) {
    ret = {} as ICourseList;
    ret._id = data._id;
    ret.speaker = data.speaker;
    ret.speakerPosition = data.speakerPosition;
    ret.code = data.code;
    ret.title = data.title;
    ret.slug = data.slug;
    ret.banner = data.banner;
    ret.description = data.description;
    ret.temary = [];
    ret.comments = getModelCommentsList(data.comments || []);
    ret.likes = getModelLikesAndUnlikesList(data.likes || []);
    ret.unlikes = getModelLikesAndUnlikesList(data.unlikes || []);

    const totalTemary = data.temary.length;
    for (let i = 0; i < totalTemary || 0; i++) {
      const dTheme = {} as ICourseTemary;
      dTheme._id = data.temary[i]._id;
      dTheme.title = data.temary[i].title;
      dTheme.description = data.temary[i].description;
      dTheme.urlVideo = data.temary[i].urlVideo;

      if (data.temary.likes) dTheme.likes = getModelCommentsList(data.temary[i].comments || []);
      if (data.temary.unlikes) dTheme.unlikes = getModelCommentsList(data.temary[i].comments || []);

      listIds = listIds.concat(_.map(data.temary[i].comments, 'userid'));
      listIds = listIds.concat(_.map(data.temary[i].comments, 'likes.userid') );
      listIds = listIds.concat(_.map(data.temary[i].comments, 'unlikes.userid'));
      if (dTheme.likes) listIds = listIds.concat(_.map(ret.likes, 'userid'));
      if (dTheme.unlikes) listIds = listIds.concat(_.map(ret.unlikes, 'userid'));

      ret.temary.push(dTheme);
    }

    // comments
    listIds = listIds.concat(_.map(ret.comments, 'userid'));
    listIds = listIds.concat(_.map(ret.comments, 'likes.userid') );
    listIds = listIds.concat(_.map(ret.comments, 'unlikes.userid'));
  }
  else {
    ret = {} as ICourseTemary;
    ret._id = data._id;
    ret.title = data.title;
    ret.description = data.description;
    ret.urlVideo = data.urlVideo;
    ret.comments = getModelCommentsList(data.comments || []);
    ret.likes = getModelLikesAndUnlikesList(data.likes || []);
    ret.unlikes = getModelLikesAndUnlikesList(data.unlikes || []);

    if (ret.comments) {
      listIds = listIds.concat(_.map(ret.comments, 'userid'));
      if ('likes' in ret.comments) listIds = listIds.concat(_.map(ret.comments, 'likes.userid'));
      if ('unlikes' in ret.comments) listIds = listIds.concat(_.map(ret.comments, 'unlikes.userid'));
    }
    listIds = listIds.concat(_.map(ret.likes, 'userid'));
    listIds = listIds.concat(_.map(ret.unlikes, 'userid'));
  }

  const listUsers = listIds.length > 0 ? await getNamesUsersList(_.uniq(listIds)) : [];

  if (listUsers.length > 0) {
    if (ret.likes) ret.likes = setUserDataInList(ret.likes, listUsers);
    if (ret.unlikes) ret.unlikes = setUserDataInList(ret.unlikes, listUsers);
    if (ret.comments) ret.comments = setUserDataInList(ret.comments, listUsers);
    if ('temary' in ret) ret.temary = setUserDataInList(ret.temary || [], listUsers);
  }
  return ret;
}

// =====================================================================================================================

export default async function getCoursesList(
  {
    query,
    skip,
    sort,
    limit,
    infoUser,
    isPublic,
    projection,
  } : any) : Promise<ICourseList[]> {
  const ret: ICourseList[] = [];

  const courses = await Courses.find(query, projection || { __v: 0 })
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
        slug: c.slug,
        banner: c.banner,
        description: c.description,
        toRoles: c.toRoles,
        draft: c.draft,
        enable: c.enable,
        created_at: c.created_at,
        updated_at: c.updated_at,
      } as ICourseList;

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

export async function getCourseDetails({ query, infoUser, isPublic, projection } : any) : Promise<ICourseList | null> {
  let ret: ICourseList | null = null;

  const course = await Courses.findOne(query, projection || { __v: 0 }).exec() as ICourseList;

  if (course) {
    ret = {
      _id: course._id,
      user: null,
      speaker: course.speaker,
      speakerPosition: course.speakerPosition,
      code: course.code,
      title: course.title,
      slug: course.slug,
      banner: course.banner,
      description: course.description,
      temary: course.temary,
      test: course.test,
      comments: course.comments,
      likes: course.likes,
      unlikes: course.unlikes,
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

export async function checkIfExistSlug(slug : string) : Promise<number> {
  return Courses.find({ slug }).countDocuments().exec();
}

// =====================================================================================================================

/*
  PARTICULAR USERS
 */

export async function getCoursesDataUsers({ query } : any) : Promise<ICourseUserList | null> {
  const course = await CoursesUsers.findOne(query, { __v: 0 }).exec() as ICourseUserList;
  return !course ? null : {
    _id: course._id,
    temary: course.temary || [],
    tests: course.tests,
    approved: course.approved,
    created_at: course.created_at,
    updated_at: course.updated_at,
  }
}
