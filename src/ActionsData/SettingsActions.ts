import { Response } from 'express';
import moment from 'moment-timezone';
import uploadFile from '../Services/AWSService';

export async function uploadLogoOrBanner(base64: string|null = null, logo = false) {
  let ret: string|null = null;
  const s3 = process.env.AWS_S3_BUCKET || null;
  if (!s3) return ret;
  const newUrl = `alma/settings/${logo ? 'logos' : 'banners'}/picture-${moment().tz('America/Bogota').unix()}`;
  await uploadFile(newUrl, base64);
  ret = `${s3}/${newUrl}.jpg`;
  return ret;
}

export function return404Or422Settings(res: Response, index = -1) {
  const msgs = [
    'ha ocurrido un error al obtener la configuración.',
    'ha ocurrido un error inesperado al momento de subir la imagen.',
    'el logo seleccionado es incorrecto.',
    'no se logró determinar la acción a realizar.',
    'el logo seleccionado no existe o no se encuentra disponible.',
    'la portada seleccionada es incorrecta.',
    'la portada seleccionada no existe o no se encuentra disponible.',
  ];

  const status = [0, 4, 6].includes(index) ? 404 : 422;

  return res.status(status).json({
    msg: `Disculpe, pero ${msgs[index] || 'no de logró deteminar el error.'}`
  });
}
