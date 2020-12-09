"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const PublicRouter_1 = __importDefault(require("./Routes/PublicRouter"));
const UserRouter_1 = __importDefault(require("./Routes/UserRouter"));
// vars
const logsFile = process.env.LOGS_FILE || 'false';
let accessLogs = '';
let errorsLogs = '';
// LOGS
// Always logs to STDOUT for dockered containers and develop
if (logsFile && logsFile !== 'false') {
    // If needed setup LOGS_FILE=true, logs all access and errors to files.
    accessLogs = path_1.default.join(__dirname, '..', 'logs');
    if (!fs_1.default.existsSync(accessLogs)) {
        console.log(`${moment_timezone_1.default().toISOString()} - Notice: logs folder doesn't exist, creating: ${accessLogs} dir.`);
        fs_1.default.mkdirSync(accessLogs, { mode: 0o774 });
    }
    else
        console.log(`${moment_timezone_1.default().toISOString()} - Notice: ${accessLogs} folder already exist.`);
    errorsLogs = path_1.default.join(accessLogs, 'error.log');
    accessLogs = path_1.default.join(accessLogs, 'access.log');
    // create write streams to access/error logs.
    errorsLogs = fs_1.default.createWriteStream(errorsLogs, { flags: 'a' });
    accessLogs = fs_1.default.createWriteStream(accessLogs, { flags: 'a' });
}
// routes
app_1.default.use(`/api`, PublicRouter_1.default);
app_1.default.use(`/api/user`, UserRouter_1.default);
// server
async function main() {
    database_1.startConnection();
    await app_1.default.listen(app_1.default.get('port'));
    console.log(`===============================================`);
    console.log(`Server on port ${app_1.default.get('port')}`);
    console.log(`===============================================`);
    if (logsFile && logsFile !== 'false') {
        // Redirect all STDOUT and STDERR to log files if LOGS_FILE was setup.
        process.stdout.write = accessLogs.write.bind(accessLogs);
        process.stderr.write = errorsLogs.write.bind(errorsLogs);
        // this must be done here to let "server running" messaje be show in STDOUT
    }
}
main();
