/**
 * @api {get} /api/admin/events (00) Obtener listado de eventos registrados.
 * @apiVersion 0.0.4
 * @apiName getEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor)
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = date [requerido]).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} initDate Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} events Listado de preguntas de seguridad.
 *
 * @apiSuccess (events Object[]) {String} _id ID del evento.
 * @apiSuccess (events Object[]) {String} title Título para el evento.
 * @apiSuccess (events Object[]) {String} date Fecha del evento.
 * @apiSuccess (events Object[]) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object[]) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object[]) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (events Object[]) {Object} user Información del usuario que agregó el evento.
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
            "_id": "5fe00cf5e2c9942e5c866453",
            "title": "EVENTO NUEVO",
            "date": "2020-07-07",
            "initHour": "00:00",
            "endHour": "00:00",
            "toRoles": [
                5
            ],
            "user": {
                "gender": 0,
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/admin/events (01) Crear nuevo evento.
 * @apiVersion 0.0.11
 * @apiName createEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del evento.
 * @apiParam {String} date Fecha (Formato YYYY-MM-DD).
 * @apiParam {String} initHour Hora de inicio (Formato: HH:mm. Ejm: 08:30 | 23:59).
 * @apiParam {String} endHour Hora de finalización (Formato: HH:mm. Ejm: 08:30 | 23:59).
 * @apiParam {Array|Number} toRoles Roles a los que va dirigido el evento.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "title": "REUNIÓN DE UNIFICACIÓN FAMILIAR",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
    "date": "2021-03-01",
    "initHour": "00:00",
    "endHour": "23:59",
    "toRoles": [5]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} events Detalles del evento.
 *
 * @apiSuccess (events Object) {String} _id ID del evento.
 * @apiSuccess (events Object) {String} title Título para el evento.
 * @apiSuccess (events Object) {String} description Descripción del evento.
 * @apiSuccess (events Object) {String} date Fecha del evento.
 * @apiSuccess (events Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (events Object) {Object} user Información del usuario que agregó el evento.
 *
 * @apiSuccess (user Object) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} document Número de documento.
 * @apiSuccess (user Object) {String} names Nombre(s).
 * @apiSuccess (user Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha creado el evento exitosamente.",
	"event": {
		"_id": "603007b13b9d883c78abb864",
		"title": "REUNIÓN DE UNIFICACIÓN FAMILIAR",
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
            "msg": "Disculpe, pero indicar un título para el evento."
        },
        {
            "input": "date",
            "msg": "Disculpe, pero debe indicar la fecha para el evento."
        },
        {
            "input": "initHour",
            "msg": "Disculpe, pero indicar la hora de inicio para el evento."
        },
        {
            "input": "endHour",
            "msg": "Disculpe, pero indicar la hora de finalización del evento."
        },
        {
            "input": "toRoles",
            "msg": "Disculpe, pero debe seleccionar a quienes va dirigido el evento."
        }
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/events/:_id (02) Obtener detalles de un evento.
 * @apiVersion 0.0.4
 * @apiName detailsEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
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
        "title": "EVENTO NUEVO",
        "description": "description",
        "date": "2020-07-07",
        "initHour": "00:00",
        "endHour": "00:00",
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/events/:_id (03) Actualizar un evento.
 * @apiVersion 0.0.4
 * @apiName updateEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del evento a actualizar.
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del evento.
 * @apiParam {String} date Fecha (Formato YYYY-MM-DD).
 * @apiParam {String} initHour Hora de inicio (Formato: HH:mm. Ejm: 08:30 | 23:59).
 * @apiParam {String} endHour Hora de finalización (Formato: HH:mm. Ejm: 08:30 | 23:59).
 * @apiParam {Array|Number} toRoles Roles a los que va dirigido el evento.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "title": "Evento especial",
    "description": "Lorem ipsum",
    "date": "2020-07-07",
    "initHour": "00:00",
    "endHour": "00:00",
    "toRoles": [
        5,
        3
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} events Detalles del evento.
 *
 * @apiSuccess (events Object) {String} _id ID del evento.
 * @apiSuccess (events Object) {String} title Título para el evento.
 * @apiSuccess (events Object) {String} description Descripción del evento.
 * @apiSuccess (events Object) {String} date Fecha del evento.
 * @apiSuccess (events Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object) {Array|Number} toRoles Roles a los que va dirigido.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el evento exitosamente.",
    "event": {
        "_id": "5fe00cf5e2c9942e5c866453",
        "title": "EVENTO ESPECIAL",
        "description": "Lorem ipsum",
        "date": "2020-01-07",
        "initHour": "00:00",
        "endHour": "23:00",
        "toRoles": [
            5,
            3
        ]
    }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "title",
            "msg": "Disculpe, pero indicar un título para el evento."
        },
        {
            "input": "date",
            "msg": "Disculpe, pero debe indicar la fecha para el evento."
        },
        {
            "input": "initHour",
            "msg": "Disculpe, pero indicar la hora (correcta) de inicio para el evento."
        },
        {
            "input": "toRoles",
            "msg": "Disculpe, pero debe seleccionar los roles para este evento."
        }
    ]
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/events/:_id (04) Eliminar un evento.
 * @apiVersion 0.0.4
 * @apiName deleteEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del evento a actualizar.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha eliminado el evento exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */
