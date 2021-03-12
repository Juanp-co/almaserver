import { Schema, model } from 'mongoose';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import IAccountBank from '../Interfaces/IAccountBank';

const getBannerUrl = (value: any) => {
  if (!value) return value;
  return `${process.env.URL_API}/${value}`;
};

const AccountBankSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    picture: { type: String, require: true, get: getBannerUrl },
    created_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

AccountBankSchema.set('toJSON', { getters: true });

const AccountsBanks = model<IAccountBank>('accounts_banks', AccountBankSchema);

export default AccountsBanks;
