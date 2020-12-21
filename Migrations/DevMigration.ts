import * as fs from 'fs';
import {startConnection} from '../src/database';
import Events from '../src/Models/Events';
import Users from '../src/Models/Users';
import Question from '../src/Models/Question';
import Whitelist from '../src/Models/Whitelist';
import { showConsoleError, showConsoleLog } from '../src/Functions/GlobalFunctions';

const path = 'Migrations/DevMigration';

async function migration() {
  try {

    showConsoleLog(1, 'Iniciando migraciones de datos requerida para funcionamiento del API - Alma.');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Conectando a la base de datos.');
    await startConnection();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Cargando las migraciones, espere un momento ...');

    const events = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Events.json`).toString());
    const users = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Users.json`).toString());
    const questions = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Questions.json`).toString());

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Eliminando datos existentes en la base de datos...');
    await Events.deleteMany({}).exec();
    await Question.deleteMany({}).exec();
    await Users.deleteMany({}).exec();
    await Whitelist.deleteMany({}).exec();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Importando datos, esto puede tomar algo de tiempo ...');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando preguntas de seguridad.`);
    await Question.insertMany(questions);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Usuarios básicos (Admin y Ciudadano) ...`);
    await Users.insertMany(users);

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Importando eventos.`);
    await Events.insertMany(events);

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
