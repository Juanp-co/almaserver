import path from 'path';
import fs from 'fs';
import moment from 'moment-timezone';
import App from './app';
import startConnection from './database';
import AdminRouter from './Routes/Admin/AdminRouter';
import BanksAdminRouter from './Routes/Admin/BanksAdminRouter';
import ChurchesAdminRouter from './Routes/Admin/ChurchesAdminRouter';
import ConsolidatesAdminRouter from './Routes/Admin/ConsolidatesAdminRouter';
import CoursesAdminRouter from './Routes/Admin/CoursesAdminRouter';
import DevotionalsAdminRouter from './Routes/Admin/DevotionalsAdminRouter';
import EventsAdminRouter from './Routes/Admin/EventsAdminRouter';
import FamiliesGroupsAdminRouter from './Routes/Admin/FamiliesGroupsAdminRouter';
import GroupsAdminRouter from './Routes/Admin/GroupsAdminRouter';
import ResourcesAdminRouter from './Routes/Admin/ResourcesAdminRouter';
import ReportsAdminRouter from './Routes/Admin/ReportsAdminRouter';
import SettingsAdminRouter from './Routes/Admin/SettingsAdminRouter';
import UsersAdminRouter from './Routes/Admin/UsersAdminRouter';
import PublicRouter from './Routes/PublicRouter';
import UserRouter from './Routes/UserRouter';

// vars
const logsFile: string = process.env.LOGS_FILE || 'false';
let accessLogs: any = '';
let errorsLogs: any = '';

// LOGS
// Always logs to STDOUT for dockered containers and develop
if (logsFile && logsFile !== 'false') {
  // If needed setup LOGS_FILE=true, logs all access and errors to files.
  accessLogs = path.join(__dirname, '..', 'logs');

  if (!fs.existsSync(accessLogs)) {
    console.log(
      `${moment().toISOString()} - Notice: logs folder doesn't exist, creating: ${accessLogs} dir.`
    );
    fs.mkdirSync(accessLogs, { mode: 0o774 });
  } else console.log(`${moment().toISOString()} - Notice: ${accessLogs} folder already exist.`);

  errorsLogs = path.join(accessLogs, 'error.log');
  accessLogs = path.join(accessLogs, 'access.log');
  // create write streams to access/error logs.
  errorsLogs = fs.createWriteStream(errorsLogs, { flags: 'a' });
  accessLogs = fs.createWriteStream(accessLogs, { flags: 'a' });
}

// routes
App.use(`/api`, PublicRouter);
App.use(`/api/admin/`, AdminRouter);
App.use(`/api/admin/banks`, BanksAdminRouter);
App.use(`/api/admin/churches`, ChurchesAdminRouter);
App.use(`/api/admin/consolidates`, ConsolidatesAdminRouter);
App.use(`/api/admin/courses`, CoursesAdminRouter);
App.use(`/api/admin/devotionals`, DevotionalsAdminRouter);
App.use(`/api/admin/events`, EventsAdminRouter);
App.use(`/api/admin/families-groups`, FamiliesGroupsAdminRouter);
App.use(`/api/admin/groups`, GroupsAdminRouter);
App.use(`/api/admin/reports`, ReportsAdminRouter);
App.use(`/api/admin/resources`, ResourcesAdminRouter);
App.use(`/api/admin/settings`, SettingsAdminRouter);
App.use(`/api/admin/users`, UsersAdminRouter);
App.use(`/api/user`, UserRouter);

// server
async function main() {
  await startConnection();
  await App.listen(App.get('port'));
  console.log(`===============================================`);
  console.log(`Server on port: ${App.get('port')}`);
  console.log(`===============================================`);

  if (logsFile && logsFile !== 'false') {
    // Redirect all STDOUT and STDERR to log files if LOGS_FILE was setup.
    process.stdout.write = accessLogs.write.bind(accessLogs);
    process.stderr.write = errorsLogs.write.bind(errorsLogs);
    // this must be done here to let "server running" messaje be show in STDOUT
  }
}

main();
