/* static */

/**
 * @apiDefine ParamsToCreateOrUpdateDevotionals
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción.
 * @apiParam {String|Null} picture Base64 de la imagen.
 * @apiParam {String|Null} urlVideo URL del video de youtube.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "1 Corintios 13:4-7",
	"description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
	"picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...",
	"urlVideo": "https://www.youtube.com/watch?v=tRwyP2EV5dE"
}
 *
 * @apiExample {JSON} Example JSON Request without picture and urlVideo
 * {
	"title": "1 Corintios 13:4-7",
	"description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
	"picture": null,
	"urlVideo": null
}
 */

/**
 * @apiDefine ValidateErrorsDevotionals
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "title",
      "msg": "Disculpe, pero indicar un título válido."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción."
    },
    {
      "input": "picture",
      "msg": "Disculpe, pero la imagen suministrada es incorrecta."
    },
    {
      "input": "urlVideo",
      "msg": "Disculpe, pero la URL para el video debe ser de YouTube."
    }
  ]
}
 */

/* docs */

/**
 * @api {get} /api/admin/devotionals (00) Obtener total de devocionales.
 * @apiVersion 0.0.38
 * @apiName getTotalsDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
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
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/devotionals (01) Obtener listado de devocionales.
 * @apiVersion 0.0.38
 * @apiName getDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
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
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/admin/devotionals (02) Agregar un devocional.
 * @apiVersion 0.0.38
 * @apiName createDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiUse ParamsToCreateOrUpdateDevotionals
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
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidateErrorsDevotionals
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/devotionals/:_id (03) Obtener detalles de un devocional.
 * @apiVersion 0.0.38
 * @apiName detailsDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
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
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundDevotionalsError
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/devotionals/:_id (04) Actualizar datos de un banco.
 * @apiVersion 0.0.38
 * @apiName updateDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del devocional.
 *
 * @apiUse ParamsToCreateOrUpdateDevotionals
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} devotional Detalles del devocional.
 *
 * @apiSuccess (devotional Object) {String} _id ID del devocional.
 * @apiSuccess (devotional Object) {String} title Título.
 * @apiSuccess (devotional Object) {String} description Título.
 * @apiSuccess (devotional Object) {String|Null} picture URL imagen.
 * @apiSuccess (devotional Object) {String|Null} urlVideo URL video Youtube.
 * @apiSuccess (devotional Object) {String} created_at Fecha de creación del devocional.
 * @apiSuccess (devotional Object) {String} updated_at Fecha de la última actualización del devocional.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se actualizado el devocional exitosamente.",
  "devotional": {
    "_id": "6128782a00553eba8dade339",
    "title": "1 CORINTIOS 13:4-7",
    "description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
    "picture": "https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg",
    "urlVideo": "https://www.youtube.com/watch?v=tRwyP2EV5dE",
    "created_at": "2021-08-27 00:29:14",
    "updated_at": "2021-08-27 14:39:17"
  }
}
 * @apiSuccessExample {JSON} Success without picture and urlVideo
 * HTTP/1.1 200 Success
 * {
  "msg": "Se actualizado el devocional exitosamente.",
  "devotional": {
    "_id": "6128782a00553eba8dade339",
    "title": "1 CORINTIOS 13:4-7",
    "description": "<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...",
    "picture": null,
    "urlVideo": null,
    "created_at": "2021-08-27 00:29:14",
    "updated_at": "2021-08-27 00:29:17"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidateErrorsDevotionals
 *
 * @apiUse ErrorIdOrNotFoundDevotionalsError
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/devotionals/:_id (04) Eliminar un devocional.
 * @apiVersion 0.0.38
 * @apiName deleteDevotionalsAdmin
 * @apiGroup DevotionalsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del devocional.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el devocional exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorIdOrNotFoundDevotionalsError
 *
 * @apiUse GlobalErrorSystem
 *
 */
