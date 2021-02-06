/**
 * @api {get} /api/courses/counters (00) Obtener contador de cursos.
 * @apiVersion 0.0.6
 * @apiName getCountersCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} code Código del curso a buscar (opcional).
 * @apiParam (Query Params) {String} title Título del curso a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number} totals Total de cursos disponibles.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total de cursos.",
    "totals": 1
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
 * @api {get} /api/courses (01) Obtener listado de cursos.
 * @apiVersion 0.0.6
 * @apiName getCoursesList
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
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
 * @apiSuccess (courses Array Object) {String} _id ID del curso.
 * @apiSuccess (courses Array Object) {String} speaker Orador del curso.
 * @apiSuccess (courses Array Object) {String} speakerPosition Cargo o posición del orador.
 * @apiSuccess (courses Array Object) {String} title Título del curso.
 * @apiSuccess (courses Array Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Array Object) {String} banner URL del banner del curso.
 * @apiSuccess (courses Array Object) {String} description Descripción del curso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "Cursos",
    "courses": [
        {
            "_id": "5ff8d0c1fd462643e42df1f6",
            "speaker": "Anthony Velásquez",
            "speakerPosition": 2,
            "title": "CURSO NUEVO 2",
            "slug": "curso-nuevo-1",
            "banner": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png",
            "description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada."
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
 * @api {get} /api/courses/:slug (02) Obtener detalles de un curso.
 * @apiVersion 0.0.9
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
 * @apiSuccess (course Object) {String} banner Imagen del curso.
 * @apiSuccess (course Object) {String} description Descripción del curso.
 * @apiSuccess (course Object) {Array|Object} temary Listado de temas del curso.
 * @apiSuccess (course Object) {Array|Object} levels Listado de cursos que el usuario debe visualizar antes.
 * @apiSuccess (course Object) {Array|Object} comments Listado de comentarios.
 * @apiSuccess (course Object) {Array|Object} likes Listado de "Me gusta" recibidos.
 * @apiSuccess (course Object) {Array|Object} unlikes Listado de "No me gusta" recibidos.
 *
 * @apiSuccess (dataCourseUser Object) {String} _id ID del registro.
 * @apiSuccess (dataCourseUser Object) {Array|Object} temary Actividad de los temas del curso.
 * @apiSuccess (dataCourseUser Object) {Array|Object} tests Listado de pruebas realizadas.
 * @apiSuccess (dataCourseUser Object) {Boolean} approved Indica si el curso ha sido aprobado.
 * @apiSuccess (dataCourseUser Object) {String} created_at Fecha de creación.
 * @apiSuccess (dataCourseUser Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (temary Array Object) {String} _id ID del tema.
 * @apiSuccess (temary Array Object) {String} title Título del tema.
 * @apiSuccess (temary Array Object) {String} description Descripción del tema.
 * @apiSuccess (temary Array Object) {String} urlVideo URL del video.
 *
 * @apiSuccess (levels Array Object) {String} _id ID del curso previo.
 * @apiSuccess (levels Array Object) {String} title Título del curso previo.
 * @apiSuccess (levels Array Object) {String} slug Slug del curso previo.
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
    "msg": "Curso",
    "course": {
        "_id": "5ff8d0c1fd462643e42df1f6",
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
                "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s"
            },
            .
            .
            .
        ],
        "levels": [
            {
                "_id": "5ff8d0c1fd462643e42df1f6",
                "title": "CURSO NUEVO 2",
                "slug": "curso-nuevo-1"
            }
        ],
        "comments": [
            {
                "_id": "5ffa8946751a3923e00d1b58",
                "answer": null,
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": {
                    "_id": "5fcf0821fc917d476c1cf3e3",
                    "document": "CC12345678",
                    "names": "USUARIO TRES",
                    "lastNames": "PRUEBA TRES"
                },
                "comment": "2222222222222222222222222222222222222222222",
                "likes": [
                    {
                        "_id": "5ffa89ca90ec7523986daf6a",
                        "userid": "5fcf0821fc917d476c1cf3e3",
                        "user": {
                            "_id": "5fcf0821fc917d476c1cf3e3",
                            "document": "CC12345678",
                            "names": "USUARIO TRES",
                            "lastNames": "PRUEBA TRES"
                        },
                        "created_at": "2021-01-09 23:59:54"
                    },
                    .
                    .
                    .
                ],
                "unlikes": [
                    {
                        "_id": "5ffa89ca90ec7523986daf6a",
                        "userid": "5fcf0821fc917d476c1cf3e3",
                        "user": {
                            "_id": "5fcf0821fc917d476c1cf3e3",
                            "document": "CC12345678",
                            "names": "USUARIO TRES",
                            "lastNames": "PRUEBA TRES"
                        },
                        "created_at": "2021-01-09 23:59:54"
                    },
                    .
                    .
                    .
                ],
                "created_at": "2021-01-09 23:57:42",
                "updated_at": "2021-01-09 23:57:42"
            },
            .
            .
            .
        ],
        "likes": [
            {
                "_id": "5ffd2b0bca99de399451f35c",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": null,
                "created_at": "2021-01-11 23:52:27"
            },
            .
            .
            .
        ],
        "unlikes": [
            {
                "_id": "5ffd2b0bca99de399451f35c",
                "userid": "5fcf0821fc917d476c1cf3e3",
                "user": null,
                "created_at": "2021-01-11 23:52:27"
            },
            .
            .
            .
        ]
    },
    "dataCourseUser": {
        "_id": "5ff9ef04a066c04bb08373bc",
        "temary": [
            {
                "view": 1,
                "date": "2021-01-12 00:29:29",
                "temaryId": "5ff8e4116f5c8648c0353e97"
            },
            .
            .
            .
        ],
        "tests": [
            {
                "_id": "5ffa9d937b716f448cb70266",
                "points": "50",
                "date": "2021-01-10 01:24:19"
            },
            .
            .
            .
        ],
        "approved": true,
        "created_at": "2021-01-09 12:59:32",
        "updated_at": "2021-01-12 00:29:29"
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
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
 * @api {post} /api/courses/:slug (03) Agergar un curso al listado del usuario.
 * @apiVersion 0.0.6
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
 * @apiSuccess (added Object) {Array|Object} temary Actividad de los temas del curso.
 * @apiSuccess (added Object) {Array|Object} tests Listado de pruebas realizadas.
 * @apiSuccess (added Object) {String} created_at Fecha de registro.
 * @apiSuccess (added Object) {String} updated_at Fecha de la última actualización.
 *
 * @apiSuccess (temary Array Object) {Number} view Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).
 * @apiSuccess (temary Array Object) {String|Null} date Fecha de la última vista.
 * @apiSuccess (temary Array Object) {String} temaryId ID del tema.
 *
 * @apiSuccess (tests Array Object) {String} _id ID de la prueba.
 * @apiSuccess (tests Array Object) {Number} points Cantidad de puntos obtenidos.
 * @apiSuccess (tests Array Object) {String} date Fecha de presentación.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha agregado el curso exitosamente.",
    "course": {
        "approved": false,
        "_id": "5ffd48143cf55c0338aee30d",
        "userid": "5fcf0821fc917d476c1cf3e3",
        "courseId": "5ff8d0c1fd462643e42df1f7",
        "temary": [
            {
                "view": 0,
                "date": null,
                "temaryId": "5ff8e4116f5c8648c0353e97"
            },
            {
                "view": 0,
                "date": null,
                "temaryId": "5ff8e4116f5c8648c0353e98"
            }
        ],
        "tests": [],
        "created_at": "2021-01-12 01:56:20",
        "updated_at": "2021-01-12 01:56:20"
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Course added previously
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya tiene disponible este curso en su cuenta."
}
 *
 * @apiErrorExample {JSON} Course without themes
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso actual no cuenta con temas."
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
 * @api {post} /api/courses/:slug/like (04) "Me gusta" o "No me gusta" a un curso.
 * @apiVersion 0.0.6
 * @apiName likeOrUnlikeCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiParam {Number} like Valor para indicar si le "gusta" o "no gusta" el curso (0 = no gusta | 1 = gusta).
 * @apiExample {JSON} Example JSON Request (like)
 * {
    "like": 1
}
 * @apiExample {JSON} Example JSON Request (unlike)
 * {
    "like": 0
}
 * @apiExample {JSON} Example JSON Request (error)
 * {
    "like": 3
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Detalles de la acción.
 *
 * @apiSuccess (data Object) {Object|Null} like Datos en caso de "Me gusta".
 * @apiSuccess (data Object) {Object|Null} unlike Datos en caso de "No me gusta".
 *
 * @apiSuccess (like or unlike Object) {String} _id ID del registro.
 * @apiSuccess (like or unlike Object) {String} userid ID del usuario.
 * @apiSuccess (like or unlike Object) {String} created_at Fecha de registro.
 *
 * @apiSuccessExample {JSON} Success (like)
 * HTTP/1.1 200 Success
 * {
    "msg": "Me gusta agregado exitosamente.",
    "data": {
        "like": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiSuccessExample {JSON} Success (unlike)
 * HTTP/1.1 200 Success
 * {
    "msg": "No me gusta agregado exitosamente.",
    "data": {
        "unlike": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'like' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se determinó la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Was realized
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya has realizado esta acción anteriormente."
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
 * @api {post} /api/courses/:slug/comment (05) Comentar un curso.
 * @apiVersion 0.0.6
 * @apiName commentCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiParam {String} comment Mensaje a comentar.
 * @apiExample {JSON} Example JSON Request
 * {
    "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} comment Comentario agregado.
 *
 * @apiSuccess (comment Object) {String|Null} answer Respuesta recibida (No implementado).
 * @apiSuccess (comment Object) {String|Null} _id ID del comentario.
 * @apiSuccess (comment Object) {String|Null} userid ID del usuario comentador.
 * @apiSuccess (comment Object) {String|Null} comment Comentario.
 * @apiSuccess (comment Object) {Array|Object} likes Listado de "Me gusta".
 * @apiSuccess (comment Object) {Array|Object} unlikes Listado de "No me gusta".
 * @apiSuccess (comment Object) {String|Null} created_at Fecha de creación del comentario.
 * @apiSuccess (comment Object) {String|Null} updated_at Fecha de la última actualización del comentario.
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
    "msg": "Se ha agregado el comentario exitosamente.",
    "comment": {
        "answer": null,
        "_id": "5ffd56368cee8d4f7c0c8a20",
        "userid": "5fcf0821fc917d476c1cf3e3",
        "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
        "likes": [],
        "unlikes": [],
        "created_at": "2021-01-12 02:56:38",
        "updated_at": "2021-01-12 02:56:38"
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'comment' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\-+"'/@."
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
 * @api {post} /api/courses/:slug/comment/:_id/like (06) "Me gusta" o "No me gusta" a un comentario de un curso.
 * @apiVersion 0.0.6
 * @apiName likeOrUnlikeCommentCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} _id ID del comentario.
 *
 * @apiParam {Number} like Valor para indicar si le "gusta" o "no gusta" el curso (0 = no gusta | 1 = gusta).
 * @apiExample {JSON} Example JSON Request (like)
 * {
    "like": 1
}
 * @apiExample {JSON} Example JSON Request (unlike)
 * {
    "like": 0
}
 * @apiExample {JSON} Example JSON Request (error)
 * {
    "like": 3
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Detalles de la acción.
 *
 * @apiSuccess (data Object) {Object|Null} like Datos en caso de "Me gusta".
 * @apiSuccess (data Object) {Object|Null} unlike Datos en caso de "No me gusta".
 *
 * @apiSuccess (like or unlike Object) {String} _id ID del registro.
 * @apiSuccess (like or unlike Object) {String} userid ID del usuario.
 * @apiSuccess (like or unlike Object) {String} created_at Fecha de registro.
 *
 * @apiSuccessExample {JSON} Success (like)
 * HTTP/1.1 200 Success
 * {
    "msg": "Me gusta agregado exitosamente.",
    "data": {
        "like": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiSuccessExample {JSON} Success (unlike)
 * HTTP/1.1 200 Success
 * {
    "msg": "No me gusta agregado exitosamente.",
    "data": {
        "unlike": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Comment not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el comentario no existe o no se encuentra disponible.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el comentario seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'like' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se determinó la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Was realized
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya has realizado esta acción anteriormente."
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
 * @api {get} /api/courses/:slug/theme/:themeId (07) Obtener un tema.
 * @apiVersion 0.0.9
 * @apiName getThemeCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam (Query params) {String} prevThemeId ID del tema anterior visto (opcional si es el primer tema).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} theme Detalles del tema.
 *
 * @apiSuccess (course Object) {String} _id ID del curso.
 * @apiSuccess (course Object) {String} title Título del tiema.
 * @apiSuccess (course Object) {String} description Descripción del tema.
 * @apiSuccess (course Object) {String} urlVideo URL del video.
 * @apiSuccess (course Object) {Array|Object} comments Listado de comentarios.
 * @apiSuccess (course Object) {Array|Object} likes Listado de "Me gusta" recibidos.
 * @apiSuccess (course Object) {Array|Object} unlikes Listado de "No me gusta" recibidos.
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
    "msg": "Tema",
    "theme": {
        "_id": "5ff8e4116f5c8648c0353e97",
        "title": "01 - Introducción",
        "description": "Introducción al curso",
        "urlVideo": "https://www.youtube.com/watch?v=-JVdH8ne-2s",
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
                ],
                "created_at": "2021-01-12 03:09:22",
                "updated_at": "2021-01-12 03:09:22"
            }
        ],
        "likes": [
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
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Theme not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Not complete previous courses
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este."
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
 * @api {post} /api/courses/:slug/theme/:themeId/comment (08) Comentar un tema.
 * @apiVersion 0.0.6
 * @apiName commentThemeCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {String} comment Mensaje a comentar.
 * @apiExample {JSON} Example JSON Request
 * {
    "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} comment Comentario agregado.
 *
 * @apiSuccess (comment Object) {String|Null} answer Respuesta recibida (No implementado).
 * @apiSuccess (comment Object) {String|Null} _id ID del comentario.
 * @apiSuccess (comment Object) {String|Null} userid ID del usuario comentador.
 * @apiSuccess (comment Object) {String|Null} comment Comentario.
 * @apiSuccess (comment Object) {Array|Object} likes Listado de "Me gusta".
 * @apiSuccess (comment Object) {Array|Object} unlikes Listado de "No me gusta".
 * @apiSuccess (comment Object) {String|Null} created_at Fecha de creación del comentario.
 * @apiSuccess (comment Object) {String|Null} updated_at Fecha de la última actualización del comentario.
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
    "msg": "Se ha agregado el comentario exitosamente.",
    "comment": {
        "answer": null,
        "_id": "5ffd5932e679cc15ac790192",
        "userid": "5fcf0821fc917d476c1cf3e3",
        "comment": "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
        "likes": [],
        "unlikes": [],
        "created_at": "2021-01-12 02:56:38",
        "updated_at": "2021-01-12 02:56:38"
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Theme not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'comment' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\-+"'/@."
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
 * @api {post} /api/courses/:slug/theme/:themeId/like (09) "Me gusta" o "No me gusta" a un tema.
 * @apiVersion 0.0.6
 * @apiName likeOrUnlikeThemeCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 *
 * @apiParam {Number} like Valor para indicar si le "gusta" o "no gusta" el curso (0 = no gusta | 1 = gusta).
 * @apiExample {JSON} Example JSON Request (like)
 * {
    "like": 1
}
 * @apiExample {JSON} Example JSON Request (unlike)
 * {
    "like": 0
}
 * @apiExample {JSON} Example JSON Request (error)
 * {
    "like": 3
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Detalles de la acción.
 *
 * @apiSuccess (data Object) {Object|Null} like Datos en caso de "Me gusta".
 * @apiSuccess (data Object) {Object|Null} unlike Datos en caso de "No me gusta".
 *
 * @apiSuccess (like or unlike Object) {String} _id ID del registro.
 * @apiSuccess (like or unlike Object) {String} userid ID del usuario.
 * @apiSuccess (like or unlike Object) {String} created_at Fecha de registro.
 *
 * @apiSuccessExample {JSON} Success (like)
 * HTTP/1.1 200 Success
 * {
    "msg": "Me gusta agregado exitosamente.",
    "data": {
        "like": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiSuccessExample {JSON} Success (unlike)
 * HTTP/1.1 200 Success
 * {
    "msg": "No me gusta agregado exitosamente.",
    "data": {
        "unlike": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Theme not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'like' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se determinó la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Was realized
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya has realizado esta acción anteriormente."
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
 * @api {post} /api/courses/:slug/theme/:themeId/comment/:commentId/like (10) "Me gusta" o "No me gusta" a un comentario de un tema.
 * @apiVersion 0.0.6
 * @apiName likeOrUnlikeCommentThemeCourse
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 * @apiParam (Path params) {String} themeId ID del tema.
 * @apiParam (Path params) {String} commentId ID del tema.
 *
 * @apiParam {Number} like Valor para indicar si le "gusta" o "no gusta" el curso (0 = no gusta | 1 = gusta).
 * @apiExample {JSON} Example JSON Request (like)
 * {
    "like": 1
}
 * @apiExample {JSON} Example JSON Request (unlike)
 * {
    "like": 0
}
 * @apiExample {JSON} Example JSON Request (error)
 * {
    "like": 3
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Detalles de la acción.
 *
 * @apiSuccess (data Object) {Object|Null} like Datos en caso de "Me gusta".
 * @apiSuccess (data Object) {Object|Null} unlike Datos en caso de "No me gusta".
 *
 * @apiSuccess (like or unlike Object) {String} _id ID del registro.
 * @apiSuccess (like or unlike Object) {String} userid ID del usuario.
 * @apiSuccess (like or unlike Object) {String} created_at Fecha de registro.
 *
 * @apiSuccessExample {JSON} Success (like)
 * HTTP/1.1 200 Success
 * {
    "msg": "Me gusta agregado exitosamente.",
    "data": {
        "like": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiSuccessExample {JSON} Success (unlike)
 * HTTP/1.1 200 Success
 * {
    "msg": "No me gusta agregado exitosamente.",
    "data": {
        "unlike": {
            "_id": "5ffd4af6c149424030d7d8b3",
            "userid": "5fcf0821fc917d476c1cf3e3",
            "created_at": "2021-01-12 02:08:38"
        }
    }
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Theme not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Comment not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el comentario no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Invalid commentId
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el comentario seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validate 'like' value
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se determinó la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Was realized
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya has realizado esta acción anteriormente."
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
 * @api {get} /api/courses/:slug/test (11) Obtener prueba (examen) para aprobar un curso.
 * @apiVersion 0.0.6
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
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} test Listado de preguntas de la prueba.
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
    "msg": "Prueba del curso",
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
            "_id": "5ff8e4116f5c8648c0353e9a",
            "title": "02 - ¿Cuál es el objetivo de internet?",
            "inputType": "text"
        }
    ]
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Invalid slug
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
 * @api {post} /api/courses/:slug/test (12) Enviar repuestas de una prueba para aprobar el curso.
 * @apiVersion 0.0.6
 * @apiName sendAnswersTestCourses
 * @apiGroup Courses
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} slug Slug del curso.
 *
 * @apiParam {Array|Object} data Listado de respuestas.
 * @apiParam (data Array|Object) {String} questionId ID de la pregunta.
 * @apiParam (data Array|Object) {String} answer Respuesta.
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
 * @apiSuccess {Number} average Promedio de respuestas obtenido.
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
 * @apiSuccessExample {JSON} Success and not approved
 * HTTP/1.1 200 Success
 * {
    "msg": "Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del curso.",
    "average": 50,
    "approved": false
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError {Boolean} addCourse[addCourse] Indica si se agregará el curso.
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
    "msg": "Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Course in user not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no ha registrado el curso en su listado.",
    "addCourse": true
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} The test was approved before
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya ha aprobado este curso anteriormente."
}
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
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
