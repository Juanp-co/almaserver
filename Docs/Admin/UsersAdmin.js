/**
 * @api {get} /api/admin/users/counters (00) Obtener total de usuarios.
 * @apiVersion 0.0.16
 * @apiName countersUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} word Número de documento o nombre a buscar (Opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} totals Listado de preguntas de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total usuarios.",
    "totals": 2
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/users (01) Obtener listado de usuarios.
 * @apiVersion 0.0.16
 * @apiName getUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} limit Total de resultados por página (por defecto = 10).
 * @apiParam (Query Params) {String} page Página (por defecto = 1).
 * @apiParam (Query Params) {String} input Campo por ordenar (campos = document | created | names | lastNames) (Opcional).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} word Número de documento o nombre a buscar (Opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} users Listado de preguntas de seguridad.
 *
 * @apiSuccess (users Object[]) {Number|Null} gender ID (array index) del sexo del usuario.
 * @apiSuccess (users Object[]) {Number} role Role del usuario.
 * @apiSuccess (users Object[]) {String} created_at Fecha de la última actualización del perfil.
 * @apiSuccess (users Object[]) {String} _id ID del usuario.
 * @apiSuccess (users Object[]) {String} phone Número de teléfono.
 * @apiSuccess (users Object[]) {String} document Número de documento.
 * @apiSuccess (users Object[]) {String} names Nombres.
 * @apiSuccess (users Object[]) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Usuarios.",
	"users": [
		{
			"gender": 0,
			"role": 5,
			"created_at": "2021-02-09 00:10:26",
			"_id": "6022194c88342006d4a700f3",
			"phone": "563161234567",
			"document": "CC12345675",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
		},
		{
			"gender": 1,
			"role": 1,
			"created_at": "2020-12-13 10:03:12",
			"_id": "5fd62d49304a9a5a686adc1a",
			"phone": "563161234567",
			"document": "CC123456788",
			"names": "ADMIN DOS",
			"lastNames": "PRUEBA"
		},
		{
			"gender": 2,
			"role": 5,
			"created_at": "2020-12-07 23:59:12",
			"_id": "5fcf0821fc917d476c1cf3e3",
			"phone": "573161234567",
			"document": "CC12345678",
			"names": "PEDRO JOSE",
			"lastNames": "PÉREZ"
		}
	]
}
 * @apiSuccessExample {JSON} Success without data
 * HTTP/1.1 200 Success
 * {
    "msg": "Usuarios.",
    "users": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/users (02) Crear nuevo usuario.
 * @apiVersion 0.0.17
 * @apiName createUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiParam {String} email Correo electrónico.
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {Number} role Rol para el usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "email": "user2@example.com",
  "phone": "573161234567",
  "names": "Anthony alejandro",
  "lastNames": "velasquez rodriguez",
  "document": "CC24402234",
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiErrorExample {JSON} Without privileges
 * HTTP/1.1 403 Forbidden
 * {
    "msg": "Disculpe, pero no tiene permisos para realizar esta acción."
  }
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "email",
            "msg": "Disculpe, pero el correo electrónico ya se encuentra asignado a otro usuario. Verifíquelo e intente nuevamente."
        },
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
 * @apiUse GlobalErrorSystem
 *
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
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
 * @apiParam {String} email Correo electrónico.
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {Number} gender ID (index array) del sexo.
 * @apiParam {Number} birthday Fecha de nacimiento (Formato: YYYY-MM-DD).
 * @apiParam {Number} civilStatus ID (index array) del estado civil.
 * @apiParam {Number} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number} profession ID (index array) de la profesión.
 * @apiParam {Number} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType ID (index array) del tipo de empresa en caso de que posea.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 * @apiParam {Number} department ID (index array) del departamento.
 * @apiParam {Number} city ID (index array) de la ciudad.
 * @apiParam {String} locality Nombredel sector o localidad.
 * @apiParam {String} direction Dirección.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "email": "user@example.com",
    "phone": "584121490196",
    "names": "Usuario tres",
    "lastNames": "Prueba tres",
    "document": "CC12345678",
		"gender": 2,
		"birthday": "1994-07-07",
		"civilStatus": 0,
		"educationLevel": 0,
		"profession": 90,
		"bloodType": 7,
    "company": false,
    "companyType": null,
    "baptized": true,
    "department": 19,
    "city": 18,
    "locality": "URB. NUEVO MUNDO",
    "direction": "URB. NUEVO MUNDO #66"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 *
 * @apiSuccess (data Object) {Number} gender ID (array index) del sexo.
 * @apiSuccess (data Object) {String} birthday Fecha de nacimiento (Formato: YYYY-MM-DD).
 * @apiSuccess (data Object) {Number} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del usuario.
 * @apiSuccess (data Object) {Number} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombre de la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se han actualizado los datos del usuario exitosamente.",
	"user": {
		"gender": 2,
		"birthday": "1994-07-07",
		"civilStatus": 0,
		"educationLevel": 0,
		"profession": 90,
		"bloodType": 7,
		"company": false,
		"companyType": null,
		"baptized": true,
		"role": 5,
		"department": 19,
		"city": 18,
		"locality": "URB. NUEVO MUNDO",
		"direction": "URB. NUEVO MUNDO #66",
		"created_at": "2020-12-07 23:59:12",
		"updated_at": "2021-02-18 17:51:10",
		"_id": "5fcf0821fc917d476c1cf3e3",
		"phone": "584121490196",
		"document": "CC12345678",
		"names": "USUARIO TRES",
		"lastNames": "PRUEBA TRES",
		"email": "user@example.com"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
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
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/users/:_id/referrals (05) Obtener listado de referidos de un usuario.
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
 * @apiSuccess {Object[]} members Listado de referidos del usuario.
 *
 * @apiSuccess (user Object) {String|Null} referred Datos del usuario referido.
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombres.
 * @apiSuccess (user Object) {String} lastNames Apellidos.
 *
 * @apiSuccess (referred Object and members Object[]) {String} _id ID del usuario.
 * @apiSuccess (referred Object and members Object[]) {String} document Número de documento.
 * @apiSuccess (referred Object and members Object[]) {String} names Nombres.
 * @apiSuccess (referred Object and members Object[]) {String} lastNames Apellidos.
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/*
 * @api {put} /api/admin/users/:_id (06) Cambiar rol de un usuario.
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Invalid role
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el rol seleccionado es incorrecto."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */
