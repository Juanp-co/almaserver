"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesDataUser = exports.checkIfUserApprovedPreviousCourses = exports.checkPreviousIdsCourses = exports.checkIfExistSlug = exports.checkIfExistCode = exports.getLikesAndUnlikesCourse = exports.getCommentsCourse = exports.getCourseDetails = exports.getPreviousIdsCourses = exports.getModelReturnCourseOrTheme = void 0;
const lodash_1 = __importDefault(require("lodash"));
const UsersActions_1 = require("./UsersActions");
const Courses_1 = __importDefault(require("../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
function getModelLikesAndUnlikes(data) {
    return {
        _id: data._id,
        userid: data.userid,
        user: null,
        created_at: data.created_at,
    };
}
function getModelLikesAndUnlikesList(data) {
    const ret = [];
    if (data.length > 0)
        data.forEach(d => ret.push(getModelLikesAndUnlikes(d)));
    return ret;
}
function getModelComments(data) {
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
    };
}
function getModelCommentsList(data) {
    const ret = [];
    if (data.length > 0)
        data.forEach(d => ret.push(getModelComments(d)));
    return ret;
}
function setUserDataInList(list, listUsers) {
    if (list.length > 0) {
        const total = list.length;
        for (let i = 0; i < total; i++) {
            list[i].user = lodash_1.default.find(listUsers, u => u._id.toString() === list[i].userid);
            if (list[i].likes)
                list[i].likes = setUserDataInList(list[i].likes, listUsers);
            if (list[i].unlikes)
                list[i].unlikes = setUserDataInList(list[i].unlikes, listUsers);
            if (list[i].comments)
                list[i].comments = setUserDataInList(list[i].comments, listUsers);
        }
    }
    return list;
}
// =====================================================================================================================
/*
  data: ICourseList | ICourseTemary     <= data with any this schemas
  theme: boolean                        <= to set 'ICourseList' or 'ICourseTemary' return model
  admin: boolean                        <= to get extra params
  counters: boolean                     <= to get only totals of comments, likes and unlikes
 */
async function getModelReturnCourseOrTheme({ data, theme, admin, counters }) {
    let ret = null;
    let listIds = [];
    if (!theme || (!theme && admin)) {
        ret = {};
        ret._id = data._id;
        if (admin)
            ret.user = data.user;
        ret.speaker = data.speaker;
        ret.speakerPosition = data.speakerPosition;
        ret.code = data.code;
        ret.title = data.title;
        ret.slug = data.slug;
        ret.banner = data.banner;
        ret.description = data.description;
        ret.temary = [];
        ret.levels = data.levels;
        if (admin) {
            ret.test = data.test;
            ret.toRoles = data.toRoles;
            ret.draft = data.draft;
            ret.enable = data.enable;
            ret.created_at = data.created_at;
            ret.updated_at = data.updated_at;
        }
        if (!counters) {
            ret.comments = getModelCommentsList(data.comments || []);
            ret.likes = getModelLikesAndUnlikesList(data.likes || []);
            ret.unlikes = getModelLikesAndUnlikesList(data.unlikes || []);
        }
        else {
            ret.totals = {
                totalComments: data.comments ? data.comments.length : 0,
                totalLikes: data.likes ? data.likes.length : 0,
                totalUnlikes: data.unlikes ? data.unlikes.length : 0,
            };
        }
        const totalTemary = data.temary.length;
        for (let i = 0; i < totalTemary || 0; i++) {
            const dTheme = {};
            dTheme._id = data.temary[i]._id;
            dTheme.title = data.temary[i].title;
            dTheme.description = data.temary[i].description;
            dTheme.urlVideo = data.temary[i].urlVideo;
            if (!counters && (!!data.temary[i].comments || !!data.temary[i].likes || !!data.temary[i].unlikes)) {
                dTheme.comments = getModelCommentsList(data.temary[i].comments || []);
                dTheme.likes = getModelLikesAndUnlikesList(data.temary[i].likes || []);
                dTheme.unlikes = getModelLikesAndUnlikesList(data.temary[i].unlikes || []);
                if (data.temary.likes)
                    dTheme.likes = getModelCommentsList(data.temary[i].comments || []);
                if (data.temary.unlikes)
                    dTheme.unlikes = getModelCommentsList(data.temary[i].comments || []);
                listIds = listIds.concat(lodash_1.default.map(data.temary[i].comments, 'userid'));
                listIds = listIds.concat(lodash_1.default.map(data.temary[i].comments, 'likes.userid'));
                listIds = listIds.concat(lodash_1.default.map(data.temary[i].comments, 'unlikes.userid'));
                if (dTheme.likes)
                    listIds = listIds.concat(lodash_1.default.map(ret.likes, 'userid'));
                if (dTheme.unlikes)
                    listIds = listIds.concat(lodash_1.default.map(ret.unlikes, 'userid'));
            }
            else if (counters) {
                dTheme.totals = {
                    totalComments: data.temary[i].comments ? data.temary[i].comments.length : 0,
                    totalLikes: data.temary[i].likes ? data.temary[i].likes.length : 0,
                    totalUnlikes: data.temary[i].unlikes ? data.temary[i].unlikes.length : 0,
                };
            }
            ret.temary.push(dTheme);
        }
        // comments
        if (!counters) {
            listIds = listIds.concat(lodash_1.default.map(ret.comments, 'userid'));
            listIds = listIds.concat(lodash_1.default.map(ret.comments, 'likes.userid'));
            listIds = listIds.concat(lodash_1.default.map(ret.comments, 'unlikes.userid'));
        }
    }
    else {
        ret = {};
        ret._id = data._id;
        ret.title = data.title;
        ret.description = data.description;
        ret.urlVideo = data.urlVideo;
        ret.comments = getModelCommentsList(data.comments || []);
        ret.likes = getModelLikesAndUnlikesList(data.likes || []);
        ret.unlikes = getModelLikesAndUnlikesList(data.unlikes || []);
        if (ret.comments) {
            listIds = listIds.concat(lodash_1.default.map(ret.comments, 'userid'));
            if ('likes' in ret.comments)
                listIds = listIds.concat(lodash_1.default.map(ret.comments, 'likes.userid'));
            if ('unlikes' in ret.comments)
                listIds = listIds.concat(lodash_1.default.map(ret.comments, 'unlikes.userid'));
        }
        listIds = listIds.concat(lodash_1.default.map(ret.likes, 'userid'));
        listIds = listIds.concat(lodash_1.default.map(ret.unlikes, 'userid'));
    }
    if (!counters) {
        const listUsers = listIds.length > 0 ? await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(listIds)) : [];
        if (listUsers.length > 0) {
            if (ret.likes)
                ret.likes = setUserDataInList(ret.likes, listUsers);
            if (ret.unlikes)
                ret.unlikes = setUserDataInList(ret.unlikes, listUsers);
            if (ret.comments)
                ret.comments = setUserDataInList(ret.comments, listUsers);
            if ('temary' in ret)
                ret.temary = setUserDataInList(ret.temary || [], listUsers);
        }
    }
    return ret;
}
exports.getModelReturnCourseOrTheme = getModelReturnCourseOrTheme;
// =====================================================================================================================
async function getPreviousIdsCourses(listIds) {
    return listIds.length > 0 ?
        await Courses_1.default.find({ _id: { $in: listIds } }, { _id: 1, title: 1, slug: 1 }).exec()
        :
            [];
}
exports.getPreviousIdsCourses = getPreviousIdsCourses;
async function getCoursesList({ query, skip, sort, limit, infoUser, isPublic, projection, }) {
    const ret = [];
    const courses = await Courses_1.default.find(query, projection || { __v: 0 })
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec();
    if (courses.length > 0) {
        let users = [];
        let totalUsers = 0;
        if (infoUser) {
            const listIds = lodash_1.default.uniq(lodash_1.default.map(courses, 'userid'));
            users = await UsersActions_1.getNamesUsersList(listIds);
            totalUsers = users.length;
        }
        courses.forEach(c => {
            const d = {
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
            };
            if (isPublic) {
                delete d.draft;
                delete d.enable;
                delete d.created_at;
                delete d.updated_at;
            }
            if (totalUsers > 0) {
                const index = lodash_1.default.findIndex(users, (v) => v._id.toString() === c.userid);
                if (index > -1)
                    d.user = users[index] || null;
                else
                    delete d.user;
            }
            else
                delete d.user;
            ret.push(d);
        });
    }
    return ret;
}
exports.default = getCoursesList;
async function getCourseDetails({ query, infoUser, isPublic, projection }) {
    let ret = null;
    const course = await Courses_1.default.findOne(query, projection || { __v: 0 }).exec();
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
            levels: await getPreviousIdsCourses(course.levels),
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
            const users = await UsersActions_1.getNamesUsersList([course.userid]);
            if (users.length > 0)
                ret.user = users[0] ? users[0] : null;
            else
                delete ret.user;
        }
        else
            delete ret.user;
    }
    return ret;
}
exports.getCourseDetails = getCourseDetails;
async function getCommentsCourse({ query, projection, sort, theme }) {
    let ret = null;
    if (!query || Object.keys(query || {}).length === 0)
        return ret;
    const course = await Courses_1.default.findOne(query, projection).exec();
    if (!course)
        return ret;
    ret = {
        _id: course._id,
        themeId: query['temary._id'],
        totals: 0,
        comments: []
    };
    if (theme) {
        ret.comments = getModelCommentsList(lodash_1.default.orderBy(course.temary[0].comments, ['created_at'], [sort || 'desc']));
        ret.totals = course.temary[0].comments ? course.temary[0].comments.length : 0;
    }
    else {
        ret.comments = getModelCommentsList(lodash_1.default.orderBy(course.comments, ['created_at'], [sort || 'desc']));
        ret.totals = course.comments ? course.comments.length : 0;
    }
    let listIds = lodash_1.default.map(ret.comments, 'userid');
    if ('likes' in ret.comments)
        listIds = listIds.concat(lodash_1.default.map(ret.comments, 'likes.userid'));
    if ('unlikes' in ret.comments)
        listIds = listIds.concat(lodash_1.default.map(ret.comments, 'unlikes.userid'));
    if (listIds.length > 0) {
        const listUsers = listIds.length > 0 ? await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(listIds)) : [];
        if (listUsers.length > 0)
            ret.comments = setUserDataInList(ret.comments, listUsers);
    }
    return ret;
}
exports.getCommentsCourse = getCommentsCourse;
async function getLikesAndUnlikesCourse({ query, projection, theme }) {
    let ret = null;
    if (!query || Object.keys(query || {}).length === 0)
        return ret;
    const course = await Courses_1.default.findOne(query, projection).exec();
    if (!course)
        return ret;
    ret = {
        _id: course._id,
        themeId: query['temary._id'],
        totalLikes: 0,
        totalUnlikes: 0,
        likes: [],
        unlikes: []
    };
    if (theme) {
        ret.totalLikes = course.temary[0].likes ? course.temary[0].likes.length : 0;
        ret.totalUnlikes = course.temary[0].unlikes ? course.temary[0].unlikes.length : 0;
        ret.likes = getModelLikesAndUnlikesList(course.temary[0].likes || []);
        ret.unlikes = getModelLikesAndUnlikesList(course.temary[0].unlikes || []);
    }
    else {
        ret.totalLikes = course.likes ? course.likes.length : 0;
        ret.totalUnlikes = course.unlikes ? course.unlikes.length : 0;
        ret.likes = getModelLikesAndUnlikesList(course.likes || []);
        ret.unlikes = getModelLikesAndUnlikesList(course.unlikes || []);
    }
    let listIds = [];
    if ('likes' in ret)
        listIds = listIds.concat(lodash_1.default.map(ret.likes, 'userid'));
    if ('unlikes' in ret)
        listIds = listIds.concat(lodash_1.default.map(ret.unlikes, 'userid'));
    if (listIds.length > 0) {
        const listUsers = listIds.length > 0 ? await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(listIds)) : [];
        if (listUsers.length > 0) {
            ret.likes = setUserDataInList(ret.likes, listUsers);
            ret.unlikes = setUserDataInList(ret.unlikes, listUsers);
        }
    }
    return ret;
}
exports.getLikesAndUnlikesCourse = getLikesAndUnlikesCourse;
async function checkIfExistCode(code) {
    const course = await Courses_1.default.findOne({ code }, { _id: 1 }).exec();
    return !!course;
}
exports.checkIfExistCode = checkIfExistCode;
async function checkIfExistSlug(slug) {
    return Courses_1.default.find({ slug }).countDocuments().exec();
}
exports.checkIfExistSlug = checkIfExistSlug;
async function checkPreviousIdsCourses(listIds) {
    if (listIds.length > 0) {
        const exist = await Courses_1.default.find({ _id: { $in: listIds } }).countDocuments().exec();
        return exist === listIds.length;
    }
    return false;
}
exports.checkPreviousIdsCourses = checkPreviousIdsCourses;
async function checkIfUserApprovedPreviousCourses(listIds) {
    if (listIds.length > 0) {
        const totals = await Courses_1.default.find({ _id: { $in: listIds }, approved: { $eq: true } }).countDocuments().exec();
        return totals === listIds.length;
    }
    return false;
}
exports.checkIfUserApprovedPreviousCourses = checkIfUserApprovedPreviousCourses;
// =====================================================================================================================
/*
  PARTICULAR USERS
 */
async function getCoursesDataUser({ query }) {
    const course = await CoursesUsers_1.default.findOne(query, { __v: 0 }).exec();
    return !course ? null : {
        _id: course._id,
        temary: course.temary || [],
        tests: course.tests,
        approved: course.approved,
        created_at: course.created_at,
        updated_at: course.updated_at,
    };
}
exports.getCoursesDataUser = getCoursesDataUser;
