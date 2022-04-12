/**
 * @api {post} /api/user/resources (00) Agregar nuevo documento.
 * @apiVersion 0.0.51
 * @apiName saveUserDocuments
 * @apiGroup UserDocuments
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} title Título para el documento.
 * @apiParam {String} file Base64 del documento PDF.
 * @apiParam {Number[]} rolesList Roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).
 *
 * @apiExample {JSON} Example JSON Request Consolidated
 * {
  "title": "Prueba documento",
  "rolesList": [0, 1, 2, 3],
  "file": "data:application/pdf;base64,JVBERi0xLjUNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdG....",
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} resource Datos de retorno.
 *
 * @apiSuccess (resource Object) {String} _id ID del recurso compartido.
 * @apiSuccess (resource Object) {String} title Título del recurso.
 * @apiSuccess (resource Object) {String} urlDoc URL del documento PDF.
 * @apiSuccess (resource Object) {Number[]} roles Listado de roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).
 * @apiSuccess (resource Object) {Number} created_at Fecha de creación del documento.
 * @apiSuccess (resource Object) {Number} updated_at Fecha de actalización del documento.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha agregado el nuevo documento exitosamente.",
  "resource": {
    "_id": "625551d7f5598629dca06331",
    "title": "PRUEBA DOCUMENTO",
    "urlDoc": "https://delii.s3.amazonaws.com/alma/resources/documento-1649758676.pdf",
    "roles": [
      0,
      1,
      2,
      3
    ],
    "created_at": 1649758679,
    "updated_at": 1649758679
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
      "msg": "Disculpe, pero indicar un título válido."
    },
    {
      "input": "file",
      "msg": "Disculpe, pero el documento suministrado es incorrecto."
    },
    {
      "input": "rolesList",
      "msg": "Disculpe, pero uno de los roles seleccionados no está permitido."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/resources (01) Obtener listado de documentos compartidos.
 * @apiVersion 0.0.51
 * @apiName getUserDocuments
 * @apiGroup UserDocuments
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} resources Listado de retorno.
 *
 * @apiSuccess (resources Object[]) {String} _id ID del recurso compartido.
 * @apiSuccess (resources Object[]) {String} title Título del recurso.
 * @apiSuccess (resources Object[]) {String} urlDoc URL del documento PDF.
 * @apiSuccess (resources Object[]) {Number[]} roles Listado de roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).
 * @apiSuccess (resources Object[]) {Number} created_at Fecha de creación del documento.
 * @apiSuccess (resources Object[]) {Number} updated_at Fecha de actalización del documento.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Mis recursos compartidos",
  "resources": [
    {
      "_id": "6252676c8400314c8c94c0ee",
      "title": "PRUEBA DOCUMENTO",
      "urlDoc": "https://delii.s3.amazonaws.com/alma/resources/documento-1649567592.pdf",
      "roles": [
        0,
        1,
        2,
        3
      ],
      "created_at": 1649567596,
      "updated_at": 1649567596
    }
  ]
}
 *
 * @apiSuccessExample {JSON} Success without data
 * HTTP/1.1 200 Success
 * {
  "msg": "Mis recursos compartidos",
	"resources": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/user/resources/:_id (02) Eliminar un documento compartido.
 * @apiVersion 0.0.51
 * @apiName deleteUserDocuments
 * @apiGroup UserDocuments
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del documento compartido.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha eliminado el documento exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Error _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
	"msg": "Disculpe, pero el documento seleccionado es incorrecto.."
}
 *
 * @apiErrorExample {JSON} Share documento not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el documento seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */
