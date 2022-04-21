"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnResourcesMsgErrors = void 0;
function returnResourcesMsgErrors(res, index, errors = undefined) {
    const msgs = [
        'no se encontraron los datos de su sesión.',
        'no cuenta con los permisos necesarios para realizar esta acción.',
        'ha ocurrido un error inesperado.',
        'el documento seleccionado es incorrecto.',
        'el documento seleccionado no existe o no se encuentra disponible.'
    ];
    let status = 401;
    if (index !== 0)
        status = ([1, 2, 3].includes(index)) ? 422 : 404;
    return res
        .status(status)
        .json({
        msg: `Disculpe, pero ${msgs[index]}`,
        errors
    });
}
exports.returnResourcesMsgErrors = returnResourcesMsgErrors;
exports.default = { returnResourcesMsgErrors };
