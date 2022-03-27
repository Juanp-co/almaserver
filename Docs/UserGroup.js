/* static */

/**
 * @apiDefine ErrorIdOrNotFoundInvitation
 *
 * @apiErrorExample {JSON} Invalid invitation _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero la invitación seleccionada es incorrecta."
}
 *
 * @apiErrorExample {JSON} Invitation not found
 * HTTP/1.1 404 Not Found
 * {
    "msg": "Disculpe, pero la invitación seleccionada no existe o no se encuentra disponible."
}
 *
 * */

/* Docs */

/**
 * @api {get} /api/user/group (00) Crear grupo familiar.
 * @apiVersion 0.0.46
 * @apiName saveFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión (persona).
 *
 * @apiParam {String} name Nombre del grupo.
 * @apiParam {String|Null} code Código del grupo (opcional).
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "name": "Familia Rodriguez",
    "code": "ROD-001"
}
 * @apiExample {JSON} Example JSON Request without code
 * {
    "name": "Familia Rodriguez",
    "code": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Detalles del grupo.
 *
 * @apiSuccess (group Object) {Object[]} members Listado de miembros (vacío).
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} title Título del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de creación del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del contenido del grupo.
 * @apiSuccess (group Object) {String} userid ID del miembro que creó el grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha creado el núcleo familiar exitosamente.",
    "group": {
        "_id": "6018fbe959529c4068b62af5",
        "name": "FAMILIA RODRIGUEZ",
        "code": "ROD-001",
        "members": [],
        "created_at": "2021-02-02 02:14:49",
        "updated_at": "2021-02-02 02:14:49",
        "userid": "5fcf0821fc917d476c1cf3e2"
    }
}
 * @apiSuccessExample {JSON} Success with auto-code
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha creado el grupo exitosamente.",
    "group": {
        "_id": "6018fbe959529c4068b62af5",
        "name": "FAMILIA RODRIGUEZ",
        "code": "GROUP-1",
        "members": [],
        "created_at": "2021-02-02 02:14:49",
        "updated_at": "2021-02-02 02:14:49",
        "userid": "5fcf0821fc917d476c1cf3e2"
    }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "name",
      "msg": "Disculpe, pero debe indicar un nombre para el grupo."
    }
  ]
}
 *
 * @apiErrorExample {JSON} The code exists
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el código indicado ya se encuentra asignado a otro grupo."
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/group (01) Obtener datos del grupo familiar.
 * @apiVersion 0.0.46
 * @apiName getFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object|Null} group Datos del grupo familiar del miembro.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {String} userid ID del creador del grupo.
 * @apiSuccess (group Object) {Object[]} members Listado de miembros pertenecientes al grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiUse MemberObjectSimpleListDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mi grupo familiar",
	"group": {
		"_id": "6018e503e02a45115407e82f",
		"name": "FAMILIA VELASQUEZ RODRIGUEZ",
		"code": "AAA-001",
		"userid": "5fcf0821fc917d476c1cf3e3",
		"members": [
      {
        "_id": "5fcf0821fc917d476c1cf3e3",
        "names": "PEDRO JOSÉ",
        "lastNames": "PÉREZ RODRIGUEZ",
        "document": "CC12345678",
        "gender": null,
        "phone": "3161234567",
        "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg",
        "position": null
      },
			.
			.
			.
		],
		"created_at": "2021-02-02 00:37:07",
		"updated_at": "2021-02-02 02:45:50"
	}
}
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mi grupo familiar",
	"group": null
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {put} /api/user/group/:_id (02) Actualizar un grupo familiar.
 * @apiVersion 0.0.46
 * @apiName updateFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {String} name Nombre del grupo.
 * @apiParam {String} code Código del grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "name": "Familia Velasquez Rodriguez",
    "code": "AAA-001"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Detalles del grupo.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {String} userid ID del creador del grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el núcleo familiar exitosamente.",
  "group": {
    "_id": "6018e503e02a45115407e82f",
    "name": "FAMILIA VELASQUEZ RODRIGUEZ",
    "userid": "5fcf0821fc917d476c1cf3e3",
    "code": "AAA-001",
    "created_at": "2021-02-02 00:37:07",
    "updated_at": "2021-02-02 02:16:16"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Can't edit
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no puede realizar esta acción."
}
 *
 * @apiErrorExample {JSON} The code exists
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el código indicado ya se encuentra asignado a otro grupo."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "name",
      "msg": "Disculpe, pero debe indicar un nombre para el grupo."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/user/group/:_id (03) Eliminar un grupo.
 * @apiVersion 0.0.46
 * @apiName deleteFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha eliminado el grupo exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiErrorExample {JSON} Can't delete
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no puede realizar esta acción."
}
 *
 * @apiUse GroupsErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/user/group/:_id/members/add (04) Agregar miembros al grupo.
 * @apiVersion 0.0.46
 * @apiName addMemberFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {String[]} members Listado de IDs de los miembros a agregar al grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "members": [
        "5fcf0821fc917d476c1cf3e3"
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Solicitudes enviadas exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Can't add
 * HTTP/1.1 403 Forbidden
 * {
  "msg": "Disculpe, pero no puede realizar esta acción."
}
 *
 * @apiErrorExample {JSON} Error data
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "members",
      "msg": "Disculpe, pero los datos enviados son incorrectos."
    },
    {
      "input": "members",
      "msg": "Disculpe, pero los miembros seleccionados son incorrectos."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/user/group/:_id/members/remove (05) Remover miembros del grupo.
 * @apiVersion 0.0.46
 * @apiName removeMembersFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {String[]} members Listado de IDs de los miembros a remover del grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "members": [
        "5fcf0821fc917d476c1cf3e3"
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el listado de miembros exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Can't add
 * HTTP/1.1 403 Forbidden
 * {
  "msg": "Disculpe, pero no puede realizar esta acción."
}
 *
 * @apiErrorExample {JSON} Error data
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "members",
      "msg": "Disculpe, pero los datos enviados son incorrectos."
    },
    {
      "input": "members",
      "msg": "Disculpe, pero los miembros seleccionados son incorrectos."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/user/group/invitations/totals (06) Obtener total de invitaciones de grupos.
 * @apiVersion 0.0.46
 * @apiName totalsInvitationsUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number} totals Total de invitaciones.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Total de invitaciones",
  "totals": 1
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
 * @api {get} /api/user/group/invitations/totals (07) Obtener invitaciones de grupos.
 * @apiVersion 0.0.46
 * @apiName invitationsUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} invitations Listado de invitaciones.
 *
 * @apiSuccess (invitations Object[]) {String} _id ID de la invitación.
 * @apiSuccess (invitations Object[]) {Object} group Datos del grupo.
 * @apiSuccess (invitations Object[]) {Object} member Datos del miembro que envió la solicitud.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {Number} totalMembers Total de miembros del grupo.
 *
 * @apiUse MemberObjectSimpleListDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Invitaciones",
  "invitations": [
    {
      "_id": "623fa770c51b0f2f74de4559",
      "group": {
        "_id": "623ed5890572e33ef0fbb2b3",
        "name": "FAMILIA VELASQUEZ RODRIGUEZ",
        "code": "AAA-001",
        "totalMembers": 1
      },
      "member": {
        "_id": "617a09bd2b0b95656950e9c3",
        "names": "USUARIO",
        "lastNames": "PRUEBA",
        "document": null,
        "gender": null,
        "phone": "3161234567",
        "picture": "https://delii.s3.amazonaws.com/alma/users/617a09bd2b0b95656950e9c3/picture-617a09bd2b0b95656950e9c3-1635521638.jpg",
        "position": null
      }
    }
  ]
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
 * @api {put} /api/user/group/invitations/_id (08) Aceptar invitación de un grupo.
 * @apiVersion 0.0.46
 * @apiName approveInvitationsUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID de la invitación
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiUse MemberObjectSimpleListDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha aceptado la invitación exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundInvitation
 *
 * @apiErrorExample {JSON} Invitation not found
 * HTTP/1.1 404 Not Found
 * {
    "msg": "Disculpe, pero el grupo indicado en la invitación no existe o no se encuentra disponible."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/user/group/invitations/_id (08) Rechazar invitación de un grupo.
 * @apiVersion 0.0.46
 * @apiName rejectInvitationsUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID de la invitación
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiUse MemberObjectSimpleListDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha rechazado la invitación exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundInvitation
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/user/group/person/:memberId (09) Obtener datos de un miembro del grupo familiar.
 * @apiVersion 0.0.46
 * @apiName getDataMemberUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} memberId ID del miembro a consultar.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del miembro del grupo.
 *
 * @apiSuccess (data Object) {Object} member Datos del perfil del miembro.
 * @apiSuccess (data Object) {String} totalCourses Total de cursos que ha visualizado.
 * @apiSuccess (data Object) {String} totalReferrals Total de referidos.
 * @apiSuccess (data Object) {Object[]} courses Listado de cursos.
 * @apiSuccess (data Object) {Object[]} referrals Listado de hijos espirituales.
 *
 * @apiSuccess (member Object) {String|Null} email Correo electrónico.
 * @apiSuccess (member Object) {String|Null} position Cargo o posición.
 * @apiSuccess (member Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (member Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (member Object) {Number|Null} civilStatus ID (array index) del estado civil del miembro.
 * @apiSuccess (member Object) {Boolean} consolidated Indica si el miembro fue consolidado.
 * @apiSuccess (member Object) {String|Null} petition Petición realizada por el miembro al momento de registrarse.
 * @apiSuccess (member Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (member Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (member Object) {String|Null} locality Nombre de la localidad.
 * @apiSuccess (member Object) {String|Null} direction Dirección.
 * @apiSuccess (member Object) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (member Object) {String} _id ID del miembro.
 * @apiSuccess (member Object) {String} phone Número de teléfono.
 * @apiSuccess (member Object) {String} names Nombres.
 * @apiSuccess (member Object) {String} lastNames Apellidos.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String|Null} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String|Null} approved Indica si ha aprobado el curso o no.
 *
 * @apiSuccess (referrals Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals Object[]) {String} names Nombre(s).
 * @apiSuccess (referrals Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (referrals Object[]) {String|Null} document Número de documento.
 * @apiSuccess (referrals Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (referrals Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (referrals Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (referrals Object[]) {String|Null} position Cargo o posición del miembro.
 * @apiSuccess (referrals Object[]) {Numbers} totalsReferrals Total de referidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Miembro.",
	"data": {
		"member": {
      "email": "pedro@example.com",
      "position": null,
      "gender": 0,
      "birthday": "1994-07-07",
      "civilStatus": 0,
      "consolidated": false,
      "petition": null,
      "department": 0,
      "city": 0,
      "locality": "LOCALIDAD INICIAL",
      "direction": "CUALQUIER DIRECCIÓN",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg",
      "_id": "5fcf0821fc917d476c1cf3e3",
      "phone": "3161234567",
      "names": "PEDRO JOSÉ",
      "lastNames": "PÉREZ RODRIGUEZ"
		},
		"totalReferrals": 1,
		"totalCourses": 5,
		"courses": [
			{
				"_id": "603afb2309bf7a3428ac58f7",
				"slug": "nivel-uno",
				"title": "NIVEL UNO",
				"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
				"level": 1
				"approved": true
			},
			.
			.
			.
		],
		"referrals": [
      {
        "_id": "604068461caad10e2c965406",
        "names": "PRUEBA",
        "lastNames": "USUARIO",
        "document": "CC123123123",
        "gender": null,
        "phone": "573151234567",
        "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg",
        "position": null,
        "totalsReferrals": 0
      },
			.
			.
			.
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
 * @apiErrorExample {JSON} Not belong at the group
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero usted no pertenece a ningún grupo familiar."
}
 *
 * @apiErrorExample {JSON} The group not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el grupo familiar no existe."
}
 *
 * @apiErrorExample {JSON} Not found member in group
 * HTTP/1.1 403 Forbidden
 * {
	"msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar."
}
 *
 * @apiErrorExample {JSON} The member not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero no se logró encontrar la información solicitada."
}
 *
 * @apiErrorExample {JSON} Error memberId
 * HTTP/1.1 422 Unprocessable Entity
 * {
	"msg": "Disculpe, pero el miembro seleccionado es incorrecto."
}
 *
 * @apiUse GlobalErrorSystem
 */
