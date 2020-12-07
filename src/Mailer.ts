import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';

const pathEnv = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: pathEnv });

const HOST_MAIL: any = process.env.HOST_MAIL || '';
const PORT_MAIL: any = process.env.PORT_MAIL || '';
const USER_AUTH_MAIL: any = process.env.USER_AUTH_MAIL || '';
const PASS_AUTH_MAIL: any = process.env.PASS_AUTH_MAIL || '';

export default function () {
  if (HOST_MAIL !== '' && PORT_MAIL !== '' && USER_AUTH_MAIL !== '' && PASS_AUTH_MAIL !== '') {
    return nodemailer.createTransport({
      host: HOST_MAIL,
      port: PORT_MAIL,
      auth: {
        user: USER_AUTH_MAIL,
        pass: PASS_AUTH_MAIL
      }
    });
  }
  return null;
}
