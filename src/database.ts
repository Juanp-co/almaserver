import { connect } from 'mongoose';
import { loadEnvironmentVars, showConsoleError, showConsoleLog } from './Functions/GlobalFunctions';

loadEnvironmentVars();

export default async function startConnection() {
  try {
    const dbPort: string = process.env.DDB_PORT || '';
    const dbHost: string = process.env.DDB_HOST || '';
    const dbName: string = process.env.DDB_NAME || '';
    const dbUser: string = process.env.DDB_USER || '';
    const dbPwd: string = process.env.DDB_PASSWORD || '';
    const dbAtlas: string = process.env.DDB_ATLAS || 'false';

    let pathDb = '';
    let dbAuthString = '';

    if (dbAtlas === 'true') {
      pathDb = `mongodb+srv://${dbHost}`;
      pathDb = pathDb.replace('<user>', dbUser);
      pathDb = pathDb.replace('<password>', dbPwd);
      pathDb = pathDb.replace('<dbname>', dbName);
    }
    else {
      if (dbUser !== '') dbAuthString = `${dbUser}:${dbPwd}@`;

      pathDb = `mongodb://${dbAuthString}${encodeURIComponent(dbHost)}:${encodeURIComponent(
        dbPort
      )}/${encodeURIComponent(dbName)}`;
    }

    await connect(pathDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    showConsoleLog(1, 'Database is connected.');
  }
  catch (e) {
    showConsoleError('./database', e);
    process.exit(500);
  }
}
