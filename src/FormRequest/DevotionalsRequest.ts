import { setError } from '../Functions/GlobalFunctions';
import {
  checkBase64, checkTitlesOrDescriptions, checkUrl, checkYoutubeUrl
} from '../Functions/Validations';
import {IDevotionalsForm} from '../Interfaces/IDevotionals';

export default function validateForm(data: IDevotionalsForm): { data: IDevotionalsForm; errors: any[] } {
  const ret = {
    title: null,
    description: null,
    picture: null,
    urlVideo: null,
  } as IDevotionalsForm;
  const errors: any = [];

  // title
  if (!checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido.', 'title')
    );
  } else {
    ret.title = `${data.title}`.trim().toUpperCase();
  }

  // description
  if (!data.description) {
    errors.push(
      setError('Disculpe, pero debe indicar una descripción.', 'description')
    );
  } else ret.description = data.description;

  // picture
  if (data.picture) {
    if (!checkBase64(`${data.picture}`) && !checkUrl(`${data.picture}`)) {
      errors.push(
        setError('Disculpe, pero la imagen suministrada es incorrecta.', 'picture')
      );
    }
    else ret.picture = data.picture;
  }

  // urlVideo
  if (data.urlVideo) {
    if (!checkYoutubeUrl(`${data.urlVideo}`)) {
      errors.push(
        setError('Disculpe, pero la URL para el video debe ser de YouTube.', 'urlVideo')
      );
    }
    else ret.urlVideo = `${data.urlVideo}`.trim();
  }

  return { data: ret, errors };
}
