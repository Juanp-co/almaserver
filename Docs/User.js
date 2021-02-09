/**
 * @api {get} /api/user (00) Obtener datos de la sesión.
 * @apiVersion 0.0.2
 * @apiName getDataSessionUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 *
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del usuario.
 * @apiSuccess (data Object) {Object} securityQuestion Datos de la pregunta de seguridad.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 *
 * @apiSuccess (securityQuestion Object) {String|Null} questionId ID de la pregunta de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Datos de la sesión",
    "data": {
        "educationLevel": 0,
        "bloodType": 5,
        "company": true,
        "companyType": 4,
        "baptized": true,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-08 13:43:16",
        "updated_at": "2020-12-08 21:34:22",
        "_id": "5fcfc945f4647b4c200cca05",
        "phone": "3161234568",
        "document": "CC12345677",
        "names": "USUARIO",
        "lastNames": "PRUEBA",
        "direction": "any direction",
        "profession": 44
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/user (01) Actualizar datos del perfil.
 * @apiVersion 0.0.2
 * @apiName registerUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} direction Dirección.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {Number|Null} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number|Null} profession ID (index array) de la profesión.
 * @apiParam {Number|Null} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType Tipo de empresa en caso de que posea.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "phone": "3161234568",
    "names": "Usuario",
    "lastNames": "Prueba",
    "direction": "any direction",
    "document": "CC12345677",
    "educationLevel": null,
    "profession": null,
    "bloodType": 1,
    "company": false,
    "companyType": null,
    "baptized": true
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos actualizados.
 *
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del usuario.
 * @apiSuccess (data Object) {Object} securityQuestion Datos de la pregunta de seguridad.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 *
 * @apiSuccess (securityQuestion Object) {String|Null} questionId ID de la pregunta de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado la información exitosamente.",
    "data": {
        "educationLevel": 0,
        "bloodType": 5,
        "company": true,
        "companyType": 4,
        "baptized": true,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-08 13:43:16",
        "updated_at": "2020-12-08 21:34:22",
        "_id": "5fcfc945f4647b4c200cca05",
        "phone": "584121490198",
        "document": "CC12345677",
        "names": "ANTHONY TERCERO",
        "lastNames": "VELÁSQUEZ",
        "direction": "any direction",
        "profession": 44
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero el número de documento ya se encuentra con otro usuario. Verifíquelo e intente nuevamente."
        },
        {
            "input": "questionId",
            "msg": "Disculpe, pero seleccionar una pregunta de seguridad."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/user/change-password (02) Cambiar contraseña.
 * @apiVersion 0.0.2
 * @apiName changePasswordUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} password Contraseña actual.
 * @apiParam {String} newPassword Nueva contraseña.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "password": "password",
    "newPassword": "password2"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado su contraseña exitosamente."
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "password",
            "msg": "Disculpe, pero debe indicar su contraseña actual."
        },
        {
            "input": "newPassword",
            "msg": "Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres."
        }
    ]
}
 *
 * @apiErrorExample {JSON} Invalid current password
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero la contraseña actual es incorrecta."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/user/change-question (03) Actualizar pregunta y respuesta de seguridad.
 * @apiVersion 0.0.2
 * @apiName changeSecurityQuestionUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} questionId ID de la pregunta de seguridad.
 * @apiParam {String} answer Respuesta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "questionId": "5f8608596cd607042cdbea86",
    "answer": "password"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado los datos de seguridad exitosamente."
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "questionId",
            "msg": "Disculpe, pero seleccionar una pregunta de seguridad."
        },
        {
            "input": "answer",
            "msg": "Disculpe, pero debe indicar una respuesta de seguridad."
        }
    ]
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/user/referrals (04) Obtener listado de referidos.
 * @apiVersion 0.0.11
 * @apiName getReferralsUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} referrals Listado de referidos del usuario.
 *
 * @apiSuccess (referrals Array Object) {String} _id ID del usuario.
 * @apiSuccess (referrals Array Object) {String} document Número de documento.
 * @apiSuccess (referrals Array Object) {String} names Nombres.
 * @apiSuccess (referrals Array Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis referidos.",
	"referrals": [
		{
			"_id": "6022194c88342006d4a700f3",
			"document": "CC12345675",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
		},
		.
		.
		.
	]
}
 *
 * @apiSuccessExample {JSON} Success without data
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis referidos.",
	"referrals": []
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
