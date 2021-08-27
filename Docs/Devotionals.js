/**
 * @api {get} /api/devotionals (00) Obtener total de devocionales.
 * @apiVersion 0.0.38
 * @apiName getTotalsDevotionals
 * @apiGroup Devotionals
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {Number} totals Total de devocionales.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Total de devocionales.",
	"data": {
	  "totals": 3
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/devotionals (01) Obtener listado de devocionales.
 * @apiVersion 0.0.38
 * @apiName getDevotionals
 * @apiGroup Devotionals
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} devotionals Listado devocionales.
 *
 * @apiSuccess (devotionals Object[]) {String} _id ID del devocional.
 * @apiSuccess (devotionals Object[]) {String} title Título.
 * @apiSuccess (devotionals Object[]) {String|Null} picture URL imagen.
 * @apiSuccess (devotionals Object[]) {Object|Null} user Datos del usuario que registró el devocional.
 * @apiSuccess (devotionals Object[]) {String} created_at Fecha de creación del devocional.
 * @apiSuccess (devotionals Object[]) {String} updated_at Fecha de la última actualización del devocional.
 *
 * @apiSuccess (user Object) {String} _id ID del usuario.
 * @apiSuccess (user Object) {String} fullname Nombre completo del usuario.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
  "msg": "Devocionales.",
  "devotionals": [
    {
      "_id": "6128782300553eba8dade331",
      "title": "1 CORINTIOS 13:4-7",
      "picture": "https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782300553eba8dade331-1630042147.jpg",
      "user": {
        "_id": "5fcf0821fc917d476c1cf3e2",
        "fullname": "ANTHONY EDITADO ADMINISTRADOR"
      },
      "created_at": "2021-08-27 00:29:07",
      "updated_at": "2021-08-27 00:29:10"
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
	"msg": "Devocionales",
	"devotionals": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/devotionals/:_id (02) Obtener detalles de un devocional.
 * @apiVersion 0.0.38
 * @apiName detailsDevotionals
 * @apiGroup Devotionals
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del devocional.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} devotional Detalles del devocional.
 *
 * @apiUse DevotionalDataResponse
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se registrado el devocional exitosamente.",
  "devotional": {
    "_id": "6128782a00553eba8dade339",
    "title": "1 CORINTIOS 13:4-7",
    "description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
    "picture": "https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg",
    "urlVideo": "https://www.youtube.com/watch?v=tRwyP2EV5dE",
    "user": {
      "_id": "5fcf0821fc917d476c1cf3e2",
      "names": "ANTHONY EDITADO",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "31612345678",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null
    },
    "created_at": "2021-08-27 00:29:14",
    "updated_at": "2021-08-27 00:29:17"
  }
}
 *
 * @apiSuccessExample {JSON} Success without picture and urlVideo
 * HTTP/1.1 200 Success
 * {
  "msg": "Se registrado el devocional exitosamente.",
  "devotional": {
    "_id": "6128782a00553eba8dade339",
    "title": "1 CORINTIOS 13:4-7",
    "description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
    "picture": null,
    "urlVideo": null,
    "user": {
      "_id": "5fcf0821fc917d476c1cf3e2",
      "names": "ANTHONY EDITADO",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "31612345678",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null
    },
    "created_at": "2021-08-27 00:29:14",
    "updated_at": "2021-08-27 00:29:17"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse ErrorIdOrNotFoundDevotionalsError
 *
 * @apiUse GlobalErrorSystem
 *
 */
