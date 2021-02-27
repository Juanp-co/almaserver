/**
 * @api {get} /api/user/group (00) Obtener datos del grupo familiar.
 * @apiVersion 0.0.16
 * @apiName getFamilyUserGroup
 * @apiGroup UserGroup
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object|Null} group Datos del grupo familiar del usuario.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {Object[]} members Listado de miembros pertenecientes al grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (member Object) {Number|Null} gender ID (array index) del sexo del usuario.
 * @apiSuccess (members Object[]) {String} _id ID del usuario.
 * @apiSuccess (members Object[]) {String} names Nombre(s).
 * @apiSuccess (members Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (members Object[]) {String} direction Dirección del usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mi grupo familiar",
	"group": {
		"_id": "6018e503e02a45115407e82f",
		"name": "FAMILIA VELASQUEZ RODRIGUEZ",
		"code": "AAA-001",
		"members": [
			{
				"gender": 2,
				"_id": "5fcf0821fc917d476c1cf3e3",
				"names": "USUARIO TRES",
				"lastNames": "PRUEBA TRES",
				"direction": "any direction"
			}
		],
		"created_at": "2021-02-02 00:37:07",
		"updated_at": "2021-02-02 02:45:50"
	}
}
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Mi grupo familiar",
	"group": null
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/group/:memberId (01) Obtener datos de un miembro del grupo familiar.
 * @apiVersion 0.0.13
 * @apiName getDataMemberUserGroup
 * @apiGroup UserGroup
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
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
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
    "msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar."
}
 *
 * @apiUse GlobalErrorSystem
 */
