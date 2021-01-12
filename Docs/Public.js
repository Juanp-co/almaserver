/**
 * @api {post} /api/register (00) Registro de usuario.
 * @apiVersion 0.0.2
 * @apiName registerPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} password Contraseña.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} direction Dirección.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {Number|Null} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number|Null} profession ID (index array) de la profesión.
 * @apiParam {Number|Null} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType Tipo de empresa en caso de que posea.
 * @apiParam {String} questionId ID de la pregunta de seguridad (obtenido desde API).
 * @apiParam {String} answer Respuesta de seguridad.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "phone": "3161234567",
    "password": "password",
    "names": "Usuario",
    "lastNames": "Prueba",
    "direction": "any direction",
    "document": "CC12345678",
    "educationLevel": null,
    "profession": null,
    "bloodType": 1,
    "company": false,
    "companyType": null,
    "questionId": "5f8608596cd607042cdbea86",
    "answer": "respuesta",
    "baptized": true
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Registro exitoso.",
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente."
        },
        {
            "input": "questionId",
            "msg": "Disculpe, pero seleccionar una pregunta de seguridad."
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
 * @api {post} /api/login (01) Iniciar sesión
 * @apiVersion 0.0.2
 * @apiName loginPublic
 * @apiGroup Public
 *
 * @apiParam {String} document Número de documento.
 * @apiParam {String} password Contraseña.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "document": "CC12345678",
    "password": "password"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 * @apiSuccess {String} token Token de la sesión.
 *
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del usuario.
 * @apiSuccess (data Object) {Object} securityQuestion Datos de la pregunta de seguridad.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 *
 * @apiSuccess (securityQuestion Object) {String|Null} questionId ID de la pregunta de seguridad.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "¡Inicio de sesión con éxito!",
    "data": {
        "educationLevel": null,
        "bloodType": 1,
        "company": false,
        "companyType": null,
        "baptized": true,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-08 21:35:19",
        "updated_at": "2020-12-08 21:42:41",
        "_id": "5fd039a0de66a52ce800e83a",
        "phone": "3161234567",
        "document": "CC12345678",
        "names": "USUARIO",
        "lastNames": "PRUEBA",
        "direction": "any direction",
        "profession": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwMzlhMGRlNjZhNTJjZTgwMGU4M2EiLCJkb2N1bWVudCI6IkNDMTIzNDU2NzUiLCJyb2xlIjoicGVyc29uYSIsImlhdCI6MTYwNzQ4MjEzMiwiZXhwIjoxNjM5MDM5NzMyfQ.92zoGj9xfzCXAyUtLtN2qYdmtBrK8NClpXlpqekH2Rw"
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el número de documento no se encuentra registrado."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero debe asegurarse de indicar su número de documento."
        },
        {
            "input": "password",
            "msg": "Disculpe, pero debe asignar su contraseña correctamente."
        }
    ]
}
 *
 * @apiErrorExample {JSON} Invalid password
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Contraseña incorrecta."
}
 *
 * @apiErrorExample {JSON} Error generate token
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "¡Ha ocurrido un error al momento de iniciar la sesión!"
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
 * @api {delete} /api/logout (02) Finalizar sesión.
 * @apiVersion 0.0.2
 * @apiName logoutPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha finalizado la sesión exitosamente."
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/questions (03) Obtener preguntas de seguridad.
 * @apiVersion 0.0.2
 * @apiName getQuestionsPublic
 * @apiGroup Public
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} questions Listado de preguntas.
 *
 * @apiSuccess (questions Array Object) {String} _id ID de la pregunta.
 * @apiSuccess (questions Array Object) {String} question Pregunta.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "Preguntas de seguridad.",
    "questions": [
        {
            "_id": "5f8608596cd607042cdbea86",
            "question": "¿Cuál es su color favorito?"
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
    "msg": "Preguntas de seguridad.",
    "questions": []
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/events (04) Obtener eventos públicos.
 * @apiVersion 0.0.4
 * @apiName getPublicEventsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión (para obtener el rol y obtener los eventos relacionados).
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = date [requerido]).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} initDate Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} events Listado de preguntas de seguridad.
 *
 * @apiSuccess (events Array Object) {String} _id ID del evento.
 * @apiSuccess (events Array Object) {String} title Título para el evento.
 * @apiSuccess (events Array Object) {String} date Fecha del evento.
 * @apiSuccess (events Array Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Array Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Array Object) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (events Array Object) {Object} user Información del usuario que agregó el evento.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "Eventos.",
    "events": [
        {
            "_id": "5fe00cf5e2c9942e5c866453",
            "title": "EVENTO ESPECIAL",
            "date": "2020-01-07",
            "initHour": "00:00",
            "endHour": "23:00",
            "toRoles": [
                5
            ],
            "user": {
                "_id": "5fcf0821fc917d476c1cf3e2",
                "document": "CC123456789",
                "names": "USUARIO",
                "lastNames": "ADMIN"
            }
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
    "msg": "Eventos.",
    "events": []
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {get} /api/events/:_id (05) Obtener detalles de un evento público.
 * @apiVersion 0.0.4
 * @apiName detailsPublicEventsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión (para obtener el rol y obtener los eventos relacionados).
 *
 * @apiParam (Path params) {String} _id ID del evento a obtener.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} event Detalles del evento.
 *
 * @apiSuccess (event Object) {String} _id ID del evento.
 * @apiSuccess (event Object) {String} title Título para el evento.
 * @apiSuccess (event Object) {String} description Descripción del evento.
 * @apiSuccess (event Object) {String} date Fecha del evento.
 * @apiSuccess (event Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (event Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (event Object) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {Object} user Información del usuario que agregó el evento.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Evento.",
    "event": {
        "_id": "5fe00cf5e2c9942e5c866453",
        "title": "EVENTO ESPECIAL",
        "description": "Lorem ipsum",
        "date": "2020-01-07",
        "initHour": "00:00",
        "endHour": "23:00",
        "toRoles": [
            5
        ],
        "user": {
            "_id": "5fcf0821fc917d476c1cf3e2",
            "document": "CC123456789",
            "names": "USUARIO",
            "lastNames": "ADMIN"
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
    "msg": "Disculpe, pero el evento seleccionado no existe."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el evento seleccionado incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
