"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.uploadFilePdf = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
(0, GlobalFunctions_1.loadEnvironmentVars)();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_KEY,
});
const myBucket = process.env.AWS_S3_BUCKET_NAME || 'ccad-alma';
const pathFile = 'src/Services/AWS';
async function uploadFile(fileName, base64) {
    if (base64) {
        const s3 = new aws_sdk_1.default.S3();
        const buf = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        const params = {
            Bucket: myBucket,
            Key: `${fileName}.jpg`,
            Body: buf,
            ACL: 'public-read',
            ContentEncoding: 'base64',
            ContentType: 'image/jpg',
        };
        return new Promise((response, reject) => {
            s3.putObject(params, (err, resp) => {
                if (err) {
                    (0, GlobalFunctions_1.showConsoleError)(`${pathFile}/uploadFile`, err);
                    reject(err);
                }
                else {
                    response(resp);
                }
            });
        });
    }
    return false;
}
exports.default = uploadFile;
async function uploadFilePdf(fileName, base64) {
    const s3 = new aws_sdk_1.default.S3();
    const buf = Buffer.from(base64.replace(/^data:application\/\w+;base64,/, ''), 'base64');
    const data = {
        Bucket: myBucket,
        Key: `${fileName}.pdf`,
        Body: buf,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: 'application/pdf',
    };
    return new Promise((response, reject) => {
        s3.putObject(data, (err, resp) => {
            if (err) {
                (0, GlobalFunctions_1.showConsoleError)(`${pathFile}/uploadFilePdf`, err);
                reject(err);
            }
            else {
                response(resp);
            }
        });
    });
}
exports.uploadFilePdf = uploadFilePdf;
async function deleteFile(urlFile = null) {
    if (urlFile) {
        const realNameFile = urlFile.split('com/');
        const s3 = new aws_sdk_1.default.S3();
        const data = {
            Bucket: 'delii',
            Key: realNameFile[1],
        };
        return new Promise((response, reject) => {
            s3.putObject(data, (err, resp) => {
                if (err) {
                    (0, GlobalFunctions_1.showConsoleError)(`${pathFile}/deleteFile`, err);
                    reject(err);
                }
                else {
                    response(resp);
                }
            });
        });
    }
    return true;
}
exports.deleteFile = deleteFile;
