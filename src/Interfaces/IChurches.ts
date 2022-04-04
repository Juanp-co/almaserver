import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';


export interface IChurchesLocation {
  type: string;
  coordinates: number[];
}

export default interface IChurches extends Document {
  _id?: any;
  name: string|null;
  description: string|null;
  picture: string|null;
  address: string|null;
  phone1: string|null;
  phone2: string|null;
  email: string|null;
  location: IChurchesLocation;
  userid: string|null;
  created_at: number;
  updated_at: number;
}

export interface IChurchesRegisterOrUpdate {
  name: IChurches['name'];
  description: IChurches['description'];
  address: IChurches['address'];
  phone1: IChurches['phone1'];
  phone2: IChurches['phone2'];
  email: IChurches['email'];
  location: IChurches['location'];
  picture: IChurches['picture'];
}

export interface IChurchesList {
  _id?: any;
  name: IChurches['name'];
  description?: IChurches['description'];
  picture: IChurches['picture'];
  address: IChurches['address'];
  phone1: IChurches['phone1'];
  phone2: IChurches['phone2'];
  email: IChurches['email'];
  location: IChurches['location'];
  userid?: string | null;
  user?: null | IUserSimpleInfo;
}
