import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

const pathEnv = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: pathEnv });

const app = express();
app.use(cors());

app.set('port', process.env.API_PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx');
app.use(morgan(process.env.LOGS_FORMAT || 'dev'));

// middleware
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.static('public'));
app.use('/images', express.static('images'));

export default app;
