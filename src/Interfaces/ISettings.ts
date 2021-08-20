import { Document } from 'mongoose';

export interface ISettingsLogosBanners {
  picture: string;
  active: boolean;
  created_at: number | null;
}

export default interface ISettings extends Document {
  _id?: any;
  logos: ISettingsLogosBanners[];
  banners: ISettingsLogosBanners[];
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  web: string | null;
  youtube: string | null;
  updated_at?: number | null;
}

export interface ISettingsUpdateUrls {
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  web: string | null;
  youtube: string | null;
}

export interface ISettingsUpdateLogosOrBanners {
  picture: string | null;
  active?: string | boolean;
}
