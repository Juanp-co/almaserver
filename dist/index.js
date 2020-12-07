"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const PublicRouter_1 = __importDefault(require("./Routers/PublicRouter"));
const pathEnv = path_1.default.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv_1.default.config({ path: pathEnv });
const app = express_1.default();
app.use(cors_1.default());
// vars
const logsFile = process.env.LOGS_FILE || 'false';
let accessLogs = '';
let errorsLogs = '';
app.set('port', process.env.PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx');
app.use(morgan_1.default(process.env.LOGS_FORMAT || 'dev'));
// LOGS
// Always logs to STDOUT for dockered containers and develop
if (logsFile && logsFile !== 'false') {
    // If needed setup LOGS_FILE=true, logs all access and errors to files.
    accessLogs = path_1.default.join(__dirname, '..', 'logs');
    if (!fs_1.default.existsSync(accessLogs)) {
        console.log(`${moment_1.default().toISOString()} - Notice: logs folder doesn't exist, creating: ${accessLogs} dir.`);
        fs_1.default.mkdirSync(accessLogs, { mode: 0o774 });
    }
    else
        console.log(`${moment_1.default().toISOString()} - Notice: ${accessLogs} folder already exist.`);
    errorsLogs = path_1.default.join(accessLogs, 'error.log');
    accessLogs = path_1.default.join(accessLogs, 'access.log');
    // create write streams to access/error logs.
    errorsLogs = fs_1.default.createWriteStream(errorsLogs, { flags: 'a' });
    accessLogs = fs_1.default.createWriteStream(accessLogs, { flags: 'a' });
}
// middleware
app.use(express_1.default.json({ limit: '25mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '25mb' }));
app.use(express_1.default.static('public'));
//routes
app.use(`/api`, PublicRouter_1.default);
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
