import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getLimitSkipSortSearch, returnError } from '../../Functions/GlobalFunctions';
import { validateRegister, validateUpdate } from '../../FormRequest/UsersRequest';
import Users from '../../Models/Users';
import { checkNameOrLastName, checkObjectId, checkRole } from '../../Functions/Validations';
import { disableTokenDBForUserId } from '../../Functions/TokenActions';

const path = 'Controllers/admin/users.admin.controller';

export async function getUsersCounters(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let query = {
      _id: { $ne: userid }
    };
    const { document, name, role } = req.query;

    if (checkRole(role)) query = Object.assign(query, { role: Number.parseInt(`${role}`, 10) });

    if (document)
      query = Object.assign(
        query,
        { document: { $regex: new RegExp(`${document}`, 'i') } }
      );

    if (checkNameOrLastName(name)) {
      const pattern = name ? name.toString().trim().replace(' ', '|') : null;
      if (pattern)
        query = Object.assign(query, { $or: [
            { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
            { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
          ]
        });
    }

    const totals = await Users.find(query).countDocuments().exec();

    return res.status(200).json({
      msg: `Total usuarios.`,
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getUsersCounters`);
  }
}

export async function getUsers(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    let query = {
      _id: { $ne: userid }
    };
    const { document, name } = req.query;

    if (document) {
      query = Object.assign(query, { document: { $regex: new RegExp(`${document}`, 'i') } });
    }

    if (checkNameOrLastName(name)) {
      const pattern = name ? name.toString().trim().replace(' ', '|') : null;
      if (pattern)
        query = Object.assign(query, { $or: [
            { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
            { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
          ]
        });
    }

    const users = await Users.find(
      query,
      {
        names: 1,
        lastNames: 1,
        phone: 1,
        document: 1,
        role: 1,
        created_at: 1,
      })
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.status(200).json({
      msg: `Usuarios.`,
      users
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getUsers`);
  }
}

export async function saveUser(req: Request, res: Response): Promise<Response> {
  try {
    const validate = await validateRegister(req.body, true);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const user = new Users(validate.data);
    user.password = bcrypt.hashSync(user.password, 10);
    user.securityQuestion.answer = bcrypt.hashSync(`${user.securityQuestion.answer}`, 10);
    await user.save();

    return res.status(200).json({
      msg: `Se ha registrado el nuevo usuario exitosamente.`,
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/saveUser`);
  }
}

export async function showUser(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
      });
    }

    const user = await Users.findOne(
      { _id },
      { __v: 0, password: 0, 'securityQuestion.answer': 0 })
      .exec();

    if (!user) {
      return res.status(404).json({
        msg: 'Disculpe, pero el usuario seleccionado no existe.'
      });
    }

    return res.status(200).json({
      msg: `Detalles del usuario.`,
      user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showUser`);
  }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
      });
    }

    const validate = await validateUpdate(req.body, _id);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const user = await Users.findOne(
      { _id },
      { __v: 0, password: 0, 'securityQuestion.answer': 0 }
      ).exec();

    if (!user) {
      return res.status(404).json({
        msg: 'El usuario a actualizar no exite.'
      });
    }

    user.phone = validate.data.phone;
    user.names = validate.data.names;
    user.lastNames = validate.data.lastNames;
    user.direction = validate.data.direction;
    user.document = validate.data.document;
    user.educationLevel = validate.data.educationLevel;
    user.profession = validate.data.profession;
    user.bloodType = validate.data.bloodType;
    user.company = validate.data.company;
    user.companyType = validate.data.companyType;
    user.baptized = validate.data.baptized;

    await user.save();

    return res.status(200).json({
      msg: `Se han actualizado los datos del usuario exitosamente.`,
      user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateUser`);
  }
}

export async function changeRoleUser(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const { role } = req.body;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
      });
    }

    if (!checkRole(role)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el rol seleccionado es incorrecto.'
      });
    }

    const user = await Users.findOne({_id}, { role: 1 }).exec();

    if (!user) {
      return res.status(404).json({
        msg: 'Disculpe, pero el usuario a actualizar no existe.'
      });
    }

    user.role = role;
    await user.save();

    // disconnect user
    await disableTokenDBForUserId([_id]);

    return res.status(200).json({
      msg: `Se asignado el nuevo rol al usuario exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changeRoleUser`);
  }
}

/* PENDIENTE */
// export async function deleteUser(req: Request, res: Response): Promise<Response> {
//   try {
//     const { _id } = req.params;
//
//     if (!checkObjectId(_id)) {
//       return res.status(422).json({
//         msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
//       });
//     }
//
//     const user = await Users.findOne({_id}, { __v: 0 }).exec();
//
//     if (!user) {
//       return res.status(404).json({
//         msg: 'Disculpe, pero el usuario no existe.'
//       });
//     }
//
//     await user.delete();
//
//     return res.status(200).json({
//       msg: `Se ha eliminado el usuario exitosamente.`
//     });
//   } catch (error: any) {
//     return returnError(res, error, `${path}/deleteUser`);
//   }
// }
