import moment from 'moment-timezone';
import slug from 'slug';
import { Response } from 'express';
import * as fs from 'fs';
import { unlinkSync } from "fs";
import { IInfoErrors } from '../Interfaces/IErrorResponse';

/*
  Console logs
 */
export function showConsoleError(path: string, error: any) {
  console.error(`${moment().toISOString()} - Error: ${path}`);
  console.error(error);
}

export function showConsoleLog(type: number, msg: any) {
  if (type === 0) console.error(`${moment().toISOString()} - ${msg}`);
  else console.log(`${moment().toISOString()} - ${msg}`);
}

/*
  Errors
 */
export function setError(msg: string, input?: string): IInfoErrors {
  return { input, msg };
}

export function returnError(res: Response, error: any, path: string) {
  showConsoleError(path, error);
  return res.status(500).json({
    msg: 'Ha ocurrido un error inesperado.',
    errors: [{ msg: error.toString() }]
  });
}

export function returnErrorParams(res: Response, errors: any[]) : Response {
  return res.status(422).json({
    msg: '¡Error en los parámetros!',
    errors
  });
}

// =================================================================================================

export function upperCaseFirstLettersWords(words: string): string | null {
  let ret = '';
  const arrayWords: string[] = words ? words.trim().split(' ') : [];
  for (let i = 0; i < arrayWords.length; i++) {
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

export function getDate(timestamp: number | null | undefined): string | any {
  return timestamp ? moment.unix(timestamp).tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss') || null : timestamp;
}

export function cleanWhiteSpaces(value: string | null): string | null {
  if (value) return value.toString().trim();
  return null;
}

export function generatePassword(): string {
  let password = '';
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123467890';
  for (let i = 0; i < 10; i++) password += chars.charAt(Math.floor(Math.random() * chars.length));
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
  const path = `${pathRoute}/${moment().unix()}.${extFile}`;
  // write
  await fs.writeFileSync(`./${path}`, base64Data,  { encoding: 'base64' });

  return path;
}

export function deleteImages(path: any) {
  try {
    if (path) unlinkSync(path);
  }
  catch (e: any) {
    showConsoleError('src/Functions/GlobalFunctions/deleteImage', e);
  }

}

export function createSlug(value: string | null) : string | null {
  return value ? slug(value) : null;
}


