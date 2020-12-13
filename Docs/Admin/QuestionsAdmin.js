/**
 * @api {get} /api/admin/questions (00) Obtener preguntas de seguridad.
 * @apiVersion 0.0.3
 * @apiName getQuestionsAdmin
 * @apiGroup QuestionsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} questions Listado de preguntas de seguridad.
 *
 * @apiSuccess (questions Array Object) {String} _id ID de la pregunta de seguridad.
 * @apiSuccess (questions Array Object) {String} question Pregunta.
 * @apiSuccess (questions Array Object) {String} created_at Fecha de creación.
 * @apiSuccess (questions Array Object) {String} updated_at Última fecha de actualización.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Preguntas de seguridad.",
    "questions": [
        {
            "_id": "5f8608596cd607042cdbea86",
            "question": "¿Cuál es su color favorito?",
            "created_at": "2020-10-13 15:04:41",
            "updated_at": "2020-10-13 15:04:41"
        },
        .
        .
        .
    ]
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
 * @api {post} /api/admin/questions (01) Agregar nueva pregunta de seguridad
 * @apiVersion 0.0.3
 * @apiName createQuestionsAdmin
 * @apiGroup QuestionsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam {String} question Pregunta.
 *
 * @apiExample {JSON}
 * {
    "question": "¿Cuál es su color favorito?"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} question Detalles de la pregunta de seguridad.
 *
 * @apiSuccess (question Object) {String} _id ID de la pregunta de seguridad.
 * @apiSuccess (question Object) {String} question Pregunta.
 * @apiSuccess (question Object) {String} created_at Fecha de creación.
 * @apiSuccess (question Object) {String} updated_at Última fecha de actualización.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha registrado la pregunta de seguridad exitosamente.",
    "question": {
        "_id": "5fd65964404e8c2654e37de4",
        "question": "¿Cuál es su color favorito?",
        "created_at": "2020-12-13 13:11:48",
        "updated_at": "2020-12-13 13:11:48"
    }
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
    "msg": "Disculpe, pero la pregunta de seguridad no existe."
}
 *
 * @apiErrorExample {JSON} Error ID param
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el ID de la pregunta de seguridad es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "question",
            "msg": "Disculpe, pero debe indicar la pregunta."
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
 * @api {get} /api/admin/questions/:_id (02) Obtener detalles de una pregunta de seguridad
 * @apiVersion 0.0.3
 * @apiName detailsQuestionsAdmin
 * @apiGroup QuestionsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path param) {String} _id Identificador de la pregunta de seguridad.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} question Detalles de la pregunta de seguridad.
 *
 * @apiSuccess (question Object) {String} _id ID de la pregunta de seguridad.
 * @apiSuccess (question Object) {String} question Pregunta.
 * @apiSuccess (question Object) {String} created_at Fecha de creación.
 * @apiSuccess (question Object) {String} updated_at Última fecha de actualización.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Detalles de la pregunta de seguridad exitosamente.",
    "question": {
        "_id": "5f8608596cd607042cdbea86",
        "question": "¿Cuál es su color favorito?",
        "created_at": "2020-10-13 15:04:41",
        "updated_at": "2020-10-13 15:04:41"
    }
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
    "msg": "Disculpe, pero la pregunta de seguridad no existe."
}
 *
 * @apiErrorExample {JSON} Error ID param
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el ID de la pregunta de seguridad es incorrecto."
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
 * @api {put} /api/admin/questions/:_id (03) Actualizar pregunta de seguridad.
 * @apiVersion 0.0.3
 * @apiName updateQuestionsAdmin
 * @apiGroup QuestionsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path param) {String} _id Identificador de la pregunta de seguridad.
 *
 * @apiParam {String} question Pregunta.
 *
 * @apiExample {JSON}
 * {
    "question": "¿Cuál es su color favorito de mi hijo(a)?"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} question Detalles de la pregunta de seguridad.
 *
 * @apiSuccess (question Object) {String} _id ID de la pregunta de seguridad.
 * @apiSuccess (question Object) {String} question Pregunta.
 * @apiSuccess (question Object) {String} created_at Fecha de creación.
 * @apiSuccess (question Object) {String} updated_at Última fecha de actualización.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado la pregunta de seguridad exitosamente.",
    "question": {
        "_id": "5fd65964404e8c2654e37de4",
        "question": "¿Cuál es su color favorito de mi hijo(a)?",
        "created_at": "2020-12-13 13:11:48",
        "updated_at": "2020-12-13 13:11:48"
    }
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
    "msg": "Disculpe, pero la pregunta de seguridad no existe."
}
 *
 * @apiErrorExample {JSON} Error ID param
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el ID de la pregunta de seguridad es incorrecto."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "question",
            "msg": "Disculpe, pero debe indicar la pregunta."
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
 * @api {delete} /api/admin/questions/:_id (04) Eliminar una pregunta de seguridad
 * @apiVersion 0.0.3
 * @apiName deleteQuestionsAdmin
 * @apiGroup QuestionsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path param) {String} _id Identificador de la pregunta de seguridad.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se han eliminado la pregunta de seguridad exitosamente."
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
    "msg": "Disculpe, pero la pregunta de seguridad no existe."
}
 *
 * @apiErrorExample {JSON} Error ID param
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el ID de la pregunta de seguridad es incorrecto."
}
 *
 * @apiErrorExample {JSON} Can't delete
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no puede eliminar la pregunta de seguridad, debido a que se encuentra en uso por los usuarios."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
