/**
 * @api {get} /api/admin/courses/counters (00) Obtener contador de cursos.
 * @apiVersion 0.0.18
 * @apiName getCountersCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} enable Buscar solo cursos publicados (valores: 'true', 'false') (opcional).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 * @apiParam (Query Params) {String} ignoreIds En caso de agregar cursos a los listados, puede agregar un listado de ids separados por comas (,).
 * Ejemplo: 5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8. (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number} totals Totalizador de cursos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total de cursos.",
    "totals": 3
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalParamsErrors
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/courses (01) Obtener listado de cursos.
 * @apiVersion 0.0.19
 * @apiName getCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = title | code).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {String} enable Buscar solo cursos publicados (valores: 'true', 'false') (opcional).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 * @apiParam (Query Params) {String} ignoreIds En caso de usar como buscador de cursos para agregar a los listados previos, puede agregar un listado de ids separados por comas (,).
 * Esto cargará los cursos publicados disponibles ignorando los IDs indicados. Ejemplo: 5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8.
 * (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de cursos.
 *
 * @apiSuccess (courses Object[]) {String} banner URL de la imagen del curso.
 * @apiSuccess (courses Object[]) {Boolean} enable Indica si el curso se encuentra publicado.
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} description Descripción del curso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Cursos.",
	"courses": [
		{
      "banner": "http://url.com/images/1614664308734.jpeg",
			"enable": false,
			"_id": "603490a7cb2c7e406c5ff2b5",
			"title": "CURSO JAVASCRIPT 2021",
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
 * @api {post} /api/admin/courses (02) Crear nuevo curso.
 * @apiVersion 0.0.18
 * @apiName createCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del curso.
 * @apiParam {String} banner Base64 de la imagen a cargar.
 * @apiParam {Number[]} toRoles Roles a los que va dirigido el curso.
 *
 * @apiExample {JSON} Example JSON Request without levels
 * {
	"title": "NUEVO CURSO",
	"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
	"banner": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA...",
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
            "input": "toRoles",
            "msg": "Disculpe, pero los roles a los que va digido el curso."
        },
        {
            "input": "banner",
            "msg": "Disculpe, pero indicar una imagen para el curso."
        }
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/courses/:_id (03) Obtener detalles de un curso.
 * @apiVersion 0.0.19
 * @apiName detailsCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
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
 * @apiSuccess (course Object) {String} banner URL de la imagen del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Object[]} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Object[]} levels Listado de cursos que el miembro debe visualizar antes.
 * @apiSuccess (course Object) {Number[]} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {Boolean} enable Indica si el curso se encuentra disponible al público.
 * @apiSuccess (course Object) {String} created_at Fecha de registro del curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del curso.
 * @apiSuccess (course Object) {Number} totalsUsers Total de miembros con el curso.
 *
 * @apiSuccess (temary Object[]) {String} _id ID del tema.
 * @apiSuccess (temary Object[]) {String} title Título del tema.
 * @apiSuccess (temary Object[]) {String} description Descripción del tema.
 * @apiSuccess (temary Object[]) {Object[]} content Listado de contenido del tema.
 * @apiSuccess (temary Object[]) {Object[]} test Listado de preguntas para el examen del tema.
 *
 * @apiSuccess (content Object[]) {String} _id ID del contenido.
 * @apiSuccess (content Object[]) {String} title Título.
 * @apiSuccess (content Object[]) {String|Null} description Descripción.
 * @apiSuccess (content Object[]) {String|Null} urlVideo URL del video.
 *
 * @apiSuccess (test Object[]) {String} description Descripción de la pregunta.
 * @apiSuccess (test Object[]) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (test Object[]) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (test Object[]) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (test Object[]) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (test Object[]) {String} _id ID de la pregunta.
 * @apiSuccess (test Object[]) {String} title Título o pregunta.
 * @apiSuccess (test Object[]) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 * @apiSuccess (levels Object[]) {String} banner URL de la imagen del curso.
 * @apiSuccess (levels Object[]) {String} _id ID del curso.
 * @apiSuccess (levels Object[]) {String} title Título del curso.
 * @apiSuccess (levels Object[]) {String} slug Slug del curso.
 * @apiSuccess (levels Object[]) {String} description Descripción del curso.
 *
 * @apiSuccess (user Object) {Number|Null} gender ID (array index) del sexo.
 * @apiSuccess (user Object) {String} _id ID del miembro.
 * @apiSuccess (user Object) {String} phone Teléfono.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success with all data
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"user": {
			"gender": 0,
			"_id": "5fcf0821fc917d476c1cf3e2",
			"phone": "584121490196",
			"document": "CC123456789",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
		},
		"speaker": "ANTHONY VELASQUEZ",
		"speakerPosition": "SOFTWARE DEVELOPER",
		"code": "CURSO-JAVASCRIPT-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"slug": "curso-javascript-2021",
    "banner": "http://url.com/images/1614664308734.jpeg",
		"description": "Donec sollicitudin molestie malesuada. ...,
		"temary": [
			{
				"_id": "6036d87e1d222f3680f3a1d5",
				"title": "TEMA 1",
				"description": "<h1>Proin eget tortor risus.</h1>...",
				"content": [
					{
						"_id": "6036d8c51d222f3680f3a1d7",
						"title": "CONTENIDO 1",
						"description": "<h1>Proin eget tortor risus.</h1>...",
						"urlVideo": "https://www.youtube.com/watch?v=VopHjhP5d2E"
					},
					{
						"_id": "6036f4b01d222f3680f3a1dd",
						"title": "CONTENIDO PRUEBA",
						"description": "<h1>Proin eget tortor risus.</h1>...",
						"urlVideo": null
					}
				],
				"test": [
					{
						"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.",
						"placeholder": null,
						"require": true,
						"values": [],
						"correctAnswer": null,
						"_id": "603748515407373ad46fa578",
						"title": "PREGUNTA 1",
						"inputType": "text"
					},
					{
						"description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.",
						"placeholder": null,
						"require": true,
						"values": [
							"Opción A",
							"Opción B",
							"Opción C"
						],
						"correctAnswer": 1,
						"_id": "6037491e5407373ad46fa579",
						"title": "PREGUNTA 2",
						"inputType": "radio"
					},
					.
					.
					.
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
			.
			.
			.
		],
		"toRoles": [
			5
		],
		"enable": false,
		"created_at": "2021-02-23 00:20:39",
		"updated_at": "2021-02-26 16:02:50",
		"totalsUsers": 0
	}
}
 *
 * @apiSuccessExample {JSON} Success with simple data
 * HTTP/1.1 200 Success
 * {
	"msg": "Curso",
	"course": {
		"_id": "603490a7cb2c7e406c5ff2b5",
		"user": {
			"gender": 0,
			"_id": "5fcf0821fc917d476c1cf3e2",
			"phone": "584121490196",
			"document": "CC123456789",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
		},
		"speaker": null,
		"speakerPosition": null,
		"code": "CURSO-JAVASCRIPT-2021",
		"title": "CURSO JAVASCRIPT 2021",
		"slug": "curso-javascript-2021",
    "banner": "http://url.com/images/1614664308734.jpeg",
		"description": "Donec sollicitudin molestie malesuada. ...,
		"temary": [],
		"levels": [],
		"toRoles": [
			5
		],
		"enable": false,
		"created_at": "2021-02-23 00:20:39",
		"updated_at": "2021-02-26 16:02:50",
		"totalsUsers": 0
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
 * @api {get} /api/admin/courses/:_id/enable (04) Publicar o retirar curso del listado público.
 * @apiVersion 0.0.18
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
 * @apiSuccessExample {JSON} Success published course
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha publicado el curso exitosamente.",
	"data": {
		"enable": true
	}
}
 *
 * @apiSuccessExample {JSON} Success withdraw course
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
 * @apiErrorExample {JSON} Must contain a image
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso debe contener una imagen."
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
 * @apiErrorExample {JSON} Must contain at least one content in the themes
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero los temas del curso deben tener al menos un contenido."
}
 *
 * @apiErrorExample {JSON} The themes must contain their tests with questions
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero los temas del curso contener sus pruebas con sus respectivas preguntas."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/info (05) Actualizar información básica de un curso.
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
 * @api {put} /api/admin/courses/:_id/banner (06) Actualizar imagen del curso.
 * @apiVersion 0.0.19
 * @apiName updateBannerCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} banner Base64 de la imagen a cargar.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"banner": "data:image/jpeg;base64,/9j/4AAQSkZJRgA..."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {String} banner URL de la imagen del curso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la imagen del curso exitosamente.",
  "banner": "http://url.com/images/1614664308734.jpeg",
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
      "input": "banner",
      "msg": "Disculpe, pero la imagen seleccionada es incorrecta."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/courses/:_id/levels (07) Agregar cursos relacionados (cursos previos).
 * @apiVersion 0.0.18
 * @apiName addLevelsCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} listIds Lista de IDs de los cursos previos.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"listIds": [
		"601e3bf1237386429c27576a",
		.
		.
		.
	]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se han agregado los cursos al listado exitosamente."
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
      "input": "listIds",
      "msg": "Disculpe, pero no se logró recibir la información."
    },
    {
      "input": "listIds",
      "msg": "Disculpe, pero alguno de los cursos seleccionados es incorrecto."
    },
    {
      "input": "listIds",
      "msg": "Disculpe, pero uno de los cursos seleccionados no existe o no se encuentra disponible."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/courses/:_id/levels/:levelId (08) Eliminar un cursos relacionado (curso previo).
 * @apiVersion 0.0.18
 * @apiName removeALevelCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} levelId ID del curso previo a eliminar.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha removido el curso del listado exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseErrorIdOrNotFoundLevels
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/courses/:_id/theme (09) Agregar tema a un curso.
 * @apiVersion 0.0.18
 * @apiName addThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html)
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "01 - Introducción",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>"
}
 * @apiExample {JSON} Example JSON Request without description
 * {
	"title": "01 - Introducción",
	"description": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (theme Object) {String} _id ID del tema.
 * @apiSuccess (theme Object) {String} title Título del tema.
 * @apiSuccess (theme Object) {String} description Descripción del tema.
 * @apiSuccess (theme Object) {Array} content Listado de temas del curso (vacío).
 * @apiSuccess (theme Object) {Array} test Listado de pruebas del curso (vacío).
 * @apiSuccess (theme Object) {String} created_at Fecha de creación del curso.
 * @apiSuccess (theme Object) {String} updated_at Fecha de la última actualización del contenido del curso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el tema exitosamente.",
	"theme": {
		"_id": "603975b0b0d63f53dce667c2",
		"title": "01 - INTRODUCCIÓN",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
		"content": [],
		"test": [],
		"created_at": "2021-02-26 17:26:56",
		"updated_at": "2021-02-26 17:26:56"
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
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/theme/:themeId (10) Actualizar contenido de un tema.
 * @apiVersion 0.0.18
 * @apiName updateThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html)
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "01 - Introducción",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>..."
}
 * @apiExample {JSON} Example JSON Request without description
 * {
	"title": "01 - Introducción",
	"description": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (theme Object) {String} title Título del tema.
 * @apiSuccess (theme Object) {String} description Descripción del tema.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"theme": {
		"title": "01 - INTRODUCCIÓN",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>..."
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
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/courses/:_id/theme/:themeId (11) Eliminar un tema.
 * @apiVersion 0.0.18
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
	"msg": "Se ha eliminado el tema y su contenido exitosamente."
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
      "msg": "Disculpe, pero indicar un título válido para el curso."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/courses/:_id/theme/:themeId/content (12) Agregar contenido a un tema.
 * @apiVersion 0.0.18
 * @apiName addContentThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html). Puede ser opcional si se envía 'urlVideo'.
 * @apiParam {String|Null} urlVideo URL del video del curso (youtube). Puede ser opcional si se envía la descripción
 *
 * @apiExample {JSON} Example JSON Request with only description
 * {
	"title": "Contenido 01",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
	"urlVideo": null
}
 * @apiExample {JSON} Example JSON Request with only video
 * {
	"title": "Contenido 01",
	"description": null
	"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
}
 * @apiExample {JSON} Example JSON Request with description and video
 * {
	"title": "Contenido 01",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
	"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} content Detalles del contenido.
 *
 * @apiSuccess (content Object) {String} _id ID del tema.
 * @apiSuccess (content Object) {String} title Título del tema.
 * @apiSuccess (content Object) {String|Null} description Descripción del tema.
 * @apiSuccess (content Object) {String|Null} urlVideo Listado de temas del curso.
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el contenido al tema exitosamente.",
	"content": {
		"_id": "603a7993b0d63f53dce667c5",
		"title": "CONTENIDO 01",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
		"urlVideo": null
	}
}
 * @apiSuccessExample {JSON} Success with only video
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el contenido al tema exitosamente.",
	"content": {
		"_id": "603a7993b0d63f53dce667c5",
		"title": "CONTENIDO 01",
		"description": null
		"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
	}
}
 * @apiSuccessExample {JSON} Success with description and video
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el contenido al tema exitosamente.",
	"content": {
		"_id": "603a7993b0d63f53dce667c5",
		"title": "CONTENIDO 01",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
		"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
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
      "msg": "Disculpe, pero indicar un título válido para el contenido."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción o un video para el contenido."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/courses/:_id/theme/:themeId/content/:contentId (13) Actualizar contenido a un tema.
 * @apiVersion 0.0.18
 * @apiName updateContentThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} contentId ID del contenido.
 *
 * @apiParam {String} title Título del tema.
 * @apiParam {String|Null} description Descripción del tema. Este puede ser texto simple o enriquecido (html). Puede ser opcional si se envía 'urlVideo'.
 * @apiParam {String|Null} urlVideo URL del video del curso (youtube). Puede ser opcional si se envía la descripción
 *
 * @apiExample {JSON} Example JSON Request with only description
 * {
	"title": "Contenido 01",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
	"urlVideo": null
}
 * @apiExample {JSON} Example JSON Request with only video
 * {
	"title": "Contenido 01",
	"description": null
	"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
}
 * @apiExample {JSON} Example JSON Request with description and video
 * {
	"title": "Contenido 01",
	"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
	"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} content Detalles del contenido.
 *
 * @apiSuccess (content Object) {String} title Título del tema.
 * @apiSuccess (content Object) {String|Null} description Descripción del tema.
 * @apiSuccess (content Object) {String|Null} urlVideo Listado de temas del curso.
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO 01",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
		"urlVideo": null
	}
}
 * @apiSuccessExample {JSON} Success with only video
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO 01",
		"description": null,
		"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
	}
}
 * @apiSuccessExample {JSON} Success with description and video
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información del tema exitosamente.",
	"content": {
		"title": "CONTENIDO 01",
		"description": "<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...",
		"urlVideo": "https://www.youtube.com/watch?v=3wQVZOjxa5w"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseErrorIdOrNotFoundContent
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
      "msg": "Disculpe, pero indicar un título válido para el contenido."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción o un video para el contenido."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/courses/:_id/theme/:themeId/content/:contentId (14) Eliminar contenido a un tema.
 * @apiVersion 0.0.18
 * @apiName deleteContentThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} contentId ID del contenido.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el contenido exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse CommonCourseErrorIdOrNotFound
 *
 * @apiUse CommonCourseErrorIdOrNotFoundContent
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/admin/courses/:_id/theme/:themeId/test (15) Agregar preguntas a las pruebas de un tema.
 * @apiVersion 0.0.18
 * @apiName addQuestionTestThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {String} title Título o pregunta.
 * @apiParam {String|Null} description Descripción de la pregunta.
 * @apiParam {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiParam {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..
 *
 * @apiExample {JSON} Example JSON Request when inputType !== 'text' | 'textarea'
 * {
	"title": "¿Pregunta 01?",
	"description": "<p>Seleccione una opción</p>",
	"inputType": "radio",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [
		"Una red de redes interconectada",
		"Una estúfa",
		"Una computador",
		"Una reunión de amigos"
	],
	"correctAnswer": 0
}
 * @apiExample {JSON} Example JSON Request when inputType === 'text' | 'textarea'
 * {
	"title": "¿Pregunta 01?",
	"description": "<p>Seleccione una opción</p>",
	"inputType": "text",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [],
	"correctAnswer": null
}
 * @apiExample {JSON} Example JSON Request without description
 * {
	"title": "¿Pregunta 01?",
	"description": null,
	"inputType": "text",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [],
	"correctAnswer": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} question Detalles de la pregunta agregada.
 *
 * @apiSuccess (question Object) {String} description Descripción de la pregunta.
 * @apiSuccess (question Object) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (question Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (question Object) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (question Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (question Object) {String} _id ID de la pregunta.
 * @apiSuccess (question Object) {String} title Título o pregunta.
 * @apiSuccess (question Object) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado la pregunta exitosamente.",
	"question": {
		"description": "<p>Seleccione una opción</p>",
		"placeholder": "Indica tu respuesta",
		"require": true,
		"values": [
			"Una red de redes interconectada",
			"Una estúfa",
			"Una computador",
			"Una reunión de amigos"
		],
		"correctAnswer": 0,
		"_id": "603a7ff9d8e04e51906e8b15",
		"title": "¿PREGUNTA 01?",
		"inputType": "radio"
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
 * @apiUse CommonCourseCantEdit
 *
 * @apiErrorExample {JSON} Validation fields
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
 * @api {put} /api/admin/courses/:_id/theme/:themeId/test/:questionId (16) Actualizar una pregunta de la prueba de un tema.
 * @apiVersion 0.0.18
 * @apiName updateQuestionTestThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} questionId ID del pregunta.
 *
 * @apiParam {String} title Título o pregunta.
 * @apiParam {String|Null} description Descripción de la pregunta.
 * @apiParam {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 * @apiParam {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..
 *
 * @apiExample {JSON} Example JSON Request when inputType !== 'text' | 'textarea'
 * {
	"title": "¿Pregunta 01?",
	"description": "<p>Seleccione una opción</p>",
	"inputType": "radio",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [
		"Una red de redes interconectada",
		"Una estúfa",
		"Una computador",
		"Una reunión de amigos"
	],
	"correctAnswer": 0
}
 * @apiExample {JSON} Example JSON Request when inputType === 'text' | 'textarea'
 * {
	"title": "¿Pregunta 01?",
	"description": "<p>Seleccione una opción</p>",
	"inputType": "text",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [],
	"correctAnswer": null
}
 * @apiExample {JSON} Example JSON Request without description
 * {
	"title": "¿Pregunta 01?",
	"description": null,
	"inputType": "text",
	"require": true,
	"placeholder": "Indica tu respuesta",
	"values": [],
	"correctAnswer": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} question Detalles de la pregunta agregada.
 *
 * @apiSuccess (question Object) {String} description Descripción de la pregunta.
 * @apiSuccess (question Object) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (question Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (question Object) {String[]} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (question Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (question Object) {String} _id ID de la pregunta.
 * @apiSuccess (question Object) {String} title Título o pregunta.
 * @apiSuccess (question Object) {String} inputType Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado la pregunta exitosamente.",
	"question": {
		"description": "<p>Seleccione una opción</p>",
		"placeholder": "Indica tu respuesta",
		"require": true,
		"values": [
			"Una red de redes interconectada",
			"Una estúfa",
			"Una computador",
			"Una reunión de amigos"
		],
		"correctAnswer": 0,
		"_id": "603a7ff9d8e04e51906e8b15",
		"title": "¿PREGUNTA 01?",
		"inputType": "radio"
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
 * @apiUse CommonCourseErrorIdOrNotFoundQuestion
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
 * @api {delete} /api/admin/courses/:_id/theme/:themeId/test/:questionId (17) Elminar una pregunta de la prueba de un tema.
 * @apiVersion 0.0.18
 * @apiName deleteQuestionTestThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} questionId ID del pregunta.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success with only description
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado la pregunta exitosamente."
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
 * @apiUse CommonCourseErrorIdOrNotFoundQuestion
 *
 * @apiUse CommonCourseCantEdit
 *
 * @apiUse GlobalErrorSystem
 *
 */
