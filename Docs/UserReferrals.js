/**
 * @api {get} /api/user/referrals (00) Obtener listado de hijos espirituales.
 * @apiVersion 0.0.27
 * @apiName getUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object|Null} referred Datos del padre espiritual de este usuario.
 * @apiSuccess {Number} totals Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).
 * @apiSuccess {Object[]} referrals Listado de hijos espirituales.
 *
 * @apiSuccess (referred Object) {String} _id ID del miembro.
 * @apiSuccess (referred Object) {String} names Nombres.
 * @apiSuccess (referred Object) {String} lastNames Apellidos.
 * @apiSuccess (referred Object) {String} document Número de documento.
 * @apiSuccess (referred Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (referred Object) {String|Null} phone Teléfono.
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
	"msg": "Mis referidos.",
	"referred": {
		"_id": "5fcf0821fc917d476c1cf3e2",
		"names": "ANTHONY",
		"lastNames": "ADMINISTRADOR",
		"document": "CC123456789",
		"gender": 1,
		"phone": "573161234567"
	},
	"totals": 5,
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
 *
 * @apiSuccessExample {JSON} Success without data
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis referidos.",
	"referred": null,
	"totals": 0,
	"referrals": []
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
 * @api {get} /api/user/referrals/:memberId (01) Obtener datos de un hijo espiritual.
 * @apiVersion 0.0.28
 * @apiName getDataMemberUserReferrals
 * @apiGroup UserReferrals
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
 * @apiSuccess (data Object) {Number} totalsReferrals Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).
 * @apiSuccess (data Object) {Object[]} courses Listado de cursos.
 * @apiSuccess (data Object) {Object[]} referrals Listado de hijos espirituales.
 * @apiSuccess (data Object) {Object[]} visits Listado de visitas.
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
 * @apiSuccess (visits Object[]) {Object|Nukk} consolidator ID del curso.
 * @apiSuccess (visits Object[]) {String} date Fecha de la visita (YYYY-MM-DD).
 * @apiSuccess (visits Object[]) {String} observation Observaciones obtenidas en la visita.
 *
 * @apiSuccess (referrals and consolidator Object[]) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (referrals and consolidator Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals and consolidator Object[]) {String} document Número de documento.
 * @apiSuccess (referrals and consolidator Object[]) {String} names Nombres.
 * @apiSuccess (referrals and consolidator Object[]) {String} lastNames Apellidos.
 * @apiSuccess (referrals and consolidator Object[]) {String|Null} phone Teléfono.
 * @apiSuccess (referrals and consolidator Object[]) {Number} totalReferrals Total de referidos.
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
		"totalCourses": 5,
		"totalReferrals": 12,
		"courses": [
			{
				"_id": "603afb2309bf7a3428ac58f1",
				"slug": "nivel-uno",
				"title": "NIVEL UNO",
				"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
				"level": 1,
				"approved": false
			},
			.
			.
			.
		],
		"referrals": [
			{
				"gender": null,
				"_id": "6045ebc578cb41018883d3ea",
				"phone": null,
				"document": "CC11223344",
				"names": "JOSÉ",
				"lastNames": "ESPINOZA"
			},
			.
			.
			.
		],
		"visits": [
			{
				"consolidator": {
					"_id": "5fcf0821fc917d476c1cf3e3",
					"names": "PEDRO JOSÉ",
					"lastNames": "PÉREZ RODRIGUEZ",
					"document": "CC12345678",
					"gender": 0,
					"phone": "3161234567"
				},
				"date": "2021-04-12",
				"observation": "ACURABITUR ALIQUET QUAM ID DUI POSUERE BLANDIT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. NULLA PORTTITOR ACCUMSAN TINCIDUNT. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A.\n\nCURABITUR ALIQUET QUAM ID DUI POSUERE BLANDIT. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A.\n\nCURABITUR NON NULLA SIT AMET NISL TEMPUS CONVALLIS QUIS AC LECTUS. DONEC SOLLICITUDIN MOLESTIE MALESUADA. CURABITUR NON NULLA SIT AMET NISL TEMPUS CONVALLIS QUIS AC LECTUS. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A."
			},
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
 * @apiErrorExample {JSON} Error memberId
 * HTTP/1.1 422 Unprocessable Entity
 * {
	"msg": "Disculpe, pero el miembro seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} The member Doesn't belong to the group
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales."
}
 *
 * @apiErrorExample {JSON} The member not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no se logró encontrar la información solicitada."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/user/referrals/visit (02) Registrar visita a un hijo espiritual.
 * @apiVersion 0.0.31
 * @apiName saveVisitUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} userId ID del usuario visitado.
 * @apiParam {String} date Fecha de la visita (YYYY-MM-DD).
 * @apiParam {String} observation Observaciones de la visita.
 *
 * @apiExample {JSON} Example JSON Request with Referred
 * {
	"userId": "5fcf0821fc917d476c1cf3e2",
	"date": "2021-04-01",
	"observation": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha registrado la visita al consolidado exitosamente."
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
      "input": "userId",
      "msg": "Disculpe, pero el miembro seleccionado es incorrecto."
    },
    {
      "input": "date",
      "msg": "Disculpe, pero indicar una fecha para la visita."
    },
    {
      "input": "observation",
      "msg": "Disculpe, pero indicar un observación válida."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */
