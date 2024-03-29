"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function responsesBanks(res, option, errors = undefined) {
    const ret = [
        { status: 404, msg: 'Disculpe, pero el banco seleccionado no existe o no se encuentra disponible.' },
        { status: 422, msg: 'Disculpe, pero el banco seleccionado es incorrecto.' },
        { status: 422, msg: '¡Error en los parámetros!' },
    ];
    if (ret[option])
        return res.status(ret[option].status).json({
            msg: ret[option].msg,
            errors
        });
    return res.status(500).json({
        msg: '¡Error desconocido!',
    });
}
exports.default = responsesBanks;
