import { Request, Response } from 'express';
import {
  checkAndUploadPicture,
  createSlug,
  getLimitSkipSortSearch,
  returnError
} from '../../Functions/GlobalFunctions';
import Courses from '../../Models/Courses';
import validateRegister from '../../FormRequest/CoursesRequest';
import { checkObjectId } from '../../Functions/Validations';
import getCoursesList, {
  checkIfExistCode,
  checkIfExistSlug,
  getCourseDetails
} from '../../ActionsData/CoursesActions';

const path = 'src/courses.admin.controller';

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

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el curso seleccionado es incorrecto.'
      });
    }

    const course = await getCourseDetails({
      query: { _id },
      infoUser: true
    });

    if (!course) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso seleccionado no existe.'
      });
    }

    return res.json({
      msg: 'Curso',
      course
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showCourse`);
  }
}

export async function saveCourse(req: Request, res: Response) : Promise<Response>{
  try {
    const validate = await validateRegister(req.body, false);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    // check if exists picture
    const picture: string | null = checkAndUploadPicture(validate.data.banner);

    // set slug value
    if (!validate.data.slug) validate.data.slug = createSlug(validate.data.title);
    // get qty registered
    const slugQty: number = await checkIfExistSlug(`${validate.data.slug}`);
    // check if exist slug
    if (slugQty > 0) validate.data.slug = `${validate.data.slug}-${slugQty + 1}`;

    // create
    const course = new Courses(validate.data);
    course.banner = picture;
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

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el curso seleccionado es incorrecto.'
      });
    }

    const validate = await validateRegister(req.body, true);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const course = await Courses.findOne({ _id }, { __v: 0 }).exec();

    if (!course) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso a actualizar no existe.'
      });
    }

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
    course.code = validate.data.code;
    course.speaker = validate.data.speaker;
    course.speakerPosition = validate.data.speakerPosition;
    course.temary = validate.data.temary;
    course.test = validate.data.test;
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

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el curso seleccionado es incorrecto.'
      });
    }

    if (!/[01]{1}/.test(enable)) {
      return res.status(422).json({
        msg: 'Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública.'
      });
    }

    const course = await Courses.findOne({ _id }, { temary: 1, test: 1, draft: 1, enable: 1 }).exec();

    if (!course) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso a actualizar no existe.'
      });
    }

    if (enable === 1) {
      if (course.draft) {
        const errors = [];
        if (course.temary.length === 0) {
          errors.push({
            msg: 'Disculpe, para publicar el curso es necesario que indique el temario para este.'
          });
        }
        if (course.test.length === 0) {
          errors.push({
            msg: 'Disculpe, para publicar el curso es necesario que indique las pruebas para este.'
          });
        }

        if (errors.length > 0) {
          return res.status(422).json({
            msg: '¡Error en los parámetros!',
            errors
          });
        }
      }
    }

    /*
      FALTA VALIDACIÓN PARA VERIFICAR QUE USUARIOS NO POSEAN EL CURSO EN SUS REGISTROS
     */

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

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el curso seleccionado es incorrecto.'
      });
    }

    const course = await Courses.findOne({ _id }).exec();

    if (!course) {
      return res.status(404).json({
        msg: 'Disculpe, pero el curso a eliminar no existe.'
      });
    }

    /*
      FALTA VALIDACIÓN PARA VERIFICAR QUE USUARIOS NO POSEAN EL CURSO EN SUS REGISTROS
     */

    await course.delete();

    return res.json({
      msg: 'Se ha eliminado el curso exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteCourse`);
  }
}
