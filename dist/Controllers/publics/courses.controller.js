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
exports.evaluateQuiz = exports.updateHistoricalCourseContent = exports.showCourse = void 0;
const CoursesActions_1 = __importStar(require("../../ActionsData/CoursesActions"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Courses_1 = __importDefault(require("../../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const CoursesRequest_1 = require("../../FormRequest/CoursesRequest");
const path = 'Controllers/publics/courses.controller';
async function getCourses(req, res) {
    try {
        const { tokenRoles, tokenId } = req.body;
        const { limit, skip, sort } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const { title } = req.query;
        const query = { toRoles: { $in: tokenRoles } || [], enable: { $eq: true } };
        const ret = [];
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        const courses = await (0, CoursesActions_1.default)({
            query,
            limit,
            skip,
            sort,
            isPublic: true,
            projection: { _id: 1, title: 1, slug: 1, description: 1, speaker: 1, speakerPosition: 1, level: 1 }
        });
        const courseUser = await CoursesUsers_1.default.findOne({ userid: tokenId }, { 'courses.courseId': 1, 'courses.level': 1, 'courses.approved': 1 }).exec();
        if (courses.length > 0) {
            courses.forEach(c => {
                let enable = false;
                if (c.level !== undefined && c.level !== null) {
                    if (c.level === 1)
                        enable = true;
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
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getCourses`);
    }
}
exports.default = getCourses;
async function showCourse(req, res) {
    var _a, _b;
    try {
        const { slug } = req.params;
        const { tokenId, tokenRoles } = req.body;
        if (!(0, Validations_1.checkSlug)(slug))
            return (0, CoursesActions_1.returnNotFound)(res, 'slug');
        const course = await (0, CoursesActions_1.getCourseDetails)({
            query: { slug, toRoles: { $in: tokenRoles } },
            isPublic: true,
        });
        if (!course)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        if (!course.enable)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        // check and get data user course user
        let dataCourseUser = await (0, CoursesActions_1.getCoursesDataUser)({
            query: {
                userid: tokenId,
                'courses.courseId': course._id.toString()
            }
        });
        // if data not found, create register and find the courses in the list.
        if (!dataCourseUser) {
            const data = await (0, CoursesActions_1.addCoursesToUser)(tokenId);
            if (data) {
                const index = data.courses.findIndex(c => c.courseId === course._id.toString());
                if (index > -1) {
                    dataCourseUser = {
                        _id: data._id,
                        course: data.courses[index]
                    };
                }
                else
                    return (0, CoursesActions_1.returnNotFound)(res, '404Course');
            }
        }
        delete course.enable;
        const ret = await (0, CoursesActions_1.getModelReturnCourseOrTheme)({ data: course });
        if (ret) {
            if (ret.temary) {
                for (const t of ret.temary) {
                    const i = dataCourseUser ? (_a = dataCourseUser.course) === null || _a === void 0 ? void 0 : _a.temary.findIndex(tcu => tcu.temaryId === t._id.toString()) : -1;
                    if (i !== undefined && i > -1)
                        ret.temary[i].view = ((_b = dataCourseUser === null || dataCourseUser === void 0 ? void 0 : dataCourseUser.course) === null || _b === void 0 ? void 0 : _b.temary[i].view) || 0;
                }
            }
        }
        return res.json({
            msg: 'Curso',
            course: ret,
            dataCourseUser
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showCourse`);
    }
}
exports.showCourse = showCourse;
async function updateHistoricalCourseContent(req, res) {
    try {
        const { slug, _id, action } = req.params;
        const { tokenId } = req.body;
        if (!/[12]{1}/.test(`${action}`))
            return (0, CoursesActions_1.returnNotFound)(res, 'errorAction');
        if (!(0, Validations_1.checkSlug)(slug))
            return (0, CoursesActions_1.returnNotFound)(res, 'slug');
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnNotFound)(res, 'errorThemeId');
        const course = await (0, CoursesActions_1.getCourseDetails)({
            query: { slug, 'temary._id': _id },
            isPublic: true,
            projection: { 'temary.$': 1, enable: 1 }
        });
        if (!course)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ userid: tokenId, 'courses.courseId': course._id.toString() }, { 'courses': 1 }).exec();
        if (!myCourse)
            return (0, CoursesActions_1.returnNotFound)(res, '404CourseUser');
        if (!myCourse && !course.enable)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        // get theme
        if ((!course.temary) || (course.temary && course.temary.length === 0)) {
            return (0, CoursesActions_1.returnNotFound)(res, '404Theme');
        }
        const i = myCourse.courses.findIndex(c => c.courseId === course._id.toString());
        if (i === -1)
            return (0, CoursesActions_1.returnNotFound)(res, '404CourseUser');
        // set the new theme in viewing
        const index = myCourse.courses[i].temary.findIndex(t => t.temaryId === _id);
        if (index > -1) {
            myCourse.courses[i].temary[index].view = action === '1' ? 1 : 2;
            myCourse.courses[i].temary[index].date = (0, GlobalFunctions_1.setDate)();
            // check if all content was viewed
            if (action === '2') {
                let acc = 0;
                myCourse.courses[i].temary.forEach(t => { acc += t.view === 2 ? 1 : 0; });
                if (myCourse.courses[i].temary.length === acc)
                    myCourse.courses[i].approved = true;
            }
            myCourse.courses[i].temary[index].date = (0, GlobalFunctions_1.setDate)();
            await myCourse.save();
        }
        return res.json({
            msg: '¡Éxito al guardar el progreso!',
            updated: true
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showCourseTheme`);
    }
}
exports.updateHistoricalCourseContent = updateHistoricalCourseContent;
async function evaluateQuiz(req, res) {
    try {
        const { slug, _id } = req.params;
        const { tokenId } = req.body;
        let points = 0; // points to test
        let pointsIgnored = 0; // points to test
        if (!(0, Validations_1.checkSlug)(slug))
            return (0, CoursesActions_1.returnNotFound)(res, 'slug');
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnNotFound)(res, 'errorThemeId');
        const validate = (0, CoursesRequest_1.validateTestData)(req.body.data || []);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const course = await Courses_1.default.findOne({ slug, 'temary._id': _id }, { 'temary.$': 1, enable: 1 }).exec();
        if (!course)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        if (!course.enable)
            return (0, CoursesActions_1.returnNotFound)(res, '404Course');
        // check if the course belonging to user
        const myCourse = await CoursesUsers_1.default.findOne({ userid: tokenId, 'courses.courseId': course._id, 'courses.temary.temaryId': _id }, { 'courses': 1 }).exec();
        if (!myCourse)
            return (0, CoursesActions_1.returnNotFound)(res, '404CourseUser');
        const i = myCourse.courses.findIndex(c => c.courseId === course._id.toString());
        // check if course is approved
        if (i === -1)
            return (0, CoursesActions_1.returnNotFound)(res, 'wasRealizedAllTest');
        if (myCourse.courses[i].approved)
            return (0, CoursesActions_1.returnNotFound)(res, 'wasRealizedAllTest');
        // check if exists temary in myCourse data
        const index = myCourse.courses[i].temary.findIndex(t => t.temaryId === _id);
        if (index === -1)
            return (0, CoursesActions_1.returnNotFound)(res, '404GetDataTemaryUser');
        if (myCourse.courses[i].temary[index].view === 2)
            return (0, CoursesActions_1.returnNotFound)(res, 'wasRealizedTest');
        // validate answer test
        validate.data.forEach(a => {
            var _a, _b;
            // get questions
            const question = (_b = (_a = course.temary[0]) === null || _a === void 0 ? void 0 : _a.quiz) === null || _b === void 0 ? void 0 : _b.find(q => q._id.toString() === a.questionId);
            if (question) {
                if (!question.require && a.answer)
                    points += (0, CoursesActions_1.setPointToTest)(question, a);
                else if (question.require)
                    points += (0, CoursesActions_1.setPointToTest)(question, a);
                else
                    pointsIgnored++;
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
        myCourse.courses[i].temary[index].date = (0, GlobalFunctions_1.setDate)();
        // check if approved all themes
        const listApproved = myCourse.courses[i].temary.map(t => t.view);
        const filter = listApproved.filter(v => v === 2);
        if (filter.length === listApproved.length)
            myCourse.courses[i].approved = true;
        await myCourse.save();
        return res.json({
            msg,
            average: average.toString().indexOf('.') > -1 ? average.toFixed(2) : average,
            approved
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/evaluateTest`);
    }
}
exports.evaluateQuiz = evaluateQuiz;
