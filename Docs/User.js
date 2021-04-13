/**
 * @api {get} /api/user (00) Obtener datos de la sesión.
 * @apiVersion 0.0.16
 * @apiName getDataSessionUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 *
 * @apiSuccess (data Object) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (data Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number|Null} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del miembro.
 * @apiSuccess (data Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombrede la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del miembro.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Datos de la sesión",
	"data": {
		"gender": null,
		"birthday": null,
		"civilStatus": null,
		"educationLevel": null,
		"profession": null,
		"bloodType": null,
		"company": false,
		"companyType": null,
		"baptized": false,
		"role": 5,
		"department": null,
		"city": null,
		"locality": null,
		"direction": null,
		"created_at": "2021-02-18 19:23:23",
		"updated_at": "2021-02-18 19:25:33",
		"_id": "602f057d8d3e7d073cef3e87",
		"email": "user3@example.com",
		"document": "CC12345675",
		"names": "ANTHONY",
		"lastNames": "VELÁSQUEZ"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {put} /api/user (01) Actualizar datos del perfil.
 * @apiVersion 0.0.32
 * @apiName registerUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String|Null} email Correo electrónico.
 * @apiParam {Number|Null} gender ID (index array) del sexo.
 * @apiParam {String|Null} birthday Fecha de nacimiento (YYYY-MM-DD).
 * @apiParam {Number|Null} civilStatus ID (index array) del estado civil.
 * @apiParam {Number|Null} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number|Null} profession ID (index array) de la profesión.
 * @apiParam {Number|Null} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType ID (index array) del tipo de empresa en caso de que posea.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 * @apiParam {Number|Null} department ID (index array)del departamento.
 * @apiParam {Number|Null} city ID (index array)de la ciudad.
 * @apiParam {String|Null} locality Nombredel barrio o vereda.
 * @apiParam {String|Null} direction Dirección.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "email": "user3@example.com",
    "phone": "573161234567",
    "names": "Anthony alejandro",
    "lastNames": "Velasquez rodriguez",
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
 * @apiSuccess {Object} data Datos actualizados.
 *
 * @apiSuccess (data Object) {Number} gender ID (array index) del sexo (género).
 * @apiSuccess (data Object) {String} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombrede la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} _id ID del miembro.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 *
 * @apiSuccess (securityQuestion Object) {String|Null} questionId ID de la pregunta de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información exitosamente.",
	"data": {
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
		"direction": "URB. NUEVO MUNDO #66",
		"_id": "602f057d8d3e7d073cef3e87",
		"email": "user3@example.com",
		"names": "ANTHONY ALEJANDRO",
		"lastNames": "VELASQUEZ RODRIGUEZ",
		"phone": "573161234567"
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
            "input": "phone",
            "msg": "Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9)."
        },
        {
            "input": "names",
            "msg": "Disculpe, pero debe asegurarse de indicar su(s) nombre(s)."
        },
        .
        .
        .
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
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
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/user/courses (03) Obtener cursos de un miembro.
 * @apiVersion 0.0.28
 * @apiName getCoursesListUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de curso del miembro.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String|Null} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String|Null} approved Indica si ha aprobado el curso o no.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis cursos.",
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
	]
}
 *
 * @apiSuccessExample {JSON} Success without courses
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis cursos.",
	"courses": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/reports (04) Obtener reportes de la cuenta.
 * @apiVersion 0.0.19
 * @apiName getReportsUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} initDate Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} report Listado de curso del miembro.
 *
 * @apiSuccess (report Object) {Object} courses Cursos del miembro.
 * @apiSuccess (report Object) {Object} referrals Referidos del miembro.
 *
 * @apiSuccess (courses and referrals Object) {String} title Título de la sección.
 * @apiSuccess (courses and referrals Object) {Object[]|Array[]} data Datos del reporte. El arreglo contiene otros arreglos con el modelo de data.
 * @apiSuccess (courses and referrals Object) {Number} qty Datos del reporte.
 *
 * @apiSuccess (data Array[] in referrals Object) {Object} data Datos del reporte.
 *
 * @apiSuccess (data Object[]) {String} data Etiqueta.
 * @apiSuccess (data Object[]) {Number} data Total de datos.
 *
 *
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis reportes.",
	"reports": {
		"courses": {
			"title": "Mis cursos",
			"data": [
				{
					"label": "Aprobados",
					"qty": 1
				},
				{
					"label": "Cursando",
					"qty": 0
				}
			],
			"qty": 1
		},
		"referrals": {
			"title": "Hijos espirituales",
			"data": [
				[
					{
						"label": "PRUEBA USUARIO",
						"qty": 0
					},
					{
						"label": "PADRE PRUEBA",
						"qty": 0
					},
					{
						"label": "ANTHONY ALEJANDRO VELÁSQUEZ RODRÍGUEZ",
						"qty": 1
					}
				],
				[
					{
						"label": "SUPERVISOR PRUEBA",
						"qty": 0
					}
				]
			],
			"qty": 4
		},
		"visits": {
			"title": "Visitas",
			"data": [
				{
					"label": "Pendientes",
					"qty": 1
				},
				{
					"label": "Realizadas",
					"qty": 2
				}
			],
			"qty": 3
		},
	}
}
 *
 * @apiSuccessExample {JSON} Success without referrals data
 * HTTP/1.1 200 Success
 * {{
	"msg": "Mis reportes.",
	"reports": {
		"courses": {
			"title": "Mis cursos",
			"data": [
				{
					"label": "Aprobados",
					"qty": 0
				},
				{
					"label": "Cursando",
					"qty": 0
				}
			],
			"qty": 0
		},
		"referrals": {
			"title": "Hijos espirituales",
			"data": [],
			"qty": 0
		}
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */
