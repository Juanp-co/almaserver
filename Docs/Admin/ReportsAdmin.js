/**
 * @api {get} /api/admin/reports (00) Obtener reportes.
 * @apiVersion 0.0.20
 * @apiName getReportsAdmin
 * @apiGroup ReportsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Query Params) {String} initDate Fecha de inicio de la consulta (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de final de la consulta (formato: YYYY-MM-DD) (opcional)
 * (Si se envía este parámetro, se requerirá la fecha de inicio. Sino, las fechas de filtrado se ignorarán).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} report Datos para los reportes.
 *
 * @apiSuccess (report Object) {Object} consolidates Datos de los reportes para consolidación.
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
		"consolidations": {
			"title": "Consolidaciones",
			"data": [
				{
					"label": "Miembros registrados",
					"qty": 6
				},
				{
					"label": "Miembros visitados",
					"qty": 2
				}
			],
			"qty": 8
		},
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

/**
 * @api {get} /api/admin/reports/families-groups (01) Obtener reportes de los grupos familiares.
 * @apiVersion 0.0.28
 * @apiName getFamiliesGroupsReportsAdmin
 * @apiGroup ReportsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Query Params) {String} sector Número del sector (opcional).
 * @apiParam (Query Params) {String} subSector Número del sub-sector (opcional).
 * @apiParam (Query Params) {String} number Número del grupo (opcional).
 * @apiParam (Query Params) {String} initDate Fecha de inicio de la consulta (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de final de la consulta (formato: YYYY-MM-DD) (opcional)
 * (Si se envía este parámetro, se requerirá la fecha de inicio. Sino, las fechas de filtrado se ignorarán).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} reports Datos del reporte.
 *
 * @apiSuccess (reports Object[]) {Object} group Datos del grupo.
 * @apiSuccess (reports Object[]) {Object} report Datos del reporte.
 * @apiSuccess (reports Object[]) {Object[]} observations Listado de observaciones.
 *
 * @apiSuccess (group Object) {Number} _id ID del miembro.
 * @apiSuccess (group Object) {Number} sector Nombres.
 * @apiSuccess (group Object) {Number} subSector Apellidos.
 * @apiSuccess (group Object) {Number} number Número de documento.
 * @apiSuccess (group Object) {String} created_at Fecha de creación del grupo.
 *
 * @apiSuccess (report Object) {Number} brethren Número de hermanos.
 * @apiSuccess (report Object) {Number} friends Número de amigos de los hermanos.
 * @apiSuccess (report Object) {Number} scheduledVisits Número de visitas programadas.
 * @apiSuccess (report Object) {Number} discipleshipVisits Número de visitas al disipulado.
 * @apiSuccess (report Object) {Number} christianChildren Número de niños cristianos.
 * @apiSuccess (report Object) {Number} christianChildrenFriends Número de amigos de los niños cristianos.
 * @apiSuccess (report Object) {Number} total Número de total de hermanos y sus amigos, y niños y sus amigos.
 * @apiSuccess (report Object) {Number} offering Total de ofrendas.
 * @apiSuccess (report Object) {Number} churchAttendance Número de asistencias a la iglesia.
 * @apiSuccess (report Object) {Number} churchAttendanceChildren Número de asistencia de niños a la iglesia.
 * @apiSuccess (report Object) {Number} conversions Número de conversiones.
 * @apiSuccess (report Object) {Number} reconciliations Número de reconciliaciones.
 * @apiSuccess (report Object) {Number} conversionsChildren Número de conversiones de niños.
 * @apiSuccess (report Object) {Number} brethrenPlanning Número de hermanos planeando.
 * @apiSuccess (report Object) {Number} bibleReading Número de lecturas bíblicas.
 * @apiSuccess (report Object) {Number} consolidated Número de consolidados.
 *
 * @apiSuccess (observations Object[]) {String} observations Observaciones.
 * @apiSuccess (observations Object[]) {String} date Fecha del reporte.
 *
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Reportes de grupos familiares.",
	"reports": [
		{
			"group": {
				"_id": "6063385c98fc731c04777827",
				"sector": 1,
				"subSector": 1,
				"number": 1,
				"created_at": "2021-03-30 09:40:28"
			},
			"report": {
				"brethren": 0,
				"friends": 0,
				"scheduledVisits": 0,
				"discipleshipVisits": 0,
				"christianChildren": 0,
				"christianChildrenFriends": 0,
				"total": 0,
				"offering": 0,
				"churchAttendance": 0,
				"churchAttendanceChildren": 0,
				"conversions": 0,
				"reconciliations": 0,
				"conversionsChildren": 0,
				"brethrenPlanning": 0,
				"bibleReading": 0,
				"consolidated": 0
			},
			"observations": []
		},
		.
		.
		.
		{
			"group": {
				"_id": "6063385c98fc731c04777829",
				"sector": 4,
				"subSector": 2,
				"number": 2,
				"created_at": "2021-03-30 09:40:28"
			},
			"report": {
				"brethren": 16,
				"friends": 15,
				"scheduledVisits": 3,
				"discipleshipVisits": 6,
				"christianChildren": 10,
				"christianChildrenFriends": 8,
				"total": 2173,
				"offering": 35000,
				"churchAttendance": 6,
				"churchAttendanceChildren": 5,
				"conversions": 3,
				"reconciliations": 1,
				"conversionsChildren": 5,
				"brethrenPlanning": 3,
				"bibleReading": 9,
				"consolidated": 8
			},
			"observations": [
				{
					"observations": "VESTIBULUM AC DIAM SIT AMET QUAM VEHICULA ELEMENTUM SED SIT AMET DUI. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. SED PORTTITOR LECTUS NIBH.\nLOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. CURABITUR ARCU ERAT, ACCUMSAN ID IMPERDIET ET, PORTTITOR AT SEM. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA.\nVESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. VIVAMUS MAGNA JUSTO, LACINIA EGET CONSECTETUR SED, CONVALLIS AT TELLUS.",
					"date": "2021-04-01 00:15:00"
				},
				.
				.
				.
			]
		}
	]
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 *
 */
