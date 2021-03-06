"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const path_1 = __importDefault(require("path"));
const GlobalFunctions_1 = require("./Functions/GlobalFunctions");
const pathEnv = path_1.default.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv_1.default.config({ path: pathEnv });
async function startConnection() {
    try {
        const dbPort = process.env.DDB_PORT || '';
        const dbHost = process.env.DDB_HOST || '';
        const dbName = process.env.DDB_NAME || '';
        const dbUser = process.env.DDB_USER || '';
        const dbPwd = process.env.DDB_PASSWORD || '';
        const dbAtlas = process.env.DDB_ATLAS || 'false';
        let pathDb = '';
        let dbAuthString = '';
        if (dbAtlas === 'true') {
            pathDb = `mongodb+srv://${dbHost}`;
            pathDb = pathDb.replace('<user>', dbUser);
            pathDb = pathDb.replace('<password>', dbPwd);
            pathDb = pathDb.replace('<dbname>', dbName);
        }
        else {
            if (dbUser !== '')
                dbAuthString = `${dbUser}:${dbPwd}@`;
            pathDb = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(dbPort)}/${encodeURIComponent(dbName)}`;
        }
        await mongoose_1.connect(pathDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        GlobalFunctions_1.showConsoleLog(1, 'Database is connected.');
    }
    catch (e) {
        GlobalFunctions_1.showConsoleError('./database', e);
        process.exit();
    }
}
exports.default = startConnection;
