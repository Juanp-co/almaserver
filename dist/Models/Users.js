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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const UserSchema = new mongoose_1.Schema({
    phone: { type: String, require: true, unique: true },
    document: { type: String, require: true, get: GlobalFunctions_1.toUpperValue },
    email: { type: String, default: null },
    password: { type: String, require: true },
    names: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    lastNames: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    position: { type: String, default: null, set: GlobalFunctions_1.toUpperValue },
    gender: { type: Number, default: null },
    birthday: { type: String, default: null },
    civilStatus: { type: Number, default: null },
    educationLevel: { type: Number, default: null },
    profession: { type: Number, default: null },
    bloodType: { type: Number, default: null },
    company: { type: Boolean, default: false },
    companyType: { type: Number, default: null },
    baptized: { type: Boolean, default: false },
    // 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona
    role: { type: Number, default: 5 },
    referred: { type: String, default: null },
    consolidated: { type: Boolean, default: false },
    group: { type: String, default: null },
    familyGroupId: { type: [String], default: [] },
    department: { type: Number, default: null },
    city: { type: Number, default: null },
    locality: { type: String, default: null, set: GlobalFunctions_1.toUpperValue },
    direction: { type: String, default: null, set: GlobalFunctions_1.toUpperValue },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
UserSchema.methods.encrypt = (password) => {
    return password ? bcrypt.hashSync(password, 10) : null;
};
UserSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
UserSchema.set('toJSON', { getters: true });
exports.default = mongoose_1.model('User', UserSchema);
