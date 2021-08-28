/* static defines */

/**
 * @apiDefine SimpleModelLHAMFamiliesGroups
 *
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String} _id ID del miembro.
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String} names Nombre(s).
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String|Null} document Número de documento.
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (leader, host, helper and master Object and assistants Object[]) {String|Null} position Cargo o posición del miembro.
 */

/**
 * @apiDefine ParamsCreateOrEditFamilyGroup
 *
 * @apiParam {Number} sector Número del sector.
 * @apiParam {Number} subSector Número del sub-sector.
 * @apiParam {Number} number Número del grupo.
 * @apiParam {String} direction Dirección del grupo.
 * @apiParam {Object} location Datos de geolocalización (opcional).
 *
 * @apiParam (location Object) {String} location Datos de geolocalización.
 * @apiParam (location Object) {Number[]} coordinates Coordenadas de la ubicación ([longitud , latitud] = [-73.630175 , 4.134516]).
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"sector": 99,
	"subSector": 99,
	"number": 99,
	"direction": "Dirección cualquiera",
	"location": {
	  "type": "Point",
	  "coordinates": [ -73.630175, 4.134516 ]
	}
}
 *
 */

/**
 * @apiDefine SuccessGeneralResponseFamilyGroup
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {Number} number Número del grupo.
 * @apiSuccess (group Object) {String} direction Dirección del grupo.
 * @apiSuccess (group Object) {Number} sector Número del sector.
 * @apiSuccess (group Object) {Number} subSector Número del sub-sector.
 * @apiSuccess (group Object) {Object} members Miembros del grupo.
 * @apiSuccess (group Object) {Object} location Datos de la localización.
 * @apiSuccess (group Object) {String} created_at Fecha de creación del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (members Object) {Object|Null} leader Datos del líder.
 * @apiSuccess (members Object) {Object|Null} host Datos del anfitrión.
 * @apiSuccess (members Object) {Object|Null} helper Datos del asistente.
 * @apiSuccess (members Object) {Object|Null} master Datos del maestro.
 * @apiSuccess (members Object) {Object[]} assistants Listado de asistentes..
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación del grupo.
 *
 */

/**
 * @apiDefine ValidationFormDataFamilyGroup
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parametros!",
  "errors": [
    {
      "input": "sector",
      "msg": "Disculpe, pero debe indicar el sector."
    },
    {
      "input": "subSector",
      "msg": "Disculpe, pero debe indica el sub-sector."
    },
    {
      "input": "number",
      "msg": "Disculpe, pero debe indicar el número del grupo."
    },
    {
      "input": "direction",
      "msg": "Disculpe, pero debe indicar una dirección."
    },
    {
      "input": "location",
      "msg": "Disculpe, pero la ubicación seleccionada en el mapa es incorrecta."
    },
    {
      "input": "location",
      "msg": "Disculpe, pero las coordenadas de la ubicación seleccionada en el mapa son incorrectas."
    }
  ]
}
 */

/* docs */

/**
 * @api {get} /api/admin/families-groups (00) Obtener listado de grupos familiares.
 * @apiVersion 0.0.28
 * @apiName getFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Query Params) {String} limit Total de resultados por página (por defecto = 10).
 * @apiParam (Query Params) {String} page Página (por defecto = 1).
 * @apiParam (Query Params) {String} input Campo a ordenar (valores: sector | subSector | number).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} groups Listado de grupos familiares.
 *
 * @apiSuccess (groups Object[]) {Number} _id ID del miembro.
 * @apiSuccess (groups Object[]) {Number} sector Nombres.
 * @apiSuccess (groups Object[]) {Number} subSector Apellidos.
 * @apiSuccess (groups Object[]) {Number} number Número de documento.
 * @apiSuccess (groups Object[]) {String} created_at Fecha de creación del grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Grupos familiares",
	"groups": [
		{
			"_id": "6069917b2760da31bcd519be",
			"number": 3,
			"sector": 1,
			"subSector": 2,
			"created_at": "2021-04-04 05:14:19"
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
 * @api {post} /api/admin/families-groups (01) Crear un grupo familiar.
 * @apiVersion 0.0.28
 * @apiName createGroupFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del admin.
 *
 * @apiUse ParamsCreateOrEditFamilyGroup
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Datos del grupo.
 *
 * @apiUse SuccessGeneralResponseFamilyGroup
 *
 * @apiUse SimpleModelLHAMFamiliesGroups
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha creado el nuevo grupo exitosamente.",
  "group": {
    "members": {
      "leaderId": null,
      "hostId": null,
      "assistantId": null,
      "masterId": null,
      "assistantsIds": []
    },
    "location": {
      "type": "Point",
      "coordinates": [
        -73.630175,
        4.134516
      ]
    },
    "_id": "6126901bc09d294bd193e34b",
    "number": 99,
    "direction": "DIRECCIÓN CUALQUIERA",
    "sector": 99,
    "subSector": 99,
    "created_at": "2021-08-25 13:46:51",
    "updated_at": "2021-08-25 13:46:51"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ValidationFormDataFamilyGroup
 *
 * @apiErrorExample {JSON} Number group exists.
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.",
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/admin/families-groups/:_id (02) Obtener detalles de un grupo familiar.
 * @apiVersion 0.0.36
 * @apiName getDetailsGroupFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del admin.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Datos del grupo.
 *
 * @apiUse SuccessGeneralResponseFamilyGroup
 *
 * @apiUse SimpleModelLHAMFamiliesGroups
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
    "members": {
      "leader": null,
      "host": {
        "_id": "604068461caad10e2c965406",
        "names": "PRUEBA",
        "lastNames": "USUARIO",
        "document": "CC123123123",
        "gender": null,
        "phone": "573151234567",
        "picture": null,
        "position": null
      },
      "helper": {
        "_id": "5fcf0821fc917d476c1cf3e3",
        "names": "PEDRO JOSÉ",
        "lastNames": "PÉREZ RODRIGUEZ",
        "document": "CC12345678",
        "gender": null,
        "phone": "3161234567",
        "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg",
        "position": null
      },
      "master": null,
      "assistants": [
        {
          "_id": "5fcf0821fc917d476c1cf3e9",
          "names": "EMILIA",
          "lastNames": "GOMEZ",
          "document": "CC99999999",
          "gender": 1,
          "phone": "3169999999",
          "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e9/picture-5fcf0821fc917d476c1cf3e9-1629254970.jpg",
          "position": null
        },
        .
        .
        .
      ]
    },
    "created_at": "2021-03-30 09:40:28",
    "updated_at": "2021-08-27 17:51:52"
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
 * @api {put} /api/admin/families-groups/:_id (03) Actualizar datos de un grupo familiar.
 * @apiVersion 0.0.36
 * @apiName updateGroupFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiUse ParamsCreateOrEditFamilyGroup
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
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación del grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el grupo familiar exitosamente.",
  "group": {
    "location": {
      "type": "Point",
      "coordinates": [
        -73.630175,
        4.134516
      ]
    },
    "_id": "6126901bc09d294bd193e34b",
    "number": 98,
    "direction": "DIRECCIÓN CUALQUIERA",
    "sector": 99,
    "subSector": 99,
    "updated_at": "2021-08-25 13:50:19"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiUse ValidationFormDataFamilyGroup
 *
 * @apiErrorExample {JSON} Number group exists.
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.",
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {put} /api/admin/families-groups/:_id/members (04) Actualizar miembros de un grupo familiar.
 * @apiVersion 0.0.36
 * @apiName updateMembersGroupFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {Object} members IDs de los miembros.
 *
 * @apiParam (member Object) {String|Null} leaderId ID del miembro líder.
 * @apiParam (member Object) {String|Null} hostId ID del miembro anfitrión.
 * @apiParam (member Object) {String|Null} helperId ID del miembro auxiliar.
 * @apiParam (member Object) {String|Null} masterId ID del miembro maestro.
 * @apiParam (member Object) {String[]} assistantsIds Listado de IDs de los asistentes
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"members": {
		"leaderId": null,
		"hostId": "604068461caad10e2c965406",
		"helperId": "5fcf0821fc917d476c1cf3e3",
		"masterId": null,
		"assistantsIds": [ "5fcf0821fc917d476c1cf3e9", ... ]
	}
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} members Datos de los miembros.
 *
 * @apiSuccess (members Object) {Object|Null} leader Datos del líder.
 * @apiSuccess (members Object) {Object|Null} host Datos del anfitrión.
 * @apiSuccess (members Object) {Object|Null} helper Datos del auxiliar.
 * @apiSuccess (members Object) {Object|Null} master Datos del maestro.
 * @apiSuccess (members Object) {Object|Null} assistants Listado de asistentes.
 *
 * @apiUse SimpleModelLHAMFamiliesGroups
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Grupo Familiar",
  "members": {
    "leader": null,
    "host": {
      "_id": "604068461caad10e2c965406",
      "names": "PRUEBA",
      "lastNames": "USUARIO",
      "document": "CC123123123",
      "gender": null,
      "phone": "573151234567",
      "picture": null,
      "position": null
    },
    "helper": {
      "_id": "5fcf0821fc917d476c1cf3e3",
      "names": "PEDRO JOSÉ",
      "lastNames": "PÉREZ RODRIGUEZ",
      "document": "CC12345678",
      "gender": null,
      "phone": "3161234567",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg",
      "position": null
    },
    "master": null,
    "assistants": [
      {
        "_id": "5fcf0821fc917d476c1cf3e9",
        "names": "EMILIA",
        "lastNames": "GOMEZ",
        "document": "CC99999999",
        "gender": 1,
        "phone": "3169999999",
        "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e9/picture-5fcf0821fc917d476c1cf3e9-1629254970.jpg",
        "position": null
      },
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
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parametros!",
  "errors": [
    {
      "input": "members",
      "msg": "Disculpe, pero no se recibió la información a actualizar."
    },
    {
      "input": "leaderId",
      "msg": "Disculpe, pero debe seleccionar a un miembro como líder del grupo."
    },
    {
      "input": "leaderId",
      "msg": "Disculpe, pero el miembro seleccionado como líder es incorrecto."
    },
    {
      "input": "hostId",
      "msg": "Disculpe, pero el miembro seleccionado como anfitrión es incorrecto."
    },
    {
      "input": "helperId",
      "msg": "Disculpe, pero el miembro seleccionado como auxiliar es incorrecto."
    },
    {
      "input": "masterId",
      "msg": "Disculpe, pero el miembro seleccionado como maestro es incorrecto."
    },
    {
      "input": "assistantsIds",
      "msg": "Disculpe, pero uno de los miembros seleccionados como asistentes es incorrecto."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {delete} /api/admin/families-groups/:_id (05) Eliminar un grupo familiar.
 * @apiVersion 0.0.28
 * @apiName deleteGroupFamiliesGroupsAdmin
 * @apiGroup FamiliesGroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha eliminado el grupo familiar exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse FamiliesGroupsErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Can't delete
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero este grupo no puede eliminarse debido a que ya tiene reportes registrados."
}
 *
 * @apiUse GlobalErrorSystem
 */
