/**
 * @api {get} /api/admin/courses (00) Obtener contador de cursos.
 * @apiVersion 0.0.5
 * @apiName getCountersCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} code Código del curso a buscar (opcional).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} totals Totalizador de cursos.
 *
 * @apiSuccess (totals Object) {Number} enables Total de cursos publicados.
 * @apiSuccess (totals Object) {Number} drafts Total de cursos en borrador.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total de cursos.",
    "totals": {
        "enables": 0,
        "drafts": 3
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses (01) Obtener listado de cursos.
 * @apiVersion 0.0.5
 * @apiName getCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = title | code).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {String} code Código del curso a buscar (opcional).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} courses Listado de cursos.
 *
 * @apiSuccess (courses Array Object) {String} _id ID del evento.
 * @apiSuccess (courses Array Object) {Object|Null} user Usuario que registró el curso.
 * @apiSuccess (courses Array Object) {String} speaker Orador del curso.
 * @apiSuccess (courses Array Object) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (courses Array Object) {String} code Código del curso.
 * @apiSuccess (courses Array Object) {String} title Título del curso.
 * @apiSuccess (courses Array Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Array Object) {String} baner URL de la imagen principal del curso.
 * @apiSuccess (courses Array Object) {String} description Descripción del curso.
 * @apiSuccess (courses Array Object) {Array|Number} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (courses Array Object) {Boolean} draft Indica si el curso se encuentra en modo borrador.
 * @apiSuccess (courses Array Object) {Boolean} enable Indica si el curso se encuentra disponible al público.
 * @apiSuccess (courses Array Object) {String} created_at Fecha de registro del curso.
 * @apiSuccess (courses Array Object) {String} updated_at Fecha de la última actualización del curso.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "Cursos.",
    "courses": [
        {
            "_id": "5fea3193ff37862c30b2d9a8",
            "user": {
                "_id": "5fcf0821fc917d476c1cf3e2",
                "document": "CC123456789",
                "names": "USUARIO",
                "lastNames": "ADMIN"
            },
            "speaker": "Anthony Velásquez",
            "speakerPosition": 2,
            "code": "AAA-1235",
            "title": "CURSO 000001",
            "slug": "curso-nuevo-1",
            "banner": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png",
            "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
            "toRoles": [
                5
            ],
            "draft": true,
            "enable": false,
            "created_at": "2020-12-28 14:27:15",
            "updated_at": "2020-12-28 14:44:37"
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
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {post} /api/admin/courses (02) Crear nuevo curso.
 * @apiVersion 0.0.5
 * @apiName createCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiDescription El siguiente ENDPOINT es para poder crear un curso, cargando los diferentes temas a presentar al usuario,
 * las preguntas para la prueba (examen) y demás ajustes para poder cargar y visualizar el curso.
 *
 * Lea detenidamente los parámetros requeridos en el servicio para poder crear el nuevo curso, cargar el contenido y sobretodo
 * poder cargar las preguntas para las pruebas (PRESTE ATENCIÓN A ESTA).
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del evento.
 * @apiParam {Array|Object} temary Listado de temas.
 * @apiParam {Array|Object} test Listado de preguntas para las pruebas.
 * @apiParam {Array|Number} toRoles Roles a los que va dirigido el curso.
 * @apiParam {String} speaker Nombre completo del orador.
 * @apiParam {String} speakerPosition Cargo o posición del orador del curso.
 * @apiParam {String} code Código del curso.
 *
 * @apiParam (temary Array Object) {String} title Título del tema.
 * @apiParam (temary Array Object) {String} description Descripción del tema.
 * @apiParam (temary Array Object) {String} urlVideo URL del video (Solo videos provenientes de Youtube).
 *
 * @apiParam (test Array Object) {String} title Título o pregunta.
 * @apiParam (test Array Object) {String} description Descripción de la pregunta.
 * @apiParam (test Array Object) {String|Null} extra Información extra para completar la pregunta.
 * @apiParam (test Array Object) {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam (test Array Object) {String} inputType Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').
 * @apiParam (test Array Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam (test Array Object) {Array|String} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam (test Array Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "CURSO 01",
	"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
	"temary": [
        {
            "title": "01 - Introducción",
            "description": "Introducción al curso",
            "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s"
        },
        {
            "title": "02 - Internet",
            "description": "¿Qué es el internet y cómo se funciona?",
            "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s"
        }
    ],
	"test": [
        {
            "title": "01 - ¿Qué es el internet?",
            "description": "Seleccione una opción",
            "extra": null,
            "placeholder": null,
            "inputType": "radio",
            "require": true,
            "values": [
                "Una red de redes interconectada",
                "Una estúfa",
                "Una computador",
                "Una reunión de amigos"
            ],
            "correctAnswer": 0
        },
        {
            "title": "02 - ¿Cuál es el objetivo de internet?",
            "description": "Indique una respuesta",
            "extra": null,
            "placeholder": "Indique una respuesta",
            "inputType": "text",
            "require": true,
            "values": [],
            "correctAnswer": null
        }
    ],
	"toRoles": [ 5 ],
	"speaker": "Anthony Velásquez",
	"speakerPosition": 2,
	"code": "AAA-1111"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Detalles del evento.
 *
 * @apiSuccess (course Object) {Array|Number} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {Boolean} enable Indica si el curso se encuentra público para los usuarios.
 * @apiSuccess (course Object) {Boolean} draft Indica si el curso se encuentra en borrador (preparación).
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} speaker Nombre completo del orador del curso.
 * @apiSuccess (course Object) {Number} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Array|Object} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Array|Object} test Listado de preguntas para la prueba que deberá presentar el usuario.
 * @apiSuccess (course Object) {String} created_at Fecha de creación del curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del contenido del curso.
 *
 * @apiSuccess (temary Array Object) {String} _id ID del tema.
 * @apiSuccess (temary Array Object) {String} title Título del tema.
 * @apiSuccess (temary Array Object) {String} description Descripción del tema.
 * @apiSuccess (temary Array Object) {String} urlVideo URL del video.
 * @apiSuccess (temary Array Object) {Array|Object} comments Comentarios realizados por los usuarios.
 *
 * @apiSuccess (test Array Object) {String} description Descripción de la pregunta.
 * @apiSuccess (test Array Object) {String|Null} extra Información extra para completar la pregunta.
 * @apiSuccess (test Array Object) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (test Array Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (test Array Object) {Array|String} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (test Array Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (test Array Object) {String} _id ID de la pregunta.
 * @apiSuccess (test Array Object) {String} title Título o pregunta.
 * @apiSuccess (test Array Object) {String} inputType Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha creado el nuevo curso exitosamente.",
    "course": {
        "toRoles": [
            5
        ],
        "enable": false,
        "draft": true,
        "_id": "5feacc6eda2a713754f99e25",
        "speaker": "Anthony Velásquez",
        "speakerPosition": 2,
        "code": "AAA-1111",
        "title": "CURSO 01",
        "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
        "temary": [
            {
                "_id": "5feacc6eda2a713754f99e26",
                "title": "01 - Introducción",
                "description": "Introducción al curso",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "comments": []
            },
            {
                "_id": "5feacc6eda2a713754f99e27",
                "title": "02 - Internet",
                "description": "¿Qué es el internet y cómo se funciona?",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "comments": []
            }
        ],
        "test": [
            {
                "description": "Seleccione una opción",
                "extra": null,
                "placeholder": "Indica tu respuesta",
                "require": true,
                "values": [
                    "Una red de redes interconectada",
                    "Una estúfa",
                    "Una computador",
                    "Una reunión de amigos"
                ],
                "correctAnswer": null,
                "_id": "5feacc6eda2a713754f99e28",
                "title": "01 - ¿Qué es el internet?",
                "inputType": "radio"
            },
            {
                "description": "Indique una respuesta",
                "extra": null,
                "placeholder": "Indique una respuesta",
                "require": true,
                "values": [],
                "correctAnswer": null,
                "_id": "5feacc6eda2a713754f99e29",
                "title": "02 - ¿Cuál es el objetivo de internet?",
                "inputType": "text"
            }
        ],
        "created_at": "2020-12-29 01:27:58",
        "updated_at": "2020-12-29 01:27:58"
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
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
            "input": "speaker",
            "msg": "Disculpe, pero indicar el nombre completo del orador del curso."
        },
        {
            "input": "code",
            "msg": "Disculpe, pero el código indicado ya se encuentra registrado."
        },
        {
            "input": "temary",
            "msg": "Disculpe, pero indicar el temario del curso."
        },
        {
            "input": "test",
            "msg": "Disculpe, pero indicar las preguntas para la prueba de este curso."
        },
        {
            "input": "temary.title",
            "msg": "Disculpe, pero todos los temas deben contener un título."
        },
        {
            "input": "temary.urlVideo",
            "msg": "Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube."
        },
        {
            "input": "test.title",
            "msg": "Disculpe, pero todas las preguntas para la prueba deben contener un título."
        },
        {
            "input": "test.inputType",
            "msg": "Disculpe, todas las preguntas deben contener un tipo de campo para los formularios."
        },
        {
            "input": "test.correctAnswer",
            "msg": "Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses/:_id (03) Obtener detalles de un curso.
 * @apiVersion 0.0.7
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
 * @apiSuccess (course Object) {Object|Null} user Datos del usuario creador del curso.
 * @apiSuccess (course Object) {String} speaker Orador del curso.
 * @apiSuccess (course Object) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (course Object) {String} banner URL del banner del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Array|Object} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Array|Object} test Listado de preguntas del curso.
 * @apiSuccess (course Object) {Array|Number} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {Boolean} draft Indica si el curso se encuentra en modo borrador.
 * @apiSuccess (course Object) {Boolean} enable Indica si el curso se encuentra disponible al público.
 * @apiSuccess (course Object) {String} created_at Fecha de registro del curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del curso.
 * @apiSuccess (course Object) {Object} totals Total de comentarios, 'Me gusta' y 'No me gusta'.
 *
 * @apiSuccess (temary Array Object) {String} _id ID del tema.
 * @apiSuccess (temary Array Object) {String} title Título del tema.
 * @apiSuccess (temary Array Object) {String} description Descripción del tema.
 * @apiSuccess (temary Array Object) {String} urlVideo URL del video.
 * @apiSuccess (temary Array Object) {Object} totals Total de comentarios, 'Me gusta' y 'No me gusta'.
 *
 * @apiSuccess (test Array Object) {String} description Descripción de la pregunta.
 * @apiSuccess (test Array Object) {String|Null} extra Información extra para completar la pregunta.
 * @apiSuccess (test Array Object) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (test Array Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (test Array Object) {Array|String} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (test Array Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (test Array Object) {String} _id ID de la pregunta.
 * @apiSuccess (test Array Object) {String} title Título o pregunta.
 * @apiSuccess (test Array Object) {String} inputType Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').
 *
 * @apiSuccess (totals Object) {Number} totalComments Número (total) de comentarios.
 * @apiSuccess (totals Object) {Number} totalLikes Número (total) de 'Me gusta'.
 * @apiSuccess (totals Object) {Number} totalUnlikes Número (total) de 'No me gusta'.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Curso",
    "course": {
        "_id": "5ff8d0c1fd462643e42df1f6",
        "user": {
            "_id": "5fcf0821fc917d476c1cf3e2",
            "document": "CC123456789",
            "names": "USUARIO",
            "lastNames": "ADMIN"
        },
        "speaker": "Anthony Velásquez",
        "speakerPosition": 2,
        "code": "AAA-1111",
        "title": "CURSO NUEVO 2",
        "slug": "curso-nuevo-1",
        "banner": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png",
        "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
        "temary": [
            {
                "_id": "5ff8e4116f5c8648c0353e97",
                "title": "01 - Introducción",
                "description": "Introducción al curso",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "totals": {
                    "totalComments": 1,
                    "totalLikes": 1,
                    "totalUnlikes": 1
                }
            },
            {
                "_id": "5ff8e4116f5c8648c0353e98",
                "title": "02 - Internet",
                "description": "¿Qué es el internet y cómo se funciona?",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "totals": {
                    "totalComments": 0,
                    "totalLikes": 0,
                    "totalUnlikes": 0
                }
            }
        ],
        "test": [
            {
                "description": "Seleccione una opción",
                "extra": null,
                "placeholder": "Indica tu respuesta",
                "require": true,
                "values": [
                    "Una red de redes interconectada",
                    "Una estúfa",
                    "Una computador",
                    "Una reunión de amigos"
                ],
                "correctAnswer": 0,
                "_id": "5ff8e4116f5c8648c0353e99",
                "title": "01 - ¿Qué es el internet?",
                "inputType": "radio"
            },
            {
                "description": "Indique una respuesta",
                "extra": null,
                "placeholder": "Indique una respuesta",
                "require": true,
                "values": [],
                "correctAnswer": null,
                "_id": "5ff8e4116f5c8648c0353e9a",
                "title": "02 - ¿Cuál es el objetivo de internet?",
                "inputType": "text"
            }
        ],
        "toRoles": [
            5
        ],
        "draft": false,
        "enable": true,
        "created_at": "2021-01-08 16:38:09",
        "updated_at": "2021-01-12 03:09:22",
        "totals": {
            "totalComments": 3,
            "totalLikes": 1,
            "totalUnlikes": 0
        }
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso seleccionado no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/admin/courses/:_id (04) Actualizar un curso.
 * @apiVersion 0.0.5
 * @apiName updateCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {String} speaker Nombre completo del orador.
 * @apiParam {String} speakerPosition Cargo o posición del orador del curso.
 * @apiParam {String} code Código del curso.
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del evento.
 * @apiParam {Array|Object} temary Listado de temas.
 * @apiParam {Array|Object} test Listado de preguntas para las pruebas.
 * @apiParam {Array|Number} toRoles Roles a los que va dirigido el curso.
 *
 * @apiParam (temary Array Object) {String} title Título del tema.
 * @apiParam (temary Array Object) {String} description Descripción del tema.
 * @apiParam (temary Array Object) {String} urlVideo URL del video (Solo videos provenientes de Youtube).
 *
 * @apiParam (test Array Object) {String} title Título o pregunta.
 * @apiParam (test Array Object) {String} description Descripción de la pregunta.
 * @apiParam (test Array Object) {String|Null} extra Información extra para completar la pregunta.
 * @apiParam (test Array Object) {String|Null} placeholder Información que resalta el campo (solo para tipo: text | textarea).
 * @apiParam (test Array Object) {String} inputType Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').
 * @apiParam (test Array Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiParam (test Array Object) {Array|String} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiParam (test Array Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "speaker": "Anthony Velásquez",
    "speakerPosition": 2,
    "code": "AAA-1111",
    "title": "INTERNET",
    "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
    "temary": [
        {
            "_id": "5feacc6eda2a713754f99e26",
            "title": "01 - Introducción",
            "description": "Introducción al curso",
            "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
            "comments": []
        },
        {
            "_id": "5feacc6eda2a713754f99e27",
            "title": "02 - Internet",
            "description": "¿Qué es el internet y cómo se funciona?",
            "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
            "comments": []
        }
    ],
    "test": [
        {
            "description": "Seleccione una opción",
            "extra": null,
            "placeholder": "Indica tu respuesta",
            "require": true,
            "values": [
                "Una red de redes interconectada",
                "Una estúfa",
                "Una computador",
                "Una reunión de amigos"
            ],
            "correctAnswer": null,
            "_id": "5feacc6eda2a713754f99e28",
            "title": "01 - ¿Qué es el internet?",
            "inputType": "radio"
        },
        {
            "description": "Indique una respuesta",
            "extra": null,
            "placeholder": "Indique una respuesta",
            "require": true,
            "values": [],
            "correctAnswer": null,
            "_id": "5feacc6eda2a713754f99e29",
            "title": "02 - ¿Cuál es el objetivo de internet?",
            "inputType": "text"
        }
    ],
    "toRoles": [
        5
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} course Detalles del evento.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} speaker Nombre completo del orador del curso.
 * @apiSuccess (course Object) {Number} speakerPosition Cargo o posición del orador.
 * @apiSuccess (course Object) {String} code Código del curso.
 * @apiSuccess (course Object) {String} title Título del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Array|Object} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Array|Object} test Listado de preguntas para la prueba que deberá presentar el usuario.
 * @apiSuccess (course Object) {Array|Number} toRoles Roles a los que va dirigido el curso.
 * @apiSuccess (course Object) {Boolean} enable Indica si el curso se encuentra público para los usuarios.
 * @apiSuccess (course Object) {Boolean} draft Indica si el curso se encuentra en borrador (preparación).
 * @apiSuccess (course Object) {String} created_at Fecha de creación del curso.
 * @apiSuccess (course Object) {String} updated_at Fecha de la última actualización del contenido del curso.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccess (temary Array Object) {String} _id ID del tema.
 * @apiSuccess (temary Array Object) {String} title Título del tema.
 * @apiSuccess (temary Array Object) {String} description Descripción del tema.
 * @apiSuccess (temary Array Object) {String} urlVideo URL del video.
 * @apiSuccess (temary Array Object) {Array|Object} comments Comentarios realizados por los usuarios.
 *
 * @apiSuccess (test Array Object) {String} description Descripción de la pregunta.
 * @apiSuccess (test Array Object) {String|Null} extra Información extra para completar la pregunta.
 * @apiSuccess (test Array Object) {String|Null} placeholder Información que resalta el campo (en caso de ser: text | textarea).
 * @apiSuccess (test Array Object) {Boolean} require Indica si el campo es obligatorio responder.
 * @apiSuccess (test Array Object) {Array|String} values Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').
 * @apiSuccess (test Array Object) {Number|Null} correctAnswer Respuesta correcta. Solo aplica si 'values' contiene elementos.
 * @apiSuccess (test Array Object) {String} _id ID de la pregunta.
 * @apiSuccess (test Array Object) {String} title Título o pregunta.
 * @apiSuccess (test Array Object) {String} inputType Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el curso exitosamente.",
    "course": {
        "toRoles": [
            5
        ],
        "enable": false,
        "draft": true,
        "_id": "5feacc6eda2a713754f99e25",
        "speaker": "Anthony Velásquez",
        "speakerPosition": 2,
        "code": "AAA-1111",
        "title": "INTERNET",
        "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
        "temary": [
            {
                "_id": "5fead328f7bcf73dc82d8670",
                "title": "01 - Introducción",
                "description": "Introducción al curso",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "comments": []
            },
            {
                "_id": "5fead328f7bcf73dc82d8671",
                "title": "02 - Internet",
                "description": "¿Qué es el internet y cómo se funciona?",
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
                "comments": []
            }
        ],
        "test": [
            {
                "description": "Seleccione una opción",
                "extra": null,
                "placeholder": "Indica tu respuesta",
                "require": true,
                "values": [
                    "Una red de redes interconectada",
                    "Una estúfa",
                    "Una computador",
                    "Una reunión de amigos"
                ],
                "correctAnswer": 0,
                "_id": "5fead328f7bcf73dc82d8672",
                "title": "01 - ¿Qué es el internet??????",
                "inputType": "radio"
            },
            {
                "description": "Indique una respuesta",
                "extra": null,
                "placeholder": "Indique una respuesta",
                "require": true,
                "values": [],
                "correctAnswer": null,
                "_id": "5fead328f7bcf73dc82d8673",
                "title": "02 - ¿Cuál es el objetivo de internet?",
                "inputType": "text"
            }
        ],
        "created_at": "2020-12-29 01:27:58",
        "updated_at": "2020-12-29 01:56:40"
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Can't edit
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado."
}
 *
 * @apiErrorExample {JSON} The code exists
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el nuevp código ingresado ya se encuentra asignado a otro curso."
}
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
            "input": "speaker",
            "msg": "Disculpe, pero indicar el nombre completo del orador del curso."
        },
        {
            "input": "code",
            "msg": "Disculpe, pero el código indicado ya se encuentra registrado."
        },
        {
            "input": "temary",
            "msg": "Disculpe, pero indicar el temario del curso."
        },
        {
            "input": "test",
            "msg": "Disculpe, pero indicar las preguntas para la prueba de este curso."
        },
        {
            "input": "temary.title",
            "msg": "Disculpe, pero todos los temas deben contener un título."
        },
        {
            "input": "temary.urlVideo",
            "msg": "Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube."
        },
        {
            "input": "test.title",
            "msg": "Disculpe, pero todas las preguntas para la prueba deben contener un título."
        },
        {
            "input": "test.inputType",
            "msg": "Disculpe, todas las preguntas deben contener un tipo de campo para los formularios."
        },
        {
            "input": "test.correctAnswer",
            "msg": "Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {delete} /api/admin/courses/:_id (05) Eliminar un curso.
 * @apiVersion 0.0.5
 * @apiName deleteCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha eliminado el curso exitosamente."
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a eliminar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/admin/courses/:_id/enable (06) Publicar un curso o removerlo.
 * @apiVersion 0.0.5
 * @apiName enableCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam {Number} enable Indica si se publicará el curso o será removido (valores: 1 = enable | 0 = remove).
 *
 * @apiExample {JSON} Example JSON Request if enable
 * {
    "enable": 1
}
 *
 * @apiExample {JSON} Example JSON Request if remove
 * {
    "enable": 0
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha publicado el curso exitosamente."
}
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha retirado el curso exitosamente."
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid 'enable' param.
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "msg": "Disculpe, para poder publicar el curso es necesario que indique el temario para este."
        },
        {
            "input": "speaker",
            "msg": "Disculpe, para poder publicar el curso es necesario que indique las pruebas para este."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses/:_id/comments (07) Obtener comentarios del curso.
 * @apiVersion 0.0.7
 * @apiName commentsCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiParam (Query params) {Number} sort Ordenado de los comentarios (1 = ASC | !1 = DESC).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de los comentarios.
 *
 * @apiSuccess (data Object) {String} _id ID del curso.
 * @apiSuccess (data Object) {Number} totals Numero (total) de comentarios.
 * @apiSuccess (data Object) {Array|Object} comments Listado de comentarios.
 *
 * @apiSuccess (comments Array Object) {String} _id ID del comentario.
 * @apiSuccess (comments Array Object) {String|Null} answer Respuesta recibida (No implementado).
 * @apiSuccess (comments Array Object) {String} userid ID del usuario comentador.
 * @apiSuccess (comments Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (comments Array Object) {String} comment Comentario.
 * @apiSuccess (comments Array Object) {Array|Object} likes Listado de "Me gusta" recibidos.
 * @apiSuccess (comments Array Object) {Array|Object} unlikes Listado de "No me gusta" recibidos.
 * @apiSuccess (comments Array Object) {String} created_at Fecha de creación del comentario.
 * @apiSuccess (comments Array Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (likes and unlikes Array Object) {String} _id ID del registro.
 * @apiSuccess (likes and unlikes Array Object) {String} userid ID del usuario.
 * @apiSuccess (likes and unlikes Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (likes and unlikes Array Object) {String} created_at Fecha de creación.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento del usuario.
 * @apiSuccess (user Object) {String} names Nombres del usuario.
 * @apiSuccess (user Object) {String} lastNames Apellidos del usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Comentarios del curso.",
    "data": {
        "_id": "5ff8d0c1fd462643e42df1f6",
        "totals": 3,
        "comments": [
            {
                "_id": "5ffd56368cee8d4f7c0c8a20",
                "answer": null,
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
                "likes": [
                    {
                        "_id": "5ffd577aba47443708fa9432",
                        "userid": "5fcf0821fc917d476c1cf3e3",
                        "user": {
                            "_id": "5fcf0821fc917d476c1cf3e3",
                            "document": "CC12345678",
                            "names": "USUARIO TRES",
                            "lastNames": "PRUEBA TRES"
                        },
                        "created_at": "2021-01-12 03:02:02"
                    },
                    .
                    .
                    .
                ],
                "unlikes": [
                    {
                        "_id": "5ffd577aba47443708fa9432",
                        "userid": "5fcf0821fc917d476c1cf3e3",
                        "user": {
                            "_id": "5fcf0821fc917d476c1cf3e3",
                            "document": "CC12345678",
                            "names": "USUARIO TRES",
                            "lastNames": "PRUEBA TRES"
                        },
                        "created_at": "2021-01-12 03:02:02"
                    },
                    .
                    .
                    .
                ],
                "created_at": "2021-01-12 02:56:38",
                "updated_at": "2021-01-12 02:56:38"
            },
            .
            .
            .
        ]
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses/:_id/likes (08) Obtener 'Me gusta' y 'No me gusta' del curso.
 * @apiVersion 0.0.7
 * @apiName likesAndUnlikesCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de los 'Me gusta' y 'No me gusta'.
 *
 * @apiSuccess (data Object) {String} _id ID del curso.
 * @apiSuccess (data Object) {Number} totalLikes Numero (total) de 'Me gusta'.
 * @apiSuccess (data Object) {Number} totalUnlikes Numero (total) de 'No me gusta'.
 * @apiSuccess (data Object) {Array|Object} likes Listado de 'Me gusta'.
 * @apiSuccess (data Object) {Array|Object} unlikes Listado de 'No me gusta'.
 *
 * @apiSuccess (likes and unlikes Array Object) {String} _id ID del registro.
 * @apiSuccess (likes and unlikes Array Object) {String} userid ID del usuario.
 * @apiSuccess (likes and unlikes Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (likes and unlikes Array Object) {String} created_at Fecha de creación.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento del usuario.
 * @apiSuccess (user Object) {String} names Nombres del usuario.
 * @apiSuccess (user Object) {String} lastNames Apellidos del usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "'Me gusta' y 'No me gustas' del curso.",
    "data": {
        "_id": "5ff8d0c1fd462643e42df1f6",
        "totalLikes": 3,
        "totalUnlikes": 3,
        "likes": [
            {
                "_id": "5ffd4af6c149424030d7d8b3",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "created_at": "2021-01-12 02:08:38"
            },
            .
            .
            .
        ],
        "unlikes": [
            {
                "_id": "5ffd4af6c149424030d7d8b3",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "created_at": "2021-01-12 02:08:38"
            },
            .
            .
            .
        ]
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses/:_id/theme/:themeId/comments (09) Obtener comentarios de un tema.
 * @apiVersion 0.0.7
 * @apiName commentsThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam (Query params) {Number} sort Ordenado de los comentarios (1 = ASC | !1 = DESC).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de los comentarios.
 *
 * @apiSuccess (data Object) {String} _id ID del curso.
 * @apiSuccess (data Object) {String} themeId ID del tema.
 * @apiSuccess (data Object) {Number} totals Numero (total) de comentarios.
 * @apiSuccess (data Object) {Array|Object} comments Listado de comentarios.
 *
 * @apiSuccess (comments Array Object) {String} _id ID del comentario.
 * @apiSuccess (comments Array Object) {String|Null} answer Respuesta recibida (No implementado).
 * @apiSuccess (comments Array Object) {String} userid ID del usuario comentador.
 * @apiSuccess (comments Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (comments Array Object) {String} comment Comentario.
 * @apiSuccess (comments Array Object) {Array|Object} likes Listado de "Me gusta" recibidos.
 * @apiSuccess (comments Array Object) {Array|Object} unlikes Listado de "No me gusta" recibidos.
 * @apiSuccess (comments Array Object) {String} created_at Fecha de creación del comentario.
 * @apiSuccess (comments Array Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (likes and unlikes Array Object) {String} _id ID del registro.
 * @apiSuccess (likes and unlikes Array Object) {String} userid ID del usuario.
 * @apiSuccess (likes and unlikes Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (likes and unlikes Array Object) {String} created_at Fecha de creación.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento del usuario.
 * @apiSuccess (user Object) {String} names Nombres del usuario.
 * @apiSuccess (user Object) {String} lastNames Apellidos del usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Comentarios del tema.",
    "data": {
        "_id": "5ff8d0c1fd462643e42df1f6",
        "themeId": "5ff8e4116f5c8648c0353e97",
        "totals": 3,
        "comments": [
            {
                "_id": "5ffd5932e679cc15ac790192",
                "answer": null,
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
                "likes": [
                    {
                        "_id": "5fcf0821fc917d476c1cf3e3",
                        "document": "CC12345678",
                        "names": "USUARIO TRES",
                        "lastNames": "PRUEBA TRES"
                    },
                    .
                    .
                    .
                ],
                "unlikes": [
                    {
                        "_id": "5fcf0821fc917d476c1cf3e3",
                        "document": "CC12345678",
                        "names": "USUARIO TRES",
                        "lastNames": "PRUEBA TRES"
                    },
                    .
                    .
                    .
                ],
                "created_at": "2021-01-12 03:09:22",
                "updated_at": "2021-01-12 03:09:22"
            },
            .
            .
            .
        ]
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid themeId
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/admin/courses/:_id/theme/:themeId/likes (10) Obtener 'Me gusta' y 'No me gusta' de un tema.
 * @apiVersion 0.0.7
 * @apiName likesAndUnlikesThemeCoursesAdmin
 * @apiGroup CoursesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de los 'Me gusta' y 'No me gusta'.
 *
 * @apiSuccess (data Object) {String} _id ID del curso.
 * @apiSuccess (data Object) {String} themeId ID del tema.
 * @apiSuccess (data Object) {Number} totalLikes Numero (total) de 'Me gusta'.
 * @apiSuccess (data Object) {Number} totalUnlikes Numero (total) de 'No me gusta'.
 * @apiSuccess (data Object) {Array|Object} likes Listado de 'Me gusta'.
 * @apiSuccess (data Object) {Array|Object} unlikes Listado de 'No me gusta'.
 *
 * @apiSuccess (likes and unlikes Array Object) {String} _id ID del registro.
 * @apiSuccess (likes and unlikes Array Object) {String} userid ID del usuario.
 * @apiSuccess (likes and unlikes Array Object) {Object|Null} user Datos báse del usuario.
 * @apiSuccess (likes and unlikes Array Object) {String} created_at Fecha de creación.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento del usuario.
 * @apiSuccess (user Object) {String} names Nombres del usuario.
 * @apiSuccess (user Object) {String} lastNames Apellidos del usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "'Me gusta' y 'No me gustas' del tema.",
    "data": {
        "_id": "5ff8d0c1fd462643e42df1f6",
        "themeId": "5ff8e4116f5c8648c0353e97",
        "totalLikes": 3,
        "totalUnlikes": 3,
        "likes": [
            {
                "_id": "5ffd5d0f11e3aa47f051a0dc",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "created_at": "2021-01-12 03:25:51"
            },
            .
            .
            .
        ],
        "unlikes": [
            {
                "_id": "5ffd326508f3ed208cc764bc",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "created_at": "2021-01-12 00:23:49"
            },
            .
            .
            .
        ]
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
  }
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el curso a actualizar no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid themeId
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
