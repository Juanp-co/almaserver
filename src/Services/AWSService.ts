import AWS from 'aws-sdk';
import { loadEnvironmentVars, showConsoleError } from '../Functions/GlobalFunctions';

loadEnvironmentVars();

AWS.config.update({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_KEY,
});
const myBucket = process.env.AWS_S3_BUCKET_NAME || 'ccad-alma';

const pathFile = 'src/Services/AWS';

export default async function uploadFile(fileName: string, base64: string|null) {
  if (base64) {
    const s3 = new AWS.S3();

    const buf = Buffer.from(
      base64.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    const params = {
      Bucket: myBucket,
      Key: `${fileName}.jpg`,
      Body: buf,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: 'image/jpg',
    };

    return new Promise((response: any, reject: any) => {
      s3.putObject(params, (err: any, resp: any) => {
        if (err) {
          showConsoleError(`${pathFile}/uploadFile`, err);
          reject(err);
        } else {
          response(resp);
        }
      });
    });
  }

  return false;
}

export async function uploadFilePdf(fileName: string, base64: string) {
  const s3 = new AWS.S3();

  const buf = Buffer.from(
    base64.replace(/^data:application\/\w+;base64,/, ''),
    'base64'
  );
  const data = {
    Bucket: myBucket,
    Key: `${fileName}.pdf`,
    Body: buf,
    ACL: 'public-read',
    ContentEncoding: 'base64',
    ContentType: 'application/pdf',
  };
  return new Promise((response: any, reject: any) => {
    s3.putObject(data, (err: any, resp: any) => {
      if (err) {
        showConsoleError(`${pathFile}/uploadFilePdf`, err);
        reject(err);
      } else {
        response(resp);
      }
    });
  });
}

export async function deleteFile(urlFile: string|null = null) {
  if (urlFile) {
    const realNameFile = urlFile.split('com/');

    const s3 = new AWS.S3();
    const data = {
      Bucket: 'delii',
      Key: realNameFile[1],
    };

    return new Promise((response: any, reject: any) => {
      s3.putObject(data, (err: any, resp: any) => {
        if (err) {
          showConsoleError(`${pathFile}/deleteFile`, err);
          reject(err);
        } else {
          response(resp);
        }
      });
    });
  }

  return true;
}
