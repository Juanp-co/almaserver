/**
 * @apiDefine ValidationsChurches
 *
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "name",
      "msg": "Disculpe, pero indicar el nombre para la iglesia."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción para la iglesia"
    },
    {
      "input": "picture",
      "msg": "Disculpe, pero la imagen indicada es incorrecta."
    },
    {
      "input": "location",
      "msg": "Disculpe, pero la ubicación seleccionada es incorrecta."
    },
    {
      "input": "location",
      "msg": "Disculpe, pero las coordenadas de la ubicación seleccionada son incorrectas."
    },
    {
      "input": "address",
      "msg": "Disculpe, pero la dirección indicada es incorrecta."
    },
    {
      "input": "phone1",
      "msg": "Disculpe, pero el teléfono principal indicado es incorrecto."
    },
    {
      "input": "phone2",
      "msg": "Disculpe, pero el teléfono secundario indicado es incorrecto."
    },
    {
      "input": "email",
      "msg": "Disculpe, pero el correo electrónico indicado es incorrecto."
    }
  ]
}
 *
 */

/**
 * @apiDefine ChurchesModel
 *
 * @apiSuccess (church Object) {String} _id ID de la iglesia.
 * @apiSuccess (church Object) {String} name Nombre.
 * @apiSuccess (church Object) {String|Null} description Descripción.
 * @apiSuccess (church Object) {String|Null} phone1 Teléfono principal.
 * @apiSuccess (church Object) {String|Null} phone2 Teléfono secundario.
 * @apiSuccess (church Object) {String|Null} email Correo electrónico.
 * @apiSuccess (church Object) {String|Null} address Dirección.
 * @apiSuccess (church Object) {Object} location Datos de ubicación.
 * @apiSuccess (church Object) {String|Null} picture URL imagen.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación.
 *
 */

/**
 * @apiDefine ChurchJsonModel
 *
 * @apiParam (church Object) {String} name Nombre.
 * @apiParam (church Object) {String|Null} description Descripción.
 * @apiParam (church Object) {String|Null} phone1 Teléfono principal.
 * @apiParam (church Object) {String|Null} phone2 Teléfono secundario.
 * @apiParam (church Object) {String|Null} email Correo electrónico.
 * @apiParam (church Object) {String|Null} address Dirección.
 * @apiParam (church Object) {Object} location Datos de ubicación.
 * @apiParam (church Object) {String|Null} picture Base64 o URL de imagen.
 *
 * @apiParam (location Object) {String} type Tipo de coordenada.
 * @apiParam (location Object) {Number[]} coordinates Coordenadas de la ubicación.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "name": "ASAMBLEA DE DIOS - PRINCIPAL",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
  "phone1": "00000000000",
  "phone2": "00000000000",
  "email": "church@example.com",
  "address": "Str 37, Villavicencio, COL",
  "location": {
    "type": "Point",
    "coordinates": [-64.1828984935545, 10.454209446329]
  },
  "picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/....."
 *
 */


/**
 * @api {get} /api/admin/churches (00) Obtener listado de iglesias.
 * @apiVersion 0.0.50
 * @apiName getChurchesAdmin
 * @apiGroup ChurchesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} churches Listado iglesias.
 *
 * @apiSuccess (churches Object[]) {String} _id ID de la iglesia.
 * @apiSuccess (churches Object[]) {String} name Nombre.
 * @apiSuccess (churches Object[]) {String|Null} description Descripción.
 * @apiSuccess (churches Object[]) {String|Null} phone1 Teléfono principal.
 * @apiSuccess (churches Object[]) {String|Null} phone2 Teléfono secundario.
 * @apiSuccess (churches Object[]) {String|Null} email Correo electrónico.
 * @apiSuccess (churches Object[]) {String|Null} address Dirección.
 * @apiSuccess (churches Object[]) {Object} location Datos de ubicación.
 * @apiSuccess (churches Object[]) {String|Null} picture URL imagen.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de iglesias",
  "churches": [
    {
      "_id": "624a357644f15f3ce8200c2f",
      "name": "ASAMBLEA DE DIOS - PRINCIPAL",
      "description": "IGLESIA PRINCIPAL",
      "phone1": null,
      "phone2": null,
      "email": null,
      "address": null,
      "location": {
        "type": "Point",
        "coordinates": [
          -73.630175,
          4.134516
        ]
      },
      "picture": null
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
  "msg": "Listado de iglesias",
	"churches": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/admin/churches (01) Agregar una iglesia.
 * @apiVersion 0.0.50
 * @apiName createChurchesAdmin
 * @apiGroup ChurchesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiUse ChurchJsonModel
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} church Detalles de la iglesia.
 *
 * @apiUse ChurchesModel
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se registrado la iglesia exitosamente.",
	"church": {
    "_id": "624a357644f15f3ce8200c2f",
    "name": "ASAMBLEA DE DIOS - PRINCIPAL",
    "description": "IGLESIA PRINCIPAL",
    "phone1": "00000000000",
    "phone2": "00000000000",
    "email": "church@example.com",
    "address": "Str 37, Villavicencio, COL",
    "location": {
      "type": "Point",
      "coordinates": [
        -73.630175,
        4.134516
      ]
    },
    "picture": "https://delii.s3.amazonaws.com/alma/churches/church-624a357644f15f3ce8200c2f-1649030518.jpg"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidationsChurches
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/churches/:_id (02) Obtener detalles de una iglesia.
 * @apiVersion 0.0.50
 * @apiName detailsChurchesAdmin
 * @apiGroup ChurchesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID de la iglesia.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} church Detalles de la iglesia.
 *
 * @apiUse ChurchesModel
 * @apiSuccess (church Object) {String|Null} user Datos del usuario que creó la iglesia.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Detalles iglesia",
  "church": {
    "_id": "624a357644f15f3ce8200c2f",
    "name": "ASAMBLEA DE DIOS - PRINCIPAL",
    "description": "IGLESIA PRINCIPAL",
    "picture": null,
    "phone1": null,
    "phone2": null,
    "address": null,
    "location": {
      "type": "Point",
      "coordinates": [
        -73.630175,
        4.134516
      ]
    },
    "user": {
      "_id": "6164f0f06eb4da089c812f4d",
      "names": "PERFIL",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "3153268404",
      "picture": null,
      "position": null
    }
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ChurchesErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/churches/:_id (03) Actualizar datos de una iglesia.
 * @apiVersion 0.0.50
 * @apiName updateChurchesAdmin
 * @apiGroup ChurchesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiUse ChurchJsonModel
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} church Detalles de la iglesia.
 *
 * @apiUse ChurchesModel
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se actualizado la iglesia exitosamente.",
	"church": {
    "_id": "624a357644f15f3ce8200c2f",
    "name": "ASAMBLEA DE DIOS - PRINCIPAL",
    "description": "IGLESIA PRINCIPAL",
    "phone1": "00000000000",
    "phone2": "00000000000",
    "email": "church@example.com",
    "address": "Str 37, Villavicencio, COL",
    "location": {
      "type": "Point",
      "coordinates": [
        -73.630175,
        4.134516
      ]
    },
    "picture": "https://delii.s3.amazonaws.com/alma/churches/church-624a357644f15f3ce8200c2f-1649030518.jpg"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidationsChurches
 *
 * @apiUse ChurchesErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/churches/:_id (04) Eliminar una iglesia.
 * @apiVersion 0.0.50
 * @apiName deleteChurchesAdmin
 * @apiGroup ChurchesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin).
 *
 * @apiParam (Path params) {String} _id ID de la iglesia.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado la iglesia exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ChurchesErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */
