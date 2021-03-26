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
exports.deleteQuestionTestThemeCourse = exports.updateQuestionTestThemeCourse = exports.addQuestionTestThemeCourse = exports.deleteContentThemeCourse = exports.updateContentThemeCourse = exports.addContentThemeCourse = exports.deleteThemeCourse = exports.updateThemeCourse = exports.addThemeCourse = exports.deleteCourse = exports.enableCourse = exports.updateBannerCourse = exports.updateInfoCourse = exports.saveCourse = exports.showCourse = exports.getCoursesCounters = void 0;
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const CoursesRequest_1 = __importStar(require("../../FormRequest/CoursesRequest"));
const Validations_1 = require("../../Functions/Validations");
const Courses_1 = __importDefault(require("../../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'src/admin/courses.admin.controller';
// =====================================================================================================================
async function getCourses(req, res) {
    try {
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const { enable, title, ignoreIds } = req.query;
        const query = {};
        const projection = { _id: 1, title: 1, description: 1, banner: 1, enable: 1 };
        if (ignoreIds) {
            query._id = { $nin: ignoreIds.toString().split(',') };
            query.enable = true;
        }
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        if (['true', 'false'].indexOf(`${enable}`) > -1)
            query.enable = enable === 'true';
        const courses = await Courses_1.default.find(query, projection)
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
        return GlobalFunctions_1.returnError(res, error, `${path}/getCourses`);
    }
}
exports.default = getCourses;
async function getCoursesCounters(req, res) {
    try {
        const { enable, title, ignoreIds } = req.query;
        const query = {};
        if (ignoreIds) {
            query._id = { $nin: ignoreIds.toString().split(',') };
            query.enable = true;
        }
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        if (['true', 'false'].indexOf(`${enable}`) > -1)
            query.enable = enable === 'true';
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
async function showCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const course = await CoursesActions_1.getCourseDetails({
            query: { _id },
            infoUser: true
        });
        if (!course)
            return CoursesActions_1.return404(res);
        return res.json({
            msg: 'Curso',
            course: await CoursesActions_1.getModelReturnCourseOrTheme({
                data: course,
                theme: false,
                showContent: true,
                admin: true,
                counters: true
            }),
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showCourse`);
    }
}
exports.showCourse = showCourse;
async function saveCourse(req, res) {
    try {
        const validate = CoursesRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        // set slug value
        if (!validate.data.slug)
            validate.data.slug = GlobalFunctions_1.createSlug(validate.data.title);
        // get qty registered
        const slugQty = await CoursesActions_1.checkIfExistSlug(`${validate.data.slug}`);
        // check if exist slug
        if (slugQty > 0)
            validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;
        validate.data.code = validate.data.slug;
        // save picture
        validate.data.banner = await GlobalFunctions_1.checkAndUploadPicture(validate.data.banner, 'courses');
        // create
        const course = new Courses_1.default(validate.data);
        course.userid = req.params.userid;
        await course.save();
        return res.status(201).json({
            msg: 'Se ha guardo el nuevo curso exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveCourse`);
    }
}
exports.saveCourse = saveCourse;
async function updateInfoCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const validate = CoursesRequest_1.validateInfoUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, {
            title: 1,
            code: 1,
            slug: 1,
            description: 1,
            speaker: 1,
            speakerPosition: 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        if (course.title !== validate.data.title) {
            // set slug value
            let slug = GlobalFunctions_1.createSlug(validate.data.title);
            // get qty registered
            const slugQty = await CoursesActions_1.checkIfExistSlug(`${slug}`);
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
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la información del curso exitosamente.',
            course
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateInfoCourse`);
    }
}
exports.updateInfoCourse = updateInfoCourse;
async function updateBannerCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const validate = CoursesRequest_1.validateBannerUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, { banner: 1 }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        if (course.banner) {
            GlobalFunctions_1.deleteImages(`./${course.toObject({ getters: false }).banner}`);
        }
        course.banner = await GlobalFunctions_1.checkAndUploadPicture(validate.data.banner, 'courses');
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la imagen del curso exitosamente.',
            banner: course.banner
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateBannerCourse`);
    }
}
exports.updateBannerCourse = updateBannerCourse;
async function enableCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (!course.enable) {
            // validate all data
            const validated = CoursesActions_1.validateToPublish(course);
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
                const temary = [];
                for (const theme of course.temary || []) {
                    const model = {
                        temaryId: theme._id.toString(),
                        content: [],
                        test: [],
                    };
                    for (const content of theme.content) {
                        model.content.push({ contentId: content._id.toString() });
                    }
                    temary.push(model);
                }
                for (let i = 0; i < totals; i++) {
                    coursesUsers[i].courses.push({
                        courseId: course._id.toString(),
                        temary,
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
                            for (const theme of course.temary || []) {
                                const model = {
                                    temaryId: theme._id.toString(),
                                    content: [],
                                    test: [],
                                };
                                for (const content of theme.content) {
                                    model.content.push({ contentId: content._id.toString() });
                                }
                                coursesList.push({
                                    courseId: course._id.toString(),
                                    temary: model,
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
        return GlobalFunctions_1.returnError(res, error, `${path}/enableCourse`);
    }
}
exports.enableCourse = enableCourse;
async function deleteCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        const { banner } = course.toObject({ getters: false });
        await course.delete();
        if (banner)
            GlobalFunctions_1.deleteImages(`./${banner}`);
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
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteCourse`);
    }
}
exports.deleteCourse = deleteCourse;
/*
  THEMES
 */
async function addThemeCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        const validate = CoursesRequest_1.validateThemeUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, {
            enable: 1,
            temary: 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        course.temary.push({
            title: validate.data.title,
            description: validate.data.description,
            content: [],
            test: []
        });
        await course.save();
        return res.json({
            msg: 'Se ha agregado el tema exitosamente.',
            theme: course.temary.pop()
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateThemeCourse`);
    }
}
exports.addThemeCourse = addThemeCourse;
async function updateThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res, 0);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        const validate = CoursesRequest_1.validateThemeUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary[index].title = validate.data.title;
        course.temary[index].description = validate.data.description;
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la información del tema exitosamente.',
            theme: {
                title: course.temary[index].title,
                description: course.temary[index].description,
            }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateThemeCourse`);
    }
}
exports.updateThemeCourse = updateThemeCourse;
async function deleteThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary = course.temary.filter(t => t._id.toString() !== themeId);
        await course.save();
        return res.json({
            msg: 'Se ha eliminado el tema y su contenido exitosamente.',
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateThemeCourse`);
    }
}
exports.deleteThemeCourse = deleteThemeCourse;
/*
  CONTENT
 */
async function addContentThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        const validate = CoursesRequest_1.validateContentThemeUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, {
            enable: 1,
            temary: 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary[index].content.push({
            title: validate.data.title,
            description: validate.data.description,
            urlVideo: validate.data.urlVideo,
        });
        await course.save();
        return res.json({
            msg: 'Se ha agregado el contenido al tema exitosamente.',
            content: course.temary[index].content.pop()
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateContentThemeCourse`);
    }
}
exports.addContentThemeCourse = addContentThemeCourse;
async function updateContentThemeCourse(req, res) {
    try {
        const { _id, themeId, contentId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        if (!Validations_1.checkObjectId(contentId))
            return CoursesActions_1.returnErrorId(res, 2);
        const validate = CoursesRequest_1.validateContentThemeUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        const index2 = course.temary[index].content.findIndex(c => c._id.toString() === contentId);
        if (index2 === -1)
            return CoursesActions_1.return404(res, 2);
        course.temary[index].content[index2].title = validate.data.title;
        course.temary[index].content[index2].description = validate.data.description;
        course.temary[index].content[index2].urlVideo = validate.data.urlVideo;
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la información del tema exitosamente.',
            content: {
                title: course.temary[index].content[index2].title,
                description: course.temary[index].content[index2].description,
                urlVideo: course.temary[index].content[index2].urlVideo,
            }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateContentThemeCourse`);
    }
}
exports.updateContentThemeCourse = updateContentThemeCourse;
async function deleteContentThemeCourse(req, res) {
    try {
        const { _id, themeId, contentId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        if (!Validations_1.checkObjectId(contentId))
            return CoursesActions_1.returnErrorId(res, 2);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary[index].content = course.temary[index].content.filter(c => c._id.toString() !== contentId);
        await course.save();
        return res.json({
            msg: 'Se ha eliminado el contenido exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteContentThemeCourse`);
    }
}
exports.deleteContentThemeCourse = deleteContentThemeCourse;
/*
  TEST
 */
async function addQuestionTestThemeCourse(req, res) {
    try {
        const { _id, themeId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        const validate = CoursesRequest_1.validateQuestionTestUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }, {
            enable: 1,
            temary: 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary[index].test.push({ ...validate.data });
        await course.save();
        return res.json({
            msg: 'Se ha agregado la pregunta exitosamente.',
            question: course.temary[index].test.pop()
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/addQuestionTestThemeCourse`);
    }
}
exports.addQuestionTestThemeCourse = addQuestionTestThemeCourse;
async function updateQuestionTestThemeCourse(req, res) {
    try {
        const { _id, themeId, questionId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res, 0);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        if (!Validations_1.checkObjectId(questionId))
            return CoursesActions_1.returnErrorId(res, 2);
        const validate = CoursesRequest_1.validateQuestionTestUpdate(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        const index2 = course.temary[index].test.findIndex(t => t._id.toString() === questionId);
        if (index2 === -1)
            return CoursesActions_1.return404(res, 2);
        course.temary[index].test[index2].title = validate.data.title;
        course.temary[index].test[index2].description = validate.data.description;
        course.temary[index].test[index2].inputType = validate.data.inputType;
        course.temary[index].test[index2].placeholder = validate.data.placeholder;
        course.temary[index].test[index2].require = validate.data.require;
        course.temary[index].test[index2].values = validate.data.values;
        course.temary[index].test[index2].correctAnswer = validate.data.correctAnswer;
        await course.save();
        return res.json({
            msg: 'Se ha actualizado la pregunta exitosamente.',
            question: course.temary[index].test[index2]
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateQuestionTestThemeCourse`);
    }
}
exports.updateQuestionTestThemeCourse = updateQuestionTestThemeCourse;
async function deleteQuestionTestThemeCourse(req, res) {
    try {
        const { _id, themeId, questionId } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return CoursesActions_1.returnErrorId(res, 0);
        if (!Validations_1.checkObjectId(themeId))
            return CoursesActions_1.returnErrorId(res, 1);
        if (!Validations_1.checkObjectId(questionId))
            return CoursesActions_1.returnErrorId(res, 2);
        const course = await Courses_1.default.findOne({ _id, 'temary._id': themeId }, {
            enable: 1,
            'temary': 1,
        }).exec();
        if (!course)
            return CoursesActions_1.return404(res);
        if (course.enable)
            return CoursesActions_1.returnCantEdit(res, 0);
        if (await (CoursesActions_1.checkIfUsersOwnCourse(course._id.toString())))
            return CoursesActions_1.returnCantEdit(res, 1);
        const index = course.temary.findIndex(t => t._id.toString() === themeId);
        if (index === -1)
            return CoursesActions_1.return404(res, 1);
        course.temary[index].test = course.temary[index].test.filter(t => t._id.toString() !== questionId);
        await course.save();
        return res.json({
            msg: 'Se ha eliminado la pregunta exitosamente.',
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteQuestionTestThemeCourse`);
    }
}
exports.deleteQuestionTestThemeCourse = deleteQuestionTestThemeCourse;
