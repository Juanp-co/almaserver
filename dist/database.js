"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const pathEnv = path_1.default.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv_1.default.config({ path: pathEnv });
class Database {
    constructor() {
        const dbPort = process.env.DDB_PORT || '';
        const dbHost = process.env.DDB_HOST || '';
        const dbName = process.env.DDB_NAME || '';
        const dbUser = process.env.DDB_USER || '';
        const dbPwd = process.env.DDB_PASSWORD || '';
        const dbAtlas = process.env.DDB_ATLAS || 'false';
        let connect = '';
        let dbAuthString = '';
        if (dbAtlas === 'true') {
            connect = `mongodb+srv://${dbHost}`;
            connect = connect.replace('<user>', dbUser);
            connect = connect.replace('<password>', dbPwd);
            connect = connect.replace('<dbname>', dbName);
        }
        else {
            if (dbUser !== '')
                dbAuthString = `${dbUser}:${dbPwd}@`;
            connect = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(dbPort)}/${encodeURIComponent(dbName)}`;
        }
        this.connection = mongoose_1.default
            .connect(connect, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .catch((error) => {
            console.error(`${moment_1.default().toISOString()} - Database Connection.`);
            console.error(error);
            process.exit(500);
        });
        // this.connection.set('useCreateIndex', true);
    }
}
exports.default = new Database();
