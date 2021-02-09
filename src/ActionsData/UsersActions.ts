import Users from '../Models/Users';
import IUser, { IUserSimpleInfo } from '../Interfaces/IUser';

export default async function checkIfExistDocument(document?: string, _id?: string | null): Promise<boolean> {
  return document ?
    (await Users.find({ document, _id: { $ne: _id } })
      .countDocuments()
      .exec()) > 0
    : false;
}

export async function getData(_id?: string, projection: any | null = null): Promise<IUser | null> {
  return _id ?
    Users.findOne({ _id }, projection || { __v: 0, password: 0, 'securityQuestion.answer': 0 }).exec()
    : null;
}

export async function getNamesUsersList(listIds: string|any[]): Promise<IUserSimpleInfo[] | any> {
  return listIds.length > 0 ?
    Users.find({ _id: { $in: listIds } }, { names: 1, lastNames: 1, document: 1 }).exec()
    : [];
}

export async function getIdUserFromDocument(document: string|any): Promise<string | null> {

  if (document) {
    const u = await Users.findOne({ document }, { _id: 1 }).exec();
    if (u) return u._id.toString();
  }

  return null;
}
