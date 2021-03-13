import { Request, Response } from 'express';
import AccountsBanks from '../../Models/AccountsBanks';
import { checkAndUploadPicture, deleteImages, returnError } from '../../Functions/GlobalFunctions';
import { checkBase64, checkObjectId } from '../../Functions/Validations';
import responsesBanks from '../../ActionsData/AccountsBanksActions';
import validateSimpleRegister from '../../FormRequest/AccountBankFormRequest';

const path = 'src/controllers/events/events.controller';

export default async function getBanks(req: Request, res: Response): Promise<Response> {
  try {
    const banks = await AccountsBanks.find({},  { created_at: 0, updated_at: 0, __v: 0 }).exec();
    return res.json({
      msg: `Bancos.`,
      banks
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getBanks`);
  }
}

export async function showBank(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return responsesBanks(res, 1);

    const bank = await AccountsBanks.findOne({ _id },  { created_at: 0, updated_at: 0, __v: 0 }).exec();

    if (!bank) return responsesBanks(res, 0);

    return res.json({
      msg: `Detalles banco.`,
      bank
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showBank`);
  }
}

export async function updateBank(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const validate = validateSimpleRegister(req.body);

    if (!checkObjectId(_id)) return responsesBanks(res, 1);
    if (validate.errors.length > 0) return responsesBanks(res, 1, validate.errors);

    const bank = await AccountsBanks.findOne({ _id },  { created_at: 0, updated_at: 0, __v: 0 }).exec();

    if (!bank) return responsesBanks(res, 0);

    if (checkBase64(`${validate.data.picture}`)) {
      deleteImages(`./${bank.toObject({ getters: false }).picture}`);
      bank.picture = await checkAndUploadPicture(validate.data.picture, 'banks');
    }

    bank.title = validate.data.title;
    bank.description = validate.data.description;
    await bank.save();

    return res.json({
      msg: `Se ha actualizado el banco exitosamente.`,
      bank
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateBank`);
  }
}

export async function saveBank(req: Request, res: Response): Promise<Response> {
  try {
    const validate = validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return responsesBanks(res, 1, validate.errors);

    // save picture
    validate.data.picture = await checkAndUploadPicture(validate.data.picture, 'banks');

    const bank = new AccountsBanks(validate.data);
    await bank.save();

    return res.json({
      msg: `Se registrado el banco exitosamente.`,
      bank
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveBank`);
  }
}

export async function deleteBank(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return responsesBanks(res, 1);

    const bank = await AccountsBanks.findOne({ _id },  { _id: 1, picture: 1 }).exec();
    if (!bank) return responsesBanks(res, 0);

    if (bank.picture) {
      deleteImages(bank.toObject({ getters: false }).picture);
    }

    // delete
    await bank.delete();

    return res.json({
      msg: `Se ha eliminado el banco exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteBank`);
  }
}
