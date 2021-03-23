import { Response } from 'express';
import { checkNameOrLastName } from '../Functions/Validations';
import IUser, { IUserData, IUserSimpleInfo } from '../Interfaces/IUser';
import Users from '../Models/Users';
import Referrals from '../Models/Referrals';
import CoursesUsers from '../Models/CoursesUsers';
import { getTotalsReferrals } from './ReferralsActions';

export default async function checkIfExistDocument(document?: string, _id?: string | null): Promise<boolean> {
  return document ?
    (await Users.find({ document, _id: { $ne: _id } })
      .countDocuments()
      .exec()) > 0
    : false;
}

export async function checkIfExistEmail(email?: string, _id?: string | null): Promise<boolean> {
  return email ?
    (await Users.find({ email, _id: { $ne: _id } })
      .countDocuments()
      .exec()) > 0
    : false;
}

export async function getData(_id?: string, projection: any | null = null): Promise<IUser | null> {
  return _id ?
    Users.findOne({ _id }, projection || { __v: 0, password: 0 }).exec()
    : null;
}

export async function getNamesUsersList(listIds: string|any[], projection: any|null = null): Promise<IUserSimpleInfo[] | any> {
  return listIds.length > 0 ?
    Users.find({ _id: { $in: listIds } }, projection || { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }).exec()
    : [];
}

export async function updateGroupIdInUsers(listIds: string|any[], _id: string|null = null) {
  if (listIds.length > 0) {
    await Users.updateMany(
      { _id: { $in: listIds } },
      { $set: { group: _id } }
    ).exec();
  }
}

export async function getUserData(_id: any, projection: any = null): Promise<IUserData | null> {
  let user: IUserData | null = null;

  if (_id) {
    const data = await Users.findOne(
      { _id },
      projection || { __v: 0, password: 0 }
      ).exec();

    if (data) {
      user = {
        _id: data._id,
        document: data.document,
        email: data.email,
        phone: data.phone,
        password: data.password,
        names: data.names,
        lastNames: data.lastNames,
        gender: data.gender,
        birthday: data.birthday,
        civilStatus: data.civilStatus,
        educationLevel: data.educationLevel,
        profession: data.profession,
        bloodType: data.bloodType,
        company: data.company,
        companyType: data.companyType,
        baptized: data.baptized,
        role: data.role,
        referred: data.referred,
        department: data.department,
        city: data.city,
        locality: data.locality,
        direction: data.direction,
        totals: {
          totalsCourses: 0,
          totalsReferrals: 0,
        },
        created_at: data.created_at,
        updated_at: data.updated_at,
      } as IUserData;

      if (user.referred) {
        const uf = await getNamesUsersList([user.referred]);
        if (uf) user.referred = uf[0] as IUserSimpleInfo;
      }

      // get totals courses, referrals and others
      user.totals.totalsCourses = await CoursesUsers.find({ userid: _id }).countDocuments().exec();
      const referrals = await Referrals.findOne({ _id }, { members: 1 }).exec();
      if (referrals) {
        user.totals.totalsReferrals = await getTotalsReferrals(referrals.members);
      }
    }
  }

  return user;
}

export async function getIdUserFromDocument(document: string|any): Promise<string | null> {
  if (document) {
    const u = await Users.findOne({ document }, { _id: 1 }).exec();
    if (u) return u._id.toString();
  }

  return null;
}

/*
  Static functions
 */
export function checkFindValueSearch(query: any, value: any): any {
  if (value) {
    if (checkNameOrLastName(value)) {
      const pattern = value ? value.toString().trim().replace(' ', '|') : null;
      if (pattern) {
        query = {
          ...query,
          ...{
            $or: [
              { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
              { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
            ]
          }
        };
      }
    }
    else
      query.document = { $regex: new RegExp(`${value}`.toUpperCase(), 'i') };
  }

  return query;
}

export function checkRoleToActions(role: number|null): boolean {
  if (!/[01]{1}/.test(`${role}`)) return false;
  return ['0', '1'].indexOf(`${role}`) > -1;
}

export function responseUsersAdmin(res: Response, option: number) : Response {

  const ret = [
    { status: 422, msg: 'Disculpe, pero el miembro seleccionado es incorrecto.' },
    { status: 404, msg: 'Disculpe, pero el miembro seleccionado no existe.' },
    { status: 422, msg: 'Disculpe, pero el rol seleccionado es incorrecto.' },
    { status: 403, msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.' },
  ];

  if (ret[option])
    return res.status(ret[option].status).json({
      msg: ret[option].msg
    });

  return res.status(500).json({
    msg: '¡Error desconocido!',
  });
}


export function responseErrorsRecoveryPassword(res: Response, option: number) : Response {
  const ret = [
    { status: 404, msg: 'Disculpe, pero no se encontro la acción a realizar.' },
    { status: 422, msg: 'Disculpe, pero debe indicar un número de documento válido.' },
    { status: 404, msg: 'Disculpe, pero el número de documento indicado no existe o no se encuentra disponible.' },
    { status: 422, msg: 'Disculpe, pero no se recibieron los datos a validar.' },
    { status: 422, msg: 'Disculpe, pero debe indicar un correo electrónico válido.' },
    { status: 422, msg: 'Disculpe, pero el correo electrónico indicado no coincide con el de su cuenta.' },
    { status: 422, msg: 'Disculpe, pero debe indicar una fecha válida.' },
    { status: 422, msg: 'Disculpe, pero la fecha indicada no coincide con su fecha de cumpleaños de su cuenta.' },
    { status: 422, msg: 'Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.' },
  ];

  if (ret[option])
    return res.status(ret[option].status).json({
      msg: ret[option].msg
    });

  return res.status(500).json({
    msg: '¡Error desconocido!',
  });
}
