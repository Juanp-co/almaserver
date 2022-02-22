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
exports.deleteThemeCourse = exports.updateThemeCourse = exports.addThemeCourse = exports.deleteCourse = exports.enableCourse = exports.updateInfoCourse = exports.saveCourse = exports.showCourse = void 0;
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const CoursesRequest_1 = __importStar(require("../../FormRequest/CoursesRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Courses_1 = __importDefault(require("../../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/admin/courses.admin.controller';
// =====================================================================================================================
async function getCourses(req, res) {
    try {
        const { limit, skip, sort } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const projection = { _id: 1, title: 1, description: 1, enable: 1, level: 1 };
        const courses = await Courses_1.default.find({}, projection)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: 'Cursos.',
            courses
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getCourses`);
    }
}
exports.default = getCourses;
async function showCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        const course = await (0, CoursesActions_1.getCourseDetails)({
            query: { _id },
            infoUser: true,
            projection: { __v: 0 }
        });
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        return res.json({
            msg: 'Curso',
            course: await (0, CoursesActions_1.getModelReturnCourseOrTheme)({
                data: course,
                admin: true,
                counters: true
            }),
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showCourse`);
    }
}
exports.showCourse = showCourse;
async function saveCourse(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = (0, CoursesRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        // set slug value
        if (!validate.data.slug)
            validate.data.slug = (0, GlobalFunctions_1.createSlug)(validate.data.title);
        // get qty registered
        const slugQty = await (0, CoursesActions_1.checkIfExistSlug)(`${validate.data.slug}`);
        // check if exist slug
        if (slugQty > 0)
            validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;
        validate.data.code = validate.data.slug;
        // create
        const course = new Courses_1.default(validate.data);
        course.userid = tokenId;
        await course.save();
        return res.status(201).json({
            msg: 'Se ha guardo el nuevo curso exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveCourse`);
    }
}
exports.saveCourse = saveCourse;
async function updateInfoCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        const validate = (0, CoursesRequest_1.validateInfoUpdate)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, {
            title: 1,
            code: 1,
            slug: 1,
            level: 1,
            description: 1,
            speaker: 1,
            speakerPosition: 1,
        }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        if (course.enable)
            return (0, CoursesActions_1.returnCantEdit)(res, 0);
        if (await ((0, CoursesActions_1.checkIfUsersOwnCourse)(course._id.toString())))
            return (0, CoursesActions_1.returnCantEdit)(res, 1);
        if (course.title !== validate.data.title) {
            // set slug value
            let slug = (0, GlobalFunctions_1.createSlug)(validate.data.title);
            // get qty registered
            const slugQty = await (0, CoursesActions_1.checkIfExistSlug)(`${slug}`);
            // check if exist slug
            if (slugQty > 0)
                slug = `${slug}-${slugQty + 1}`;
            course.slug = slug;
            course.code = slug;
        }
        course.title = validate.data.title;
        course.description = validate.data.description;
        course.speaker = validate.data.speaker;
        course.speakerPosition = validate.data.speakerPosition;
        course.toRoles = validate.data.toRoles;
        course.level = validate.data.level || course.level;
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la información del curso exitosamente.',
            course
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateInfoCourse`);
    }
}
exports.updateInfoCourse = updateInfoCourse;
async function enableCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        if (!course.enable) {
            // validate all data
            const validated = (0, CoursesActions_1.validateToPublish)(course);
            if (validated)
                return res.status(422).json({ msg: validated });
            course.enable = true;
        }
        else
            course.enable = false;
        await course.save();
        if (course.enable) {
            const listIds = [];
            // obtain those users who do not have the course in their list.
            const coursesUsers = await CoursesUsers_1.default.find({ 'courses.courseId': { $ne: course._id.toString() } }).exec();
            if (coursesUsers.length > 0) {
                const totals = coursesUsers.length;
                let temary = [];
                for (const theme of course.temary || []) {
                    temary.push({ temaryId: theme._id.toString() });
                }
                for (let i = 0; i < totals; i++) {
                    coursesUsers[i].courses.push({
                        courseId: course._id.toString(),
                        temary,
                        level: course.level,
                        approved: false,
                    });
                    await coursesUsers[i].save();
                }
                // get others ids that not contains the courses.
                if (listIds.length > 0) {
                    const users = await Users_1.default.find({ _id: { $nin: listIds }, role: { $in: course.toRoles || [] } }, { _id: 1 }).exec();
                    if (users.length > 0) {
                        // get all courses and prepare model
                        const courses = await Courses_1.default.find({ enable: { $eq: true } }).sort({ created_at: 1 }).exec();
                        if (courses.length > 0) {
                            const coursesList = [];
                            for (const c of courses) {
                                temary = [];
                                for (const theme of c.temary || []) {
                                    temary.push({ temaryId: theme._id.toString() });
                                }
                                coursesList.push({
                                    courseId: course._id.toString(),
                                    temary,
                                    level: course.level,
                                    approved: false,
                                });
                            }
                            if (coursesList.length > 0) {
                                // create the new records
                                for (const user of users) {
                                    const cUser = new CoursesUsers_1.default({
                                        userid: user._id.toString(),
                                        courses: coursesList
                                    });
                                    await cUser.save();
                                }
                            }
                        }
                    }
                }
            }
        }
        return res.json({
            msg: `Se ha ${course.enable ? 'publicado' : 'retirado'} el curso exitosamente.`,
            data: {
                enable: course.enable
            }
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/enableCourse`);
    }
}
exports.enableCourse = enableCourse;
async function deleteCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        await course.delete();
        const coursesUsers = await CoursesUsers_1.default.find({ 'courses.courseId': _id }).exec();
        if (coursesUsers.length > 0) {
            for (const courseUser of coursesUsers) {
                courseUser.courses = courseUser.courses.filter(c => c.courseId !== _id);
                await courseUser.save();
            }
        }
        return res.json({
            msg: 'Se ha eliminado el curso exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteCourse`);
    }
}
exports.deleteCourse = deleteCourse;
/*
  THEMES
 */
async function addThemeCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        const validate = (0, CoursesRequest_1.validateContentThemeUpdate)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, { enable: 1, temary: 1 }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        if (course.enable)
            return (0, CoursesActions_1.returnCantEdit)(res, 0);
        if (await ((0, CoursesActions_1.checkIfUsersOwnCourse)(course._id.toString())))
            return (0, CoursesActions_1.returnCantEdit)(res, 1);
        course.temary.push({
            title: validate.data.title,
            description: validate.data.description,
            urlVideo: validate.data.urlVideo,
            quiz: validate.data.quiz,
        });
        await course.save();
        return res.json({
            msg: 'Se ha agregado el tema exitosamente.',
            theme: course.temary.pop()
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/addThemeCourse`);
    }
}
exports.addThemeCourse = addThemeCourse;
async function updateThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        if (!(0, Validations_1.checkObjectId)(themeId))
            return (0, CoursesActions_1.returnErrorId)(res, 1);
        const validate = (0, CoursesRequest_1.validateContentThemeUpdate)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, { enable: 1, temary: 1 }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        if (course.enable)
            return (0, CoursesActions_1.returnCantEdit)(res, 0);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return (0, CoursesActions_1.return404)(res, 1);
        course.temary[index].title = validate.data.title;
        course.temary[index].description = validate.data.description;
        course.temary[index].urlVideo = validate.data.urlVideo;
        course.temary[index].quiz = validate.data.quiz;
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la información del tema exitosamente.',
            theme: {
                title: course.temary[index].title,
                description: course.temary[index].description,
                urlVideo: course.temary[index].urlVideo,
                quiz: course.temary[index].quiz,
            }
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateThemeCourse`);
    }
}
exports.updateThemeCourse = updateThemeCourse;
async function deleteThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, CoursesActions_1.returnErrorId)(res);
        if (!(0, Validations_1.checkObjectId)(themeId))
            return (0, CoursesActions_1.returnErrorId)(res, 1);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, { enable: 1, temary: 1 }).exec();
        if (!course)
            return (0, CoursesActions_1.return404)(res);
        if (course.enable)
            return (0, CoursesActions_1.returnCantEdit)(res, 0);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return (0, CoursesActions_1.return404)(res, 1);
        course.temary = course.temary.filter(t => t._id.toString() !== themeId);
        await course.save();
        return res.json({
            msg: 'Se ha eliminado el tema exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteThemeCourse`);
    }
}
exports.deleteThemeCourse = deleteThemeCourse;
