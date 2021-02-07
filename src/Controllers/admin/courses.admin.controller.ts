import _ from 'lodash';
import { Request, Response } from 'express';
import getCoursesList, {
  checkIfExistCode,
  checkIfExistSlug,
  getCommentsCourse,
  getCourseDetails,
  getLikesAndUnlikesCourse,
  getModelReturnCourseOrTheme
} from '../../ActionsData/CoursesActions';
import {
  checkAndUploadPicture,
  createSlug,
  getLimitSkipSortSearch,
  returnError, returnErrorParams
} from '../../Functions/GlobalFunctions';
import validateRegister from '../../FormRequest/CoursesRequest';
import { checkObjectId } from '../../Functions/Validations';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';

const path = 'src/admin/courses.admin.controller';

function return404(res: Response) : Response {
  return res.status(404).json({
    msg: 'Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.',
  });
}

function returnErrorId(res: Response, theme = false) : Response {
  return res.status(422).json({
    msg: `Disculpe, pero el ${theme ? 'tema' : 'curso'} seleccionado es incorrecto.`,
  });
}

// =====================================================================================================================

export default async function getCourses(req: Request, res: Response) : Promise<Response>{
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const { code, title } = req.query;
    const query: any = {};

    if (code) query.code = code.toString().toUpperCase();
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};

    const courses = await getCoursesList({
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
  } catch (error: any) {
    return returnError(res, error, `${path}/getCourses`);
  }
}

export async function getCoursesCounters(req: Request, res: Response) : Promise<Response>{
  try {
    const { code, title } = req.query;
    const query: any = {};
    const ret = {
      enables: 0,
      drafts: 0
    };

    if (code) query.code = { $regex: new RegExp(`${code}`, 'i')};
    if (title) query.title = { $regex: new RegExp(`${title}`, 'i')};

    const courses = await Courses.find(query, { enable: 1 }).exec();

    if (courses.length > 0){
      courses.forEach(c => {
        if (c.enable) ret.enables++;
        else ret.drafts++;
      })
    }

    return res.json({
      msg: 'Total de cursos.',
      totals: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCoursesCounters`);
  }
}

export async function showCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) returnErrorId(res);

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
    const validate = await validateRegister(req.body, false);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    // set slug value
    if (!validate.data.slug) validate.data.slug = createSlug(validate.data.title);
    // get qty registered
    const slugQty: number = await checkIfExistSlug(`${validate.data.slug}`);
    // check if exist slug
    if (slugQty > 0) validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;

    // create
    const course = new Courses(validate.data);
    course.banner = await checkAndUploadPicture(validate.data.banner);
    course.userid = req.params.userid;
    await course.save();

    return res.status(201).json({
      msg: 'Se ha creado el nuevo curso exitosamente.',
      course
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveCourse`);
  }
}

export async function updateCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) returnErrorId(res);

    const validate = await validateRegister(req.body, true);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const course = await Courses.findOne(
      { _id },
    ).exec();

    if (!course) return return404(res);

    if (course.enable) {
      return res.status(422).json({
        msg: 'Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.'
      });
    }

    if (course.code !== validate.data.code) {
      // check if exist code
      if ((await checkIfExistCode(`${validate.data.code}`))) {
        return res.status(422).json({
          msg: "Disculpe, pero el nuevo código ingresado ya se encuentra asignado a otro curso."
        });
      }
    }

    course.title = validate.data.title;
    course.description = validate.data.description;
    course.banner = await checkAndUploadPicture(validate.data.banner);
    course.code = validate.data.code;
    course.speaker = validate.data.speaker;
    course.speakerPosition = validate.data.speakerPosition;

    const totalTemary = validate.data.temary.length || 0;

    for (let i = 0; i < totalTemary; i++) {
      if (validate.data.temary[i]._id) {
        const indexT = _.findIndex(course.temary, t => t._id.toString() === validate.data.temary[i]._id);

        if (indexT > -1) {
          course.temary[indexT].title = validate.data.temary[i].title;
          course.temary[indexT].description = validate.data.temary[i].description;
          const { content, test } = validate.data.temary[i];

          for (const c of content) {
            if (c && c._id) {
              const indexC = _.findIndex(course.temary[indexT].content, co => co._id.toString() === co._id);
              if (indexC > -1) {
                course.temary[indexT].content[indexC].title = c.title;
                course.temary[indexT].content[indexC].description = c.description;
                course.temary[indexT].content[indexC].urlVideo = c.urlVideo;
              }
            }
            else course.temary[indexT].content.push(c);
          }

          for (const t of test) {
            if (t && t._id) {
              const indexTest = _.findIndex(course.temary[indexT].test, te => te._id.toString() === t._id);
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
            else course.temary[indexT].test.push(t);
          }
        }
      }
      else course.temary.push(validate.data.temary[i]);
    }



    course.levels = validate.data.levels;
    course.toRoles = validate.data.toRoles;
    course.draft = validate.data.draft;
    course.enable = validate.data.enable;

    // check slug
    if (!!validate.data.slug && course.slug !== validate.data.slug) {
      // get qty registered
      const slugQty: number = await checkIfExistSlug(`${validate.data.slug}`);
      // check if exist slug
      if (slugQty > 0) validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;
      else course.slug = validate.data.slug;
    }

    await course.save();

    return res.json({
      msg: 'Se ha actualizado el curso exitosamente.',
      course
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateCourse`);
  }
}

export async function enableCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;
    const { enable } = req.body;

    if (!checkObjectId(_id)) returnErrorId(res);

    if (!/[01]{1}/.test(enable)) {
      return res.status(422).json({
        msg: 'Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública.'
      });
    }

    const course = await Courses.findOne(
      { _id },
      { toRoles: 1, temary: 1, test: 1, draft: 1, enable: 1 }
    ).exec();

    if (!course) return return404(res);

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
        if (errors.length > 0) return returnErrorParams(res, errors);
      }
    }
    else {
      const exists = await CoursesUsers.find({ courseId: _id }).countDocuments().exec();
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
  } catch (error: any) {
    return returnError(res, error, `${path}/enableCourse`);
  }
}

export async function deleteCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) returnErrorId(res);

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

// =====================================================================================================================

/*
  Likes and Comments (course or theme)
 */

export async function commentsCourseOrTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;
    const order = req.query.sort && req.query.sort === '1' ? 'asc' :'desc';
    const query: any = {};
    let projection: any = {};

    if (!checkObjectId(_id)) returnErrorId(res);

    query._id = _id;

    if (themeId) {
      if (!checkObjectId(themeId)) returnErrorId(res, true);
      query['temary._id'] = themeId;

      projection = { 'temary.$.comments': 1 };
    }
    else projection = { comments: 1 };

    const data = await getCommentsCourse({ query, projection, sort: order, theme: !!themeId });

    if (!data) return return404(res);

    return res.json({
      msg: `Comentarios del ${themeId ? 'tema' : 'curso'}.`,
      data
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/commentsCourse`);
  }
}

export async function likesAndUnlikesCourseOrTheme(req: Request, res: Response) : Promise<Response>{
  try {
    const { _id, themeId } = req.params;
    const query: any = {};
    let projection: any = {};

    if (!checkObjectId(_id)) returnErrorId(res);

    query._id = _id;

    if (themeId) {
      if (!checkObjectId(themeId)) returnErrorId(res, true);
      query['temary._id'] = themeId;
      projection = { 'temary.$': 1 };
    }
    else projection = { _id: 1, likes: 1, unlikes: 1 };

    const data = await getLikesAndUnlikesCourse({ query, projection, theme: !!themeId });

    if (!data) return return404(res);

    return res.json({
      msg: `'Me gusta' y 'No me gustas' del ${themeId ? 'tema' : 'curso'}.`,
      data
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/likesAndUnlikesCourse`);
  }
}
