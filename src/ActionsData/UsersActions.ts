import Users from '../Models/Users';
import IUser from '../Interfaces/IUser';

export async function checkIfExistDocument(
  document?: string,
  _id?: string | null
): Promise<boolean> {
  return document ?
    (await Users.find({ document, _id: { $ne: _id } })
      .countDocuments()
      .exec()) > 0
    : false;
}

export async function getData(_id?: string): Promise<IUser | null> {
  return _id ?
    Users.findOne({ _id }, { __v: 0, password: 0, 'securityQuestion.answer': 0 }).exec()
    : null;
}
