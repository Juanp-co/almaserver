/**
 * @api {get} /api/admin/consolidates (00) Obtener reporte de consolidación.
 * @apiVersion 0.0.30
 * @apiName getConsolidatesAdmin
 * @apiGroup ConsolidatesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión admin.
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = date [requerido]).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} initDate Fecha de inicio de la consulta (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de final de la consulta (formato: YYYY-MM-DD) (opcional)
 * (Si se envía este parámetro, se requerirá la fecha de inicio. Sino, las fechas de filtrado se ignorarán).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del reporte de consolidación.
 *
 * @apiSuccess (data Object) {Object[]} consolidates Datos de visitas a consolidados.
 * @apiSuccess (data Object) {Object[]} members Datos de los miembros de consolidación.
 * @apiSuccess (data Object) {String[]} pendingVisits Listado de los IDs de los miembros consolidados pendientes por visitas.
 *
 * @apiSuccess (consolidates Object[]) {String} _id ID del registro de la visita.
 * @apiSuccess (consolidates Object[]) {Object|Null} consolidator Miembro que registró la información.
 * @apiSuccess (consolidates Object[]) {Object|Null} member Datos del miembro consolidado.
 * @apiSuccess (consolidates Object[]) {String} date Fecha de la visita (YYYY-MM-DD).
 * @apiSuccess (consolidates Object[]) {String|Null} action Acción realizada (Visita ó llamada).
 * @apiSuccess (consolidates Object[]) {String} observation Observación agregada en la visita.
 *
 * @apiSuccess (consolidator, members and member Object) {String} _id ID del miembro.
 * @apiSuccess (consolidator, members and member Object) {String} names Nombres.
 * @apiSuccess (consolidator, members and member Object) {String} lastNames Apellidos.
 * @apiSuccess (consolidator, members and member Object) {String} document Número de documento.
 * @apiSuccess (consolidator, members and member Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (consolidator, members and member Object) {String|Null} phone Teléfono.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Consolidaciones.",
	"data": {
		"consolidates": [
			{
				"_id": "606bdbf35fd5900c1092d191",
				"consolidator": {
					"gender": 0,
					"_id": "5fcf0821fc917d476c1cf3e2",
					"phone": "31612345678",
					"document": "CC123456789",
					"names": "ANTHONY",
					"lastNames": "ADMINISTRADOR"
				},
				"member": {
					"gender": null,
					"_id": "606b6b833784652d9c46eb04",
					"phone": "3161231231",
					"document": "CC11123123",
					"names": "MILEIDY",
					"lastNames": "CABELLO"
				},
				"actión": "Visita",
				"date": "2021-04-05",
				"observation": "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. SED PORTTITOR LECTUS NIBH. CURABITUR NON NULLA SIT AMET NISL TEMPUS CONVALLIS QUIS AC LECTUS. SED PORTTITOR LECTUS NIBH. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. NULLA QUIS LOREM UT LIBERO MALESUADA FEUGIAT."
			},
			.
			.
			.
		],
		"members": [
			{
				"gender": 0,
				"_id": "5fcf0821fc917d476c1cf3e2",
				"phone": "31612345678",
				"document": "CC123456789",
				"names": "ANTHONY",
				"lastNames": "ADMINISTRADOR"
			},
			.
			.
			.
		],
		"pendingVisits": [
			"606b6b833784652d9c46eb04",
			.
			.
			.
		]
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
 * @api {post} /api/admin/consolidates/report (01) Registrar visita de consolidación.
 * @apiVersion 0.0.30
 * @apiName registerVisitConsolidatesAdmin
 * @apiGroup ConsolidatesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión admin.
 *
 * @apiParam {String} userId ID del miembro consolidado que ha sido visitado.
 * @apiParam {String} date Fecha de registro de la visita.
 * @apiParam {String} Observation Observación indicada de la visita.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "userId": "606b6b833784652d9c46eb04",
  "date": "2021-02-05",
  "observation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha registrado la visita al consolidado exitosamente."
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
      "input": "userId",
      "msg": "Disculpe, pero el miembro seleccionado es incorrecto."
    },
    {
      "input": "date",
      "msg": "Disculpe, pero indicar una fecha para la visita."
    },
    {
      "input": "observation",
      "msg": "Disculpe, pero indicar un observación válida."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/consolidates/members (02) Obtener listado de miembros consolidados.
 * @apiVersion 0.0.30
 * @apiName getMembersConsolidatesAdmin
 * @apiGroup ConsolidatesAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión admin.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} members Listado de miembros.
 *
 * @apiSuccess (members Object[]) {String} _id ID del miembro.
 * @apiSuccess (members Object[]) {String} names Nombres.
 * @apiSuccess (members Object[]) {String} lastNames Apellidos.
 * @apiSuccess (members Object[]) {String} document Número de documento.
 * @apiSuccess (members Object[]) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (members Object[]) {String|Null} phone Teléfono.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Miembros",
	"members": [
		{
			"gender": null,
			"_id": "606b5e0d2aa2d1032873d03a",
			"phone": "563169999999",
			"document": "CC9999999999",
			"names": "NUMERO NUEVE",
			"lastNames": "NUEVE"
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
	"msg": "Miembros",
	"members": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */
