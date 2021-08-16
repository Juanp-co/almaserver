import fs from 'fs';
import { connect } from 'mongoose';
import { loadEnvironmentVars, showConsoleError, showConsoleLog } from './Functions/GlobalFunctions';

loadEnvironmentVars();

export default async function startConnection() {
  try {
    const mongoOptions: any = {
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
        mongoOptions.sslCA = fs.readFileSync(`${__dirname}/../ca-certificate.crt`);
      }
    }
    else {
      if (dbUser !== '') dbAuthString = `${dbUser}:${dbPwd}@`;

      pathDb = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(
        dbPort
      )}/${encodeURIComponent(dbName)}`;
    }

    await connect(pathDb, mongoOptions);
    showConsoleLog(1, 'Database is connected.');
  }
  catch (e) {
    showConsoleError('./database', e);
    process.exit(500);
  }
}
