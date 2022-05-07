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
exports.showDevotionalPublic = exports.getTotalsDevotionalsPublic = exports.getDevotionalsPublic = void 0;
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const DevotionalsActions_1 = __importStar(require("../../ActionsData/DevotionalsActions"));
const Devotionals_1 = __importDefault(require("../../Models/Devotionals"));
const Validations_1 = require("../../Functions/Validations");
const path = 'Controllers/publics/devotionals.controller';
async function getDevotionalsPublic(req, res) {
    try {
        const { limit, skip, sort } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const query = (0, DevotionalsActions_1.getQueryParamsList)(req.query);
        const devotionals = await Devotionals_1.default.find(query, { __v: 0 })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: `Devocionales.`,
            devotionals: await (0, DevotionalsActions_1.getModelDataListDevotionals)(devotionals, false)
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getDevotionals`);
    }
}
exports.getDevotionalsPublic = getDevotionalsPublic;
async function getTotalsDevotionalsPublic(req, res) {
    try {
        const query = (0, DevotionalsActions_1.getQueryParamsList)(req.query);
        const totals = await Devotionals_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: `Devocionales.`,
            data: { totals }
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getDevotionals`);
    }
}
exports.getTotalsDevotionalsPublic = getTotalsDevotionalsPublic;
async function showDevotionalPublic(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, DevotionalsActions_1.default)(res, 1);
        const devotional = await Devotionals_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!devotional)
            return (0, DevotionalsActions_1.default)(res, 0);
        const ret = await (0, DevotionalsActions_1.getModelDataListDevotionals)([devotional], false);
        return res.json({
            msg: `Detalles del devocional.`,
            devotional: ret[0] || null
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showDevotional`);
    }
}
exports.showDevotionalPublic = showDevotionalPublic;
