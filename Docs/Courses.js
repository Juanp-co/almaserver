/**
 * @api {get} /api/courses (00) Obtener listado de cursos.
 * @apiVersion 0.0.28
 * @apiName getCoursesList
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = level).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de cursos.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} speaker Orador del curso.
 * @apiSuccess (courses Object[]) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String} enable Indica si el usuario puede visualizar el curso (dependerá de su progreso).
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Cursos",
	"courses": [
		{
			"_id": "603afb2309bf7a3428ac58f1",
			"speaker": "PEDRO PÉREZ",
			"speakerPosition": "LÍDER ESPIRITUAL",
			"title": "Nivel uno",
			"slug": "nivel-uno",
			"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
			"level": 1,
			"enable": true
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
 * @api {get} /api/courses/:slug (01) Obtener detalles de un curso.
 * @apiVersion 0.0.28
 * @apiName getDetailsCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Detalles del curso.
 * @apiSuccess {Object} dataCourseUser Progreso del curso del miembro.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} speaker Nombre completo del orador del curso.
 * @apiSuccess (course Object) {Number} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Number} level Nivel del curso.
 * @apiSuccess (course Object) {Object[]} temary Listado de temas del curso.
 *
 * @apiSuccess (temary Object[]) {String} _id ID del tema.
 * @apiSuccess (temary Object[]) {String} title Título del tema.
 * @apiSuccess (temary Object[]) {String|Null} description Descripción del tema.
 * @apiSuccess (temary Object[]) {String|Null} urlVideo URL del video (youtube).
 * @apiSuccess (temary Object[]) {Object[]|Null} quiz Listado del preguntas del quiz.
 * @apiSuccess (temary Object[]) {Number} view Indica el progreso del tema (0 = sin ver | 1 = viendo | 2 = visto).
 *
 * @apiSuccess (quiz Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (quiz Object[]) {String} title Título o pregunta.
 * @apiSuccess (quiz Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (quiz Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiSuccess (quiz Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (quiz Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (quiz Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 *
 * @apiSuccess (dataCourseUser Object) {String} _id ID del registro.
 * @apiSuccess (dataCourseUser Object) {Object[]} course Datos del progreso del curso.
 *
 * @apiSuccess (course Object[] dataCourseUser Object) {Boolean} approved Indica si el curso ha sido aprobado.
 * @apiSuccess (course Object[] dataCourseUser Object) {String} courseId ID del curso.
 * @apiSuccess (course Object[] dataCourseUser Object) {Number} level Nivel del curso.
 * @apiSuccess (course Object[] dataCourseUser Object) {Object[]} temary Actividad de los temas del curso.
 * @apiSuccess (course Object[] dataCourseUser Object) {String} created_at Fecha de creación.
 * @apiSuccess (course Object[] dataCourseUser Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (temary Object[] course dataCourseUser Object) {Number} view Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (temary Object[] course dataCourseUser Object) {String} date Fecha de la última visualización del tema.
 * @apiSuccess (temary Object[] course dataCourseUser Object) {String} temaryId ID del tema relacionado.
 *
 * @apiSuccessExample {JSON} Success without dataCourseUser
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603afb2309bf7a3428ac58f1",
		"speaker": "PEDRO PÉREZ",
		"speakerPosition": "LÍDER ESPIRITUAL",
		"code": "NIVEL-UNO",
		"title": "Nivel uno",
		"slug": "nivel-uno",
		"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
		"level": 1,
		"temary": [
			{
				"_id": "603afb6e09bf7a3428ac58ea",
				"title": "Video",
				"description": "<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>",
				"urlVideo": null,
				"quiz": null,
				"view": 2
			},
			{
				"_id": "603afb6e09bf7a3428ac58fa",
				"title": "Video",
				"description": "<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>",
				"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
				"quiz": null,
				"view": 1
			},
			{
				"_id": "603afb7809bf7a3428ac58fb",
				"title": "QUIZ",
				"description": null,
				"urlVideo": null,
				"quiz": [
					{
						"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
						"placeholder": "Indica tu respuesta",
						"require": false,
						"values": [],
						"_id": "603afbbb09bf7a3428ac5900",
						"title": "PREGUNTA 1 EDITADA",
						"inputType": "text"
					},
					{
						"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
						"placeholder": "Indica tu respuesta",
						"require": true,
						"values": [
							"Respuesta 1",
							"Respuesta 2",
							"Respuesta 3"
						],
						"_id": "603afbdb09bf7a3428ac5901",
						"title": "PREGUNTA 2",
						"inputType": "radio"
					},
					.
					.
					.
				],
				"view": 0
			},
			.
			.
			.
		]
	},
	"dataCourseUser": {
		"_id": "60617a5be9576a4170b5f9e5",
		"course": {
			"approved": false,
			"courseId": "603afb2309bf7a3428ac58f1",
			"level": 1,
			"temary": [
				{
					"view": 2,
					"date": "2021-03-29 03:15:42",
					"temaryId": "603afb6e09bf7a3428ac58ea"
				},
				{
					"view": 1,
					"date": "2021-03-29 03:15:42",
					"temaryId": "603afb6e09bf7a3428ac58fa"
				},
				{
					"view": 0,
					"date": "2021-03-29 03:16:14",
					"temaryId": "603afb7809bf7a3428ac58fb"
				},
				.
				.
				.
			],
			"created_at": "2021-03-29 01:57:31",
			"updated_at": "2021-03-29 01:57:31"
		}
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
 * @api {put} /api/courses/:slug/theme/:themeId/:action (02) Marcar como 'VIENDO' o 'VISTO' un tema.
 * @apiVersion 0.0.28
 * @apiName setWatchingOrViewedThemeCourses
 * @apiGroup Courses
 *
 * @apiDescription Este endpoint es para actualizar el progreso del miembro en relación a un tema.
 * En la ruta, el parámetro ':action' indica la acción a realizar, donde los valores:
 *
 * '1' indica que el miembro está viendo el contenido.
 * '2' indica que el miembro ya visualizó el contenido.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
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
 * @api {post} /api/courses/:slug/theme/:themeId/quiz (03) Enviar repuestas de un QUIZ.
 * @apiVersion 0.0.28
 * @apiName sendAnswersQuizCourses
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
    "msg": "Ha aprobado el examen exitosamente.",
    "average": 100,
    "approved": true
}
 *
 * @apiSuccessExample {JSON} Success with decimal average
 * HTTP/1.1 200 Success
 * {
    "msg": "Ha aprobado el examen exitosamente.",
    "average": "84.66",
    "approved": true
}
 *
 * @apiSuccessExample {JSON} Success, but not approved
 * HTTP/1.1 200 Success
 * {
    "msg": "Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del examen.",
    "average": 66.66,
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
