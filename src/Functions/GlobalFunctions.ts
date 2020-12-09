import moment from 'moment-timezone';
import { Response } from 'express';
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

export function setDate(): number {
  return moment().tz('America/Bogota').unix();
}

export function getDate(timestamp: number | null | undefined): string | any {
  if (timestamp) return moment.unix(timestamp).tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
  return timestamp;
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

  switch (input) {
    case 'created_at':
      retSort.created_at = v;
      break;
    case 'document':
      retSort.document = v;
      break;
    case 'name':
      retSort.name = v;
      break;
    case 'status':
      retSort.status = v;
      break;
    case 'updated_at':
      retSort.updated_at = v;
      break;
    default:
      retSort.created_at = v;
  }
  return { limit: retLimit, skip: retSkip, sort: retSort };
}

export function dateSpanish(timestamp?: number): string | null {
  return timestamp ? moment.unix(timestamp).locale('es').format('DD [de] MMMM [de] YYYY') : null;
}