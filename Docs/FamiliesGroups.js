/**
 * @api {get} /api/user/families-groups (00) Obtener listado de grupos familiares.
 * @apiVersion 0.0.28
 * @apiName getUserFamiliesGroups
 * @apiGroup UserFamiliesGroups
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} groups Listado de grupos familiares asociados al usuario.
 *
 * @apiSuccess (groups Object[]) {Number} _id ID del miembro.
 * @apiSuccess (groups Object[]) {Number} sector Nombres.
 * @apiSuccess (groups Object[]) {Number} subSector Apellidos.
 * @apiSuccess (groups Object[]) {Number} number Número de documento.
 * @apiSuccess (groups Object[]) {Object} location Datos de la localización.
 * @apiSuccess (groups Object[]) {Boolean} isLeader Indica si el miembro es líder.
 * @apiSuccess (groups Object[]) {String} created_at Fecha de creación del grupo.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación del grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Grupos familiares",
	"groups": [
    {
      "_id": "6063385c98fc731c04777829",
      "number": 1,
      "sector": 1,
      "subSector": 1,
      "direction": "DIRECCIÓN CUALQUIERA EDITADA",
      "location": {
        "type": "Point",
        "coordinates": [
          -64.18147,
          10.451304
        ]
      },
      "isLeader": true,
      "created_at": "2021-03-30 09:40:28"
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
	"msg": "Grupos familiares",
	"groups": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/families-groups/:_id (01) Obtener detalles de un grupo familiar.
 * @apiVersion 0.0.28
 * @apiName getDetailsGroupUserFamiliesGroups
 * @apiGroup UserFamiliesGroups
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Datos del grupo.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {Number} number Número del grupo.
 * @apiSuccess (group Object) {String} direction Dirección del grupo.
 * @apiSuccess (group Object) {Number} sector Número del sector.
 * @apiSuccess (group Object) {Number} subSector Número del sub-sector.
 * @apiSuccess (group Object) {Object} location Datos de la localización.
 * @apiSuccess (group Object) {Object} members Miembros del grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de creación del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación del grupo.
 *
 * @apiSuccess (members Object) {Object|Null} leader Datos del líder del grupo.
 * @apiSuccess (members Object) {Object|Null} host Datos del anfitrión del grupo.
 * @apiSuccess (members Object) {Object|Null} assistant Datos del asistente del grupo.
 * @apiSuccess (members Object) {Object|Null} master Datos del maestro del grupo.
 *
 * @apiSuccess (leader, host, assistant and master Object) {String} _id ID del miembro.
 * @apiSuccess (leader, host, assistant and master Object) {String} names Nombres.
 * @apiSuccess (leader, host, assistant and master Object) {String} lastNames Apellidos.
 * @apiSuccess (leader, host, assistant and master Object) {String} document Número de documento.
 * @apiSuccess (leader, host, assistant and master Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (leader, host, assistant and master Object) {String} phone Teléfono.
 * @apiSuccess (leader, host, assistant and master Object) {String|Null} position Cargo que realiza el usuario.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Grupo Familiar",
	"group": {
		"_id": "6063385c98fc731c04777829",
		"number": 2,
		"direction": "DIRECCIÓN CUALQUIERA ASDASD ASDASD",
		"sector": 4,
		"subSector": 2,
    "location": {
      "type": "Point",
      "coordinates": [
        -64.18147,
        10.451304
      ]
    },
		"members": {
			"leader": {
				"_id": "604068b49b20e72f341972ed",
				"names": "LIDER",
				"lastNames": "PRUEBA",
				"document": "CC1234123411",
				"gender": null,
				"phone": 573151234561,
				"position": null
			},
			"host": {
				"_id": "604068461caad10e2c965406",
				"names": "PRUEBA",
				"lastNames": "USUARIO",
				"document": "CC123123123",
				"gender": null,
				"phone": "573151234567",
				"position": "ANFITRIÓN Y LÍDER"
			},
			"assistant": {
				"_id": "5fcf0821fc917d476c1cf3e3",
				"names": "PEDRO JOSÉ",
				"lastNames": "PÉREZ RODRIGUEZ",
				"document": "CC12345678",
				"gender": 0,
				"phone": "3161234567",
				"position": null
			},
			"master": null
		},
		"created_at": "2021-03-30 09:40:28",
		"updated_at": "2021-04-03 11:51:52"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not belong at the group
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero usted no pertenece a ningún grupo familiar."
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/families-groups/:_id/reports (02) Obtener reportes de un grupo familiar.
 * @apiVersion 0.0.28
 * @apiName getReportsGroupUserFamiliesGroups
 * @apiGroup UserFamiliesGroups
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del reporte.
 *
 * @apiSuccess (data Object) {Object} report Datos del reporte.
 * @apiSuccess (data Object) {Object[]} observations Listado de observaciones.
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
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Reporte del grupo familiar",
	"data": {
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
}
 *
 * @apiSuccessExample {JSON} Success without information
 * HTTP/1.1 200 Success
 * {
	"msg": "Reporte del grupo familiar",
	"data": {
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
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not belong at the group
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero usted no pertenece a ningún grupo familiar."
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/user/families-groups/:_id/reports (03) Crear reporte a un grupo familiar.
 * @apiVersion 0.0.28
 * @apiName createReportsGroupUserFamiliesGroups
 * @apiGroup UserFamiliesGroups
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {Number} brethren Número de hermanos.
 * @apiParam {Number} friends Número de amigos de los hermanos.
 * @apiParam {Number} scheduledVisits Número de visitas programadas.
 * @apiParam {Number} discipleshipVisits Número de visitas al disipulado.
 * @apiParam {Number} christianChildren Número de niños cristianos.
 * @apiParam {Number} christianChildrenFriends Número de amigos de los niños cristianos.
 * @apiParam {Number} total Número de total de hermanos y sus amigos, y niños y sus amigos.
 * @apiParam {Number} offering Total de ofrendas.
 * @apiParam {Number} churchAttendance Número de asistencias a la iglesia.
 * @apiParam {Number} churchAttendanceChildren Número de asistencia de niños a la iglesia.
 * @apiParam {Number} conversions Número de conversiones.
 * @apiParam {Number} reconciliations Número de reconciliaciones.
 * @apiParam {Number} conversionsChildren Número de conversiones de niños.
 * @apiParam {Number} brethrenPlanning Número de hermanos planeando.
 * @apiParam {Number} bibleReading Número de lecturas bíblicas.
 * @apiParam {Number} consolidated Número de consolidados.
 * @apiParam {String} observations Observaciones.
 * @apiParam {String} date Fecha del reporte.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "brethren": 2,
  "friends": 2,
  "christianChildren": 1,
  "christianChildrenFriends": 1,
  "scheduledVisits": 0,
  "discipleshipVisits": 0,
  "offering": 0,
  "churchAttendance": 0,
  "churchAttendanceChildren": 0,
  "conversions": 0,
  "reconciliations": 0,
  "conversationsWithChildren": 0,
  "brethrenPlanning": 0,
  "bibleReading": 0,
  "consolidated": 0,
  "observations": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  "date": "2021-04-10 01:15"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos del reporte.
 *
 * @apiSuccess (data Object) {Number} brethren Número de hermanos.
 * @apiSuccess (data Object) {Number} friends Número de amigos de los hermanos.
 * @apiSuccess (data Object) {Number} scheduledVisits Número de visitas programadas.
 * @apiSuccess (data Object) {Number} discipleshipVisits Número de visitas al disipulado.
 * @apiSuccess (data Object) {Number} christianChildren Número de niños cristianos.
 * @apiSuccess (data Object) {Number} christianChildrenFriends Número de amigos de los niños cristianos.
 * @apiSuccess (data Object) {Number} total Número de total de hermanos y sus amigos, y niños y sus amigos.
 * @apiSuccess (data Object) {Number} offering Total de ofrendas.
 * @apiSuccess (data Object) {Number} churchAttendance Número de asistencias a la iglesia.
 * @apiSuccess (data Object) {Number} churchAttendanceChildren Número de asistencia de niños a la iglesia.
 * @apiSuccess (data Object) {Number} conversions Número de conversiones.
 * @apiSuccess (data Object) {Number} reconciliations Número de reconciliaciones.
 * @apiSuccess (data Object) {Number} conversionsChildren Número de conversiones de niños.
 * @apiSuccess (data Object) {Number} brethrenPlanning Número de hermanos planeando.
 * @apiSuccess (data Object) {Number} bibleReading Número de lecturas bíblicas.
 * @apiSuccess (data Object) {Number} consolidated Número de consolidados.
 * @apiSuccess (data Object) {String} observations Observaciones.
 * @apiSuccess (data Object) {String} date Fecha del reporte.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha agregado el reporte exitosamente.",
	"data": {
		"brethren": 2,
		"friends": 2,
		"scheduledVisits": 0,
		"discipleshipVisits": 0,
		"christianChildren": 1,
		"christianChildrenFriends": 1,
		"total": 6,
		"offering": 0,
		"churchAttendance": 0,
		"churchAttendanceChildren": 0,
		"conversions": 0,
		"reconciliations": 0,
		"conversationsWithChildren": 0,
		"brethrenPlanning": 0,
		"bibleReading": 0,
		"consolidated": 0,
		"observations": "VESTIBULUM AC DIAM SIT AMET QUAM VEHICULA ELEMENTUM SED SIT AMET DUI. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. SED PORTTITOR LECTUS NIBH.\nLOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. CURABITUR ARCU ERAT, ACCUMSAN ID IMPERDIET ET, PORTTITOR AT SEM. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA.\nVESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. VIVAMUS MAGNA JUSTO, LACINIA EGET CONSECTETUR SED, CONVALLIS AT TELLUS.",
		"date": "2021-04-10 00:15:00"
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Not belong at the group
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero usted no pertenece a ningún grupo familiar."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "brethren",
            "msg": "Disculpe, pero debe indicar el número de hermanos."
        },
        .
        .
        .
        {
            "input": "observations",
            "msg": "Disculpe, pero debe indicar una dirección."
        },
        {
            "input": "date",
            "msg": "Disculpe, pero debe indicar la fecha y hora del reporte."
        }
    ]
}
 *
 * @apiUse GlobalErrorSystem
 */
