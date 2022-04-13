/**
 * @api {get} /api/admin/users/counters (00) Obtener total de miembros.
 * @apiVersion 0.0.40
 * @apiName countersUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} search Número de documento o nombre a buscar (Opcional).
 * @apiParam (Query Params) {String} admins Obtiene los usuarios de tipo admin (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder) (Opcional).
 * @apiParam (Query Params) {Any} referreds Cargar solo miembros que fueron referidos.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} totals Total de miembros.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total miembros.",
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
 * @api {get} /api/admin/users (01) Obtener listado de miembros.
 * @apiVersion 0.0.40
 * @apiName getUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Query Params) {String} limit Total de resultados por página (por defecto = 10).
 * @apiParam (Query Params) {String} page Página (por defecto = 1).
 * @apiParam (Query Params) {String} input Campo por ordenar (campos = document | created | names | lastNames) (Opcional).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).).
 * @apiParam (Query Params) {String} admins Obtiene los usuarios de tipo admin (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder) (Opcional).
 * @apiParam (Query Params) {String} search Número de documento o nombre a buscar (Opcional).
 * @apiParam (Query Params) {Any} referreds Cargar solo miembros que fueron referidos.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} users Listado de usuarios.
 *
 * @apiSuccess (users Object[]) {String} _id ID del miembro.
 * @apiSuccess (users Object[]) {String} names Nombre(s).
 * @apiSuccess (users Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (users Object[]) {String|Null} document Número de documento.
 * @apiSuccess (users Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (users Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (users Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (users Object[]) {String|Null} position Cargo o posición del miembro.
 * @apiSuccess (users Object[]) {Number[]} roles Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona)
 * @apiSuccess (users Object[]) {String} created_at Fecha de la última actualización del perfil.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Usuarios.",
	"users": [
    {
      "gender": null,
      "roles": [
        3,
        4
      ],
      "picture": "https://delii.s3.amazonaws.com/alma/users/611902c09e346616b6eaadb5/picture-611902c09e346616b6eaadb5-1629251391.jpg",
      "_id": "611902c09e346616b6eaadb5",
      "phone": "31567554414",
      "names": "EIMY",
      "lastNames": "VALENTINA",
      "created_at": "2021-08-15 07:04:16",
      "document": null
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/users (02) Crear nuevo miembro.
 * @apiVersion 0.0.33
 * @apiName createUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiParam {String} phone Teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} names Fecha de la visita (YYYY-MM-DD).
 * @apiParam {String|Null} email Correo electrónico.
 * @apiParam {String} birthday Fecha de nacimiento (YYYY-MM-DD).
 * @apiParam {Number|Null} civilStatus ID (array index) Estado civil.
 * @apiParam {Number|Null} gender ID (array index) del genero (sexo).
 * @apiParam {String|Null} gender Observaciones de la visita.
 * @apiParam {String|Null} locality Barrio o localidad.
 * @apiParam {String|Null} direction Dirección.
 * @apiParam {boolean} consolidated Indica si el miembro fue consolidado.
 * @apiParam {String|Null} referred ID del miembro consolidador.
 * @apiParam {String|Null} petition Petición solicitada por el nuevo miembro.
 * @apiParam {boolean} attendGroup Indica si el miembro asiste a un grupo.
 * @apiParam {String|Null} groupId ID del grupo al que asiste el nuevo miembro.
 * @apiParam {Number[]} roles Roles asignar al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).
 *
 * @apiExample {JSON} Example JSON Request
 *{
  "phone": "573161234567",
  "names": "Anthony alejandro",
  "lastNames": "Velasquez rodriguez",
  "email": "anthony@example.com",
  "birthday": "1994-07-07",
  "civilStatus": 0,
  "gender": 0,
  "locality": 'Barrio nuevo',
  "direction": 'Dirección cualquiera',
  "consolidated": true,
  "referred": "605e37d154abd33060a689dc",
  "petition": "Por la familia, por salud y por mejora económica.",
  "attendGroup": true,
  "groupId": "6063385c98fc731c04777829",
  "roles": [ 4 ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha registrado el nuevo miembro exitosamente.",
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
            "input": "phone",
            "msg": "Disculpe, pero debe indicar un número de teléfono."
        },
        {
            "input": "names",
            "msg": "Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro."
        },
        {
            "input": "lastNames",
            "msg": "Disculpe, pero debe asegurarse de indicar el apellido del miembro."
        }
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/users/:_id (03) Obtener detalles de un miembro.
 * @apiVersion 0.0.36
 * @apiName getDetailsUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del miembro.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 *
 * @apiSuccess (data Object) {String} _id ID del miembro.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String|Null} email Correo electrónico.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String|Null} position Cargo(s) o posición.
 * @apiSuccess (data Object) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (data Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number|Null} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number[]} roles Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).
 * @apiSuccess (data Object) {Object|Null} referred Datos del referido (padre espiritual).
 * @apiSuccess (data Object) {String|Null} petition Petición realizada por el mimebto al momento de registrarse.
 * @apiSuccess (data Object) {Boolean} attendGroup Asiste a un grupo familiar.
 * @apiSuccess (data Object) {Boolean} consolidated Indica si el miembro fue consolidado.
 * @apiSuccess (data Object) {Boolean} meetingNew Indica si el miembro asistió al curso de nuevo ingreso.
 * @apiSuccess (data Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombrede la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} picture Dirección.
 * @apiSuccess (data Object) {String} church ID de la iglesia a la que asiste.
 * @apiSuccess (data Object) {Object} totals Totales de cursos e hijos espirituales.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 *
 * @apiUse MemberObjectSimpleDataResponse
 *
 * @apiSuccess (totals Object) {Number} totalsCourses Cursos totales.
 * @apiSuccess (totals Object) {Number} totalsReferrals Total de referidos (Hijos espirituales).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Detalles del miembro.",
  "user": {
    "_id": "609d21bd32ce5839900cb1ff",
    "document": null,
    "email": "amber@gmail.com",
    "phone": "3161231241",
    "names": "AMBER LISSETH",
    "lastNames": "VELASQUEZ",
    "position": null,
    "gender": 1,
    "birthday": "2020-05-25",
    "civilStatus": 0,
    "educationLevel": null,
    "profession": null,
    "bloodType": null,
    "company": false,
    "companyType": null,
    "baptized": false,
    "roles": [
      4
    ],
    "referred": {
      "_id": "6081367a18fdbc37e89aff7d",
      "names": "ANTHONY",
      "lastNames": "VELASQUEZ",
      "document": null,
      "gender": null,
      "phone": "584121480199",
      "picture": null,
      "position": null
    },
    "petition": "ASASD ASD ASDASDA SD",
    "attendGroup": true,
    "consolidated": true,
    "department": null,
    "city": null,
    "locality": "ASDASDASDASDASD",
    "direction": "ASDASDASDASDASDASD",
    "picture": null,
    "church": "624a357644f15f3ce8200c2f",
    "totals": {
      "totalsCourses": 1,
      "totalsReferrals": 0
    },
    "created_at": "2021-05-13 07:55:25",
    "updated_at": "2021-05-13 07:55:25"
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
 * @api {put} /api/admin/users/:_id (04) Actualizar datos de un miembro.
 * @apiVersion 0.0.34
 * @apiName changeRoleUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del miembro.
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String|Null} document Número de documento del identidad.
 * @apiParam {String|Null} email Correo electrónico.
 * @apiParam {Number|Null} gender ID (index array) del sexo.
 * @apiParam {Number|Null} birthday Fecha de nacimiento (Formato: YYYY-MM-DD).
 * @apiParam {Number|Null} civilStatus ID (index array) del estado civil.
 * @apiParam {Number|Null} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number|Null} profession ID (index array) de la profesión.
 * @apiParam {Number|Null} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType ID (index array) del tipo de empresa en caso de que posea.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 * @apiParam {Boolean} meetingNew Indica si el miembro asistió al curso de nuevo ingreso.
 * @apiParam {Number|Null} department ID (index array) del departamento.
 * @apiParam {Number|Null} city ID (index array) de la ciudad.
 * @apiParam {String|Null} locality Nombredel sector o localidad.
 * @apiParam {String|Null} direction Dirección.
 * @apiParam {String|Null} position Cargo(s) o posición.
 * @apiParam {String} church ID de la iglesia a la que asiste.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "email": null,
		"phone": "573161234567",
		"names": "AMBERCITA",
		"lastNames": "VELASQUEZ",
    "document": null,
		"gender": null,
		"birthday": null,
		"civilStatus": null,
		"educationLevel": null,
		"profession": null,
		"bloodType": null,
    "company": false,
    "companyType": null,
    "baptized": false,
    "meetingNew": false,
    "department": null,
    "city": null,
    "locality": "URB. NUEVO MUNDO",
    "direction": "URB. NUEVO MUNDO #66",
		"position": "PADRE ESPIRITUAL Y LIDER",
		"church": "624a357644f15f3ce8200c2f"
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
 * @apiSuccess (data Object) {Boolean} meetingNew Indica si el miembro asistió al curso de nuevo ingreso.
 * @apiSuccess (data Object) {Number[]} roles Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).
 * @apiSuccess (data Object) {Number} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombre de la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del miembro.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 * @apiSuccess (data Object) {String} position Cargo o posición del miembro.
 * @apiSuccess (data Object) {String} church ID de la iglesia a la que asiste.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se han actualizado los datos del miembro exitosamente.",
	"user": {
		"email": null,
		"position": "PADRE ESPIRITUAL Y LIDER",
		"gender": null,
		"birthday": null,
		"civilStatus": null,
		"educationLevel": null,
		"profession": null,
		"bloodType": null,
		"company": false,
		"companyType": null,
		"baptized": false,
		"meetingNew": false,
		"roles": [ 4 ],
		"consolidated": true,
		"group": null,
		"familyGroupId": [],
		"department": null,
		"city": null,
		"locality": "URB. NUEVO MUNDO",
		"direction": "URB. NUEVO MUNDO #66",
		"_id": "6076598d598ae749a42a0147",
		"phone": "573161234567",
		"names": "AMBERCITA",
		"lastNames": "VELASQUEZ",
		"created_at": "2021-04-13 21:55:09",
		"updated_at": "2021-04-13 22:24:50",
		"document": null,
		"church": "624a357644f15f3ce8200c2f"
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
      "input": "phone",
      "msg": "Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9)."
    },
    {
      "input": "names",
      "msg": "Disculpe, pero debe asegurarse de indicar el nombre."
    },
    {
      "input": "lastNames",
      "msg": "Disculpe, pero debe asegurarse de indicar el apellido."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/users/:_id/referrals (05) Obtener listado de referidos de un miembro.
 * @apiVersion 0.0.36
 * @apiName getReferralsUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del miembro.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del miembro y listado de referidos.
 *
 * @apiSuccess {Object} user Datos del miembro.
 * @apiSuccess {Object[]} referrals Listado de referidos del miembro.
 *
 * @apiSuccess (referrals Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals Object[]) {String} names Nombre(s).
 * @apiSuccess (referrals Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (referrals Object[]) {String|Null} document Número de documento.
 * @apiSuccess (referrals Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (referrals Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (referrals Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (referrals Object[]) {String|Null} position Cargo o posición del miembro.
 * @apiSuccess (referrals Object[]) {Number} totalReferrals Total de referidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de referidos del miembro.",
  "referrals": [
    {
      "_id": "609d21bd32ce5839900cb1ff",
      "names": "AMBER LISSETH",
      "lastNames": "VELASQUEZ",
      "document": null,
      "gender": 1,
      "phone": "3161231241",
      "picture": null,
      "position": null,
      "totalsReferrals": 0
    },
    .
    .
    .
  ]
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
 * @api {get} /api/admin/users/:_id/courses (06) Obtener listado de cursos de un miembro.
 * @apiVersion 0.0.28
 * @apiName getCoursesUsersListAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del miembro.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de cursos.
 *
 * @apiSuccess (courses Object[]) {Boolean} enable Indica si el curso se encuentra publicado.
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Boolean} level Nivel del curso.
 * @apiSuccess (courses Object[]) {Boolean} approved Indica si el curso fue aprobado o no.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Listado de cursos del miembro.",
	"courses": [
		{
			"_id": "603afb2309bf7a3428ac58f7",
			"slug": "nivel-uno",
			"title": "NIVEL UNO",
			"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
			"level": 1
			"approved": false
		},
		.
		.
		.
	]
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
 * @api {put} /api/admin/users/:_id (07) Cambiar rol de un miembro.
 * @apiVersion 0.0.33
 * @apiName updateUsersAdmin
 * @apiGroup UsersAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID del miembro.
 *
 * @apiParam {Number[]} roles Rol para el miembro (valores: 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "roles": [ 3, 4 ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se asignado el nuevo rol al miembro exitosamente."
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
