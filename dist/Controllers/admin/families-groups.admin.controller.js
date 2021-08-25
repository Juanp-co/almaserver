"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFamilyGroup = exports.updateMembersFamilyGroup = exports.updateFamilyGroup = exports.saveFamilyGroup = exports.showFamilyGroup = exports.getFamiliesGroupsCounters = void 0;
const FamiliesGroupsActions_1 = __importStar(require("../../ActionsData/FamiliesGroupsActions"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const FamiliesGroupsRequest_1 = __importStar(require("../../FormRequest/FamiliesGroupsRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const FamiliesGroups_1 = __importDefault(require("../../Models/FamiliesGroups"));
const FamiliesGroupsReports_1 = __importDefault(require("../../Models/FamiliesGroupsReports"));
const path = 'src/admin/families-groups.admin.controller';
async function getFamiliesGroups(req, res) {
    try {
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const query = FamiliesGroupsActions_1.getQueryParamsList(req.query);
        const groups = await FamiliesGroups_1.default.find(query, { number: 1, sector: 1, subSector: 1, created_at: 1, })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: 'Grupos familiares',
            groups
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getFamiliesGroups`);
    }
}
exports.default = getFamiliesGroups;
async function getFamiliesGroupsCounters(req, res) {
    try {
        const query = FamiliesGroupsActions_1.getQueryParamsList(req.query);
        const totals = await FamiliesGroups_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: 'Total de grupos familiares',
            totals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getFamiliesGroups`);
    }
}
exports.getFamiliesGroupsCounters = getFamiliesGroupsCounters;
async function showFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        const group = await FamiliesGroups_1.default.findOne({ _id }).exec();
        if (!group)
            return FamiliesGroupsActions_1.return404(res);
        return res.json({
            msg: 'Grupo Familiar',
            group: await FamiliesGroupsActions_1.default(group)
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showFamilyGroup`);
    }
}
exports.showFamilyGroup = showFamilyGroup;
async function saveFamilyGroup(req, res) {
    try {
        const validate = FamiliesGroupsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        // check if exist number in sector and subSector
        if ((await FamiliesGroupsActions_1.checkIfExistsGroup({
            sector: validate.data.sector,
            subSector: validate.data.subSector,
            number: validate.data.number,
        }))) {
            return res.status(422).json({
                msg: `Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.`,
            });
        }
        const group = new FamiliesGroups_1.default(validate.data);
        await group.save();
        return res.json({
            msg: 'Se ha creado el nuevo grupo exitosamente.',
            group
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveFamilyGroup`);
    }
}
exports.saveFamilyGroup = saveFamilyGroup;
async function updateFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        const validate = FamiliesGroupsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const group = await FamiliesGroups_1.default.findOne({ _id }, { __v: 0, members: 0, created_at: 0 }).exec();
        if (!group)
            return FamiliesGroupsActions_1.return404(res);
        if (validate.data.number !== group.number) {
            // check if exist number in sector and subSector
            if ((await FamiliesGroupsActions_1.checkIfExistsGroup({
                sector: validate.data.sector,
                subSector: validate.data.subSector,
                number: validate.data.number,
                _id: { $ne: _id }
            }))) {
                return res.status(422).json({
                    msg: `Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.`,
                });
            }
        }
        group.number = validate.data.number || group.number;
        group.direction = validate.data.direction;
        group.location.coordinates = validate.data.location.coordinates;
        group.sector = validate.data.sector;
        group.subSector = validate.data.subSector;
        await group.save();
        return res.json({
            msg: 'Se ha actualizado el grupo familiar exitosamente.',
            group
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateFamilyGroup`);
    }
}
exports.updateFamilyGroup = updateFamilyGroup;
async function updateMembersFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        const validate = FamiliesGroupsRequest_1.validateUpdateMembersForm(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const group = await FamiliesGroups_1.default.findOne({ _id }, { members: 1 }).exec();
        if (!group)
            return FamiliesGroupsActions_1.return404(res);
        // check if the members of the group was changed
        if (FamiliesGroupsActions_1.checkIfMembersWasChanged(group.members, validate.data.members) > 0) {
            // remove previous members
            await UsersActions_1.setFamilyGroupIdValueUsers(FamiliesGroupsActions_1.getUsersIdsList(group.members), group._id.toString(), true);
            // update new members
            group.members = validate.data.members;
            await UsersActions_1.setFamilyGroupIdValueUsers(FamiliesGroupsActions_1.getUsersIdsList(validate.data.members), group._id.toString());
        }
        await group.save();
        return res.json({
            msg: 'Grupo Familiar',
            members: await FamiliesGroupsActions_1.getModelFamiliesGroupsMembersDetails(group.members)
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateMembersFamilyGroup`);
    }
}
exports.updateMembersFamilyGroup = updateMembersFamilyGroup;
async function deleteFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        const group = await FamiliesGroups_1.default.findOne({ _id }).exec();
        if (!group)
            return FamiliesGroupsActions_1.return404(res);
        // check if exists reports
        const exist = await FamiliesGroupsReports_1.default.find({ familyGroupId: _id }).countDocuments().exec();
        if (exist > 0) {
            return res.status(422).json({
                msg: 'Disculpe, pero este grupo no puede eliminarse debido a que ya tiene reportes registrados.'
            });
        }
        // remove the 'familyGroupId' from users
        await UsersActions_1.setFamilyGroupIdValueUsers(FamiliesGroupsActions_1.getUsersIdsList(group.members), group._id.toString(), true);
        // delete
        await group.delete();
        return res.json({
            msg: 'Se ha eliminado el grupo familiar exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteFamilyGroup`);
    }
}
exports.deleteFamilyGroup = deleteFamilyGroup;
