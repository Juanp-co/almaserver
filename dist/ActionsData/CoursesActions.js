"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPointToTest = exports.returnNotFound = exports.getCoursesDataUser = exports.checkIfUserApprovedPreviousCourses = exports.checkPreviousIdsCourses = exports.checkIfExistSlug = exports.checkIfExistCode = exports.getLikesAndUnlikesCourse = exports.getCommentsCourse = exports.getCourseDetails = exports.getPreviousIdsCourses = exports.getModelReturnCourseOrTheme = exports.getModelReturnContent = void 0;
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
function getModelReturnContent(data, allData = false) {
    if (!data)
        return null;
    const ret = {
        _id: data._id,
        title: data.title,
    };
    if (allData) {
        ret.description = data.description;
        ret.urlVideo = data.urlVideo;
        ret.view = 0;
    }
    return ret;
}
exports.getModelReturnContent = getModelReturnContent;
// =====================================================================================================================
/*
  data: ICourseList | ICourseTemary | ICourseContent      <= data with any this schemas
  theme: boolean                                          <= to set 'ICourseList' or 'ICourseTemary' return model
  admin: boolean                                          <= to get extra params
  counters: boolean                                       <= to get only totals of comments, likes and unlikes
 */
async function getModelReturnCourseOrTheme({ data, theme, admin, counters, showContent }) {
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
            // ret.test = data.test;
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
        const { temary } = data;
        const totalTemary = temary.length;
        for (let i = 0; i < totalTemary || 0; i++) {
            const dTheme = {};
            const { content } = temary[i];
            dTheme._id = temary[i]._id;
            dTheme.title = temary[i].title;
            dTheme.description = temary[i].description || null;
            dTheme.content = [];
            if (admin)
                dTheme.test = temary[i].test;
            const totalsContent = content.length || 0;
            for (let j = 0; j < totalsContent; j++) {
                const dContent = getModelReturnContent(content[j], admin);
                if (dContent)
                    dTheme.content.push(dContent);
            }
            ret.temary.push(dTheme); // add in temary
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
        const temary = data.temary[0];
        ret._id = temary._id;
        ret.title = temary.title;
        ret.description = temary.description || null;
        ret.view = 0;
        ret.content = [];
        // ret.test = [];
        ret.comments = getModelCommentsList(temary.comments || []);
        ret.likes = getModelLikesAndUnlikesList(temary.likes || []);
        ret.unlikes = getModelLikesAndUnlikesList(temary.unlikes || []);
        if (temary && showContent) {
            for (let i = 0; i < temary.content.length; i++) {
                const dContent = getModelReturnContent(temary.content[i], true);
                if (dContent)
                    ret.content.push(dContent);
            }
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
            // delete ret.test;
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
async function getCommentsCourse({ query, projection, sort }) {
    let ret = null;
    let contentId;
    if (!query || Object.keys(query || {}).length === 0)
        return ret;
    if (query.contentId) {
        contentId = query.contentId;
        delete query.contentId;
    }
    const course = await Courses_1.default.findOne(query, projection).exec();
    if (!course)
        return ret;
    ret = {
        _id: course._id,
        themeId: query['temary._id'],
        contentId,
        comments: course.comments ? getModelCommentsList(lodash_1.default.orderBy(course.comments, ['created_at'], [sort || 'desc'])) : [],
        totals: course.comments ? course.comments.length : 0,
    };
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
    let contentId;
    if (!query || Object.keys(query || {}).length === 0)
        return ret;
    if (query.contentId) {
        contentId = query.contentId;
        delete query.contentId;
    }
    const course = await Courses_1.default.findOne(query, projection).exec();
    if (!course)
        return ret;
    ret = {
        _id: course._id,
        themeId: query['temary._id'],
        contentId,
        totalLikes: 0,
        totalUnlikes: 0,
        likes: [],
        unlikes: []
    };
    if (!theme) {
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
        approved: course.approved,
        created_at: course.created_at,
        updated_at: course.updated_at,
    };
}
exports.getCoursesDataUser = getCoursesDataUser;
// =====================================================================================================================
/*
  Others functions
 */
function returnNotFound(res, code) {
    const ret = { msg: 'Respuesta no determinada.' };
    let statusCode = 500;
    if (code === '404Content') {
        ret.msg = 'Disculpe, pero el contenido seleccionado no existe o ya no se encuentra disponible.';
        statusCode = 404;
    }
    else if (code === '404Course') {
        ret.msg = 'Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.';
        statusCode = 404;
    }
    else if (code === '404Comment') {
        ret.msg = 'Disculpe, pero el comentario no existe o no se encuentra disponible.';
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
    else if (code === 'notFinishTheme') {
        ret.msg = 'Disculpe, pero no puede realizar la prueba hasta haber completado todo el contenido del tema.';
        statusCode = 403;
    }
    else if (code === 'errorAction') {
        ret.msg = 'Disculpe, pero no se logró determinar la acción a realizar.';
        statusCode = 422;
    }
    else if (code === 'errorCommentId') {
        ret.msg = 'Disculpe, pero el comentario seleccionado es incorrecto.';
        statusCode = 422;
    }
    else if (code === 'errorComment') {
        ret.msg = 'Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\\-+"\'/@.';
        statusCode = 422;
    }
    else if (code === 'errorGroupId') {
        ret.msg = 'Disculpe, pero el grupo seleccionado es incorrecto.';
        statusCode = 422;
    }
    else if (code === 'errorThemeId') {
        ret.msg = 'Disculpe, pero el tema seleccionado es incorrecto.';
        statusCode = 422;
    }
    else if (code === 'errorContentId') {
        ret.msg = 'Disculpe, pero el contenido seleccionado es incorrecto.';
        statusCode = 422;
    }
    else if (code === 'like') {
        ret.msg = 'Disculpe, pero no se determinó la acción a realizar.';
        statusCode = 422;
    }
    else if (code === 'slug') {
        ret.msg = 'Disculpe, pero el curso seleccionado es incorrecto.';
        statusCode = 422;
    }
    else if (code === 'wasNotPreviousCourse') {
        ret.msg = `Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.`;
        statusCode = 422;
    }
    else if (code === 'wasRealized') {
        ret.msg = `Disculpe, pero ya has realizado esta acción anteriormente.`;
        statusCode = 422;
    }
    else if (code === 'wasRealizedAllTest') {
        ret.msg = `Disculpe, pero ya ha aprobado todos los exámenes de este curso.`;
        statusCode = 422;
    }
    else if (code === 'wasRealizedTest') {
        ret.msg = `Disculpe, pero ya ha aprobado este examen anteriormente.`;
        statusCode = 422;
    }
    return res.status(statusCode).json(ret);
}
exports.returnNotFound = returnNotFound;
function checkAnswerCheckbox(value, correctAnswer) {
    if (value && value.indexOf(',') > -1) {
        const ans = value.split(',') || []; // separate values
        if (correctAnswer !== null) {
            // check if assignate points if the correctAnswer exists in the received answer
            return ans && ans.indexOf(correctAnswer.toString()) > -1;
        }
    }
    return false;
}
function setPointToTest(question, inputAnswer) {
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
exports.setPointToTest = setPointToTest;
