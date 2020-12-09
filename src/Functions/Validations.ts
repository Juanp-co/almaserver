import { Types } from 'mongoose';

export function checkNameOrLastName(value: any): boolean {
  return (
    value &&
    /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(
      value
    )
  );
}

export function checkIfValueIsNumber(value: any): boolean {
  return value && /^[0-9]{1,3}/.test(`${value}`);
}

export function checkDocument(value: any): boolean {
  return value && /^([CC|CE|PE|TI|PAS]){2,3}[0-9]{5,20}$/.test(value);
}

export function checkPhone(value: any): boolean {
  return (
    value && /^[\+]?[(]?([0-9]{2})?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)
  );
}

export function checkPassword(value: any): boolean {
  return (
    value && /^(?=.*\d)?(?=.*[A-Z]{1})?(?=.*[a-z]{1}?)?(?=.*[^\w\d\s:]?)([^\s]){6,25}$/.test(value)
  );
}

export function checkEmail(value: any): boolean {
  return value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

export function checkObjectId(value: any): boolean {
  return Types.ObjectId.isValid(value);
}

export function validateTitlesOrDescriptions(value: any): boolean {
  return (
    value &&
    /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{5,500}/g.test(value)
  );
}

export function validateCodeValue(value: any): boolean {
  return value && /^[a-zA-Z0-9\s.,#*()\-+/@]+$/g.test(value);
}

export function validateDate(value: any): boolean {
  // validate date (YYYY-MM-DD)
  return value && !Number.isNaN(Date.parse(value));
}

export function validateDateMonthAndYear(value: any): boolean {
  // validate date (YYYY-MM-DD)
  return value && /(1[0-2]|0[1-9]|\d)-(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.test(value);
}

export function isBase64(text: string, doc = false) {
  if (doc) return text.substr(0, 40).indexOf('data:application/pdf') > -1;
  return text.substr(0, 21).indexOf('data:image/') > -1;
}

export function validateUUID(value: any): boolean {
  return /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12,13}$/i.test(
    value
  );
}