import dotenv from 'dotenv';
import path from 'path';
import moment from 'moment-timezone';
import slug from 'slug';
import { Response } from 'express';
import * as fs from 'fs';
import { unlinkSync } from "fs";
import { IInfoErrors } from '../Interfaces/IErrorResponse';

/*
  Console logs
 */
export function showConsoleError(pathFile: string, error: any): void {
  console.error(`${moment().toISOString()} - Error: ${pathFile}`);
  console.error(error);
}

export function showConsoleLog(type: number, msg: string): void {
  if (type === 0) console.error(`${moment().toISOString()} - ${msg}`);
  else console.log(`${moment().toISOString()} - ${msg}`);
}

/*
  Errors
 */
export function setError(msg: string, input?: string): IInfoErrors {
  return { input, msg };
}

export function returnError(res: Response, error: any, pathFile: string): Response {
  showConsoleError(pathFile, error);
  return res.status(500).json({
    msg: 'Ha ocurrido un error inesperado.',
    errors: [{ msg: `${error?.toString()}` }]
  });
}

export function returnErrorParams(res: Response, errors: IInfoErrors[]) : Response {
  return res.status(422).json({
    msg: '¡Error en los parámetros!',
    errors
  });
}

/*
  Load enviroments
 */

function checkIfExistFile(value: string): boolean {
  try {
    return fs.existsSync(value);
  } catch (err) {
    showConsoleError('src/server.js', err);
    return false;
  }
}

export function loadEnvironmentVars(): void {
  const pathEnvFile = process.env.NODE_ENV
    ? `.${process.env.NODE_ENV || 'development'}`
    : '';
  const pathEnv = path.resolve(__dirname, `../../.env${pathEnvFile}`);

  if (checkIfExistFile(pathEnv)) {
    dotenv.config({ path: pathEnv });
  } else if (checkIfExistFile(path.resolve(__dirname, `../../.env`))) {
    dotenv.config({ path: path.resolve(__dirname, `../../.env`) });
  } else {
    showConsoleError(
      'src/server.js',
      'No existe archivo de variable de entorno en el sistema. Asegúrese de contar con uno. ' +
      'Para más información, leer el archivo README.md del proyecto.'
    );

    process.exit(0);
  }
}

loadEnvironmentVars();

// =================================================================================================

export function upperCaseFirstLettersWords(words: string): string | null {
  let ret = '';
  const arrayWords: string[] = words ? words.trim().split(' ') : [];
  for (let i = 0; i < arrayWords.length; i += 1) {
    arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1);
    ret += ` ${arrayWords[i]}`;
  }
  return ret.length > 0 ? ret.trim() : null;
}

export function toUpperValue(value: string | null) : string | null {
   return value ? value.toUpperCase() : null;
}

export function setDate(): number {
  return moment().tz('America/Bogota').unix();
}

export function getDate(timestamp: number | null | undefined): string | number | null | undefined {
  return timestamp ? moment.unix(timestamp).tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss') || null : timestamp;
}

export function getSimpleDate(timestamp: number | null | undefined): string | number | null | undefined {
  return timestamp ? moment.unix(timestamp).format('YYYY-MM-DD') || null : timestamp;
}

export function cleanWhiteSpaces(value: string | null): string | null {
  if (value) return value.toString().trim();
  return null;
}

export function generatePassword(): string {
  let password = '';
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123467890';
  for (let i = 0; i < 10; i += 1) password += chars.charAt(Math.floor(Math.random() * chars.length));
  return password;
}

export function calculateAge(birthday: string): boolean {
  const minAge = 16;
  if (birthday) {
    const a = moment().tz('America/Bogota');
    const b = moment(birthday).format('YYYY-MM-DD');
    return a.diff(b, 'year') >= minAge;
  }
  return false;
}

export function getLimitSkipSortSearch(data: any): any {
  if (!data) return {};
  const { limit, page, value, input } = data;
  let retLimit = 10;
  let retSkip = 0;
  const retSort: any = {};

  // limit
  if (limit) {
    if (/[0-9]/.test(limit)) {
      const x: number = Number.parseInt(limit.toString(), 10);
      if (x > 0) retLimit = x;
    }
  }

  // skip
  if (page) {
    if (/[0-9]/.test(page)) {
      const y = Number.parseInt(page.toString(), 10);
      if (y >= 1) retSkip = (y - 1) * retLimit;
    }
  }

  // sort
  const v = value && /[1 -]/.test(value) && value.toString() === '1' ? 1 : -1;
  const listCases = [
    'created_at',
    'code',
    'date',
    'document',
    'lastNames',
    'name',
    'names',
    'role',
    'status',
    'title',
    'updated_at',
    'level',
    'sector',
    'subSector',
    'number',
  ];
  const index = listCases.indexOf(input);

  if (index > -1) retSort[listCases[index]] = v;
  else retSort.created_at = v;

  return { limit: retLimit, skip: retSkip, sort: retSort };
}

export async function checkAndUploadPicture(picture: string | null, pathFolder = ''): Promise<string | null> {
  if (!picture) return null;

  // check if exist 'images' folder
  if (!fs.existsSync(`./images`)) fs.mkdirSync(`./images`);

  const pathRoute = `${pathFolder !== '' ? `images/${pathFolder}` : 'images'}`;

  // check if exist folder
  if (!fs.existsSync(`./${pathRoute}`)) fs.mkdirSync(`./${pathRoute}`);

  // get extension file
  const extFile = picture.substring("data:image/".length, picture.indexOf(";base64"));
  // to convert base64 format into random filename
  const base64Data = picture.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  // set path
  const pathFile = `${pathRoute}/${moment().unix()}.${extFile}`;
  // write
  await fs.writeFileSync(`./${pathFile}`, base64Data,  { encoding: 'base64' });

  return pathFile;
}

export function deleteImages(pathFile: string|null|undefined): void {
  try {
    if (pathFile) unlinkSync(pathFile);
  }
  catch (e) {
    showConsoleError('src/Functions/GlobalFunctions/deleteImage', e);
  }

}

export function createSlug(value: string | null) : string | null {
  return value ? slug(value) : null;
}

export function checkIfExistsRoleInList(roles: number[] | null | undefined, toCompare: number[]) : boolean {
  return roles?.some(r => toCompare?.includes(r)) || false;
}


