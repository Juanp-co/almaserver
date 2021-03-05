import _ from 'lodash';
import { Request, Response } from 'express';
import {unlinkSync} from 'fs';
import {
  checkIfExistSlug, checkIfUsersOwnCourse, checkPreviousIdsCourses,
  getCourseDetails,
  getModelReturnCourseOrTheme, return404, returnCantEdit, returnErrorId, validateToPublish
} from '../../ActionsData/CoursesActions';
import {
  checkAndUploadPicture,
  createSlug,
  getLimitSkipSortSearch,
  returnError, returnErrorParams
} from '../../Functions/GlobalFunctions';
import validateSimpleRegister, {
  validateBannerUpdate,
  validateContentThemeUpdate,
  validateInfoUpdate, validateLevelsData, validateQuestionTestUpdate,
  validateThemeUpdate
} from '../../FormRequest/CoursesRequest';
import { checkObjectId } from '../../Functions/Validations';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';

const path = 'src/admin/courses.admin.controller';

// =====================================================================================================================

export default async function getCourses(req: Request, res: Response) : Promise<Response>{
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const { enable, title, ignoreIds } = req.query;
    const query: any = {};
    const projection: any = { _id: 1, title: 1, description: 1, banner: 1, enable: 1 };

    if (ignoreIds) {
      query._id = { $nin: ignoreIds.toString().split(',')};
      query.enable = true;
    }
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};
    if (['true', 'false'].indexOf(`${enable}`) > -1) query.enable = enable === 'true';

    const courses = await Courses.find(query, projection)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: 'Cursos.',
      courses
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCourses`);
  }
}

export async function getCoursesCounters(req: Request, res: Response) : Promise<Response>{
  try {
    const { enable, title, ignoreIds } = req.query;
    const query: any = {};

    if (ignoreIds) {
      query._id = { $nin: ignoreIds.toString().split(',')};
      query.enable = true;
    }
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};
    if (['true', 'false'].indexOf(`${enable}`) > -1) query.enable = enable === 'true';

    const totals = await Courses.find(query).countDocuments().exec();

    return res.json({
      msg: 'Total de cursos.',
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCoursesCounters`);
  }
}

export async function showCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const course = await getCourseDetails({
      query: { _id },
      infoUser: true
    });

    if (!course) return return404(res);

    return res.json({
      msg: 'Curso',
      course: await getModelReturnCourseOrTheme({
        data: course,
        theme: false,
        showContent: true,
        admin: true,
        counters: true
      }),
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourse`);
  }
}

export async function saveCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const validate = validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    // set slug value
    if (!validate.data.slug) validate.data.slug = createSlug(validate.data.title);
    // get qty registered
    const slugQty: number = await checkIfExistSlug(`${validate.data.slug}`);
    // check if exist slug
    if (slugQty > 0) validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;

    validate.data.code = validate.data.slug;

    // save picture
    validate.data.banner = await checkAndUploadPicture(validate.data.banner);

    // create
    const course = new Courses(validate.data);
    course.userid = req.params.userid;
    await course.save();

    return res.status(201).json({
      msg: 'Se ha guardo el nuevo curso exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveCourse`);
  }
}

export async function updateInfoCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateInfoUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      {
        title: 1,
        code: 1,
        slug: 1,
        description: 1,
        speaker: 1,
        speakerPosition: 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    if (course.title !== validate.data.title) {
      // set slug value
      let slug = createSlug(validate.data.title);
      // get qty registered
      const slugQty: number = await checkIfExistSlug(`${slug}`);
      // check if exist slug
      if (slugQty > 0) slug = `${slug}-${slugQty + 1}`;

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateInfoCourse`);
  }
}

export async function updateBannerCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateBannerUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      { banner: 1 }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    if (course.banner) {
      unlinkSync(`./${course.toObject({ getters: false }).banner}`);
    }
    course.banner = await checkAndUploadPicture(validate.data.banner);
    await course.save();

    return res.json({
      msg: 'Se ha actualizado la imagen del curso exitosamente.',
      banner: course.banner
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateBannerCourse`);
  }
}

export async function enableCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const course = await Courses.findOne({ _id }).exec();

    if (!course) return return404(res);

    if (!course.enable) {
      // validate all data
      const validated = validateToPublish(course);

      if (validated) return res.status(422).json({ msg: validated });
      course.enable = true;
    }
    else course.enable = false;

    await course.save();

    return res.json({
      msg: `Se ha ${course.enable ? 'publicado' : 'retirado'} el curso exitosamente.`,
      data: {
        enable: course.enable
      }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/enableCourse`);
  }
}

export async function deleteCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const course = await Courses.findOne({ _id }).exec();

    if (!course) return return404(res);

    const exists = await CoursesUsers.find({ courseId: _id }).countDocuments().exec();

    if (exists > 0)
      return res.status(422).json({
        msg: 'Disculpe, pero el curso no puede ser eliminado. Los usuarios ya poseen el curso en sus listados.',
      });

    await course.delete();

    return res.json({
      msg: 'Se ha eliminado el curso exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteCourse`);
  }
}

/*
  THEMES
 */

export async function addThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    const validate = validateThemeUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      {
        enable: 1,
        temary: 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateThemeCourse`);
  }
}

export async function updateThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res, 0);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);

    const validate = validateThemeUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateThemeCourse`);
  }
}

export async function deleteThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    course.temary = course.temary.filter(t => t._id.toString() !== themeId);
    await course.save();

    return res.json({
      msg: 'Se ha eliminado el tema y su contenido exitosamente.',
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateThemeCourse`);
  }
}

/*
  CONTENT
 */

export async function addContentThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);

    const validate = validateContentThemeUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      {
        enable: 1,
        temary: 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateContentThemeCourse`);
  }
}

export async function updateContentThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId, contentId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);
    if (!checkObjectId(contentId)) return returnErrorId(res, 2);

    const validate = validateContentThemeUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    const index2 = course.temary[index].content.findIndex(c => c._id.toString() === contentId);
    if (index2 === -1) return return404(res, 2);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateContentThemeCourse`);
  }
}

export async function deleteContentThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId, contentId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);
    if (!checkObjectId(contentId)) return returnErrorId(res, 2);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    course.temary[index].content = course.temary[index].content.filter(c => c._id.toString() !== contentId);
    await course.save();

    return res.json({
      msg: 'Se ha eliminado el contenido exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteContentThemeCourse`);
  }
}

/*
  TEST
 */

export async function addQuestionTestThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);

    const validate = validateQuestionTestUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      {
        enable: 1,
        temary: 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    course.temary[index].test.push({...validate.data});
    await course.save();

    return res.json({
      msg: 'Se ha agregado la pregunta exitosamente.',
      question: course.temary[index].test.pop()
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/addQuestionTestThemeCourse`);
  }
}

export async function updateQuestionTestThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId, questionId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res, 0);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);
    if (!checkObjectId(questionId)) return returnErrorId(res, 2);

    const validate = validateQuestionTestUpdate(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    const index2 = course.temary[index].test.findIndex(t => t._id.toString() === questionId);
    if (index2 === -1) return return404(res, 2);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/updateQuestionTestThemeCourse`);
  }
}

export async function deleteQuestionTestThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId, questionId } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res, 0);
    if (!checkObjectId(themeId)) return returnErrorId(res, 1);
    if (!checkObjectId(questionId)) return returnErrorId(res, 2);

    const course = await Courses.findOne(
      { _id, 'temary._id': themeId },
      {
        enable: 1,
        'temary': 1,
      }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    const index = course.temary.findIndex(t => t._id.toString() === themeId);
    if (index === -1) return return404(res, 1);

    course.temary[index].test = course.temary[index].test.filter(t => t._id.toString() !== questionId);
    await course.save();

    return res.json({
      msg: 'Se ha eliminado la pregunta exitosamente.',
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteQuestionTestThemeCourse`);
  }
}

/*
  LEVELS
 */

export async function addLevelsThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateLevelsData(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
      { enable: 1, levels: 1 }
    ).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    // check if all ids is enable
    if (!await (checkPreviousIdsCourses(validate.data))) {
      return returnErrorParams(res, [{
        input: 'listIds',
        msg: "Disculpe, pero uno de los cursos seleccionados no existe o no se encuentra disponible."
      }]);
    }

    course.levels = _.uniq(course.levels.concat(validate.data));
    await course.save();

    return res.json({
      msg: 'Se han agregado los cursos al listado exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/addLevelsThemeCourse`);
  }
}

export async function deleteLevelThemeCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, levelId } = req.params;

    if (!checkObjectId(_id)) returnErrorId(res, 0);
    if (!checkObjectId(levelId)) returnErrorId(res, 4);

    const course = await Courses.findOne({ _id }, { enable: 1, levels: 1 }).exec();

    if (!course) return return404(res);
    if (course.enable) return returnCantEdit(res, 0);
    if (await (checkIfUsersOwnCourse(course._id.toString()))) return returnCantEdit(res, 1);

    course.levels = course.levels.filter(l => l !== levelId);
    await course.save();

    return res.json({
      msg: 'Se ha removido el curso del listado exitosamente.',
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteLevelThemeCourse`);
  }
}
