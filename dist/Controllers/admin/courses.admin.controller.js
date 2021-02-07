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
exports.likesAndUnlikesCourseOrTheme = exports.commentsCourseOrTheme = exports.deleteCourse = exports.enableCourse = exports.updateCourse = exports.saveCourse = exports.showCourse = exports.getCoursesCounters = void 0;
const lodash_1 = __importDefault(require("lodash"));
const CoursesActions_1 = __importStar(require("../../ActionsData/CoursesActions"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const CoursesRequest_1 = __importDefault(require("../../FormRequest/CoursesRequest"));
const Validations_1 = require("../../Functions/Validations");
const Courses_1 = __importDefault(require("../../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const path = 'src/admin/courses.admin.controller';
function return404(res) {
    return res.status(404).json({
        msg: 'Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.',
    });
}
function returnErrorId(res, theme = false) {
    return res.status(422).json({
        msg: `Disculpe, pero el ${theme ? 'tema' : 'curso'} seleccionado es incorrecto.`,
    });
}
// =====================================================================================================================
async function getCourses(req, res) {
    try {
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const { code, title } = req.query;
        const query = {};
        if (code)
            query.code = code.toString().toUpperCase();
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        const courses = await CoursesActions_1.default({
            query,
            limit,
            skip,
            sort,
            infoUser: true,
        });
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
        const { code, title } = req.query;
        const query = {};
        const ret = {
            enables: 0,
            drafts: 0
        };
        if (code)
            query.code = { $regex: new RegExp(`${code}`, 'i') };
        if (title)
            query.title = { $regex: new RegExp(`${title}`, 'i') };
        const courses = await Courses_1.default.find(query, { enable: 1 }).exec();
        if (courses.length > 0) {
            courses.forEach(c => {
                if (c.enable)
                    ret.enables++;
                else
                    ret.drafts++;
            });
        }
        return res.json({
            msg: 'Total de cursos.',
            totals: ret
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
            returnErrorId(res);
        const course = await CoursesActions_1.getCourseDetails({
            query: { _id },
            infoUser: true
        });
        if (!course)
            return return404(res);
        return res.json({
            msg: 'Curso',
            course: await CoursesActions_1.getModelReturnCourseOrTheme({
                data: course,
                theme: false,
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
        const validate = await CoursesRequest_1.default(req.body, false);
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
        // create
        const course = new Courses_1.default(validate.data);
        course.banner = await GlobalFunctions_1.checkAndUploadPicture(validate.data.banner);
        course.userid = req.params.userid;
        await course.save();
        return res.status(201).json({
            msg: 'Se ha creado el nuevo curso exitosamente.',
            course
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveCourse`);
    }
}
exports.saveCourse = saveCourse;
async function updateCourse(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            returnErrorId(res);
        const validate = await CoursesRequest_1.default(req.body, true);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return return404(res);
        if (course.enable) {
            return res.status(422).json({
                msg: 'Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.'
            });
        }
        if (course.code !== validate.data.code) {
            // check if exist code
            if ((await CoursesActions_1.checkIfExistCode(`${validate.data.code}`))) {
                return res.status(422).json({
                    msg: "Disculpe, pero el nuevo código ingresado ya se encuentra asignado a otro curso."
                });
            }
        }
        course.title = validate.data.title;
        course.description = validate.data.description;
        course.banner = await GlobalFunctions_1.checkAndUploadPicture(validate.data.banner);
        course.code = validate.data.code;
        course.speaker = validate.data.speaker;
        course.speakerPosition = validate.data.speakerPosition;
        const totalTemary = validate.data.temary.length || 0;
        for (let i = 0; i < totalTemary; i++) {
            if (validate.data.temary[i]._id) {
                const indexT = lodash_1.default.findIndex(course.temary, t => t._id.toString() === validate.data.temary[i]._id);
                if (indexT > -1) {
                    course.temary[indexT].title = validate.data.temary[i].title;
                    course.temary[indexT].description = validate.data.temary[i].description;
                    const { content, test } = validate.data.temary[i];
                    for (const c of content) {
                        if (c && c._id) {
                            const indexC = lodash_1.default.findIndex(course.temary[indexT].content, co => co._id.toString() === co._id);
                            if (indexC > -1) {
                                course.temary[indexT].content[indexC].title = c.title;
                                course.temary[indexT].content[indexC].description = c.description;
                                course.temary[indexT].content[indexC].urlVideo = c.urlVideo;
                            }
                        }
                        else
                            course.temary[indexT].content.push(c);
                    }
                    for (const t of test) {
                        if (t && t._id) {
                            const indexTest = lodash_1.default.findIndex(course.temary[indexT].test, te => te._id.toString() === t._id);
                            if (indexTest > -1) {
                                course.temary[indexT].test[indexTest].title = t.title || null;
                                course.temary[indexT].test[indexTest].description = t.description || null;
                                course.temary[indexT].test[indexTest].placeholder = t.placeholder || null;
                                course.temary[indexT].test[indexTest].extra = t.extra || null;
                                course.temary[indexT].test[indexTest].inputType = t.inputType;
                                course.temary[indexT].test[indexTest].values = t.values;
                                course.temary[indexT].test[indexTest].require = t.require;
                                course.temary[indexT].test[indexTest].correctAnswer = t.correctAnswer;
                            }
                        }
                        else
                            course.temary[indexT].test.push(t);
                    }
                }
            }
            else
                course.temary.push(validate.data.temary[i]);
        }
        course.levels = validate.data.levels;
        course.toRoles = validate.data.toRoles;
        course.draft = validate.data.draft;
        course.enable = validate.data.enable;
        // check slug
        if (!!validate.data.slug && course.slug !== validate.data.slug) {
            // get qty registered
            const slugQty = await CoursesActions_1.checkIfExistSlug(`${validate.data.slug}`);
            // check if exist slug
            if (slugQty > 0)
                validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;
            else
                course.slug = validate.data.slug;
        }
        await course.save();
        return res.json({
            msg: 'Se ha actualizado el curso exitosamente.',
            course
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateCourse`);
    }
}
exports.updateCourse = updateCourse;
async function enableCourse(req, res) {
    try {
        const { _id } = req.params;
        const { enable } = req.body;
        if (!Validations_1.checkObjectId(_id))
            returnErrorId(res);
        if (!/[01]{1}/.test(enable)) {
            return res.status(422).json({
                msg: 'Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública.'
            });
        }
        const course = await Courses_1.default.findOne({ _id }, { toRoles: 1, temary: 1, test: 1, draft: 1, enable: 1 }).exec();
        if (!course)
            return return404(res);
        if (enable === 1) {
            if (course.draft) {
                const errors = [];
                if (course.toRoles.length === 0) {
                    errors.push({
                        msg: 'Disculpe, para publicar el curso es necesario que indique a que grupo de usuarios va dirigido.'
                    });
                }
                if (course.temary.length === 0) {
                    errors.push({
                        msg: 'Disculpe, para publicar el curso es necesario que indique el temario para este.'
                    });
                }
                if (errors.length > 0)
                    return GlobalFunctions_1.returnErrorParams(res, errors);
            }
        }
        else {
            const exists = await CoursesUsers_1.default.find({ courseId: _id }).countDocuments().exec();
            if (exists > 0)
                return res.status(422).json({
                    msg: 'Disculpe, pero el curso no puede ser deshabilitado. Los usuarios ya poseen el curso en sus listados.',
                });
        }
        course.enable = enable === 1;
        course.draft = !course.enable;
        await course.save();
        return res.json({
            msg: `Se ha ${enable === 1 ? 'publicado' : 'retirado'} el curso exitosamente.`
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
            returnErrorId(res);
        const course = await Courses_1.default.findOne({ _id }).exec();
        if (!course)
            return return404(res);
        const exists = await CoursesUsers_1.default.find({ courseId: _id }).countDocuments().exec();
        if (exists > 0)
            return res.status(422).json({
                msg: 'Disculpe, pero el curso no puede ser eliminado. Los usuarios ya poseen el curso en sus listados.',
            });
        await course.delete();
        return res.json({
            msg: 'Se ha eliminado el curso exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteCourse`);
    }
}
exports.deleteCourse = deleteCourse;
// =====================================================================================================================
/*
  Likes and Comments (course or theme)
 */
async function commentsCourseOrTheme(req, res) {
    try {
        const { _id, themeId } = req.params;
        const order = req.query.sort && req.query.sort === '1' ? 'asc' : 'desc';
        const query = {};
        let projection = {};
        if (!Validations_1.checkObjectId(_id))
            returnErrorId(res);
        query._id = _id;
        if (themeId) {
            if (!Validations_1.checkObjectId(themeId))
                returnErrorId(res, true);
            query['temary._id'] = themeId;
            projection = { 'temary.$.comments': 1 };
        }
        else
            projection = { comments: 1 };
        const data = await CoursesActions_1.getCommentsCourse({ query, projection, sort: order, theme: !!themeId });
        if (!data)
            return return404(res);
        return res.json({
            msg: `Comentarios del ${themeId ? 'tema' : 'curso'}.`,
            data
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/commentsCourse`);
    }
}
exports.commentsCourseOrTheme = commentsCourseOrTheme;
async function likesAndUnlikesCourseOrTheme(req, res) {
    try {
        const { _id, themeId } = req.params;
        const query = {};
        let projection = {};
        if (!Validations_1.checkObjectId(_id))
            returnErrorId(res);
        query._id = _id;
        if (themeId) {
            if (!Validations_1.checkObjectId(themeId))
                returnErrorId(res, true);
            query['temary._id'] = themeId;
            projection = { 'temary.$': 1 };
        }
        else
            projection = { _id: 1, likes: 1, unlikes: 1 };
        const data = await CoursesActions_1.getLikesAndUnlikesCourse({ query, projection, theme: !!themeId });
        if (!data)
            return return404(res);
        return res.json({
            msg: `'Me gusta' y 'No me gustas' del ${themeId ? 'tema' : 'curso'}.`,
            data
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/likesAndUnlikesCourse`);
    }
}
exports.likesAndUnlikesCourseOrTheme = likesAndUnlikesCourseOrTheme;
