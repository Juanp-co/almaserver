/**
 * @api {get} /api/courses/counters (00) Obtener contador de cursos.
 * @apiVersion 0.0.18
 * @apiName getCountersCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number} totals Total de cursos disponibles.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total de cursos.",
    "totals": 2
}
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/courses (01) Obtener listado de cursos.
 * @apiVersion 0.0.19
 * @apiName getCoursesList
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = title).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de cursos.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} speaker Orador del curso.
 * @apiSuccess (courses Object[]) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String} banner URL de la imagen del curso.
 * @apiSuccess (courses Object[]) {String} description Descripción del curso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Cursos",
	"courses": [
		{
			"_id": "603490a7cb2c7e406c5ff2b5",
			"speaker": "ANTHONY VELASQUEZ",
			"speakerPosition": "SOFTWARE DEVELOPER",
			"title": "CURSO JAVASCRIPT 2021",
			"slug": "curso-javascript-2021",
			"banner": "http://url.com/images/1614664308734.jpeg",
			"description": "Donec sollicitudin molestie malesuada. ..."
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
    "msg": "Cursos.",
    "courses": []
}
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/courses/:slug (02) Obtener detalles de un curso.
 * @apiVersion 0.0.19
 * @apiName getDetailsCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Detalles del curso.
 * @apiSuccess {Object|Null} dataCourseUser Progreso del curso del usuario.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} speaker Nombre completo del orador del curso.
 * @apiSuccess (course Object) {Number} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (course Object) {String} banner Url de la imagen del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Object[]} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Object[]} levels Listado de cursos que el usuario debe completar antes continuar.
 *
 * @apiSuccess (dataCourseUser Object) {String} _id ID del registro.
 * @apiSuccess (dataCourseUser Object) {Object[]} temary Actividad de los temas del curso.
 * @apiSuccess (dataCourseUser Object) {Boolean} approved Indica si el curso ha sido aprobado.
 * @apiSuccess (dataCourseUser Object) {String} created_at Fecha de creación.
 * @apiSuccess (dataCourseUser Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (temary Object[] dataCourseUser) {Number} view Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (temary Object[] dataCourseUser) {String} date Fecha de la última visualización del tema.
 * @apiSuccess (temary Object[] dataCourseUser) {Boolean} approved Indica si el tema fue aprobado o no.
 * @apiSuccess (temary Object[] dataCourseUser) {String} approvedDate Fecha de aprobación del tema.
 * @apiSuccess (temary Object[] dataCourseUser) {String} temaryId ID del tema relacionado.
 * @apiSuccess (temary Object[] dataCourseUser) {Object[]} content Lisado de contenido del tema (Avances del usuario).
 * @apiSuccess (temary Object[] dataCourseUser) {Object[]} test Listado de pruebas del tema.
 *
 * @apiSuccess (content Object[] temary dataCourseUser) {Number} view Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (content Object[] temary dataCourseUser) {String|Null} date Fecha de la última visualización del contenido.
 * @apiSuccess (content Object[] temary dataCourseUser) {String} contentId ID del contenido.
 *
 * @apiSuccess (test Object[] temary dataCourseUser) {Number} _id ID de la prueba realizada.
 * @apiSuccess (test Object[] temary dataCourseUser) {Number} points Puntos obtenidos.
 * @apiSuccess (test Object[] temary dataCourseUser) {String} date Fecha de realización de la prueba.
 *
 * @apiSuccess (temary Object[]) {String} _id ID del tema.
 * @apiSuccess (temary Object[]) {String} title Título del tema.
 * @apiSuccess (temary Object[]) {String|Null} description Descripción del tema.
 * @apiSuccess (temary Object[]) {Object[]} content Listado del contenido del tema.
 *
 * @apiSuccess (content Object[]) {String} _id ID del tema.
 * @apiSuccess (content Object[]) {String} title Título del contenido.
 *
 * @apiSuccess (levels Object[]) {String} banner URL de la imagen del curso.
 * @apiSuccess (levels Object[]) {String} _id ID del curso.
 * @apiSuccess (levels Object[]) {String} title Título del curso.
 * @apiSuccess (levels Object[]) {String} slug Slug del curso.
 * @apiSuccess (levels Object[]) {String} description descripción del curso.
 *
 * @apiSuccessExample {JSON} Success without dataCourseUser
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"speaker": "ANTHONY VELASQUEZ",
		"speakerPosition": "SOFTWARE DEVELOPER",
		"code": "CURSO-JAVASCRIPT-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"slug": "curso-javascript-2021",
		"banner": "http://url.com/images/1614664308734.jpeg",
		"description": "Donec sollicitudin molestie malesuada...",
		"temary": [
			{
				"_id": "6036d87e1d222f3680f3a1d5",
				"title": "TEMA 1",
				"description": "<h1>Proin eget tortor risus.&nbsp;</h1>",
				"content": [
					{
						"_id": "6036d8c51d222f3680f3a1d7",
						"title": "CONTENIDO 1"
					},
					{
						"_id": "6036f4b01d222f3680f3a1dd",
						"title": "CONTENIDO PRUEBA"
					}
				]
			}
		],
		"levels": [
			{
				"banner": "http://url.com/images/1614664308734.jpeg",
				"_id": "601f09f99775034e10510fa2",
				"title": "CURSO CON TEMAS Y PRUEBAS",
				"slug": "curso-con-temas-y-pruebas",
				"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
			},
			{
				"banner": "http://url.com/images/1614664308734.jpeg",
				"_id": "603490a7cb2c7e406c5ff2b5",
				"slug": "curso-javascript-2021",
				"title": "CURSO JAVASCRIPT 2021",
				"description": "Donec sollicitudin molestie malesuada..."
			}
		]
	},
	"dataCourseUser": null
}
 *
 *
 * @apiSuccessExample {JSON} Success without levels
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"speaker": "ANTHONY VELASQUEZ",
		"speakerPosition": "SOFTWARE DEVELOPER",
		"code": "CURSO-JAVASCRIPT-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"slug": "curso-javascript-2021",
		"banner": "http://url.com/images/1614664308734.jpeg",
		"description": "Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\n\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
		"temary": [
			{
				"_id": "6036d87e1d222f3680f3a1d5",
				"title": "TEMA 1",
				"description": "<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>",
				"content": [
					{
						"_id": "6036d8c51d222f3680f3a1d7",
						"title": "CONTENIDO 1"
					},
					{
						"_id": "6036f4b01d222f3680f3a1dd",
						"title": "CONTENIDO PRUEBA"
					}
				]
			}
		],
		"levels": []
	},
	"dataCourseUser": null
}
 *
 * @apiSuccessExample {JSON} Success with dataCourseUser
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"speaker": "ANTHONY VELASQUEZ",
		"speakerPosition": "SOFTWARE DEVELOPER",
		"code": "CURSO-JAVASCRIPT-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"slug": "curso-javascript-2021",
		"banner": "http://url.com/images/1614664308734.jpeg",
		"description": "Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\n\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
		"temary": [
			{
				"_id": "6036d87e1d222f3680f3a1d5",
				"title": "TEMA 1",
				"description": "<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>",
				"content": [
					{
						"_id": "6036d8c51d222f3680f3a1d7",
						"title": "CONTENIDO 1"
					},
					{
						"_id": "6036f4b01d222f3680f3a1dd",
						"title": "CONTENIDO PRUEBA"
					}
				]
			}
		],
		"levels": [
			{
		    "banner": "http://url.com/images/1614664308734.jpeg",
				"_id": "601f09f99775034e10510fa2",
				"title": "CURSO CON TEMAS Y PRUEBAS",
				"slug": "curso-con-temas-y-pruebas",
				"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
			},
			{
		    "banner": "http://url.com/images/1614664308734.jpeg",
				"_id": "603490a7cb2c7e406c5ff2b5",
				"slug": "curso-javascript-2021",
				"title": "CURSO JAVASCRIPT 2021",
				"description": "Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\n\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		]
	},
	"dataCourseUser": {
		"_id": "603a9846d2238146649ae0ce",
		"temary": [
			{
				"view": 0,
				"date": null,
				"approved": false,
				"approvedDate": null,
				"temaryId": "6036d87e1d222f3680f3a1d5",
				"content": [
					{
						"view": 0,
						"date": null,
						"contentId": "6036d8c51d222f3680f3a1d7"
					},
					{
						"view": 0,
						"date": null,
						"contentId": "6036f4b01d222f3680f3a1dd"
					}
				],
				"test": []
			}
		],
		"approved": false,
		"created_at": "2021-02-27 14:06:46",
		"updated_at": "2021-02-27 14:06:46"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/courses/:slug/add (03) Agergar un curso al listado del usuario.
 * @apiVersion 0.0.18
 * @apiName addCourseUser
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} added Detalles del curso.
 *
 * @apiSuccess (added Object) {Boolean} approved Indica si el curso está aprobado.
 * @apiSuccess (added Object) {String} _id ID del registro.
 * @apiSuccess (added Object) {String} userid ID del usuario.
 * @apiSuccess (added Object) {String} courseId ID del curso.
 * @apiSuccess (added Object) {Object[]} temary Actividad de los temas del curso.
 * @apiSuccess (added Object) {String} created_at Fecha de registro.
 * @apiSuccess (added Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (temary Object[]) {Number} view Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (temary Object[]) {String|Null} date Fecha de la última vista.
 * @apiSuccess (temary Object[]) {Boolean} approved Indica si el tema fue aprobado o no.
 * @apiSuccess (temary Object[]) {String|Null} approvedDate Fecha de aprobación del tema.
 * @apiSuccess (temary Object[]) {String} temaryId ID del tema.
 * @apiSuccess (temary Object[]) {Object[]} content Contenido del tema (histórico de usuario).
 * @apiSuccess (temary Object[]) {Object[]} tests Listado de pruebas realizadas para el tema.
 *
 * @apiSuccess (content Object[]) {Number} view Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (content Object[]) {String|Null} date Fecha de la última visualización del contenido.
 * @apiSuccess (content Object[]) {String} contentId ID del contenido.
 *
 * @apiSuccess (tests Object[]) {String} _id ID de la prueba.
 * @apiSuccess (tests Object[]) {Number} points Cantidad de puntos obtenidos.
 * @apiSuccess (tests Object[]) {String} date Fecha de presentación.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha agregado el curso exitosamente.",
	"added": {
		"approved": false,
		"_id": "603a9846d2238146649ae0ce",
		"userid": "6022194c88342006d4a700f3",
		"courseId": "603490a7cb2c7e406c5ff2b5",
		"temary": [
			{
				"view": 0,
				"date": null,
				"approved": false,
				"approvedDate": null,
				"temaryId": "6036d87e1d222f3680f3a1d5",
				"content": [
					{
						"view": 0,
						"date": null,
						"contentId": "6036d8c51d222f3680f3a1d7"
					},
					{
						"view": 0,
						"date": null,
						"contentId": "6036f4b01d222f3680f3a1dd"
					}
				],
				"test": []
			}
		],
		"created_at": "2021-02-27 14:06:46",
		"updated_at": "2021-02-27 14:06:46",
		"__v": 0
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiErrorExample {JSON} Course without themes
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso actual no cuenta con temas."
}
 *
 * @apiErrorExample {JSON} Course added previously
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya tiene disponible este curso en su cuenta."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/courses/:slug/theme/:themeId (04) Obtener un tema.
 * @apiVersion 0.0.18
 * @apiName getThemeCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (theme Object) {String} _id ID del curso.
 * @apiSuccess (theme Object) {String} title Título del tiema.
 * @apiSuccess (theme Object) {String|Null} description Descripción del tema.
 * @apiSuccess (theme Object) {Number} view Indica si el tema fue visto (0 = Sin Ver | 1 = Viendo | 2 = Visto).
 * @apiSuccess (theme Object) {Object[]} content Listado del contenido del tema.
 *
 * @apiSuccess (content Object[]) {String} _id ID del contenido.
 * @apiSuccess (content Object[]) {String} title Título.
 * @apiSuccess (content Object[]) {String|Null} description Descripción.
 * @apiSuccess (content Object[]) {String|Null} urlVideo URL del video.
 * @apiSuccess (content Object[]) {Number} view Indica si el contenido fue visto (0 = Sin Ver | 1 = Viendo | 2 = Visto).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Tema",
	"theme": {
		"_id": "6036d87e1d222f3680f3a1d5",
		"title": "TEMA 1",
		"description": "<h1>Proin eget tortor risus.&nbsp;</h1>",
		"view": 0,
		"content": [
			{
				"_id": "6036d8c51d222f3680f3a1d7",
				"title": "CONTENIDO 1",
				"description": "<h1>Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</h1>",
				"urlVideo": "https://www.youtube.com/watch?v=VopHjhP5d2E",
				"view": 0
			},
			{
				"_id": "6036f4b01d222f3680f3a1dd",
				"title": "CONTENIDO PRUEBA",
				"description": "<h1>Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</h1>",
				"urlVideo": null,
				"view": 0
			}
		]
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiUse CommonCourseNotRegisterInUser
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiUse CommonCourseNotCompletedPreviousCourse
 *
 * @apiErrorExample {JSON} Course no available
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el curso no se encuentra disponible."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/courses/:slug/theme/:themeId/content/:contentId/:action (05) Marcar como 'VIENDO' o 'VISTO' un contenido de un tema.
 * @apiVersion 0.0.18
 * @apiName setWatchingOrViewedContentThemeCourses
 * @apiGroup Courses
 *
 * @apiDescription Este endpoint es para actualizar el progreso del usuario en relación al contenido de un tema.
 * En la ruta, el parámetro ':action' indica la acción a realizar, donde los valores:
 *
 * '1' indica que el usuario está viendo el contenido.
 * '2' indica que el usuario ya vió el contenido.
 *
 * Automáticamente, el servicio realiza una actualización del estado en el que se encuentra el tema en relación a su contenido.
 * Ejemplo:
 *
 * 1. Si el usuario no ha visto ningún contenido del TEMA, este tendrá un valor de cero (0), que significa 'NO VISTO'.
 * 2. Si el usuario ha visto al menos un contenido del TEMA, este tendrá un valor de uno (1), que significa 'VIENDO' o 'VISUALIZANDO'.
 * 3. Si el usuario ha visto todos los contenidos del TEMA, este tendrá un valor de dos (2), que significa que ha 'VISTO' completamente el contenido.
 *
 * Si el punto tres (3) se cumple, podrá solicita la prueba respectiva del tema.
 * Ver punto: "(06) Obtener prueba (examen) para aprobar un tema" en este mismo grupo de endpoints.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} contentId ID del contenido.
 * @apiParam (Path params) {Number} action Acción a realizar (valores: 1 = viendo | 2 = visto).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Boolean} updated Indica si el progreso fue exitoso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "¡Éxito al guardar el progreso!",
	"updated": true
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiUse CommonCourseNotRegisterInUser
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiUse CommonCourseErrorIdOrNotFoundContent
 *
 * @apiUse CommonCourseNotCompletedPreviousCourse
 *
 * @apiErrorExample {JSON} Invalid action
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se logró determinar la acción a realizar."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/courses/:slug/theme/:themeId/test (06) Obtener prueba (examen) para aprobar un tema.
 * @apiVersion 0.0.18
 * @apiName getTestCourses
 * @apiGroup Courses
 *
 * @apiDescription El siguiente ENDPOINT es para poder obtener las preguntas de la prueba (examen) para poder aprobar el
 * curso. El servicio retorna un listado de pregunta con diferentes parámetros para poder ser ajustadas en la vista. Entre
 * las opciones de los diferentes campos (inputType) se disponen: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select'.
 *
 * Los tipos de campos variarán dependiendo del contenido de la llave 'value'. Si el arreglo 'value' contiene datos, este
 * obligariamente debe ser diferente de 'text' o 'textarea'.
 *
 * Para más información sobre como se crean las pruebas para los cursos, visualice el servicio '(02) Crear nuevo curso.'
 * en la sección 'CoursesAdmin'.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} test Listado de preguntas de la prueba.
 *
 * @apiSuccess (test Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (test Object[]) {String} title Título o pregunta.
 * @apiSuccess (test Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (test Object[]) {String|Null} extra Información extra para completar la pregunta.
 * @apiSuccess (test Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiSuccess (test Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (test Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (test Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Examen del tema",
	"test": [
		{
			"_id": "601f09f99775034e10510fa8",
			"title": "01 - ¿Qué es el internet?",
			"description": "<p>Seleccione una opción</p>",
			"extra": null,
			"inputType": "radio",
			"placeholder": "Indica tu respuesta",
			"require": true,
			"values": [
				"Una red de redes interconectada",
				"Una estúfa",
				"Una computador",
				"Una reunión de amigos"
			]
		},
		{
			"_id": "601f09f99775034e10510fa9",
			"title": "02 - ¿Cuál es el objetivo de internet?",
			"description": "<p>Indique una respuesta</p>",
			"extra": null,
			"inputType": "text",
			"placeholder": "Indique una respuesta",
			"require": true,
			"values": []
		}
	]
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiUse CommonCourseNotRegisterInUser
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiUse CommonCourseNotCompletedPreviousCourse
 *
 * @apiErrorExample {JSON} Unfinished all content of theme
 * HTTP/1.1 403 Forbidden
 * {
    "msg": "Disculpe, pero no puede realizar la prueba hasta haber completado el contenido del tema."
  }
 *
 * @apiUse CommonCourseAllCompleted
 *
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/courses/:slug/theme/:themeId/test (07) Enviar repuestas de una prueba para aprobar el curso.
 * @apiVersion 0.0.18
 * @apiName sendAnswersTestCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {Object[]} data Listado de respuestas.
 *
 * @apiParam (data Object[]) {String} questionId ID de la pregunta.
 * @apiParam (data Object[]) {String} answer Respuesta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "data": [
        {
            "questionId": "5ff8e4116f5c8648c0353e99",
            "answer": "0"
        },
        {
            "questionId": "5ff8e4116f5c8648c0353e9a",
            "answer": "Lorem"
        },
        .
        .
        .
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number|String} average Promedio de respuestas obtenido.
 * @apiSuccess {Boolean} approved Indica si aprobó o no el curso.
 *
 * @apiSuccessExample {JSON} Success and approved
 * HTTP/1.1 200 Success
 * {
    "msg": "Ha aprobado el curso exitosamente.",
    "average": 100,
    "approved": true
}
 *
 * @apiSuccessExample {JSON} Success with decimal average
 * HTTP/1.1 200 Success
 * {
    "msg": "Ha aprobado el curso exitosamente.",
    "average": "66.66",
    "approved": true
}
 *
 * @apiSuccessExample {JSON} Success and not approved
 * HTTP/1.1 200 Success
 * {
    "msg": "Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del curso.",
    "average": 50,
    "approved": false
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiUse CommonCourseNotRegisterInUser
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiErrorExample {JSON} Validation data
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "data",
            "msg": "Disculpe, pero no se logró recibir la información de la prueba."
        },
        {
            "input": "questionId",
            "msg": "Disculpe, pero una de las preguntas de la prueba es incorrecta."
        },
        {
            "input": "answer",
            "msg": "Disculpe, pero debe completar todas las respuesta de la prueba."
        }
    ]
  }
 *
 * @apiUse CommonCourseAllCompleted
 *
 * @apiUse GlobalErrorSystem
 *
 */
