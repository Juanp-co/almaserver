import { Request, Response } from 'express';
import {
  checkIfExistSlug, checkIfUsersOwnCourse,
  getCourseDetails,
  getModelReturnCourseOrTheme, return404, returnCantEdit, returnErrorId, validateToPublish
} from '../../ActionsData/CoursesActions';
import {
  checkAndUploadPicture,
  createSlug, deleteImages,
  getLimitSkipSortSearch,
  returnError, returnErrorParams
} from '../../Functions/GlobalFunctions';
import validateSimpleRegister, {
  validateBannerUpdate,
  validateContentThemeUpdate,
  validateInfoUpdate, validateQuestionTestUpdate,
  validateThemeUpdate
} from '../../FormRequest/CoursesRequest';
import { checkObjectId } from '../../Functions/Validations';
import { ICourseUserTemary } from '../../Interfaces/ICourseUser';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';
import Users from '../../Models/Users';

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
    validate.data.banner = await checkAndUploadPicture(validate.data.banner, 'courses');

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
      deleteImages(`./${course.toObject({ getters: false }).banner}`);
    }
    course.banner = await checkAndUploadPicture(validate.data.banner, 'courses');
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

    if (course.enable) {
      const listIds: string[] = [];

      // obtain those users who do not have the course in their list.
      const coursesUsers = await CoursesUsers.find({ 'courses.courseId': { $ne: course._id.toString() } }).exec();

      if (coursesUsers.length > 0) {
        const totals = coursesUsers.length;
        const temary: ICourseUserTemary[] = [];

        for (const theme of course.temary || []) {
          const model = {
            temaryId: theme._id.toString(),
            content: [],
            test: [],
          } as ICourseUserTemary;

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
          const users = await Users.find({ _id: { $nin: listIds }, role: { $in: course.toRoles || [] } }, { _id: 1 }).exec();

          if (users.length > 0) {

            // get all courses and prepare model
            const courses = await Courses.find({ enable: { $eq: true } }).sort({ created_at: 1 }).exec();

            if (courses.length > 0) {
              const coursesList: any[] = [];

              for (const theme of course.temary || []) {
                const model = {
                  temaryId: theme._id.toString(),
                  content: [],
                  test: [],
                } as ICourseUserTemary;

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
                  const cUser = new CoursesUsers({
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

    const {banner} = course.toObject({ getters: false });
    await course.delete();

    if (banner) deleteImages(`./${banner}`);

    const coursesUsers = await CoursesUsers.find({ 'courses.courseId': _id }).exec();

    if (coursesUsers.length > 0) {
      for (const courseUser of coursesUsers) {
        courseUser.courses = courseUser.courses.filter(c => c.courseId !== _id);
        await courseUser.save();
      }
    }

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
