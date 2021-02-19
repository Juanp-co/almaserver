/**
 * @api {post} /api/register (00) Registro de usuario.
 * @apiVersion 0.0.16
 * @apiName registerPublic
 * @apiGroup Public
 *
 * @apiParam {String} email Correo electrónico.
 * @apiParam {String} password Contraseña.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} document Número de documento del identidad.
 * @apiParam {String|Null} referred Número de documento del referido (Opcional)
 *
 * @apiExample {JSON} Example JSON Request with Referred
 * {
	"email": "user3@example.com",
	"password": "password",
	"names": "Anthony",
	"lastNames": "Velásquez",
	"document": "CC12345675",
	"referred": "CC12345678"
}
 *
 * @apiExample {JSON} Example JSON Request without Referred
 * {
	"email": "user3@example.com",
	"password": "password",
	"names": "Anthony",
	"lastNames": "Velásquez",
	"document": "CC12345675",
	"referred": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
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
 * @apiVersion 0.0.16
 * @apiName loginPublic
 * @apiGroup Public
 *
 * @apiParam {String} document Número de documento.
 * @apiParam {String} password Contraseña.
 * @apiParam {Boolean} admin Indica si inicia sesión como administrador.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "document": "CC12345678",
    "password": "password",
    "admin": true
}
 * @apiExample {JSON} Example JSON Request with admin=false
 * {
    "document": "CC12345678",
    "password": "password",
    "admin": false
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 * @apiSuccess {String} token Token de la sesión.
 *
 * @apiSuccess (data Object) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (data Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number|Null} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del usuario.
 * @apiSuccess (data Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombrede la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del usuario.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "¡Inicio de sesión con éxito!",
	"data": {
		"gender": null,
		"birthday": null,
		"civilStatus": null,
		"educationLevel": null,
		"profession": null,
		"bloodType": null,
		"company": false,
		"companyType": null,
		"baptized": false,
		"role": 5,
		"department": null,
		"city": null,
		"locality": null,
		"direction": null,
		"created_at": "2021-02-18 19:23:23",
		"updated_at": "2021-02-18 19:25:33",
		"_id": "602f057d8d3e7d073cef3e87",
		"email": "user3@example.com",
		"document": "CC12345675",
		"names": "ANTHONY",
		"lastNames": "VELÁSQUEZ"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMDU3ZDhkM2U3ZDA3M2NlZjNlODciLCJkb2N1bWVudCI6IkNDMTIzNDU2NzUiLCJyb2xlIjo1LCJpYXQiOjE2MTM2OTUwMzIsImV4cCI6MTY0NTI1MjYzMn0.INSchol5fi6UAElm-d9hdYi95vq_U3leX59rKnCa9Y8"
}
 *
 * @apiError {String} msg Mensaje general.
 * @apiError {Array|Object} errors Listado de errores a mostrar.
 * @apiError (errors Array Object) {String} msg[msg] Mensaje de error.
 * @apiError (errors Array Object) {String} input[input] Nombre del campo fallo (Solo aplica en validaciones).
 *
 * @apiErrorExample {JSON} Unauthorized
 * HTTP/1.1 401 Unauthorized
 * {
    "msg": "Disculpe, pero no cuenta con privilegios para poder acceder a esta área."
}
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
 * @api {get} /api/events (03) Obtener eventos públicos.
 * @apiVersion 0.0.16
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
 * @apiSuccess (user Object) {Number|Null} gender ID (array index) del sexo (género).
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
			"_id": "602bccfb1b70b930e43a3eb2",
			"title": "EVENTO NUEVO",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
			"date": "2021-03-01",
			"initHour": "00:00",
			"endHour": "23:59",
			"toRoles": [
				5
			],
			"user": {
				"gender": 0,
				"_id": "5fcf0821fc917d476c1cf3e2",
				"document": "CC123456789",
				"names": "ANTHONY",
				"lastNames": "VELÁSQUEZ"
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
 * @api {get} /api/events/:_id (04) Obtener detalles de un evento público.
 * @apiVersion 0.0.16
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
 * @apiSuccess (user Object) {Number|Null} gender ID (array index) del sexo (género).
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
		"_id": "602bccfb1b70b930e43a3eb2",
		"title": "EVENTO NUEVO",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
		"date": "2021-03-01",
		"initHour": "00:00",
		"endHour": "23:59",
		"toRoles": [
			5
		],
		"user": {
			"gender": 0,
			"_id": "5fcf0821fc917d476c1cf3e2",
			"document": "CC123456789",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
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
