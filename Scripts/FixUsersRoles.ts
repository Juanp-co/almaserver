import startConnection from '../src/database';
import { showConsoleError, showConsoleLog } from '../src/Functions/GlobalFunctions';
import Users from '../src/Models/Users';
import Whitelist from '../src/Models/Whitelist';

const path = 'Migrations/DevMigration';

async function fixUsersRoles() {
  try {
    showConsoleLog(1, 'Iniciando ajuste para múltiples roles de usuario.');
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Conectando a la base de datos.');
    await startConnection();
    showConsoleLog(1, '==========================================================');

    showConsoleLog(1, 'Obteniendo todos los usuarios registrados ...');

    const users: any[] = await Users.find({}, { roles: 1, role: 1 }).exec();

    showConsoleLog(1, '==========================================================');

    const { length } = users;

    if (length === 0) {
      showConsoleLog(0, `Disculpe, pero no se encontraron usuarios que actualizar.`);
    }
    else {
      showConsoleLog(1, `Iniciando ajustes para múltiples roles...`);

      for (let i = 0; i < length; i++) {

        // console.log(`user[${i}]`, users[i]);
        // users[i].roles = await [users[i].role !== 5 ? users[i].role : 4];
        // console.log(`user[${i}] edited`, users[i]);
        // showConsoleLog(1, '==========================================================');

        await Users.updateOne(
          { _id: users[i]._id },
          {
            $set: {
              roles: [users[i].role !== 5 ? users[i].role : 4],
            }
          }
        ).exec();

        await Users.updateMany({}, {$unset: {role: 1 }});
      }

      showConsoleLog(1, `Ajuste finalizado.`);
      showConsoleLog(1, '==========================================================');
      showConsoleLog(1, `Finalizando las sesiones actuales.`);

      await Whitelist.deleteMany({});

      showConsoleLog(1, '==========================================================');
      showConsoleLog(1, `Sesiones finalzadas exitosamente.`);
    }

    showConsoleLog(1, '==========================================================');
    showConsoleLog(1, `Ajuste de roles finalizado exitosamente.`);
    process.exit();
  }
  catch (e: any) {
    showConsoleError(path, e);
    process.exit();
  }
}

fixUsersRoles();
