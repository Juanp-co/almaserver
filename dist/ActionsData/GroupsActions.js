"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGroupsMsgErrors = void 0;
function returnGroupsMsgErrors(res, index, errors = undefined) {
    const msgs = [
        'no se encontraron los datos de su sesión.',
        '¡Error en los parámetros!',
        'el grupo seleccionado es incorrecto.',
        'el grupo seleccionado no existe o no se encuentra disponible.',
        'el código indicado ya se encuentra asignado a otro grupo.',
        'la invitación seleccionada es incorrecta.',
        'la invitación seleccionada no existe o no se encuentra disponible.',
        'el grupo indicado en la invitación no existe o no se encuentra disponible.',
        'el miembro seleccionado es incorrecto.',
        'usted no pertenece a ningún grupo familiar.',
        'el miembro seleccionado no pertenece a su grupo familiar.',
        'usted ya forma parte de un grupo familiar.',
    ];
    let status = 401;
    if (index !== 0)
        status = ([1, 2, 4, 5, 7, 8, 10, 11].includes(index)) ? 422 : 404;
    return res
        .status(status)
        .json({
        msg: `${index !== 1 ? 'Disculpe, pero ' : ''}${msgs[index]}`,
        errors
    });
}
exports.returnGroupsMsgErrors = returnGroupsMsgErrors;
exports.default = { returnGroupsMsgErrors };
