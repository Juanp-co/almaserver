/**
 * @api {get} /api/events (00) Obtener listado de eventos públicos.
 * @apiVersion 0.0.47
 * @apiName getEvents
 * @apiGroup Events
 *
 * @apiHeader {String} x-access-token Token de la sesión.
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
 * @apiSuccess (events Object[]) {String} date Fecha incial del evento.
 * @apiSuccess (events Object[]) {String} dateEnd Fecha final del evento.
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
      "title": "EVENTO",
      "date": "2021-09-15",
      "dateEnd": "2021-09-15",
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
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/events (01) Crear nuevo evento.
 * @apiVersion 0.0.47
 * @apiName createEvents
 * @apiGroup Events
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiUse ParamsToRegisterOrUpdateEvent
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} event Detalles del evento.
 *
 * @apiSuccess (event Object) {String} _id ID del evento.
 * @apiSuccess (event Object) {String} title Título para el evento.
 * @apiSuccess (event Object) {String} description Descripción del evento.
 * @apiSuccess (event Object) {String} date Fecha inicial del evento.
 * @apiSuccess (event Object) {String} dateEnd Fecha final del evento.
 * @apiSuccess (event Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (event Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (event Object) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {String|Null} picture URL de la imagen del evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
  "msg": "Evento.",
  "event": {
    "_id": "611a39d47636c51470deed92",
    "title": "PRUEBA DESDE ADMIN",
    "description": "<P>PRAESENT SAPIEN MASSA, CONVALLIS A PELLENTESQUE NEC, ...</P>",
    "date": "2021-09-15",
    "dateEnd": "2021-09-15",
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
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse ErrorValidationsCreateOrUpdateEvent
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/events/:_id (02) Obtener detalles de un evento.
 * @apiVersion 0.0.47
 * @apiName detailsEvents
 * @apiGroup Events
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del evento a obtener.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} event Detalles del evento.
 *
 * @apiSuccess (event Object) {String} _id ID del evento.
 * @apiSuccess (event Object) {String} title Título para el evento.
 * @apiSuccess (event Object) {String} description Descripción del evento.
 * @apiSuccess (event Object) {String} date Fecha inicial del evento.
 * @apiSuccess (event Object) {String} dateEnd Fecha final del evento.
 * @apiSuccess (event Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (event Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (event Object) {Number[]} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {String|Null} picture URL de la imagen del evento.
 * @apiSuccess (event Object) {Object} user Información del miembro que agregó el evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Evento.",
  "event": {
    "_id": "611a39d47636c51470deed92",
    "title": "EVENTO 01",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....",
    "date": "2021-09-15",
    "dateEnd": "2021-09-15",
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
 * @api {put} /api/events/:_id (03) Actualizar un evento.
 * @apiVersion 0.0.47
 * @apiName updateEvents
 * @apiGroup Events
 * @apiDescription Solo el miembro que registró el evento podrá editarlo (salvo el administrador).
 * Si cualquier otro usuario intenta editar el evento, la respuestá será un 404.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del evento a actualizar.
 *
 * @apiUse ParamsToRegisterOrUpdateEvent
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} events Detalles del evento.
 *
 * @apiSuccess (events Object) {String} _id ID del evento.
 * @apiSuccess (events Object) {String} title Título para el evento.
 * @apiSuccess (events Object) {String} description Descripción del evento.
 * @apiSuccess (events Object) {String} date Fecha inicial del evento.
 * @apiSuccess (events Object) {String} dateEnd Fecha final del evento.
 * @apiSuccess (events Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object) {Number[]} toRoles Roles a los que va dirigido.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el evento exitosamente.",
  "event": {
    "_id": "611924490ec7059a63f7a805",
    "title": "EVENTO 01",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....",
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
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse ErrorValidationsCreateOrUpdateEvent
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/events/:_id (04) Eliminar un evento.
 * @apiVersion 0.0.35
 * @apiName deleteEvents
 * @apiGroup Events
 * @apiDescription Solo el miembro que registró el evento podrá eliminarlo (salvo el administrador).
 * Si cualquier otro usuario intenta eliminar el evento, la respuestá será un 404.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
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
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */
