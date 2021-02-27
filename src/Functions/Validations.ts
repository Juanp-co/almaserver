import { Types } from 'mongoose';

export function checkNameOrLastName(value: any): boolean {
  return (
    value &&
    /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(
      value
    )
  );
}

export function checkRole(value: any): boolean {
  return value && /^[012345]{1}/.test(`${value}`);
}

export function checkIfValueIsNumber(value: any): boolean {
  return value && /^[0-9]{1,3}/.test(`${value}`);
}

export function checkDocument(value: any): boolean {
  return value && /^([CC|CE|PE|TI|PAS]){2,3}[0-9]{5,20}$/.test(value);
}

export function checkYoutubeUrl(value: any): boolean {
  return value
    && /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(value);
}

export function checkInputTypeValueToTest(value: any): boolean {
  return value && ['text', 'textarea', 'checkbox', 'radio', 'select'].indexOf(`${value}`) > -1;
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

export function checkTitlesOrDescriptions(value: any): boolean {
  return (
    value &&
    /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{5,2000}/g.test(value)
  );
}

export function checkCodeValue(value: any): boolean {
  return value && /^[a-zA-Z0-9\s.,#*()\-+/@]+$/g.test(value);
}

export function checkDate(value: any): boolean {
  // validate date (YYYY-MM-DD)
  return value && /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/.test(`${value}`);
}

export function checkHour(value: any): boolean {
  // validate hour (HH:MM)
  return value && /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
}

export function checkDateMonthAndYear(value: any): boolean {
  // validate date (YYYY-MM-DD)
  return value && /(1[0-2]|0[1-9]|\d)-(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.test(value);
}

export function checkBase64(text: string|null|undefined, doc = false) {
  if (!text) return false;
  if (doc) return text.substr(0, 40).indexOf('data:application/pdf') > -1;
  return text.substr(0, 21).indexOf('data:image/') > -1;
}

export function checkUrl(value: string | null) {
  return value && /^(?:(?:(?:http?|https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(`${value}`);
}

export function checkSlug(value: string | null) {
  return value && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(`${value}`);
}

export function checkUUID(value: any): boolean {
  return value && /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12,13}$/i.test(`${value}`);
}

export function checkHtmlContent(value: any): boolean {
  return value && /<(\"[^\"]*\"|'[^']*'|[^'\">])*>$/gim.test(`${value}`);
}
