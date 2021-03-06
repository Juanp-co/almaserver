/**
 * @api {get} /api/admin/reports (00) Obtener reportes.
 * @apiVersion 0.0.20
 * @apiName getReportsAdmin
 * @apiGroup ReportsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} initDate Fecha de inicio de la consulta (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de final de la consulta (formato: YYYY-MM-DD) (opcional)
 * (Si se envía este parámetro, se requerirá la fecha de inicio. Sino, las fechas de filtrado se ignorarán).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} report Datos para los reportes.
 *
 * @apiSuccess (report Object) {Object} courses Datos de los reportes para cursos.
 * @apiSuccess (report Object) {Object} events Datos de los reportes para eventos.
 * @apiSuccess (report Object) {Object} groups Datos de los reportes para grupos.
 * @apiSuccess (report Object) {Object} users Datos de los reportes para miembros.
 *
 * @apiSuccess (courses, events and groups Object) {Object} title Título de grupo de datos.
 * @apiSuccess (courses, events and groups Object) {Object[]} data Datos para el reporte.
 *
 * @apiSuccess (users Object) {String} title Título del grupo de reporte.
 * @apiSuccess (users Object) {String} qty Cantidad.
 * @apiSuccess (users Object) {Object} ages Datos de reportes por edades.
 * @apiSuccess (users Object) {Object} gender Datos de reportes por género (sexo).
 * @apiSuccess (users Object) {Object} roles Datos de reportes por roles.
 * @apiSuccess (users Object) {Object} families Datos de reportes por familias.
 *
 * @apiSuccess (ages, gender, roles, families Object of users Object) {String} title Título del grupo de datos.
 * @apiSuccess (ages, gender, roles, families Object of users Object) {Object[]} data Datos para el reporte.
 *
 * @apiSuccess (data Object[]) {String} label Etiqueta del valor a mostrar en el reporte.
 * @apiSuccess (data Object[]) {Number} qty Cantidad.
 *
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Reporte",
	"report": {
		"courses": {
			"title": "Cursos",
			"data": [
				{
					"label": "Publicados",
					"qty": 1
				},
				{
					"label": "Borradores",
					"qty": 1
				},
				{
					"label": "Viendo",
					"qty": 1
				}
			],
			"qty": 2
		},
		"events": {
			"title": "Eventos",
			"data": [
				{
					"label": "Pendientes",
					"qty": 0
				},
				{
					"label": "Finalizados",
					"qty": 7
				}
			],
			"qty": 7
		},
		"groups": {
			"title": "Grupos",
			"data": [
				{
					"label": "Sin miembros",
					"qty": 3
				},
				{
					"label": "Con miembros",
					"qty": 1
				}
			],
			"qty": 4
		},
		"users": {
			"title": "Miembros",
			"qty": 8,
			"ages": {
				"title": "Edades",
				"data": [
					{
						"label": "0 a 15 años",
						"qty": 0
					},
					{
						"label": "16 a 20 años",
						"qty": 0
					},
					{
						"label": "21 a 30 años",
						"qty": 2
					},
					{
						"label": "31 a 40 años",
						"qty": 1
					},
					{
						"label": "41 a 50 años",
						"qty": 0
					},
					{
						"label": "51 a 60 años",
						"qty": 0
					},
					{
						"label": "Mayores de 61 años",
						"qty": 0
					},
					{
						"label": "No indicados",
						"qty": 5
					}
				]
			},
			"families": {
				"title": "Miembros y grupos",
				"data": [
					{
						"label": "No pertenece",
						"qty": 7
					},
					{
						"label": "Pertenece",
						"qty": 1
					}
				]
			},
			"gender": {
				"title": "Géneros",
				"data": [
					{
						"label": "Hombres",
						"qty": 2
					},
					{
						"label": "Mujeres",
						"qty": 1
					},
					{
						"label": "Otro",
						"qty": 5
					}
				]
			},
			"roles": {
				"title": "Roles",
				"data": [
					{
						"label": "Admins",
						"qty": 1
					},
					{
						"label": "Pastores",
						"qty": 2
					},
					{
						"label": "Supervisores",
						"qty": 1
					},
					{
						"label": "Líderes",
						"qty": 2
					},
					{
						"label": "Padres espirituales",
						"qty": 1
					},
					{
						"label": "Personas",
						"qty": 1
					}
				]
			}
		}
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */
