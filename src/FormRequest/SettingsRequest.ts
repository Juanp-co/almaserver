import { setError } from '../Functions/GlobalFunctions';
import {
  checkFacebookUrl, checkInstagramUrl, checkTwitterUrl,
  checkUrl,
  checkYoutubeUrl, isBase64
} from '../Functions/Validations';
import { ISettingsUpdateLogosOrBanners, ISettingsUpdateUrls } from '../Interfaces/ISettings';

export default function validateUpdateUrlsSettings(data: ISettingsUpdateUrls) : { data: ISettingsUpdateUrls; errors: any[] } {
  const ret = {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
    youtube: null,
  } as ISettingsUpdateUrls;

  const errors: any[] = [];

  if (data.facebook && !checkFacebookUrl(data.facebook)) {
    errors.push(
      setError('Disculpe, pero la URL de Facebook indicada es incorrecta.', 'facebook')
    );
  }
  else ret.facebook = data.facebook;

  if (data.instagram && !checkInstagramUrl(data.instagram)) {
    errors.push(
      setError('Disculpe, pero la URL de Instagram indicada es incorrecta.', 'instagram')
    );
  }
  else ret.instagram = data.instagram;

  if (data.twitter && !checkTwitterUrl(data.twitter)) {
    errors.push(
      setError('Disculpe, pero la URL de Twitter indicada es incorrecta.', 'twitter')
    );
  }
  else ret.twitter = data.twitter;

  if (data.web && !checkUrl(data.web)) {
    errors.push(
      setError('Disculpe, pero la URL del Sitio Web indicado es incorrecto.', 'web')
    );
  }
  else ret.web = data.web;

  if (data.youtube && !checkYoutubeUrl(data.youtube)) {
    errors.push(
      setError('Disculpe, pero la URL de Youtube indicada es incorrecta.', 'youtube')
    );
  }
  else ret.youtube = data.youtube;

  return { data: ret, errors };
}

export function validateUpdateLogosOrBannersSettings(data: ISettingsUpdateLogosOrBanners) : { data: ISettingsUpdateLogosOrBanners; errors: any[] } {
  const ret = {
    picture: null,
    active: false,
  } as ISettingsUpdateLogosOrBanners;

  const errors: any[] = [];

  if (!isBase64(data.picture)) {
    errors.push(
      setError('Disculpe, la imagen sumistrada es incorrecta.', 'picture')
    );
  }
  else ret.picture = data.picture;

  if (data.active) ret.active = typeof data.active === 'boolean' ? data.active : true;

  return { data: ret, errors };
}
