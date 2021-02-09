/**
 * @api {get} /api/admin/users/counters (00) Obtener total de usuarios.
 * @apiVersion 0.0.3
 * @apiName countersUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} document Número de documento a buscar (Opcional).
 * @apiParam (Query Params) {String} name Nombre o apellido del usuario (Opcional).
 * @apiParam (Query Params) {Number} role Rol a buscar (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona) (Opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} totals Listado de preguntas de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total usuarios.",
    "totals": 2
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/users (01) Obtener listado de usuarios.
 * @apiVersion 0.0.3
 * @apiName getUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} limit Total de resultados por página (por defecto = 10).
 * @apiParam (Query Params) {String} page Página (por defecto = 1).
 * @apiParam (Query Params) {String} input Campo por ordenar (campos = document | created | names | lastNames) (Opcional).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} document Número de documento a buscar (Opcional).
 * @apiParam (Query Params) {String} name Nombre o apellido del usuario (Opcional).
 * @apiParam (Query Params) {Number} role Rol a buscar (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona) (Opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} users Listado de preguntas de seguridad.
 *
 * @apiSuccess (users Array Object) {Number} role Role del usuario.
 * @apiSuccess (users Array Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (users Array Object) {String} _id ID del usuario.
 * @apiSuccess (users Array Object) {String} phone Número de teléfono.
 * @apiSuccess (users Array Object) {String} document Número de documento.
 * @apiSuccess (users Array Object) {String} names Nombres.
 * @apiSuccess (users Array Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Usuarios.",
    "users": [
        {
            "role": 1,
            "created_at": "2020-12-13 10:03:12",
            "_id": "5fd62d49304a9a5a686adc1a",
            "phone": "584121490196",
            "document": "CC123456788",
            "names": "ADMIN DOS",
            "lastNames": "PRUEBA"
        },
        .
        .
        .
    ]
}
 * @apiSuccessExample {JSON} Success without data
 * HTTP/1.1 200 Success
 * {
    "msg": "Usuarios.",
    "users": []
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {post} /api/admin/users (02) Crear nuevo usuario.
 * @apiVersion 0.0.11
 * @apiName createUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} password Contraseña.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} direction Dirección.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {Number|Null} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number|Null} profession ID (index array) de la profesión.
 * @apiParam {Number|Null} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType Tipo de empresa en caso de que posea.
 * @apiParam {String} questionId ID de la pregunta de seguridad (obtenido desde API).
 * @apiParam {String} answer Respuesta de seguridad.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 * @apiParam {Number} role Rol para el usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "phone": "3161234567",
    "password": "password",
    "names": "Usuario",
    "lastNames": "Prueba",
    "direction": "any direction",
    "document": "CC12345678",
    "educationLevel": null,
    "profession": null,
    "bloodType": 1,
    "company": false,
    "companyType": null,
    "questionId": "5f8608596cd607042cdbea86",
    "answer": "respuesta",
    "baptized": true,
    "role": 5
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha registrado el nuevo usuario exitosamente.",
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente."
        },
        {
            "input": "names",
            "msg": "Disculpe, pero debe asegurarse de indicar su(s) nombre(s)."
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
 * @api {get} /api/admin/users/:_id (03) Obtener detalles de un usuario.
 * @apiVersion 0.0.3
 * @apiName getDetailsUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del usuario.
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
    "msg": "Detalles del usuario.",
    "user": {
        "educationLevel": null,
        "bloodType": 1,
        "company": false,
        "companyType": null,
        "baptized": false,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-07 23:59:12",
        "updated_at": "2020-12-13 12:57:12",
        "_id": "5fcf0821fc917d476c1cf3e3",
        "phone": "584121490196",
        "document": "CC12345678",
        "names": "USUARIO TRES",
        "lastNames": "PRUEBA TRES",
        "direction": "any direction",
        "profession": null
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el usuario seleccionado no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el usuario seleccionado es incorrecto."
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
 * @api {put} /api/admin/users/:_id (04) Actualizar datos de un usuario.
 * @apiVersion 0.0.3
 * @apiName changeRoleUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del usuario.
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
    "phone": "3161234567",
    "names": "Usuario",
    "lastNames": "Prueba",
    "direction": "any direction",
    "document": "CC12345678",
    "educationLevel": null,
    "profession": null,
    "bloodType": 1,
    "company": false,
    "companyType": null,
    "baptized": true
}
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
    "msg": "Se han actualizado los datos del usuario exitosamente.",
    "user": {
        "educationLevel": null,
        "bloodType": 1,
        "company": false,
        "companyType": null,
        "baptized": true,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-07 23:59:12",
        "updated_at": "2020-12-13 15:37:43",
        "_id": "5fcf0821fc917d476c1cf3e3",
        "phone": "584121490196",
        "document": "CC12345678",
        "names": "USUARIO TRES",
        "lastNames": "PRUEBA TRES",
        "direction": "any direction",
        "profession": null
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el usuario a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el usuario seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente."
        },
        {
            "input": "names",
            "msg": "Disculpe, pero debe asegurarse de indicar su(s) nombre(s)."
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
 * @api {put} /api/admin/users/:_id (05) Cambiar rol de un usuario.
 * @apiVersion 0.0.3
 * @apiName updateUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del usuario.
 *
 * @apiParam {Number} role Role para el usuario.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "role": 3
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se asignado el nuevo rol al usuario exitosamente."
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el usuario a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el usuario seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid role
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el rol seleccionado es incorrecto."
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
 * @api {get} /api/admin/users/:_id/referrals (06) Obtener listado de referidos de un usuario.
 * @apiVersion 0.0.11
 * @apiName getReferralsUsersListAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del usuario.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del usuario y listado de referidos.
 *
 * @apiSuccess {Object} user Datos del usuario.
 * @apiSuccess {Number} totals Total de referidos.
 * @apiSuccess {Array|Object} members Listado de referidos del usuario.
 *
 * @apiSuccess (user Object) {String|Null} referred Datos del usuario referido.
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombres.
 * @apiSuccess (user Object) {String} lastNames Apellidos.
 *
 * @apiSuccess (referred Object and members Array Object) {String} _id ID del usuario.
 * @apiSuccess (referred Object and members Array Object) {String} document Número de documento.
 * @apiSuccess (referred Object and members Array Object) {String} names Nombres.
 * @apiSuccess (referred Object and members Array Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Listado de referidos.",
	"data": {
		"user": {
			"referred": {
				"_id": "6022194c88342006d4a700f3",
				"document": "CC12345675",
				"names": "ANTHONY",
				"lastNames": "VELÁSQUEZ"
			},
			"_id": "5fcf0821fc917d476c1cf3e3",
			"document": "CC12345678",
			"names": "USUARIO TRES",
			"lastNames": "PRUEBA TRES"
		},
		"totals": 1,
		"members": [
			{
				"user": {
					"_id": "6022194c88342006d4a700f3",
					"document": "CC12345675",
					"names": "ANTHONY",
					"lastNames": "VELÁSQUEZ"
				},
				"totalsReferrals": 1
			}
		]
	}
}
 *
 * @apiSuccessExample {JSON} Success without members
 * HTTP/1.1 200 Success
 * {
	"msg": "Listado de referidos.",
	"data": {
		"user": {
			"referred": {
				"_id": "6022194c88342006d4a700f3",
				"document": "CC12345675",
				"names": "ANTHONY",
				"lastNames": "VELÁSQUEZ"
			},
			"_id": "5fcf0821fc917d476c1cf3e3",
			"document": "CC12345678",
			"names": "USUARIO TRES",
			"lastNames": "PRUEBA TRES"
		},
		"totals": 0,
		"members": []
	}
}
 *
 * @apiSuccessExample {JSON} Success without referred data
 * HTTP/1.1 200 Success
 * {
	"msg": "Listado de referidos.",
	"data": {
		"user": {
			"referred": null,
			"_id": "5fcf0821fc917d476c1cf3e3",
			"document": "CC12345678",
			"names": "USUARIO TRES",
			"lastNames": "PRUEBA TRES"
		},
		"totals": 1,
		"members": [
			{
				"user": {
					"_id": "6022194c88342006d4a700f3",
					"document": "CC12345675",
					"names": "ANTHONY",
					"lastNames": "VELÁSQUEZ"
				},
				"totalsReferrals": 1
			}
		]
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el usuario a seleccionado no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el usuario seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
