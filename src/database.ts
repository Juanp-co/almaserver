import dotenv from 'dotenv';
import moment from 'moment';
import mongoose from 'mongoose';
import path from 'path';

const pathEnv = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: pathEnv });

class Database {
  connection: any;

  constructor() {
    const dbPort: string = process.env.DDB_PORT || '';
    const dbHost: string = process.env.DDB_HOST || '';
    const dbName: string = process.env.DDB_NAME || '';
    const dbUser: string = process.env.DDB_USER || '';
    const dbPwd: string = process.env.DDB_PASSWORD || '';
    const dbAtlas: string = process.env.DDB_ATLAS || 'false';

    let connect = '';
    let dbAuthString = '';

    if (dbAtlas === 'true') {
      connect = `mongodb+srv://${dbHost}`;
      connect = connect.replace('<user>', dbUser);
      connect = connect.replace('<password>', dbPwd);
      connect = connect.replace('<dbname>', dbName);
    } else {
      if (dbUser !== '') dbAuthString = `${dbUser}:${dbPwd}@`;

      connect = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(
        dbPort
      )}/${encodeURIComponent(dbName)}`;
    }

    this.connection = mongoose
      .connect(connect, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .catch((error) => {
        console.error(`${moment().toISOString()} - Database Connection.`);
        console.error(error);
        process.exit(500);
      });

    // this.connection.set('useCreateIndex', true);
  }
}

export default new Database();
