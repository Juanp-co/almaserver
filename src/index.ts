import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import moment from 'moment';
import path from 'path';
import PublicRouter from './Routers/PublicRouter';

const pathEnv = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: pathEnv });

const app = express();
app.use(cors());

// vars
const logsFile: string = process.env.LOGS_FILE || 'false';
let accessLogs: any = '';
let errorsLogs: any = '';

app.set('port', process.env.PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx');
app.use(morgan(process.env.LOGS_FORMAT || 'dev'));

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

// middleware
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.static('public'));

//routes
app.use(`/api`, PublicRouter);

// server
app.listen(app.get('port'), async () => {
  console.log(`===============================================`);
  console.log(`Server on port ${app.get('port')}`);
  console.log(`===============================================`);

  if (logsFile && logsFile !== 'false') {
    // Redirect all STDOUT and STDERR to log files if LOGS_FILE was setup.
    process.stdout.write = accessLogs.write.bind(accessLogs);
    process.stderr.write = errorsLogs.write.bind(errorsLogs);
    // this must be done here to let "server running" messaje be show in STDOUT
  }
});

module.exports = app;
