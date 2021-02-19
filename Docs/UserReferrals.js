/**
 * @api {get} /api/user/referrals (00) Obtener listado de referidos.
 * @apiVersion 0.0.16
 * @apiName getUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} referrals Listado de referidos del usuario.
 *
 * @apiSuccess (referrals Array Object) {Number|Null} gender ID (array index) del sexo del usuario.
 * @apiSuccess (referrals Array Object) {String} _id ID del usuario.
 * @apiSuccess (referrals Array Object) {String} document Número de documento.
 * @apiSuccess (referrals Array Object) {String} names Nombres.
 * @apiSuccess (referrals Array Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mis referidos.",
	"referrals": [
		{
			"gender": 0,
			"_id": "6022194c88342006d4a700f3",
			"document": "CC1234567777",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ"
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
	"msg": "Mis referidos.",
	"referrals": []
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
 * @api {get} /api/user/referrals/:memberId (01) Obtener datos de un usuario referido.
 * @apiVersion 0.0.16
 * @apiName getDataMemberUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} memberId ID del miembro a consultar.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del miembro del grupo.
 *
 * @apiSuccess (data Object) {Object} member Datos del perfil del miembro.
 * @apiSuccess (data Object) {String} totalCourses Total de cursos que ha visualizado.
 * @apiSuccess (data Object) {String} totalReferrals Total de referidos.
 *
 * @apiSuccess (member Object) {Number|Null} gender ID (array index) del sexo del usuario.
 * @apiSuccess (member Object) {String} _id ID del miembro.
 * @apiSuccess (member Object) {String|Null} phone Número de teléfono.
 * @apiSuccess (member Object) {String} names Nombres.
 * @apiSuccess (member Object) {String} lastNames Apellidos.
 * @apiSuccess (member Object) {String|Null} direction Dirección.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Miembro.",
	"data": {
		"member": {
			"gender": 0,
			"_id": "6022194c88342006d4a700f3",
			"phone": "584121490196",
			"names": "ANTHONY",
			"lastNames": "VELÁSQUEZ",
			"direction": "any direction"
		},
		"totalReferrals": 1,
		"totalCourses": 0
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
 * @apiErrorExample {JSON} Error session
 * HTTP/1.1 401 Unauthorized
 * {
	"msg": "Disculpe, pero no está autorizado para ver este contenido."
}
 *
 * @apiErrorExample {JSON} Not found member in group
 * HTTP/1.1 403 Forbidden
 * {
	"msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar."
}
 *
 * @apiErrorExample {JSON} The member Doesn't belong to the group
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales."
}
 *
 * @apiErrorExample {JSON} Not found member data
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no se logró encontrar la información del miembro."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el miembro seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
