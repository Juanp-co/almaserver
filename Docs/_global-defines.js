// general
/**
 * @apiDefine GlobalParamsErrors
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Object[]} errors Listado de errores a mostrar.
 * @apiError (errors Object[]) {String} msg[msg] Mensaje de error.
 * @apiError (errors Object[]) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 */

/**
 * @apiDefine GlobalErrorSystem
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
  "msg": "Ha ocurrido un error inesperado.",
  "errors": [${err}]
}
 */

/**
 * @apiDefine GlobalUnauthorized
 *
 * @apiErrorExample {JSON} Error token
 * HTTP/1.1 401 Unauthorized
 * {
  "msg": "Disculpe, pero no se logró encontrar los datos de su sesión."
}
 */


// courses

/**
 * @apiDefine EventsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el evento seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el evento seleccionado es incorrecto."
}
 */


// courses

/**
 * @apiDefine CommonCourseErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el curso seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 */

/**
 * @apiDefine CommonCourseErrorIdOrNotFoundSlug
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el curso seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid slug
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el curso seleccionado es incorrecto."
}
 */

/**
 * @apiDefine CommonCourseNotRegisterInUser
 *
 * @apiErrorExample {JSON} Not found course in user list
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero no ha registrado el curso en su listado.",
  "addCourse": true
}
 */

/**
 * @apiDefine CommonCourseNotCompletedPreviousCourse
 *
 * @apiErrorExample {JSON} Can't view the content
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este."
}
 */

/**
 * @apiDefine CommonCourseAllCompleted
 *
 * @apiErrorExample {JSON} The test was approved
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya ha aprobado este examen anteriormente."
}
 *
 * @apiErrorExample {JSON} All tests was completed
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero ya ha aprobado todos los exámenes de este curso."
}
 */

/**
 * @apiDefine CommonCourseErrorIdOrNotFoundContent
 *
 * @apiErrorExample {JSON} Content not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el contenido seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid contentId
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el contenido seleccionado es incorrecto."
}
 */

/**
 * @apiDefine CommonCourseErrorIdOrNotFoundLevels
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el tema previo seleccionado no existe o no se encuentra disponible."
}
 */

/**
 * @apiDefine CommonCourseErrorIdOrNotFoundTheme
 *
 * @apiErrorExample {JSON} Theme not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el tema seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid themeId
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el tema seleccionado es incorrecto."
}
 */

/**
 * @apiDefine CommonCourseErrorIdOrNotFoundQuestion
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero la pregunta seleccionada no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid contentId
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero la pregunta seleccionada es incorrecto."
}
 */

/**
 * @apiDefine CommonCourseCantEdit
 *
 * @apiErrorExample {JSON} Can't edit course published
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado."
}
 * @apiErrorExample {JSON} Can't edit course with users
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados."
}
 *
 */

// groups

/**
 * @apiDefine GroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
}
 */


// users

/**
 * @apiDefine UsersErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el miembro seleccionado es incorrecto."
}
 */

/**
 * @apiDefine UsersRecoveryPassword01
 *
 * @apiErrorExample {JSON} Error action
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero no se encontró la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Document not found
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el número de documento indicado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid document
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero debe indicar un número de documento válido."
}
 */

/**
 * @apiDefine UsersRecoveryPassword02
 *
 * @apiErrorExample {JSON} Errors params
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no se recibieron los datos a validar."
}
 * @apiErrorExample {JSON} Invalid email
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero debe indicar un correo electrónico válido."
}
 * @apiErrorExample {JSON} Email isn't equals to user data
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el correo electrónico indicado no coincide con el de su cuenta."
}
 * @apiErrorExample {JSON} Invalid date
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero debe indicar una fecha válida."
}
 * @apiErrorExample {JSON} Birthday isn't equals to user data
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero la fecha indicada no coincide con su fecha de cumpleaños de su cuenta."
}
 */

/**
 * @apiDefine UsersRecoveryPassword03
 *
 * @apiErrorExample {JSON} Invalid format password
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres."
}
 */
