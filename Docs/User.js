/**
 * @api {get} /api/user (00) Obtener datos de la sesión.
 * @apiVersion 0.0.2
 * @apiName getDataSessionUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
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
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Datos de la sesión",
    "data": {
        "educationLevel": 0,
        "bloodType": 5,
        "company": true,
        "companyType": 4,
        "baptized": true,
        "role": 5,
        "securityQuestion": {
            "questionId": "5f8608596cd607042cdbea86"
        },
        "created_at": "2020-12-08 13:43:16",
        "updated_at": "2020-12-08 21:34:22",
        "_id": "5fcfc945f4647b4c200cca05",
        "phone": "3161234568",
        "document": "CC12345677",
        "names": "USUARIO",
        "lastNames": "PRUEBA",
        "direction": "any direction",
        "profession": 44
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
 * @api {put} /api/user (01) Actualizar datos del perfil.
 * @apiVersion 0.0.14
 * @apiName registerUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} email Correo electrónico.
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {Number} gender ID (index array) del sexo.
 * @apiParam {String} birthday Fecha de nacimiento (YYYY-MM-DD).
 * @apiParam {Number} civilStatus ID (index array) del estado civil.
 * @apiParam {Number} educationLevel ID (index array) Nivel educativo.
 * @apiParam {Number} profession ID (index array) de la profesión.
 * @apiParam {Number} bloodType ID (index array) del tipo de sangre.
 * @apiParam {Boolean} company Indica si posee una empresa.
 * @apiParam {Number|Null} companyType ID (index array) del tipo de empresa en caso de que posea.
 * @apiParam {Boolean} baptized Indica si se ha bautizado.
 * @apiParam {Number} department ID (index array)del departamento.
 * @apiParam {Number} city ID (index array)de la ciudad.
 * @apiParam {String} location Nombre del barrio o vereda.
 * @apiParam {String} direction Dirección.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "email": "user@example.com",
    "phone": "573161234567",
    "names": "Pedro",
    "lastNames": "Pérez",
    "gender": 0,
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
    "locality": "NOMBRE DE LA LOCALIDAD",
    "direction": "MI DIRECCIÓN"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos actualizados.
 *
 * @apiSuccess (data Object) {Boolean} gender ID (array index) del sexo.
 * @apiSuccess (data Object) {String} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} department ID (array index) del departamento de residencia.
 * @apiSuccess (data Object) {Number} city ID (array index) de la ciudad de residencia.
 * @apiSuccess (data Object) {String} locality Nombre del barrio o localidad.
 * @apiSuccess (data Object) {String} direction Dirección de residencia.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 *
 * @apiSuccess (securityQuestion Object) {String|Null} questionId ID de la pregunta de seguridad.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha actualizado la información exitosamente.",
	"data": {
		"gender": 0,
		"birthday": "1994-07-07",
		"civilStatus": 0,
		"educationLevel": 0,
		"bloodType": 7,
		"company": false,
		"companyType": null,
		"baptized": true,
		"department": 19,
		"city": 18,
		"locality": "NOMBRE DE LA LOCALIDAD",
		"direction": "MI DIRECCIÓN",
		"_id": "5fcf0821fc917d476c1cf3e3",
		"phone": "573161234567",
		"names": "PEDRO",
		"lastNames": "PÉREZ",
		"profession": 90,
		"email": "user@example.com"
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
            "input": "email",
            "msg": "Disculpe, pero debe asegurarse de indicar su correo electrónico."
        },
        {
            "input": "phone",
            "msg": "Disculpe, pero debe indicar su número de teléfono. Sólo se permiten números (0-9)."
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
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
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
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */

/**
 * @api {put} /api/user/change-question (03) Actualizar pregunta y respuesta de seguridad.
 * @apiVersion 0.0.2
 * @apiName changeSecurityQuestionUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} questionId ID de la pregunta de seguridad.
 * @apiParam {String} answer Respuesta.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "questionId": "5f8608596cd607042cdbea86",
    "answer": "password"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado los datos de seguridad exitosamente."
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
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "questionId",
            "msg": "Disculpe, pero seleccionar una pregunta de seguridad."
        },
        {
            "input": "answer",
            "msg": "Disculpe, pero debe indicar una respuesta de seguridad."
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
 * @api {get} /api/user/courses (04) Obtener cursos de un usuario.
 * @apiVersion 0.0.12
 * @apiName getCoursesListUser
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} courses Listado de curso del usuario.
 *
 * @apiSuccess (courses Array Object) {String|Null} banner URL del banner del curso.
 * @apiSuccess (courses Array Object) {String} _id ID del curso.
 * @apiSuccess (courses Array Object) {String} title Título del curso.
 * @apiSuccess (courses Array Object) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Array Object) {String|Null} description Descripción del curso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis cursos.",
	"courses": [
		{
			"banner": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png",
			"_id": "5ff8d0c1fd462643e42df1f6",
			"title": "CURSO NUEVO 2",
			"slug": "curso-nuevo-1",
			"description": "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada."
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
