"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateTest = exports.getTest = exports.updateHistoricalCourseContent = exports.showCourseContentTheme = exports.showCourse = exports.addCourseUser = exports.getCoursesCounters = void 0;
const lodash_1 = __importDefault(require("lodash"));
const CoursesActions_1 = __importStar(require("../../ActionsData/CoursesActions"));
const CoursesRequest_1 = require("../../FormRequest/CoursesRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Courses_1 = __importDefault(require("../../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const path = 'src/Controllers/publics/courses.controller';
async function getCourses(req, res) {
    try {
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const { title } = req.query;
        const { userrole } = req.body;
        const query = { toRoles: userrole, enable: { $eq: true } };
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        const courses = await CoursesActions_1.default({
            query,
            limit,
            skip,
            sort,
            isPublic: true,
            projection: { _id: 1, title: 1, banner: 1, slug: 1, description: 1, speaker: 1, speakerPosition: 1 }
        });
        return res.json({
            msg: 'Cursos',
            courses
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getCourses`);
    }
}
exports.default = getCourses;
async function getCoursesCounters(req, res) {
    try {
        const { title } = req.query;
        const { userrole } = req.body;
        const query = { toRoles: userrole, enable: { $eq: true } };
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        const totals = await Courses_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: 'Total de cursos.',
            totals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getCoursesCounters`);
    }
}
exports.getCoursesCounters = getCoursesCounters;
async function addCourseUser(req, res) {
    try {
        const { userid, slug } = req.params;
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        const courseExist = await CoursesActions_1.getCourseDetails({ query: { slug, enable: true } });
        if (!courseExist)
            return CoursesActions_1.returnNotFound(res, '404Course');
        if (courseExist.temary && courseExist.temary.length === 0) {
            return res.status(404).json({
                msg: 'Disculpe, pero el curso no se encuentra disponible.',
            });
        }
        // check if exists course
        const myCourse = await CoursesUsers_1.default.find({ userid, courseId: courseExist._id.toString() }).countDocuments().exec();
        if (myCourse > 0) {
            return res.status(422).json({
                msg: 'Disculpe, pero ya tiene disponible este curso en su cuenta.'
            });
        }
        const course = new CoursesUsers_1.default({
            userid,
            courseId: courseExist._id
        });
        let error = false;
        for (const temary of courseExist.temary || []) {
            const model = {
                temaryId: temary._id.toString(),
                content: [],
                test: [],
            };
            for (const content of temary.content) {
                model.content.push({ contentId: content._id.toString() });
            }
            if (model.content.length === 0) {
                error = true;
                break;
            }
            else
                course.temary.push(model);
        }
        await course.save();
        return res.status(201).json({
            msg: 'Se ha agregado el curso exitosamente.',
            added: course
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/addCourseUser`);
    }
}
exports.addCourseUser = addCourseUser;
async function showCourse(req, res) {
    try {
        const { slug, userid } = req.params;
        const { userrole } = req.body;
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        const course = await CoursesActions_1.getCourseDetails({
            query: { slug, toRoles: userrole },
            isPublic: true,
        });
        if (!course)
            return CoursesActions_1.returnNotFound(res, '404Course');
        // check and get data user course user
        const dataCourseUser = await CoursesActions_1.getCoursesDataUser({ query: { userid, courseId: course._id } });
        if (!dataCourseUser && !course.enable)
            return CoursesActions_1.returnNotFound(res, '404Course');
        return res.json({
            msg: 'Curso',
            course: await CoursesActions_1.getModelReturnCourseOrTheme({ data: course }),
            dataCourseUser
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showCourse`);
    }
}
exports.showCourse = showCourse;
async function showCourseContentTheme(req, res) {
    try {
        const { slug, _id } = req.params;
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnNotFound(res, 'errorThemeId');
        const course = await CoursesActions_1.getCourseDetails({
            query: { slug, 'temary._id': _id, enable: true },
            isPublic: true,
            projection: { 'temary.$': 1, levels: 1 }
        });
        if (!course)
            return CoursesActions_1.returnNotFound(res, '404Course');
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ courseId: course._id.toString() }, { temary: 1 }).exec();
        if (!myCourse)
            return CoursesActions_1.returnNotFound(res, '404CourseUser');
        // check if previous courses is approved
        if (course.levels
            && course.levels.length > 0
            && !(await CoursesActions_1.checkIfUserApprovedPreviousCourses(lodash_1.default.map(course.levels, '_id')))) {
            return CoursesActions_1.returnNotFound(res, 'wasNotPreviousCourse');
        }
        const theme = await CoursesActions_1.getModelReturnCourseOrTheme({ data: course, theme: true, showContent: true });
        if (theme) {
            if (theme.content.length > 0) {
                const index = lodash_1.default.findIndex(myCourse.temary, t => t.temaryId === theme._id.toString());
                if (index > -1) {
                    // set view values
                    theme.view = myCourse.temary[index].view;
                    myCourse.temary[index].content.forEach(c => {
                        const index2 = lodash_1.default.findIndex(theme.content, c2 => c2._id.toString() === c.contentId);
                        if (index2 > -1)
                            theme.content[index2].view = c.view;
                    });
                }
            }
        }
        return res.json({
            msg: 'Tema',
            theme,
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showCourseTheme`);
    }
}
exports.showCourseContentTheme = showCourseContentTheme;
async function updateHistoricalCourseContent(req, res) {
    try {
        const { slug, _id, contentId, action } = req.params;
        if (!/[12]{1}/.test(`${action}`))
            return CoursesActions_1.returnNotFound(res, 'errorAction');
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnNotFound(res, 'errorThemeId');
        if (!Validations_1.checkObjectId(contentId))
            return CoursesActions_1.returnNotFound(res, 'errorContentId');
        const course = await CoursesActions_1.getCourseDetails({
            query: { slug, 'temary._id': _id, enable: true },
            isPublic: true,
            projection: { 'temary.$.content': 1, levels: 1 }
        });
        if (!course)
            return CoursesActions_1.returnNotFound(res, '404Course');
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ courseId: course._id }, { temary: 1 }).exec();
        if (!myCourse)
            return CoursesActions_1.returnNotFound(res, '404CourseUser');
        // check if previous courses is approved
        if (course.levels && course.levels.length > 0) {
            if (!(await CoursesActions_1.checkIfUserApprovedPreviousCourses(lodash_1.default.map(course.levels, '_id')))) {
                return CoursesActions_1.returnNotFound(res, 'wasNotPreviousCourse');
            }
        }
        // get theme
        if ((!course.temary) || (course.temary && course.temary.length === 0)) {
            return CoursesActions_1.returnNotFound(res, '404Theme');
        }
        const temary = course.temary[0] || [];
        const indexContent = lodash_1.default.findIndex(temary.content, v => v._id.toString() === contentId);
        if (indexContent === -1)
            return CoursesActions_1.returnNotFound(res, '404Content');
        // set the new theme in viewing
        const index = lodash_1.default.findIndex(myCourse.temary, t => t.temaryId === _id);
        if (index > -1) {
            const index2 = lodash_1.default.findIndex(myCourse.temary[index].content, c => c.contentId === contentId);
            if (index2 > -1) {
                myCourse.temary[index].content[index2].view = action === '1' ? 1 : 2;
                myCourse.temary[index].content[index2].date = GlobalFunctions_1.setDate();
            }
            // check if all content was viewed
            if (action === '2') {
                let acc = 0;
                myCourse.temary[index].content.forEach(c => {
                    if (c.view === 2)
                        acc++;
                });
                if (myCourse.temary[index].content.length === acc)
                    myCourse.temary[index].view = 2;
            }
            myCourse.temary[index].date = GlobalFunctions_1.setDate();
            await myCourse.save();
        }
        return res.json({
            msg: '¡Éxito al guardar el progreso!',
            updated: true
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showCourseTheme`);
    }
}
exports.updateHistoricalCourseContent = updateHistoricalCourseContent;
/*
  Test course
 */
async function getTest(req, res) {
    try {
        const { slug, _id, userid } = req.params;
        const ret = [];
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnNotFound(res, 'errorThemeId');
        const course = await Courses_1.default.findOne({ slug, 'temary._id': _id, enable: true, }, { 'temary.$.test': 1, levels: 1 }).exec();
        if (!course)
            return CoursesActions_1.returnNotFound(res, '404Course');
        if (!course.temary)
            return CoursesActions_1.returnNotFound(res, '404Theme');
        // check if previous courses is approved
        if (course.levels && course.levels.length > 0) {
            if (!(await CoursesActions_1.checkIfUserApprovedPreviousCourses(lodash_1.default.map(course.levels, '_id')))) {
                return CoursesActions_1.returnNotFound(res, 'wasNotPreviousCourse');
            }
        }
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ userid, courseId: course._id }, { 'temary.temaryId': 1, 'temary.test': 1, 'temary.approved': 1, 'temary.view': 1, approved: 1 }).exec();
        if (!myCourse)
            return CoursesActions_1.returnNotFound(res, '404CourseUser');
        // check if theme is approved or course
        if (myCourse.approved)
            return CoursesActions_1.returnNotFound(res, 'wasRealizedAllTest');
        const index = lodash_1.default.findIndex(myCourse.temary, t => t.temaryId === _id);
        if (index === -1)
            return CoursesActions_1.returnNotFound(res, '404GetDataTemaryUser');
        if (myCourse.temary[index].view !== 2)
            return CoursesActions_1.returnNotFound(res, 'notFinishTheme');
        if (myCourse.temary[index].approved)
            return CoursesActions_1.returnNotFound(res, 'wasRealizedTest');
        course.temary[0].test.forEach(t => {
            ret.push({
                _id: t._id,
                title: t.title,
                description: t.description,
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
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getTest`);
    }
}
exports.getTest = getTest;
async function evaluateTest(req, res) {
    try {
        const { slug, _id, userid } = req.params;
        let points = 0; // points to test
        let pointsIgnored = 0; // points to test
        if (!Validations_1.checkSlug(slug))
            return CoursesActions_1.returnNotFound(res, 'slug');
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnNotFound(res, 'errorThemeId');
        const validate = CoursesRequest_1.validateTestData(req.body.data || []);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ slug, 'temary._id': _id, enable: true, }, { 'temary.$.test': 1, approved: 1 }).exec();
        if (!course)
            return CoursesActions_1.returnNotFound(res, '404Course');
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ userid, courseId: course._id, 'temary.temaryId': _id }, { 'temary.temaryId': 1, 'temary.approved': 1, 'temary.test': 1, approved: 1 }).exec();
        if (!myCourse)
            return CoursesActions_1.returnNotFound(res, '404CourseUser');
        // check if course is approved
        if (myCourse.approved)
            return CoursesActions_1.returnNotFound(res, 'wasRealizedAllTest');
        // check if exists temary in myCourse data
        const index = lodash_1.default.findIndex(myCourse.temary, t => t.temaryId === _id);
        if (index === -1)
            return CoursesActions_1.returnNotFound(res, '404GetDataTemaryUser');
        if (myCourse.temary[index].approved)
            return CoursesActions_1.returnNotFound(res, 'wasRealizedTest');
        // validate answer test
        validate.data.forEach(a => {
            // get questions
            const question = lodash_1.default.find(course.temary[0].test, t => t._id.toString() === a.questionId);
            if (question) {
                if (!question.require && a.answer)
                    points += CoursesActions_1.setPointToTest(question, a);
                else if (question.require)
                    points += CoursesActions_1.setPointToTest(question, a);
                else
                    pointsIgnored++;
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
        if (approved)
            myCourse.temary[index].approvedDate = GlobalFunctions_1.setDate();
        // check if approved all themes
        const listApproved = lodash_1.default.map(myCourse.temary, 'approved');
        const filter = lodash_1.default.filter(listApproved, v => v);
        if (filter.length === listApproved.length)
            myCourse.approved = true;
        await myCourse.save();
        return res.json({
            msg,
            average: average.toString().indexOf('.') > -1 ? average.toFixed(2) : average,
            approved
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/evaluateTest`);
    }
}
exports.evaluateTest = evaluateTest;
