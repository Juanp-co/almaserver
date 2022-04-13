import * as fs from 'fs';
import startConnection from '../src/database';
import { showConsoleError, showConsoleLog } from '../src/Functions/GlobalFunctions';
import Churches from '../src/Models/Churches';
import Users from '../src/Models/Users';

const path = 'Migrations/MigrationChurches';

async function migration() {
  try {
    showConsoleLog(1, 'Iniciando migración base de iglesias.');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Conectando a la base de datos.');
    await startConnection();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Cargando los datos para la migración, espere un momento ...');
    const churches = await JSON.parse(fs.readFileSync(`${__dirname}/Jsons/Churches.json`).toString());

    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Eliminando datos existentes en la base de datos...');
    await Churches.deleteMany({}).exec();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Importando datos, esto puede tomar algo de tiempo ...');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, `Guardando nuevas iglesias ...`);
    await Churches.insertMany(churches);

    showConsoleLog(1, `Asignando iglesia principal a todos los miembros ...`);
    const users = await Users.find({}, { _id: 1, church: 1 }).exec();

    if (users.length > 0) {
      const promises: any[] = [];

      users.forEach(u => {
        u.church = churches[0]._id;
        promises.push(u.save());
      });

      await Promise.all(promises);
    }
    // await Users.updateMany({}, { $set: { church: churches[0]._id } });

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
