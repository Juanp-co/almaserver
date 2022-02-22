"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("./Functions/GlobalFunctions");
(0, GlobalFunctions_1.loadEnvironmentVars)();
async function startConnection() {
    try {
        const mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        const dbHost = process.env.DDB_HOST || '';
        const dbPort = process.env.DDB_PORT || '';
        const dbName = process.env.DDB_NAME || '';
        const dbUser = process.env.DDB_USER || '';
        const dbPwd = process.env.DDB_PASSWORD || '';
        const dbAtlas = process.env.DDB_ATLAS || 'false';
        const dbCert = process.env.DDB_CERT || 'false';
        let dbAuthString = '';
        let pathDb = '';
        if (dbAtlas === 'true') {
            pathDb = `mongodb+srv://${dbHost}`;
            pathDb = pathDb.replace('<user>', dbUser);
            pathDb = pathDb.replace('<password>', dbPwd);
            pathDb = pathDb.replace('<dbname>', dbName);
            if (dbCert === 'true') {
                mongoOptions.ssl = true;
                mongoOptions.sslValidate = true;
                mongoOptions.sslCA = fs_1.default.readFileSync(`${__dirname}/../ca-certificate.crt`);
            }
        }
        else {
            if (dbUser !== '')
                dbAuthString = `${dbUser}:${dbPwd}@`;
            pathDb = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(dbPort)}/${encodeURIComponent(dbName)}`;
        }
        await (0, mongoose_1.connect)(pathDb, mongoOptions);
        (0, GlobalFunctions_1.showConsoleLog)(1, 'Database is connected.');
    }
    catch (e) {
        (0, GlobalFunctions_1.showConsoleError)('./database', e);
        process.exit(500);
    }
}
exports.default = startConnection;
