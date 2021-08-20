/**
 * @api {get} /api/admin/events (00) Obtener listado de eventos registrados.
 * @apiVersion 0.0.36
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
 * @apiSuccess {Object[]} events Listado de eventos.
 *
 * @apiSuccess (events Object[]) {String} _id ID del evento.
 * @apiSuccess (events Object[]) {String} title Título para el evento.
 * @apiSuccess (events Object[]) {String} date Fecha del evento.
 * @apiSuccess (events Object[]) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object[]) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object[]) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (events Object[]) {String|Null} picture Imagen relacionada al evento.
 * @apiSuccess (events Object[]) {Object|Null} user Información del miembro que agregó el evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
  "msg": "Eventos.",
  "events": [
    {
      "_id": "611a39d47636c51470deed92",
      "title": "PRUEBA DESDE ADMIN",
      "date": "2021-09-15",
      "initHour": "08:00",
      "endHour": "11:30",
      "toRoles": [
        2,
        3,
        4
      ],
      "picture": "https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg",
      "user": {
        "_id": "5fcf0821fc917d476c1cf3e2",
        "names": "ANTHONY",
        "lastNames": "ADMINISTRADOR",
        "document": null,
        "gender": null,
        "phone": "31612345678",
        "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
        "position": null
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
 * @apiVersion 0.0.35
 * @apiName createEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiUse ParamsToRegisterOrUpdateEvent
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
 * @apiSuccess (event Object) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {String|Null} picture Imagen relacionada al evento.
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
    "picture": "https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorValidationsCreateOrUpdateEvent
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/events/:_id (02) Obtener detalles de un evento.
 * @apiVersion 0.0.36
 * @apiName detailsEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del evento a obtener.
 *
 * @apiUse ParamsToRegisterOrUpdateEvent
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
 * @apiSuccess (event Object) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {String|Null} picture Imagen relacionada al evento.
 * @apiSuccess (event Object) {Object} user Información del miembro que agregó el evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Evento.",
  "event": {
    "_id": "5fe00cf5e2c9942e5c866453",
    "title": "EVENTO 1",
    "description": "Para todos los roles",
    "date": "2021-03-03",
    "initHour": "00:00",
    "endHour": "23:00",
    "toRoles": [
      0,
      1,
      2,
      3,
      4
    ],
    "picture": null,
    "user": {
      "_id": "5fcf0821fc917d476c1cf3e2",
      "names": "ANTHONY",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "31612345678",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null
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
 * @apiVersion 0.0.35
 * @apiName updateEventsAdmin
 * @apiGroup EventsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del evento a actualizar.
 *
 * @apiUse ParamsToRegisterOrUpdateEvent
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
 * @apiSuccess (event Object) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {String|Null} picture Imagen relacionada al evento.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el evento exitosamente.",
  "event": {
    "_id": "611924490ec7059a63f7a805",
    "title": "PRUEBA 1 PARA REGISTRO DESDE APP",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
    "date": "2021-08-31",
    "initHour": "09:00",
    "endHour": "12:59",
    "toRoles": [
      4
    ],
    "picture": "https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse ErrorValidationsCreateOrUpdateEvent
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/events/:_id (04) Eliminar un evento.
 * @apiVersion 0.0.35
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
