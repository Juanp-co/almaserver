/**
 * @api {get} /api/admin/courses (00) Obtener listado de cursos.
 * @apiVersion 0.0.55
 * @apiName getCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = level).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de cursos.
 *
 * @apiSuccess (courses Object[]) {Boolean} enable Indica si el curso se encuentra publicado.
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} description Descripción del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug del curso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Cursos.",
	"courses": [
		{
			"enable": true,
			"_id": "603afb2309bf7a3428ac58f1",
			"level": 1,
			"title": "Nivel uno",
			"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
			"slug": "nivel-uno"
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
    "events": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/courses/:_id (01) Obtener detalles de un curso.
 * @apiVersion 0.0.55
 * @apiName detailsCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Query params) {String} slug Indica que el valor de '_id' será un 'slug'.
 *
 * @apiParam (Path params) {String} _id ID o slug del curso del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Datos del curso.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {Object|Null} user Datos del miembro creador del curso.
 * @apiSuccess (course Object) {String} speaker Orador del curso.
 * @apiSuccess (course Object) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Number} level Nivel del curso.
 * @apiSuccess (course Object) {Object[]} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Number[]} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {Boolean} enable Indica si el curso se encuentra disponible al público.
 * @apiSuccess (course Object) {String} created_at Fecha de registro del curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del curso.
 * @apiSuccess (course Object) {Number} totalsUsers Total de miembros con el curso.
 *
 * @apiSuccess (temary Object[]) {String} _id ID del tema.
 * @apiSuccess (temary Object[]) {String} title Título del tema.
 * @apiSuccess (temary Object[]) {String|Null} description Descripción del tema.
 * @apiSuccess (temary Object[]) {String|Null} urlVideo URL del video (Youtube).
 * @apiSuccess (temary Object[]) {Object[]|Null} quiz Listado de contenido del tema.
 *
 * @apiSuccess (quiz Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (quiz Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (quiz Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (quiz Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (quiz Object[]) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (quiz Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (quiz Object[]) {String} title Título o pregunta.
 * @apiSuccess (quiz Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 * @apiSuccess (user Object) {String} _id ID del miembro.
 * @apiSuccess (user Object) {String} names Nombres.
 * @apiSuccess (user Object) {String} lastNames Apellidos.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (user Object) {String} phone Teléfono.
 *
 * @apiSuccessExample {JSON} Success with all data
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603afb2309bf7a3428ac58f1",
		"user": {
			"_id": "5fcf0821fc917d476c1cf3e2",
			"names": "ANTHONY",
			"lastNames": "ADMINISTRADOR",
			"document": "CC123456789",
			"gender": 1,
			"phone": "31612345678"
		},
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
				"quiz": null
			},
			{
				"_id": "603afb6e09bf7a3428ac58fa",
				"title": "Video",
				"description": "<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>",
				"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
				"quiz": null
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
						"correctAnswer": null,
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
						"correctAnswer": 2,
						"_id": "603afbdb09bf7a3428ac5901",
						"title": "PREGUNTA 2",
						"inputType": "radio"
					},
					.
					.
					.
				]
			},
			.
			.
			.
		],
		"toRoles": [
			1,
			2,
			3,
			4,
			5
		],
		"enable": true,
		"created_at": "2021-02-27 21:08:35",
		"updated_at": "2021-03-29 01:24:48",
		"totalsUsers": 13
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/courses (02) Crear nuevo curso.
 * @apiVersion 0.0.28
 * @apiName createCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del curso.
 * @apiParam {Number} level Nivel del curso (1-5).
 * @apiParam {Number[]} toRoles Roles a los que va dirigido el curso.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "NUEVO CURSO",
	"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
	"level": 1,
	"toRoles": [
		5
	]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha guardado el nuevo curso exitosamente."
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
            "input": "title",
            "msg": "Disculpe, pero indicar un título válido para el curso."
        },
        {
            "input": "description",
            "msg": "Disculpe, pero indicar una descripción válida para el curso."
        },
        {
            "input": "level",
            "msg": "Disculpe, pero seleccionar el nivel para el curso."
        },
        {
            "input": "toRoles",
            "msg": "Disculpe, pero los roles a los que va digido el curso."
        }
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/enable (03) Publicar o retirar curso del listado público.
 * @apiVersion 0.0.28
 * @apiName enableCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del curso.
 *
 * @apiSuccess (data Object) {Boolean} enable Datos del curso.
 * @apiSuccess (data Object) {Object[]} levels Listados de cursos previos que han sido retirados de la sección pública (en caso de disponer)
 *
 * @apiSuccess (levels Object[]) {String} banner URL de la imagen del curso.
 * @apiSuccess (levels Object[]) {Boolean} enable Indica si el curso se encuentra publicado.
 * @apiSuccess (levels Object[]) {String} _id ID del curso.
 * @apiSuccess (levels Object[]) {String} title Título del curso.
 * @apiSuccess (levels Object[]) {String} slug Slug del curso.
 * @apiSuccess (levels Object[]) {String} description Descripción del curso.
 *
 * @apiSuccessExample {JSON} Success published course
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha publicado el curso exitosamente.",
	"data": {
		"enable": true
	}
}
 *
 * @apiSuccessExample {JSON} Success remove course
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha retirado el curso exitosamente.",
	"data": {
		"enable": false
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Must contain a description
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso debe contener una descripción."
}
 *
 * @apiErrorExample {JSON} Must contain a speaker name
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso debe contener el nombre del ponente."
}
 *
 * @apiErrorExample {JSON} Must contain a speaker position
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso debe contener el cargo o posición del ponente."
}
 *
 * @apiErrorExample {JSON} Must indicate the roles
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero se debe indicar a que roles va dirigido el curso."
}
 *
 * @apiErrorExample {JSON} Must contain themes
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero se debe el curso no puede ser publicado sin temas."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/info (04) Actualizar información básica de un curso.
 * @apiVersion 0.0.18
 * @apiName updateSimpleInfoCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del curso.
 * @apiParam {String} speaker Nombre completo del orador (ponente).
 * @apiParam {String} speakerPosition Cargo o posición del orador (ponente) del curso.
 * @apiParam {Number[]} toRoles Roles a los que va dirigido el curso.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "CURSO JAVASCRIPT 2021",
	"description": "Donec sollicitudin molestie malesuada. ...,
	"speaker": "ANTHONY VELASQUEZ",
	"speakerPosition": "SOFTWARE DEVELOPER",
	"toRoles": [
		5
	]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Detalles del curso.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {String} speaker Nombre completo del orador del curso.
 * @apiSuccess (course Object) {Number} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {Number[]} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del contenido del curso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del curso exitosamente.",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"code": "CURSO-JAVASCRIPT-2021",
		"slug": "curso-javascript-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"description": "Donec sollicitudin molestie malesuada. ...,
		"speaker": "ANTHONY VELASQUEZ",
		"speakerPosition": "SOFTWARE DEVELOPER",
		"toRoles": [
			5
		],
		"updated_at": 1614377534,
		"__v": 1
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "title",
            "msg": "Disculpe, pero indicar un título generar para el curso."
        },
        {
            "input": "description",
            "msg": "Disculpe, pero indicar una descripción válida para el curso."
        },
        {
            "input": "speaker",
            "msg": "Disculpe, pero indicar el nombre completo del orador del curso."
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
 * @api {post} /api/admin/courses/:_id/theme (05) Agregar tema a un curso.
 * @apiVersion 0.0.28
 * @apiName addThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiDescription Los temas para los cursos pueden contener diversos contenidos. Un tema puede temer una descripción,
 * una descripción y un video, una descripción y un quiz.
 *
 * Las mezclas NO pueden ser 'Quiz - Video'. Los Quiz solo son preguntas para responder. Estos pueden contener una descripción solamente.
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html).
 * @apiParam {String|Null} urlVideo URL video (youtube).
 * @apiParam {Object[]|Null} quiz Descripción del tema. Este puede ser texto simple o enriquecido (html)
 *
 * @apiParam (quiz Object[] Param) {String} title Título o pregunta.
 * @apiParam (quiz Object[] Param) {String|Null} description Descripción de la pregunta.
 * @apiParam (quiz Object[] Param) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiParam (quiz Object[] Param) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam (quiz Object[] Param) {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam (quiz Object[] Param) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam (quiz Object[] Param) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..
 *
 * @apiExample {JSON} Example JSON Request with only description
 * {
	"title": "01 - Introducción",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
	"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
	"quiz": null
}
 * @apiExample {JSON} Example JSON Request with video
 * {
	"title": "01 - Introducción",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
	"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
	"quiz": null
}
 * @apiExample {JSON} Example JSON Request with quiz
 * {
	"title": "CONTENIDO QUIZ",
	"description": null,
	"urlVideo": null,
	"quiz": [
		{
			"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
			"placeholder": null,
			"require": false,
			"values": [],
			"correctAnswer": null,
			"_id": "603afbbb09bf7a3428ac5900",
			"title": "PREGUNTA 1",
			"inputType": "text"
		},
		{
			"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
			"placeholder": null,
			"require": true,
			"values": [
				"Respuesta 1",
				"Respuesta 2",
				"Respuesta 3"
			],
			"correctAnswer": 2,
			"_id": "603afbdb09bf7a3428ac5901",
			"title": "PREGUNTA 2",
			"inputType": "radio"
		},
		{
			"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
			"placeholder": "Mensaje de prueba",
			"require": true,
			"values": [],
			"correctAnswer": null,
			"_id": "603afbf509bf7a3428ac5902",
			"title": "PREGUNTA 3",
			"inputType": "text"
		},
		.
		.
		.
	]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (theme Object) {String|Null} description Descripción del tema.
 * @apiSuccess (theme Object) {String|Null} urlVideo URL del video (youtube).
 * @apiSuccess (theme Object) {String} _id ID del tema.
 * @apiSuccess (theme Object) {String} title Título del tema.
 * @apiSuccess (theme Object) {Object[]|Null} quiz Listado de pregunta para el Quiz.
 *
 * @apiSuccess (quiz Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (quiz Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (quiz Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (quiz Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (quiz Object[]) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (quiz Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (quiz Object[]) {String} title Título o pregunta.
 * @apiSuccess (quiz Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el tema exitosamente.",
	"theme": {
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
		"urlVideo": null,
		"_id": "606035a03961a109ecf47bae",
		"title": "CONTENIDO TEXTO",
		"quiz": null
	}
}
 *
 * @apiSuccessExample {JSON} Success with video
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el tema exitosamente.",
	"theme": {
	  "description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
		"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
		"_id": "606035b33961a109ecf47baf",
		"title": "CONTENIDO VIDEO",
		"quiz": null
	}
}
 *
 * @apiSuccessExample {JSON} Success with quiz
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el tema exitosamente.",
	"theme": {
		"description": null,
		"urlVideo": null,
		"_id": "606039a6f6303543549ea3e3",
		"title": "CONTENIDO QUIZ",
		"quiz": [
			{
				"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
				"placeholder": "Indica tu respuesta",
				"require": false,
				"values": [],
				"correctAnswer": null,
				"_id": "606039a6f6303543549ea3e4",
				"title": "PREGUNTA 1",
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
				"correctAnswer": 2,
				"_id": "606039a6f6303543549ea3e5",
				"title": "PREGUNTA 2",
				"inputType": "radio"
			},
			{
				"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
				"placeholder": "Mensaje de prueba",
				"require": true,
				"values": [],
				"correctAnswer": null,
				"_id": "606039a6f6303543549ea3e6",
				"title": "PREGUNTA 3",
				"inputType": "text"
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
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "title",
      "msg": "Disculpe, pero indicar un título válido para el tema."
    }
  ]
}
 *
 * @apiErrorExample {JSON} Quiz validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "title",
      "msg": "Disculpe, pero indicar un título válido para la pregunta."
    },
    {
      "input": "inputType",
      "msg": "Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta."
    },
    {
      "input": "values",
      "msg": "Disculpe, pero debe indicar las opciones de respuestas para la pregunta."
    },
    {
      "input": "inputType",
      "msg": "Disculpe, pero debe indicar la respuesta correcta."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/theme/:themeId (06) Actualizar contenido de un tema.
 * @apiVersion 0.0.28
 * @apiName updateThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html).
 * @apiParam {String|Null} urlVideo URL video (youtube).
 * @apiParam {Object[]|Null} quiz Descripción del tema. Este puede ser texto simple o enriquecido (html)
 *
 * @apiParam (quiz Object[] Param) {String} title Título o pregunta.
 * @apiParam (quiz Object[] Param) {String|Null} description Descripción de la pregunta.
 * @apiParam (quiz Object[] Param) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiParam (quiz Object[] Param) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam (quiz Object[] Param) {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam (quiz Object[] Param) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam (quiz Object[] Param) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..
 *
 * @apiExample {JSON} Example JSON Request with only description
 * {
	"title": "CONTENIDO TEXTO EDITIADO",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
	"urlVideo": null,
	"quiz": null
}
 * @apiExample {JSON} Example JSON Request with video
 * {
	"title": "CONTENIDO VIDEO EDITADO",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
	"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
	"quiz": null
}
 * @apiExample {JSON} Example JSON Request with quiz
 * {
	"title": "CONTENIDO QUIZ EDITADO",
	"description": null,
	"urlVideo": null,
	"quiz": [
		{
			"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
			"placeholder": null,
			"require": false,
			"values": [],
			"correctAnswer": null,
			"_id": "603afbbb09bf7a3428ac5900",
			"title": "PREGUNTA 1 EDITADA",
			"inputType": "text"
		},
		{
			"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
			"placeholder": null,
			"require": true,
			"values": [
				"Respuesta 1",
				"Respuesta 2",
				"Respuesta 3"
			],
			"correctAnswer": 2,
			"_id": "603afbdb09bf7a3428ac5901",
			"title": "PREGUNTA 2 EDITADA",
			"inputType": "radio"
		},
		{
			"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
			"placeholder": "Mensaje de prueba",
			"require": true,
			"values": [],
			"correctAnswer": null,
			"_id": "603afbf509bf7a3428ac5902",
			"title": "PREGUNTA 3 EDITADA",
			"inputType": "text"
		},
		.
		.
		.
	]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (theme Object) {String|Null} description Descripción del tema.
 * @apiSuccess (theme Object) {String|Null} urlVideo URL del video (youtube).
 * @apiSuccess (theme Object) {String} _id ID del tema.
 * @apiSuccess (theme Object) {String} title Título del tema.
 * @apiSuccess (theme Object) {Object[]|Null} quiz Listado de pregunta para el Quiz.
 *
 * @apiSuccess (quiz Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (quiz Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (quiz Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (quiz Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (quiz Object[]) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (quiz Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (quiz Object[]) {String} title Título o pregunta.
 * @apiSuccess (quiz Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 *
 * @apiSuccessExample {JSON} Success description edited
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO TEXTO EDITIADO",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>",
		"urlVideo": null,
		"quiz": null
	}
}
 *
 * @apiSuccessExample {JSON} Success video edited
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO VIDEO EDITADO",
		"description": null,
		"urlVideo": "https://www.youtube.com/watch?v=Eau625TqwR8",
		"quiz": null
	}
}
 *
 * @apiSuccessExample {JSON} Success quiz edited
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO QUIZ EDITADO",
		"description": null,
		"urlVideo": null,
		"quiz": [
			{
				"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
				"placeholder": "Indica tu respuesta",
				"require": false,
				"values": [],
				"correctAnswer": null,
				"_id": "6060390df6303543549ea3e0",
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
				"correctAnswer": 2,
				"_id": "6060390df6303543549ea3e1",
				"title": "PREGUNTA 2 EDITADA",
				"inputType": "radio"
			},
			{
				"description": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
				"placeholder": "Mensaje de prueba",
				"require": true,
				"values": [],
				"correctAnswer": null,
				"_id": "6060390df6303543549ea3e2",
				"title": "PREGUNTA 3 EDITADA",
				"inputType": "text"
			}
		]
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "title",
      "msg": "Disculpe, pero indicar un título válido para el tema."
    }
  ]
}
 *
 * @apiErrorExample {JSON} Quiz validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "title",
      "msg": "Disculpe, pero indicar un título válido para la pregunta."
    },
    {
      "input": "inputType",
      "msg": "Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta."
    },
    {
      "input": "values",
      "msg": "Disculpe, pero debe indicar las opciones de respuestas para la pregunta."
    },
    {
      "input": "inputType",
      "msg": "Disculpe, pero debe indicar la respuesta correcta."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/courses/:_id/theme/:themeId (07) Eliminar un tema.
 * @apiVersion 0.0.28
 * @apiName deleteThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el tema exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/courses/:_id (08) Elminar un curso.
 * @apiVersion 0.0.28
 * @apiName deleteCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el curso exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiUse GlobalErrorSystem
 *
 */
