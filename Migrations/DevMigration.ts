import * as fs from 'fs';
import moment from 'moment-timezone';
import startConnection from '../src/database';
import Courses from '../src/Models/Courses';
import CoursesUsers from '../src/Models/CoursesUsers';
import Events from '../src/Models/Events';
import Groups from '../src/Models/Groups';
import Referrals from '../src/Models/Referrals';
import Users from '../src/Models/Users';
import Whitelist from '../src/Models/Whitelist';
import { showConsoleError, showConsoleLog } from '../src/Functions/GlobalFunctions';
import { ICourseUserContent } from '../src/Interfaces/ICourseUser';

const path = 'Migrations/DevMigration';

async function migration() {
  try {
    showConsoleLog(1, 'Iniciando migraciones de datos requerida para funcionamiento del API - Alma.');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Conectando a la base de datos.');
    await startConnection();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Cargando los datos para la migración, espere un momento ...');

    // static lists
    const listUCourses: any[] = [];
    const referrals: any = [];

    const dateBaseToEvents = moment().tz('America/Bogota').startOf('d').unix();
    const courses = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Courses.json`).toString());
    const events = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Events.json`).toString());
    const groups = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Groups.json`).toString());
    const users = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Users.json`).toString());

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Eliminando datos existentes en la base de datos...');
    await Courses.deleteMany({}).exec();
    await CoursesUsers.deleteMany({}).exec();
    await Events.deleteMany({}).exec();
    await Groups.deleteMany({}).exec();
    await Referrals.deleteMany({}).exec();
    await Users.deleteMany({}).exec();
    await Whitelist.deleteMany({}).exec();

    if (fs.existsSync('./images')) {
      const files = await fs.readdirSync('./images');
      if (files.length > 0) await fs.rmdirSync(`./images`, { recursive: true });
    }
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Importando datos, esto puede tomar algo de tiempo ...');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Usuarios básicos (Admin y persona) ...`);
    await Users.insertMany(users);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando listado de referidos de los miembros ...`);

    for (const u of users) {
      referrals.push({ _id: u._id });
      listUCourses.push({
        userid: u._id,
        courses: [],
      })
    }

    await Referrals.insertMany(referrals);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando listado de grupos ...`);
    await Groups.insertMany(groups);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando eventos ...`);
    events.forEach((ev: any) => ev.date = dateBaseToEvents);
    await Events.insertMany(events);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando cursos ...`);

    await Courses.insertMany(courses); // save all

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando datos de los cursos de los miembros.`);
    const coursesList: any[] = [];

    // get courses and prepare data
    for (const course of courses) {
      const temary: ICourseUserContent[] = [];

      for (const theme of course.temary || []) {
        temary.push({ temaryId: theme._id.toString() });
      }

      coursesList.push({
        courseId: course._id.toString(),
        temary,
        level: course.level,
        approved: false,
      });
    }

    for (const [index, _] of listUCourses.entries()) {
      listUCourses[index].courses = coursesList;
    }
    await CoursesUsers.insertMany(listUCourses); // save all

    showConsoleLog(1, '==========================================================');
    showConsoleLog(1, `Migración finalizada exitosamente.`);
    process.exit();
  }
  catch (e: any) {
    showConsoleError(path, e);
    process.exit();
  }
}

migration();
