"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBank = exports.saveBank = exports.updateBank = exports.showBank = void 0;
const AccountsBanks_1 = __importDefault(require("../../Models/AccountsBanks"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const AccountsBanksActions_1 = __importDefault(require("../../ActionsData/AccountsBanksActions"));
const AccountBankFormRequest_1 = __importDefault(require("../../FormRequest/AccountBankFormRequest"));
const path = 'Controllers/admin/accounts.banks.admin.controller';
async function getBanks(req, res) {
    try {
        const banks = await AccountsBanks_1.default.find({}, { created_at: 0, updated_at: 0, __v: 0 }).exec();
        return res.json({
            msg: `Bancos.`,
            banks
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getBanks`);
    }
}
exports.default = getBanks;
async function showBank(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, AccountsBanksActions_1.default)(res, 1);
        const bank = await AccountsBanks_1.default.findOne({ _id }, { created_at: 0, updated_at: 0, __v: 0 }).exec();
        if (!bank)
            return (0, AccountsBanksActions_1.default)(res, 0);
        return res.json({
            msg: `Detalles banco.`,
            bank
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showBank`);
    }
}
exports.showBank = showBank;
async function updateBank(req, res) {
    try {
        const { _id } = req.params;
        const validate = (0, AccountBankFormRequest_1.default)(req.body);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, AccountsBanksActions_1.default)(res, 1);
        if (validate.errors.length > 0)
            return (0, AccountsBanksActions_1.default)(res, 1, validate.errors);
        const bank = await AccountsBanks_1.default.findOne({ _id }, { created_at: 0, updated_at: 0, __v: 0 }).exec();
        if (!bank)
            return (0, AccountsBanksActions_1.default)(res, 0);
        if ((0, Validations_1.checkBase64)(`${validate.data.picture}`)) {
            (0, GlobalFunctions_1.deleteImages)(`./${bank.toObject({ getters: false }).picture}`);
            bank.picture = await (0, GlobalFunctions_1.checkAndUploadPicture)(validate.data.picture, 'banks');
        }
        bank.title = validate.data.title;
        bank.description = validate.data.description;
        await bank.save();
        return res.json({
            msg: `Se ha actualizado el banco exitosamente.`,
            bank
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateBank`);
    }
}
exports.updateBank = updateBank;
async function saveBank(req, res) {
    try {
        const validate = (0, AccountBankFormRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, AccountsBanksActions_1.default)(res, 1, validate.errors);
        // save picture
        validate.data.picture = await (0, GlobalFunctions_1.checkAndUploadPicture)(validate.data.picture, 'banks');
        const bank = new AccountsBanks_1.default(validate.data);
        await bank.save();
        return res.json({
            msg: `Se registrado el banco exitosamente.`,
            bank
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveBank`);
    }
}
exports.saveBank = saveBank;
async function deleteBank(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, AccountsBanksActions_1.default)(res, 1);
        const bank = await AccountsBanks_1.default.findOne({ _id }, { _id: 1, picture: 1 }).exec();
        if (!bank)
            return (0, AccountsBanksActions_1.default)(res, 0);
        if (bank.picture) {
            (0, GlobalFunctions_1.deleteImages)(bank.toObject({ getters: false }).picture);
        }
        // delete
        await bank.delete();
        return res.json({
            msg: `Se ha eliminado el banco exitosamente.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteBank`);
    }
}
exports.deleteBank = deleteBank;
