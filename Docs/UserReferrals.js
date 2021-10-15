/**
 * @api {post} /api/user/referrals (00) Registrar nuevo referido (hijo espiritual/consolidado).
 * @apiVersion 0.0.31
 * @apiName saveVisitUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} phone Teléfono.
 * @apiParam {String} names Nombres.
 * @apiParam {String} lastNames Apellidos.
 * @apiParam {String} names Fecha de la visita (YYYY-MM-DD).
 * @apiParam {String|Null} email Correo electrónico.
 * @apiParam {String} birthday Fecha de nacimiento (YYYY-MM-DD).
 * @apiParam {Number|Null} civilStatus ID (array index) Estado civil.
 * @apiParam {Number|Null} gender ID (array index) del genero (sexo).
 * @apiParam {String|Null} gender Observaciones de la visita.
 * @apiParam {String|Null} locality Barrio o localidad.
 * @apiParam {String|Null} direction Dirección.
 * @apiParam {boolean} consolidated Indica si el miembro fue consolidado.
 * @apiParam {String|Null} referred ID del miembro consolidador.
 * @apiParam {String|Null} petition Petición solicitada por el nuevo miembro.
 * @apiParam {boolean} attendGroup Indica si el miembro asiste a un grupo.
 * @apiParam {String|Null} groupId ID del grupo al que asiste el nuevo miembro.
 *
 * @apiExample {JSON} Example JSON Request Consolidated
 * {
  "phone": "573161234567",
  "names": "Anthony alejandro",
  "lastNames": "Velasquez rodriguez",
  "email": "anthony@example.com",
  "birthday": "1994-07-07",
  "civilStatus": 0,
  "gender": 0,
  "locality": 'Barrio nuevo',
  "direction": 'Dirección cualquiera',
  "consolidated": true,
  "referred": "605e37d154abd33060a689dc",
  "petition": "Por la familia, por salud y por mejora económica.",
  "attendGroup": true,
  "groupId": "6063385c98fc731c04777829",
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
	"msg": "Se ha registrado el nuevo miebro exitosamente."
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
      "input": "phone",
      "msg": "Disculpe, pero debe indicar un número de teléfono."
    },
    {
      "input": "names",
      "msg": "Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro."
    },
    {
      "input": "lastNames",
      "msg": "Disculpe, pero debe asegurarse de indicar el apellido del miembro."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */

/**
 * @api {get} /api/user/referrals (01) Obtener listado de hijos espirituales.
 * @apiVersion 0.0.36
 * @apiName getUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object|Null} referred Datos del padre espiritual de este usuario.
 * @apiSuccess {Number} totals Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).
 * @apiSuccess {Object[]} referrals Listado de hijos espirituales.
 *
 * @apiSuccess (referred Object) {String} _id ID del miembro.
 * @apiSuccess (referred Object) {String} names Nombres.
 * @apiSuccess (referred Object) {String} lastNames Apellidos.
 * @apiSuccess (referred Object) {String} document Número de documento.
 * @apiSuccess (referred Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (referred Object) {String} phone Teléfono.
 *
 * @apiSuccess (referred Object[]) {String} _id ID del miembro.
 * @apiSuccess (referred Object[]) {String} names Nombre(s).
 * @apiSuccess (referred Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (referred Object[]) {String|Null} document Número de documento.
 * @apiSuccess (referred Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (referred Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (referred Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (referred Object[]) {String|Null} position Cargo o posición del miembro.
 *
 * @apiSuccess (referrals Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals Object[]) {String} names Nombre(s).
 * @apiSuccess (referrals Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (referrals Object[]) {String|Null} document Número de documento.
 * @apiSuccess (referrals Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (referrals Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (referrals Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (referrals Object[]) {String|Null} position Cargo o posición del miembro.
 * @apiSuccess (referrals Object[]) {Numbers} totalsReferrals Total de referidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Mis referidos.",
  "referred": {
    "_id": "5fcf0821fc917d476c1cf3e2",
    "names": "ANTHONY EDITADO",
    "lastNames": "ADMINISTRADOR",
    "document": null,
    "gender": null,
    "phone": "31612345678",
    "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
    "position": null
  },
  "totalsGroups": 1,
  "totals": 21,
  "referrals": [
    {
      "_id": "6081200245db7c27e4c91908",
      "names": "ALEJANDRO",
      "lastNames": "RODRIGUEZ",
      "document": null,
      "gender": 2,
      "phone": "4121490195",
      "picture": "https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg",
      "position": null,
      "totalsReferrals": 0
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
	"referred": null,
	"totals": 0,
	"referrals": []
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
 * @api {get} /api/user/referrals/:memberId (02) Obtener datos de un hijo espiritual.
 * @apiVersion 0.0.36
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
 * @apiSuccess (data Object) {Number} totalsReferrals Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).
 * @apiSuccess (data Object) {Object[]} courses Listado de cursos.
 * @apiSuccess (data Object) {Object[]} referrals Listado de hijos espirituales.
 * @apiSuccess (data Object) {Object[]} visits Listado de visitas.
 *
 * @apiSuccess (member Object) {String|Null} email Correo electrónico.
 * @apiSuccess (member Object) {String|Null} position Cargo o posición.
 * @apiSuccess (member Object) {Number|Null} gender ID (array index) del sexo del miembro.
 * @apiSuccess (member Object) {String|Null} birthday Fecha de nacimiento.
 * @apiSuccess (member Object) {Number|Null} civilStatus ID (array index) del estado civil del miembro.
 * @apiSuccess (member Object) {Boolean} consolidated Indica si el miembro fue consolidado.
 * @apiSuccess (member Object) {String|Null} petition Petición realizada por el miembro al momento de registrarse.
 * @apiSuccess (member Object) {Number|Null} department ID (array index) del departamento.
 * @apiSuccess (member Object) {Number|Null} city ID (array index) de la ciudad.
 * @apiSuccess (member Object) {String|Null} locality Nombre de la localidad.
 * @apiSuccess (member Object) {String|Null} direction Dirección.
 * @apiSuccess (member Object) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (member Object) {String} _id ID del miembro.
 * @apiSuccess (member Object) {String} phone Número de teléfono.
 * @apiSuccess (member Object) {String} names Nombres.
 * @apiSuccess (member Object) {String} lastNames Apellidos.
 * @apiSuccess (member Object) {Number[]} roles Listado de roles.
 *
 * @apiSuccess (courses Object[]) {String} _id ID del curso.
 * @apiSuccess (courses Object[]) {String} title Título del curso.
 * @apiSuccess (courses Object[]) {String} slug Slug (Valor url) del curso.
 * @apiSuccess (courses Object[]) {String|Null} description Descripción del curso.
 * @apiSuccess (courses Object[]) {Number} level Nivel del curso.
 * @apiSuccess (courses Object[]) {String|Null} approved Indica si ha aprobado el curso o no.
 *
 * @apiSuccess (visits Object[]) {Object|Null} consolidator ID del curso.
 * @apiSuccess (visits Object[]) {String} date Fecha de la visita (YYYY-MM-DD).
 * @apiSuccess (visits Object[]) {String|Null} action Acción realizada (Visita ó llamada).
 * @apiSuccess (visits Object[]) {String} observation Observaciones obtenidas en la visita.
 *
 * @apiSuccess (referrals and consolidator Object[]) {String} _id ID del miembro.
 * @apiSuccess (referrals and consolidator Object[]) {String} names Nombre(s).
 * @apiSuccess (referrals and consolidator Object[]) {String} lastNames Apellido(s).
 * @apiSuccess (referrals and consolidator Object[]) {String|Null} document Número de documento.
 * @apiSuccess (referrals and consolidator Object[]) {Number|Null} gender ID (array index) del sexo (género).
 * @apiSuccess (referrals and consolidator Object[]) {String} phone Teléfono del miembro.
 * @apiSuccess (referrals and consolidator Object[]) {String|Null} picture URL de la foto de perfil.
 * @apiSuccess (referrals and consolidator Object[]) {String|Null} position Cargo o posición del miembro.
 * @apiSuccess (referrals and consolidator Object[]) {Numbers} totalsReferrals Total de referidos.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Miembro.",
  "data": {
    "member": {
      "email": "4121490198@example.com",
      "position": null,
      "gender": null,
      "birthday": null,
      "civilStatus": null,
      "consolidated": false,
      "petition": null,
      "department": null,
      "city": null,
      "locality": null,
      "direction": null,
      "picture": null,
      "_id": "605e37d154abd33060a689dc",
      "phone": "573151234568",
      "names": "ANTHONY",
      "lastNames": "VELÁSQUEZ",
      "roles": [ 3, 4 ]
    },
    "totalCourses": 9,
    "totalReferrals": 6,
    "courses": [
      {
        "_id": "603afb2309bf7a3428ac58f1",
        "slug": "nivel-uno-2",
        "title": "NIVEL UNO",
        "description": "Donec sollicitudin molestie malesuada. ...",
        "level": 1,
        "approved": false
      },
      .
      .
      .
    ],
    "referrals": [
      {
        "_id": "607fb9d275581c087c36922c",
        "names": "EIMY VALENTINA",
        "lastNames": "VELASQUEZ TIRADO",
        "document": null,
        "gender": null,
        "phone": "3167654321",
        "picture": null,
        "position": null,
        "totalsReferrals": 0
      },
      .
      .
      .
    ],
    "visits": []
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse UsersErrorIdOrNotFound
 *
 * @apiErrorExample {JSON} Error memberId
 * HTTP/1.1 422 Unprocessable Entity
 * {
	"msg": "Disculpe, pero el miembro seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} The member Doesn't belong to the group
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales."
}
 *
 * @apiErrorExample {JSON} The member not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero no se logró encontrar la información solicitada."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {post} /api/user/referrals/visit (03) Registrar visita a un hijo espiritual.
 * @apiVersion 0.0.39
 * @apiName saveVisitUserReferrals
 * @apiGroup UserReferrals
 *
 * @apiHeader {String} x-access-token Token de la sesión.
 *
 * @apiParam {String} userId ID del miembro visitado.
 * @apiParam {String|Null} userId ID del miembro que realizó la visita (opcional si el visitador es el usuario logueado).
 * @apiParam {String} date Fecha de la visita (YYYY-MM-DD).
 * @apiParam {String|Number|Null} action Acción realizada (0 = Visita, 1 = Llamada).
 * @apiParam {String} observation Observaciones de la visita.
 *
 * @apiExample {JSON} Example JSON Request with Referred
 * {
	"userId": "5fcf0821fc917d476c1cf3e2",
  "visitor": "611902c09e346616b6eaadb5",
	"date": "2021-04-01",
	"action": 1,
	"observation": "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat."
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
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
      "msg": "Disculpe, pero el miembro seleccionado para la visita es incorrecto."
    },
    {
      "input": "visitor",
      "msg": "Disculpe, pero el miembro seleccionado como visitador es incorrecto."
    },
    {
      "input": "date",
      "msg": "Disculpe, pero indicar una fecha para la visita."
    },
    {
      "input": "observation",
      "msg": "Disculpe, pero indicar un observación válida."
    },
    {
      "input": "action",
      "msg": "Disculpe, pero debe indicar el tipo de acción realizada."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 */
