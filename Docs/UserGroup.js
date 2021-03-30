/**
 * @api {get} /api/user/group (00) Obtener datos del grupo familiar.
 * @apiVersion 0.0.27
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
 * @apiSuccess (group Object) {Object[]} members Listado de miembros pertenecientes al grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (members Object[]) {String} _id ID del miembro.
 * @apiSuccess (members Object[]) {String} names Nombres.
 * @apiSuccess (members Object[]) {String} lastNames Apellidos.
 * @apiSuccess (members Object[]) {String} document Número de documento.
 * @apiSuccess (members Object[]) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (members Object[]) {String|Null} phone Teléfono.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mi grupo familiar",
	"group": {
		"_id": "6018e503e02a45115407e82f",
		"name": "FAMILIA VELASQUEZ RODRIGUEZ",
		"code": "AAA-001",
		"members": [
			{
				"_id": "5fcf0821fc917d476c1cf3e3",
				"names": "PEDRO JOSÉ",
				"lastNames": "PÉREZ RODRIGUEZ",
				"document": "CC12345678",
				"gender": 0,
				"phone": "573161234567"
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
 * @api {get} /api/user/group/:memberId (01) Obtener datos de un miembro del grupo familiar.
 * @apiVersion 0.0.28
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
 * @apiSuccess (member Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (member Object) {Number|Null} civilStatus ID (array index) del estado civil del miembro.
 * @apiSuccess (member Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (member Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (member Object) {String|Null} locality Nombre de la localidad.
 * @apiSuccess (member Object) {String|Null} direction Dirección.
 * @apiSuccess (member Object) {String} _id ID del miembro.
 * @apiSuccess (member Object) {String|Null} phone Número de teléfono.
 * @apiSuccess (member Object) {String} names Nombres.
 * @apiSuccess (member Object) {String} lastNames Apellidos.
 * @apiSuccess (member Object) {String|Null} email Correo electrónico.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String|Null} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String|Null} approved Indica si ha aprobado el curso o no.
 *
 * @apiSuccess (referrals Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals Object[]) {String} names Nombres.
 * @apiSuccess (referrals Object[]) {String} lastNames Apellidos.
 * @apiSuccess (referrals Object[]) {String} document Número de documento.
 * @apiSuccess (referrals Object[]) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (referrals Object[]) {String|Null} phone Teléfono.
 * @apiSuccess (referrals Object[]) {Number} totalReferrals Total de referidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Miembro.",
	"data": {
		"member": {
			"gender": 0,
			"civilStatus": 0,
			"department": 19,
			"city": 18,
			"locality": "CRUZ ROJA",
			"direction": "C/CRUZ ROJA #62",
			"_id": "6022194c88342006d4a700f3",
			"phone": "563161234567",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ",
			"email": "anthony@example.com"
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
				"phone": null,
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
