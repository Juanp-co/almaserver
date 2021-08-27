/**
 * @api {get} /api/admin/banks (00) Obtener listado de bancos.
 * @apiVersion 0.0.25
 * @apiName getBanksAdmin
 * @apiGroup BanksAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} banks Listado bancos.
 *
 * @apiSuccess (banks Object[]) {String} _id ID del banco.
 * @apiSuccess (banks Object[]) {String} title Título para el banco.
 * @apiSuccess (banks Object[]) {String} description Descripción del banco.
 * @apiSuccess (banks Object[]) {String} picture URL imagen.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Bancos",
	"banks": [
		{
			"_id": "604bdd2f5a94aa3824e40086",
			"title": "BANCO 02",
			"description": "<p><b>Núm. cuenta</b>: 01010101010101010101.</p>",
			"picture": "http://localhost:7000/images/banks/1615584559.jpeg"
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
	"msg": "Bancos",
	"banks": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/admin/banks (01) Agregar un banco.
 * @apiVersion 0.0.25
 * @apiName createBanksAdmin
 * @apiGroup BanksAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del banco.
 * @apiParam {String} picture Base64 de la imagen.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "BANCO 01",
	"description": "<p><b>Núm. cuenta</b>: 01010101010101010101.</p> .....",
	"picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...",
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} bank Detalles del banco.
 *
 * @apiSuccess (bank Object) {String} _id ID del banco.
 * @apiSuccess (bank Object) {String} title Título para el banco.
 * @apiSuccess (bank Object) {String} description Descripción del banco.
 * @apiSuccess (bank Object) {String} picture URL imagen.
 * @apiSuccess (bank Object) {String} created_at Fecha de registro.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se registrado el banco exitosamente.",
	"bank": {
		"_id": "604be0e0ca004b1018e8a820",
		"title": "BANCO 01",
		"description": "<p><b>Núm. cuenta</b>: 01010101010101010101.</p>.....",
		"picture": "http://localhost:7000/images/banks/1615585504.jpeg",
		"created_at": "2021-03-12 16:45:04"
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
      "msg": "Disculpe, pero indicar un título para el banco."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción para el banco."
    },
    {
      "input": "picture",
      "msg": "Disculpe, pero debe indicar una imagen para el banco."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {get} /api/admin/banks/:_id (02) Obtener detalles de un banco.
 * @apiVersion 0.0.25
 * @apiName detailsBanksAdmin
 * @apiGroup BanksAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del banco.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} bank Detalles del banco.
 *
 * @apiSuccess (bank Object) {String} _id ID del banco.
 * @apiSuccess (bank Object) {String} title Título para el banco.
 * @apiSuccess (bank Object) {String} description Descripción del banco.
 * @apiSuccess (bank Object) {String} picture URL imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Detalles banco.",
	"bank": {
		"_id": "604bdcd88150001af4c4b6f8",
		"title": "BANCO 02",
		"description": "<p><b>Núm. cuenta</b>: 01010101010101010101.</p>",
		"picture": "http://localhost:7000/images/banks/1615585136.jpeg"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse BanksErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/banks/:_id (03) Actualizar datos de un banco.
 * @apiVersion 0.0.25
 * @apiName updateBanksAdmin
 * @apiGroup BanksAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del banco a editar.
 *
 * @apiParam {String} title Título.
 * @apiParam {String} description Descripción del banco.
 * @apiParam {String} picture Base64 de la imagen.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"title": "BANCO 01 - Editado",
	"description": "<p><b>Núm. cuenta</b>: 01010101010101010202.</p> .....",
	"picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...",
}
 *
 * @apiExample {JSON} Example JSON Request with URL in picture
 * {
	"title": "BANCO 01 - Editado",
	"description": "<p><b>Núm. cuenta</b>: 01010101010101010202.</p> .....",
	"picture": "http://localhost:7000/images/banks/1615585504.jpeg",
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} bank Detalles del banco.
 *
 * @apiSuccess (bank Object) {String} _id ID del banco.
 * @apiSuccess (bank Object) {String} title Título para el banco.
 * @apiSuccess (bank Object) {String} description Descripción del banco.
 * @apiSuccess (bank Object) {String} picture URL imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha actualizado el banco exitosamente.",
	"bank": {
		"_id": "604be0e0ca004b1018e8a820",
		"title": "BANCO 01 - Editado",
		"description": "<p><b>Núm. cuenta</b>: 01010101010101010202.</p>.....",
		"picture": "http://localhost:7000/images/banks/1615588099.jpeg"
	}
}
 *
 * @apiSuccessExample {JSON} Success with some url picture
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha actualizado el banco exitosamente.",
	"bank": {
		"_id": "604be0e0ca004b1018e8a820",
		"title": "BANCO 01 - Editado",
		"description": "<p><b>Núm. cuenta</b>: 01010101010101010202.</p>.....",
		"picture": "http://localhost:7000/images/banks/1615585504.jpeg"
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
      "msg": "Disculpe, pero indicar un título para el banco."
    },
    {
      "input": "description",
      "msg": "Disculpe, pero debe indicar una descripción para el banco."
    },
    {
      "input": "picture",
      "msg": "Disculpe, pero debe indicar una imagen para el banco."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/banks/:_id (04) Eliminar un banco.
 * @apiVersion 0.0.25
 * @apiName deleteBanksAdmin
 * @apiGroup BanksAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor).
 *
 * @apiParam (Path params) {String} _id ID del banco.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el banco exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse BanksErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */
