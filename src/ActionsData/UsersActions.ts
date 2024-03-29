import _ from 'lodash';
import { Response } from 'express';
import { getTotalsReferrals } from './ReferralsActions';
import { getCoursesSimpleList } from './CoursesActions';
import { checkNameOrLastName, checkObjectId } from '../Functions/Validations';
import IUser, { IUserData, IUserReferralInfo, IUserReferralSimpleData, IUserSimpleInfo } from '../Interfaces/IUser';
import CoursesUsers from '../Models/CoursesUsers';
import Devotionals from "../Models/Devotionals";
import Events from "../Models/Events";
import FamiliesGroupsReports from "../Models/FamiliesGroupsReports";
import Groups from '../Models/Groups';
import GroupsInvitations from "../Models/GroupsInvitations";
import Referrals from '../Models/Referrals';
import Resources from "../Models/Resources";
import Users from '../Models/Users';
import Visits from "../Models/Visits";
import Whitelist from "../Models/Whitelist";

export default async function checkIfExistDocument(document?: string, _id?: string | null): Promise<boolean> {
  return document ?
    (await Users.find({ document, _id: { $ne: _id } })
      .countDocuments()
      .exec()) > 0
    : false;
}

export async function checkIfExistPhone(phone: string|null|undefined, _id?: string | null): Promise<boolean> {
  const query: any = {};

  if (phone) {
    query.phone = phone;
    if (_id) query._id = { $ne: _id };
    return (await Users.find(query)
      .countDocuments()
      .exec()) > 0
  }

  return false;
}

export async function getData(_id?: string, projection: any | null = null): Promise<IUser | null> {
  return _id ?
    Users.findOne({ _id }, projection || { __v: 0, password: 0 }).exec()
    : null;
}

export async function getNamesUsersList(listIds: string|any[], projection: any|null = null): Promise<IUserSimpleInfo[] | any> {
  const ret: IUserSimpleInfo[] = [];

  if (listIds.length > 0) {
    const users = await Users.find(
      { _id: { $in: listIds } },
      (
        projection ||
        { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, position: 1, picture: 1 }
      )
    ).exec();

    for (const value of users) {
      ret.push({
        _id: value._id,
        names: value.names,
        lastNames: value.lastNames,
        document: value.document || null,
        gender: value.gender || null,
        phone: value.phone,
        picture: value.picture || null,
        position: value.position || null,
      });
    }
  }
  return ret;
}

export async function getUsersSimpleList(listIds: string[]): Promise<any[] | any> {
  const ret: any[] = [];

  if (listIds.length > 0) {
    const users = await Users.find(
      { _id: { $in: listIds } },
      { names: 1, lastNames: 1 }
    ).exec();

    for (const value of users) {
      ret.push({
        _id: value._id,
        fullname: `${value.names} ${value.lastNames}`,
      });
    }
  }
  return ret;
}

export async function updateGroupIdInUsers(listIds: string|any[], _id: string|null = null): Promise<void> {
  if (listIds?.length > 0) {
    await Users.updateMany({ _id: { $in: listIds } }, { $set: { group: _id } }).exec();
  }
}

export async function getUserData(_id:any, projection: any = null): Promise<IUserData | null> {
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
        names: data.names,
        lastNames: data.lastNames,
        position: data.position || null,
        gender: data.gender,
        birthday: data.birthday,
        civilStatus: data.civilStatus,
        consolidator: data.consolidator,
        church: data.church,
        educationLevel: data.educationLevel,
        profession: data.profession,
        bloodType: data.bloodType,
        company: data.company,
        companyType: data.companyType,
        baptized: data.baptized,
        roles: data.roles,
        referred: data.referred,
        petition: data.petition,
        attendGroup: data.attendGroup,
        consolidated: data.consolidated || false,
        department: data.department,
        city: data.city,
        locality: data.locality,
        direction: data.direction,
        picture: data.picture,
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

export async function getInfoUserReferred(_id: string|any): Promise<IUserReferralInfo> {

  const ret = {
    member: null,
    totalCourses: 0,
    totalReferrals: 0,
    courses: [],
    group: null,
    referred: null,
    referrals: [],
  } as IUserReferralInfo;

  if (_id) {
    ret.member = await Users.findOne({ _id }, {
        _id: 1,
        names: 1,
        lastNames: 1,
        phone: 1,
        email: 1,
        gender: 1,
        position: 1,
        civilStatus: 1,
        department: 1,
        city: 1,
        locality: 1,
        petition: 1,
        consolidated: 1,
        direction: 1,
        birthday: 1,
        picture: 1,
        group: 1,
        roles: 1,
        church: 1,
        referred: 1,
        consolidator: 1,
        created_at: 1,
      }
    ).exec() as IUserReferralSimpleData;

    if (!ret.member) return ret;

    if (ret.member.referred) {
      const referred = await getNamesUsersList([ret.member.referred]);
      ret.referred = referred?.length > 0 ? referred[0] : null
    }


    if (ret.member.group) {
      const group = await Groups.findOne({ _id: ret.member.group }, { __v: 0 }).exec();

      if (group) {
        ret.group = {
          _id: group._id,
          name: group.name,
          code: group.code,
          members: await getNamesUsersList(
            _.uniq(group.members || [])
          ),
          created_at: group.created_at,
          updated_at: group.updated_at,
        }
      }
    }

    // get totals members referrals
    const referrals = await Referrals.findOne({ _id: ret.member._id }).exec();

    if (referrals) {
      // get data referrals and get totals subreferrals
      ret.referrals = await getNamesUsersList(referrals.members);
      ret.totalReferrals += await getTotalsReferrals(referrals.members);

      for (const [index, value] of ret.referrals.entries()) {
        const refMembers = await Referrals.findOne({ _id: value._id }).exec();

        ret.referrals[index] = {
          ...value,
          totalsReferrals: refMembers ? refMembers.members.length : 0
        };
      }
    }

    // get totals courses
    const coursesU = await CoursesUsers.findOne(
      { userid: ret.member._id.toString() },
      { 'courses.courseId': 1, 'courses.approved': 1 }
    ).exec();

    if (coursesU) {
      ret.totalCourses = coursesU.courses.length;

      // get data courses
      const listIds: any[] = ret.totalCourses > 0 ? coursesU.courses.map(c => c.courseId) : [];
      const courses = listIds.length > 0 ? await getCoursesSimpleList(listIds) : [];

      for (const course of courses) {
        const index = coursesU.courses.findIndex(c => c.courseId === course._id.toString());
        ret.courses.push({
          _id: course._id,
          // banner: course.banner,
          slug: course.slug,
          title: course.title,
          description: course.description,
          level: course.level,
          approved: coursesU.courses[index] ? (coursesU.courses[index].approved || false) : false
        });
      }
    }
  }

  return ret;
}

export async function setFamilyGroupIdValueUsers(listIds: string[], groupId: string, remove = false): Promise<void> {
  // check the list users
  if (listIds.length > 0) {
    const users = await Users.find({ _id: { $in: listIds } }, { familyGroupId: 1 }).exec();

    if (users.length > 0) {
      for (const user of users) {
        // set or remove the familyGroupId
        if (remove) user.familyGroupId = user.familyGroupId.filter(fg => fg !== groupId);
        else user.familyGroupId.push(groupId);

        await user.save();
      }
    }
  }
}

export async function checkLeaderUserRole(_id: string, remove = false): Promise<void> {
  const user: any = await Users.findOne({ _id }, { roles: 1 }).exec();

  if (user) {
    if (remove) {
      user.roles = user.roles?.filter((r: number) => r !== 3) || [];
      await user.save();
    }
    else if (!user.roles.includes(3)) {
      user.roles.push(3);
      await user.save();
    }
  }
}

export async function removeAllDataUser(user: IUser): Promise<void> {

  const _id = user._id.toString();

  // delete all data
  const groups = await Groups.find({ members: _id }).exec();
  const referrals = await Referrals.find({ members: _id }).exec();

  if (groups.length > 0) {
    const totalsGroups = groups.length;

    for (let i = 0; i < totalsGroups; i += 1) {
      groups[i].members = groups[i].members.filter(m => m !== _id);
      await groups[i].save();
    }
  }

  if (referrals.length > 0) {
    const totalsGroups = referrals.length;

    for (let i = 0; i < totalsGroups; i += 1) {
      referrals[i].members = referrals[i].members.filter(m => m !== _id);
      await referrals[i].save();
    }
  }
  await CoursesUsers.deleteMany({ userid: _id }).exec();
  await Devotionals.deleteMany({ userid: _id }).exec();
  await Events.deleteMany({ userid: _id }).exec();
  await FamiliesGroupsReports.deleteMany({ userid: _id }).exec();
  await GroupsInvitations.deleteMany({ _id }).exec();
  await Referrals.deleteMany({ _id }).exec();
  await Resources.deleteMany({ userid: _id }).exec();
  await Visits.deleteMany({ userid: _id }).exec();
  await Whitelist.deleteMany({ userid: _id }).exec();
}

/*
  Static functions
 */
export function checkFindValueSearch(params: any = {}, tokenId: string|null = null): any {
  const query: any = {};
  if (tokenId) query._id = { $ne: tokenId };

  if (params) {
    if (params.ignoreIds) {
      const ids: string[] = params.ignoreIds.toString().split(',') || [];

      if (ids.length > 0) {
        const list = tokenId ? [tokenId] : [];
        ids.forEach((id: any) => {
          if (checkObjectId(id)) list.push(id);
        });
        query._id = { $nin: list };
      }
    }

    if (params.search) {
      if (checkNameOrLastName(params.search)) {
        const pattern = params.search ? params.search.toString().trim().replace(' ', '|') : null;
        if (pattern) {
          query.$or = [
            { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
            { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
          ];
        }
      }
      else
        query.$or = [
          { document: { $regex: new RegExp(`(${params.search})`, 'i') } },
          { phones: { $regex: new RegExp(`(${params.search})`, 'i') } },
        ];
    }

    if (params.referreds) query.referred = { $ne: null };
    if (params.admins) query.roles = { $eq: 0 };

    if (params.consolidates) {
      delete query._id;
      query.consolidated = { $eq: true };
    }
  }

  return query;
}

export function checkFindValueSearchForGroups(query: any = {}, params: any = {}): any {
  if (params) {
    if (params.search) {
      if (checkNameOrLastName(params.search)) {
        const pattern = params.search ? params.search.toString().trim().replace(' ', '|') : null;
        if (pattern) {
          query.$or = [
            { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
            { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
          ];
        }
      }
      else
        query.document = { $regex: new RegExp(`${params.search}`.toUpperCase(), 'i') };
    }

    if (params.referreds) query.referred = { $ne: null };
  }

  return query;
}

export function checkRoleToActions(roles: any[] | null | undefined): boolean {
  return roles?.some(r => [0, 1, 2, 3].includes(r)) || false;
}

export function responseUsersAdmin(res: Response, option: number) : Response {

  const ret = [
    { status: 422, msg: 'Disculpe, pero el miembro seleccionado es incorrecto.' },
    { status: 404, msg: 'Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.' },
    { status: 422, msg: 'Disculpe, pero el rol seleccionado es incorrecto.' },
    { status: 403, msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.' },
    {
      status: 422,
      msg: 'Disculpe, pero la contraseña indicada es incorrecta.' +
        ' Debe poseer letras (A-Z, a-z), números (0-9) y caracteres especiales (¡!¿?+-*.,$%&#).'
    },
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
    { status: 422, msg: 'Disculpe, pero debe indicar un número de teléfono válido.' },
    { status: 404, msg: 'Disculpe, pero el número de teléfono indicado no existe o no se encuentra disponible.' },
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
