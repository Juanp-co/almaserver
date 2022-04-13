/**
 * @api {post} /api/register (00) Registro.
 * @apiVersion 0.0.32
 * @apiName registerPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Teléfono.
 * @apiParam {String} password Contraseña.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"phone": "3161234567",
	"password": "password",
	"names": "Anthony",
	"lastNames": "Velásquez"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
    "msg": "Registro exitoso.",
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "phone",
      "msg": "Disculpe, pero debe indicar un número de teléfono."
    },
    {
      "input": "names",
      "msg": "Disculpe, pero debe asegurarse de indicar su(s) nombre(s)."
    },
    {
      "input": "lastNames",
      "msg": "Disculpe, pero debe asegurarse de indicar su(s) apellido(s)."
    },
    {
      "input": "password",
      "msg": "Disculpe, pero debe asignar una contraseña. Esta debe contener letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/login (01) Iniciar sesión
 * @apiVersion 0.0.16
 * @apiName loginPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {String} password Contraseña.
 * @apiParam {Boolean} admin Indica si inicia sesión como administrador.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "phone": "3161234567",
    "password": "password",
    "admin": true
}
 * @apiExample {JSON} Example JSON Request with admin=false
 * {
    "phone": "3161234567",
    "password": "password",
    "admin": false
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de la sesión.
 * @apiSuccess {String} token Token de la sesión.
 *
 * @apiSuccess (data Object) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (data Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (data Object) {Number|Null} civilStatus ID (array index) del estado civil.
 * @apiSuccess (data Object) {Number|Null} educationLevel ID (array index) del nivel educativo.
 * @apiSuccess (data Object) {Number|Null} profession ID (array index) de la profesión.
 * @apiSuccess (data Object) {Number|Null} bloodType ID (array index) del tipo de sangre.
 * @apiSuccess (data Object) {Boolean} company Indica si tiene empresa.
 * @apiSuccess (data Object) {Number|Null} companyType ID (array index) del tipo de empresa (en caso de poseer).
 * @apiSuccess (data Object) {Boolean} baptized Indica si está bautizado.
 * @apiSuccess (data Object) {Number} role Role del miembro.
 * @apiSuccess (data Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (data Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (data Object) {String} locality Nombrede la localidad.
 * @apiSuccess (data Object) {String} direction Dirección.
 * @apiSuccess (data Object) {String} created_at Fecha de registro.
 * @apiSuccess (data Object) {String} updated_at Fecha de la última actualización del perfil.
 * @apiSuccess (data Object) {String} _id ID del miembro.
 * @apiSuccess (data Object) {String} email Correo electrónico.
 * @apiSuccess (data Object) {String} phone Número de teléfono.
 * @apiSuccess (data Object) {String} document Número de documento.
 * @apiSuccess (data Object) {String} names Nombres.
 * @apiSuccess (data Object) {String} lastNames Apellidos.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "¡Inicio de sesión con éxito!",
	"data": {
		"gender": null,
		"birthday": null,
		"civilStatus": null,
		"educationLevel": null,
		"profession": null,
		"bloodType": null,
		"company": false,
		"companyType": null,
		"baptized": false,
		"role": 5,
		"group": null,
		"department": null,
		"city": null,
		"locality": null,
		"direction": null,
		"created_at": "2021-03-26 13:01:21",
		"updated_at": "2021-03-26 13:03:05",
		"_id": "605e21d8a4fe940ef4d7d28b",
		"email": "3161234567@example.com",
    "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
		"phone": "3161234567",
		"document": "CC1490199",
		"names": "ANTHONY",
		"lastNames": "VELÁSQUEZ"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVlMjFkOGE0ZmU5NDBlZjRkN2QyOGIiLCJyb2xlIjo1LCJpYXQiOjE2MTY3ODYzMDMsImV4cCI6MTY0ODM0MzkwM30.aWCtwE5ZOY6JtHcaMqRcf0WfmhE5mgVjhwLQuBIK9Uc"
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el número de documento no se encuentra registrado."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parametros!",
    "errors": [
        {
            "input": "document",
            "msg": "Disculpe, pero debe asegurarse de indicar su número de documento."
        },
        {
            "input": "password",
            "msg": "Disculpe, pero debe asignar su contraseña correctamente."
        }
    ]
}
 *
 * @apiErrorExample {JSON} Invalid password
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Contraseña incorrecta."
}
 *
 * @apiErrorExample {JSON} Error generate token
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "¡Ha ocurrido un error al momento de iniciar la sesión!"
  }
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/logout (02) Finalizar sesión.
 * @apiVersion 0.0.2
 * @apiName logoutPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha finalizado la sesión exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/events (03) Obtener eventos públicos.
 * @apiVersion 0.0.36
 * @apiName getPublicEventsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión (para obtener el rol y obtener los eventos relacionados).
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = date [requerido]).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional).
 * @apiParam (Query Params) {String} initDate Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).
 * @apiParam (Query Params) {String} endDate Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} events Listado de eventos.
 *
 * @apiSuccess (events Object[]) {String} _id ID del evento.
 * @apiSuccess (events Object[]) {String} title Título para el evento.
 * @apiSuccess (events Object[]) {String} date Fecha del evento.
 * @apiSuccess (events Object[]) {String} initDate Hora de inicio del evento.
 * @apiSuccess (events Object[]) {String} endDate Hora de finalización del evento.
 * @apiSuccess (events Object[]) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (events Object[]) {Object} user Información del miembro que agregó el evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Eventos.",
	"events": [
    {
    "_id": "611a39d47636c51470deed92",
    "title": "PRUEBA DESDE ADMIN",
    "date": "2021-09-15",
    "initHour": "08:00",
    "endHour": "11:30",
    "toRoles": [
      3,
      4
    ],
    "picture": "https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg",
    "user": {
      "_id": "5fcf0821fc917d476c1cf3e2",
      "names": "ANTHONY EDITADO",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "31612345678",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null
    }
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
    "msg": "Eventos.",
    "events": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/events/:_id (04) Obtener detalles de un evento público.
 * @apiVersion 0.0.36
 * @apiName detailsPublicEventsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión (para obtener el rol y obtener los eventos relacionados).
 *
 * @apiParam (Path params) {String} _id ID del evento a obtener.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} event Detalles del evento.
 *
 * @apiSuccess (event Object) {String} _id ID del evento.
 * @apiSuccess (event Object) {String} title Título para el evento.
 * @apiSuccess (event Object) {String} description Descripción del evento.
 * @apiSuccess (event Object) {String} date Fecha del evento.
 * @apiSuccess (event Object) {String} initDate Hora de inicio del evento.
 * @apiSuccess (event Object) {String} endDate Hora de finalización del evento.
 * @apiSuccess (event Object) {Array|Number} toRoles Roles a los que va dirigido.
 * @apiSuccess (event Object) {Object} user Información del miembro que agregó el evento.
 *
 * @apiUse UsersObjectSimpleDataResponse
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Evento.",
	"event": {
		"_id": "602bccfb1b70b930e43a3eb2",
		"title": "EVENTO NUEVO",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
		"date": "2021-03-01",
		"initHour": "00:00",
		"endHour": "23:59",
		"toRoles": [
			5
		],
    "user": {
      "_id": "5fcf0821fc917d476c1cf3e2",
      "names": "ANTHONY EDITADO",
      "lastNames": "ADMINISTRADOR",
      "document": null,
      "gender": null,
      "phone": "31612345678",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null
    }
	}
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse EventsErrorIdOrNotFound
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/recovery-password/check-phone (05) Recuperar contraseña - Verificar número de teléfono.
 * @apiVersion 0.0.45
 * @apiName recoveryPasswordCheckDocumentPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Número de teléfono.
 *
 * @apiExample {JSON} Example JSON Request
 * {
	"phone": "3161234567"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object|Null} check Datos a verificar.
 * @apiSuccess {Boolean|Null} setNewPassword Indica que se salta el paso de verificación y se procede a cambiar la contraseña.
 *
 * @apiSuccess (check Object) {Boolean} email Verificar correo electrónico.
 * @apiSuccess (check Object) {Boolean} birthday Verificar fecha de nacimiento.
 *
 * @apiSuccessExample {JSON} Success, check only email
 * HTTP/1.1 201 Created
 * {
	"msg": "Por favor, complete los siguientes campos para recuperar su contraseña.",
	"check": {
		"email": true,
		"birthday": false
	}
}
 * @apiSuccessExample {JSON} Success, check email and birthday
 * HTTP/1.1 201 Created
 * {
	"msg": "Por favor, complete los siguientes campos para recuperar su contraseña.",
	"check": {
		"email": true,
		"birthday": true
	}
}
 * @apiSuccessExample {JSON} Success, but checking ommited.
 * HTTP/1.1 201 Created
 * {
	"msg": "Ahora puede asignar su nueva contraseña para recuperar el acceso a su cuenta.",
	"setNewPassword": true
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse UsersRecoveryPassword01
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {post} /api/recovery-password/check-params (06) Recuperar contraseña - Verificar datos solicitados.
 * @apiVersion 0.0.45
 * @apiName recoveryPasswordCheckParamsPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {Object} check Datos a validar.
 *
 * @apiParam (check Object) {String} email Correo electrónico.
 * @apiParam (check Object) {String|Null} birthday Fecha de nacimiento.
 *
 * @apiExample {JSON} Example JSON Request with check only email
 * {
	"phone": "3161234567",
	"check": {
		"email": "user@example.com",
		"birthday": null
	}
}
 * @apiExample {JSON} Example JSON Request with check email and birthday
 * {
	"phone": "3161234567",
	"check": {
		"email": "user@example.com",
		"birthday": "1994-07-07"
	}
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Boolean} setNewPassword Indica si se asignará la nueva contraseña.
 *
 * @apiSuccessExample {JSON} Success, check only email
 * HTTP/1.1 201 Created
 * {
	"msg": "Por favor, indique su nueva contraseña.",
	"setNewPassword": true
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse UsersRecoveryPassword01
 *
 * @apiUse UsersRecoveryPassword02
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {put} /api/recovery-password/change-password (07) Recuperar contraseña - Cambiar contraseña.
 * @apiVersion 0.0.45
 * @apiName recoveryPasswordChangePassPublic
 * @apiGroup Public
 *
 * @apiParam {String} phone Número de teléfono.
 * @apiParam {Object} check Datos a validar.
 * @apiParam {String} password Nueva contraseña.
 *
 * @apiParam (check Object) {String} email Correo electrónico.
 * @apiParam (check Object) {String|Null} birthday Fecha de nacimiento.
 *
 * @apiExample {JSON} Example JSON Request with check only email
 * {
	"phone": "3161234567",
	"check": {
		"email": "user@example.com",
		"birthday": null
	},
	"password": "password"
}
 * @apiExample {JSON} Example JSON Request with check email and birthday
 * {
	"phone": "3161234567",
	"check": {
		"email": "user@example.com",
		"birthday": "1994-07-07"
	},
	"password": "password"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Boolean} changed Indica si se asignó la nueva contraseña.
 *
 * @apiSuccessExample {JSON} Success, check only email
 * HTTP/1.1 201 Created
 * {
	"msg": "Se ha asignado la nueva contraseña a su cuenta exitosamente.",
	"changed": true
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse UsersRecoveryPassword01
 *
 * @apiUse UsersRecoveryPassword02
 *
 * @apiUse UsersRecoveryPassword03
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/banks (08) Obtener listado de bancos.
 * @apiVersion 0.0.25
 * @apiName getPublicBanksPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} banks Listado de bancos.
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
		}
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
 * @api {get} /api/members (09) Obtener listado de miembros.
 * @apiVersion 0.0.36
 * @apiName getMembersPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = names).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {String} word Número de teléfono o nombre para filtrar el listado.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} members Listado de miembros.
 *
 * @apiSuccess (members Object[]) {Number|Null} gender Género (sexo) del miembro.
 * @apiSuccess (members Object[]) {Number|Null} picture URL de la imagen de perfil.
 * @apiSuccess (members Object[]) {String} _id ID del miembro.
 * @apiSuccess (members Object[]) {String} phone Número de teléfono.
 * @apiSuccess (members Object[]) {String} names Nombre(s).
 * @apiSuccess (members Object[]) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Listado de miembros.",
	"members": [
		{
			"gender": null,
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
		  "_id": "5fcf0821fc917d476c1cf3e3",
			"phone": "3161234567",
			"names": "PEDRO",
			"lastNames": "PEREZ"
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
	"msg": "Listado de miembros.",
	"members": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/members (10) Obtener listado de grupos familiares.
 * @apiVersion 0.0.25
 * @apiName getFamiliesGroupsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valores = sector | subSector | number).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {Number} sector Número del sector a filtrar (opcional si se envía subSector o number).
 * @apiParam (Query Params) {Number} subSector Número del sub-sector a filtrar (opcional si se envía sector o number).
 * @apiParam (Query Params) {Number} number Número del grupo a filtrar (opcional si se envía sector o subSector).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} groups Listado de miembros.
 *
 * @apiSuccess (groups Object[]) {String} _id ID del grupo.
 * @apiSuccess (groups Object[]) {Number} sector Número del sector.
 * @apiSuccess (groups Object[]) {Number} subSector Número del sub-sector.
 * @apiSuccess (groups Object[]) {Number} number Número del grupo.
 * @apiSuccess (groups Object[]) {String} direction Dirección.
 * @apiSuccess (groups Object[]) {Object} location Datos de la localización.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenada.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación del grupo.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
	"msg": "Grupos familiares",
	"groups": [
    {
      "location": {
        "type": "Point",
        "coordinates": [
          -64.18147,
          10.451304
        ]
      },
      "_id": "6063385c98fc731c04777829",
      "sector": 1,
      "subSector": 1,
      "number": 1,
      "direction": "DIRECCIÓN CUALQUIERA EDITADA"
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
 * @api {get} /api/params-app (11) Obterner parámetros para la app.
 * @apiVersion 0.0.37
 * @apiName getParamsAppPublic
 * @apiGroup Public
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {String|Null} facebook URL de Facebook.
 * @apiSuccess (data Object) {String|Null} instagram URL de Instagram.
 * @apiSuccess (data Object) {String|Null} twitter URL de Twitter.
 * @apiSuccess (data Object) {String|Null} web URL de Website.
 * @apiSuccess (data Object) {String|Null} youtube URL de YouTube.
 * @apiSuccess (data Object) {String|Null} banner URL del banner.
 * @apiSuccess (data Object) {String|Null} logo URL del logo.
 *
 * @apiSuccessExample {JSON} Success with params
 * HTTP/1.1 200 Success
 * {
  "msg": "Parámetros",
  "data": {
    "facebook": "https://facebook.com/aacd",
    "instagram": "https://instagram.com/aacd",
    "twitter": "https://twitter.com/aacd",
    "web": "https://www.aacd.com",
    "youtube": "https://facebook.com/channel/aacd",
    "banner": "https://delii.s3.amazonaws.com/alma/settings/banners/picture-1629314103.jpg",
    "logo": "https://delii.s3.amazonaws.com/alma/settings/logo/picture-1629314103.jpg"
  }
}
 *
 * @apiSuccessExample {JSON} Success without params
 * HTTP/1.1 200 Success
 * {
  "msg": "Parámetros",
  "data": {
    "facebook": null,
    "instagram": null,
    "twitter": null,
    "web": null,
    "youtube": null,
    "banner": null,
    "logo": null
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/families-groups (12) Obtener listado de grupos familiares.
 * @apiVersion 0.0.41
 * @apiName getFamiliesGroupsPublic
 * @apiGroup Public
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} groups Listado de grupos familiares asociados al usuario.
 *
 * @apiSuccess (groups Object[]) {Number} _id ID del group familiar.
 * @apiSuccess (groups Object[]) {Number} sector Número del sector.
 * @apiSuccess (groups Object[]) {Number} subSector Número del sub-sector.
 * @apiSuccess (groups Object[]) {Number} number Número del grupo.
 * @apiSuccess (groups Object[]) {Object} location Ubicación del grupo.
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
 * @api {get} /api/birthdays (13) Obtener todos los miembros con su fecha de nacimiento.
 * @apiVersion 0.0.49
 * @apiName birthdaysPublic
 * @apiGroup Public
 *
 * @apiDescription Se obtienen los datos de todos los usuarios con su fecha de nacimiento. La manipulación de los datos
 * para indicar sus fecha de cumpleaños deberá ser realizada por quien consume el servicio.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} birthdayList Listado de miembros.
 *
 * @apiSuccess (birthdayList Object[]) {String} _id ID del miembro.
 * @apiSuccess (birthdayList Object[]) {String} names Nombres.
 * @apiSuccess (birthdayList Object[]) {String} lastNames Apellidos.
 * @apiSuccess (birthdayList Object[]) {String} phone Teléfono.
 * @apiSuccess (birthdayList Object[]) {String|Null} document Número de documento.
 * @apiSuccess (birthdayList Object[]) {Number} gender Género.
 * @apiSuccess (birthdayList Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (birthdayList Object[]) {String|Null} position Cargos dentro de la organización.
 * @apiSuccess (birthdayList Object[]) {String} birthday Fecha de nacimiento.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Datos de cumpleaños",
  "birthdayList": [
    {
      "_id": "62150f82a582520458cc89f0",
      "names": "ADRIANA",
      "lastNames": "CIFUENTES",
      "phone": "3136320063",
      "document": null
      "gender": 1,
      "picture": null,
      "position": null,
      "birthday": "1970-11-02",
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
  "msg": "Datos de cumpleaños",
	"birthdayList": []
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/churches (15) Obtener listado de iglesias registradas.
 * @apiVersion 0.0.50
 * @apiName churchesPublic
 * @apiGroup Public
 *
 * @apiDescription El siguiente servicio es para obtener el nombre y el ID de las iglesias registradas.
 * La respuesta del servicio puede ser utilizada para los formularios donde aplique asignar el ID de la iglesia
 * a un miembro registrado.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} churches Listado de iglesias.
 *
 * @apiSuccess (churches Object[]) {String} _id ID de la iglesia.
 * @apiSuccess (churches Object[]) {String} name Nombre de la iglesia.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Listado de iglesias",
  "churches": [
    {
      "_id": "624a357644f15f3ce8200c2f",
      "name": "ASAMBLEA DE DIOS - PRINCIPAL"
    },
    .
    .
    .
  ]
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/organization (15) Obtener estructura de organización de todas las iglesias.
 * @apiVersion 0.0.50
 * @apiName organizationPublic
 * @apiGroup Public
 *
 * @apiDescription El siguiente servicio retorna la estructuración organizacional de las iglesias registradas.
 * El objeto 'lvls', almacena los IDs de los miembros relacionados al cargo o rol respectivo.
 * El listado de objetos 'users', guarda la información de cada uno de los miembros asociados a la iglesia.
 *
 * Se maneja de la siguiente forma para que quien consula el servicio pueda hacer la relación respectiva
 * de los datos en relación al rol asignado.
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object[]} data Listado de iglesias.
 *
 * @apiSuccess (data Object[]) {Object} church Datos de la iglesia.
 * @apiSuccess (data Object[]) {Object} lvls Niveles (estructura en base al rol del usuario).
 * @apiSuccess (data Object[]) {Object[]} users Datos de los usuarios relacionados a la iglesia.
 *
 * @apiSuccess (church Object) {String} _id ID de la iglesia.
 * @apiSuccess (church Object) {String} name Nombre de la iglesia.
 * @apiSuccess (church Object) {String|Null} description descripción de la iglesia.
 * @apiSuccess (church Object) {String|Null} phone1 Teléfono principal.
 * @apiSuccess (church Object) {String|Null} phone2 Teléfono secundario.
 * @apiSuccess (church Object) {String|Null} email Correo electrónico.
 * @apiSuccess (church Object) {String|Null} address Dirección de la iglesia.
 * @apiSuccess (church Object) {Object} location datos de la ubicación de la iglesia.
 * @apiSuccess (church Object) {String|Null} picture URL de la foto de la iglesia.
 *
 * @apiSuccess (location Object) {String} type Tipo de coordenadas.
 * @apiSuccess (location Object) {Number[]} coordinates Coordenadas de la ubicación ([ x, y ]).
 *
 * @apiSuccess (lvls Object) {String[]} pastors Listado de IDs de los pastores.
 * @apiSuccess (lvls Object) {String[]} supervisors Listado de IDs de los supervisores.
 * @apiSuccess (lvls Object) {String[]} leaders Listado de IDs de los líderes.
 * @apiSuccess (lvls Object) {String[]} peoples Listado de IDs de los miembros comunes.
 *
 * @apiSuccess (users Object[]) {String} _id ID del miembro.
 * @apiSuccess (users Object[]) {String} fullname Nombre completo del usuario.
 * @apiSuccess (users Object[]) {String} gender Genéro (sexo) del usuario.
 * @apiSuccess (users Object[]) {String|Null} picture URL de la foto del perfil.
 * @apiSuccess (users Object[]) {String} church ID de la iglesia a la que pertenece.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Organización",
  "data": [
    {
      "church": {
        "picture": null,
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
        "_id": "624a357644f15f3ce8200c2f",
        "name": "ASAMBLEA DE DIOS - PRINCIPAL",
        "description": "IGLESIA PRINCIPAL"
      },
      "lvls": {
        "pastors": [
          "6169f99d3acd4c3221ddd728",
          .
          .
          .
        ],
        "supervisors": [
          "61820b3b2b0b95656950f111",
          .
          .
          .
        ],
        "leaders": [
          "619eb85825c4f804de6c7bb0",
          .
          .
          .
        ],
        "peoples": [
          "62150f82a582520458cc89f0",
          .
          .
          .
        ]
      },
      "users": [
        {
          "_id": "62150f82a582520458cc89f0",
          "fullname": "ADRIANA CIFUENTES",
          "gender": 1,
          "picture": null,
          "church": "624a357644f15f3ce8200c2f"
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
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/resources (01) Listado de documentos compartidos (público).
 * @apiVersion 0.0.51
 * @apiName getDocumentsListPublic
 * @apiGroup Public
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
