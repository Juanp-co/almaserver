/* static defines */
/**
 * @apiDefine ErrorGetSettingsAdmin
 *
 * @apiErrorExample {JSON} Not found settings
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero ha ocurrido un error al obtener la configuración."
}
 *
 */

/**
 * @apiDefine BannerErrorIdOrNotFoundSettingsAdmin
 *
 * @apiErrorExample {JSON} Not found banner
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero la portada seleccionada no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid banner ID
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero la portada seleccionada es incorrecta."
}
 *
 */

/**
 * @apiDefine LogoErrorIdOrNotFoundSettingsAdmin
 *
 * @apiErrorExample {JSON} Not found logo
 * HTTP/1.1 404 Not found
 * {
  "msg": "Disculpe, pero el logo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid logo ID
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero el logo seleccionado es incorrecto."
}
 *
 */

/**
 * @apiDefine ValidationsLogosAndBannersSettingsAdmin
 *
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "picture",
      "msg": "Disculpe, la imagen suministrada es incorrecta."
    }
  ]
}
 *
 */

/* docs */

/**
 * @api {get} /api/admin/settings (00) Obtener ajustes del sistema.
 * @apiVersion 0.0.37
 * @apiName getSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccess (data Object) {String|Null} facebook URL de Facebook.
 * @apiSuccess (data Object) {String|Null} instagram URL de Instagram.
 * @apiSuccess (data Object) {String|Null} twitter URL de Twitter.
 * @apiSuccess (data Object) {String|Null} web URL de Website.
 * @apiSuccess (data Object) {String|Null} youtube URL de YouTube.
 * @apiSuccess (data Object) {String} _id ID configuración.
 * @apiSuccess (data Object) {Object[]} logos Listado de logos.
 * @apiSuccess (data Object) {Object[]} banners Listado de portadas.
 * @apiSuccess (data Object) {String} updated_at Última actualización de la configuración.
 *
 * @apiSuccess (logos and banners Object[]) {Boolean} active Indica si la imagen se encuentra activa.
 * @apiSuccess (logos and banners Object[]) {String} _id ID de la imagen.
 * @apiSuccess (logos and banners Object[]) {String} picture URL de la imagen.
 * @apiSuccess (logos and banners Object[]) {String} created_at Fecha de creación de la imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Ajustes.",
  "data": {
    "facebook": null,
    "instagram": null,
    "web": null,
    "youtube": null,
    "_id": "611d13dc6f09d40f2c371def",
    "logos": [
      {
        "active": false,
        "_id": "611d4b40494b0623b8e2f921",
        "picture": "https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg",
        "created_at": "2021-08-18 13:06:08"
      },
      .
      .
      .
    ],
    "banners": [
      {
        "active": false,
        "_id": "611d5b60338fdf491936acbb",
        "picture": "https://delii.s3.amazonaws.com/alma/settings/banners/picture-1629313884.jpg",
        "created_at": "2021-08-18 14:11:28"
      },
      .
      .
      .
    ],
    "updated_at": "2021-08-18 09:06:20"
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
 * @api {put} /api/admin/settings (01) Actualizar urls de redes sociales o website.
 * @apiVersion 0.0.37
 * @apiName updateSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam {String|Null} facebook URL de Facebook.
 * @apiParam {String|Null} instagram URL de Instagram.
 * @apiParam {String|Null} twitter URL de Website.
 * @apiParam {String|Null} web URL de Website.
 * @apiParam {String|Null} youtube URL de YouTube.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "facebook": "https://facebook.com/link",
  "instagram": "https://instagram.com/link",
  "twitter": "https://twitter.com/link",
  "web": "https://website.com/",
  "youtube": "https://youtube.com/channel/abcchanel"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccess (data Object) {String|Null} facebook URL de Facebook.
 * @apiSuccess (data Object) {String|Null} instagram URL de Instagram.
 * @apiSuccess (data Object) {String|Null} twitter URL de Twitter.
 * @apiSuccess (data Object) {String|Null} web URL de Website.
 * @apiSuccess (data Object) {String|Null} youtube URL de YouTube.
 * @apiSuccess (data Object) {String} _id ID configuración.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado la configuración exitosamente.",
  "data": {
    "facebook": "https://facebook.com/link",
    "instagram": "https://instagram.com/link",
    "twitter": "https://twitter.com/link",
    "web": "https://website.com/",
    "youtube": "https://youtube.com/channel/abcchanel"
    "_id": "611d13dc6f09d40f2c371def"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "¡Error en los parámetros!",
  "errors": [
    {
      "input": "facebook",
      "msg": "Disculpe, pero la URL de Facebook indicada es incorrecta."
    },
    {
      "input": "instagram",
      "msg": "Disculpe, pero la URL de Instagram indicada es incorrecta."
    },
    {
      "input": "twitter",
      "msg": "Disculpe, pero la URL de Twitter indicada es incorrecta."
    },
    {
      "input": "web",
      "msg": "Disculpe, pero la URL del Sitio Web indicad es incorrecto."
    },
    {
      "input": "youtube",
      "msg": "Disculpe, pero la URL de YouTube indicada es incorrecta."
    }
  ]
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/settings/banners (02) Agregar un banner.
 * @apiVersion 0.0.37
 * @apiName addBannerSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam {String} picture Base64 de la imagen.
 * @apiParam {Boolean} active Indica si se mostrará el banner una vez guardado.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...",
  "active": false
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccess (data Object) {Boolean} active Indica si la imagen se encuentra activa.
 * @apiSuccess (data Object) {String} _id ID de la imagen.
 * @apiSuccess (data Object) {String} picture URL de la imagen.
 * @apiSuccess (data Object) {String} created_at Fecha de creación de la imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha agregado el banner exitosamente.",
  "data": {
    "active": false,
    "_id": "611d4b40494b0623b8e2f921",
    "picture": "https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg",
    "created_at": "2021-08-18 13:06:08"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse ValidationsLogosAndBannersSettingsAdmin
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/settings/banners/:_id/:action (03) Activar / Desactivar un banner.
 * @apiVersion 0.0.37
 * @apiName changeStatusBannerSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Path params) {String} _id ID del banner.
 * @apiParam (Path params) {String} action Acción a realizar (valores: active = activar | disable = desactivar).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Datos de retorno.
 *
 * @apiSuccess (data Object) {Boolean} active Indica si la imagen se encuentra activa.
 * @apiSuccess (data Object) {String} _id ID de la imagen.
 * @apiSuccess (data Object) {String} picture URL de la imagen.
 * @apiSuccess (data Object) {String} created_at Fecha de creación de la imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el banner exitosamente.",
  "data": {
    "active": false,
    "_id": "611d4b40494b0623b8e2f921",
    "picture": "https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg",
    "created_at": "2021-08-18 13:06:08"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse BannerErrorIdOrNotFoundSettingsAdmin
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no se logró determinar la acción a realizar."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/settings/banners/:_id (04) Eliminar un banner.
 * @apiVersion 0.0.37
 * @apiName deleteBannerSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Path params) {String} _id ID del banner.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha eliminado el banner exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse BannerErrorIdOrNotFoundSettingsAdmin
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/settings/logos (05) Agregar un logo.
 * @apiVersion 0.0.37
 * @apiName addLogoSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam {String} picture Base64 de la imagen.
 * @apiParam {Boolean} active Indica si se mostrará el logo una vez guardado.
 *
 * @apiExample {JSON} Example JSON Request
 * {
  "picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...",
  "active": false
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccess (data Object) {Boolean} active Indica si la imagen se encuentra activa.
 * @apiSuccess (data Object) {String} _id ID de la imagen.
 * @apiSuccess (data Object) {String} picture URL de la imagen.
 * @apiSuccess (data Object) {String} created_at Fecha de creación de la imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha agregado el logo exitosamente.",
  "data": {
    "active": false,
    "_id": "611d4b40494b0623b8e2f921",
    "picture": "https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg",
    "created_at": "2021-08-18 13:06:08"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse ValidationsLogosAndBannersSettingsAdmin
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {put} /api/admin/settings/logos/:_id/:action (06) Activar / Desactivar un logo.
 * @apiVersion 0.0.37
 * @apiName changeStatusLogoSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Path params) {String} _id ID del logo.
 * @apiParam (Path params) {String} action Acción a realizar (valores: active = activar | disable = desactivar).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccess (data Object) {String} _id ID configuración.
 * @apiSuccess (data Object) {Object[]} logos Listado de logos.
 *
 * @apiSuccess (logos Object[]) {Boolean} active Indica si la imagen se encuentra activa.
 * @apiSuccess (logos Object[]) {String} _id ID de la imagen.
 * @apiSuccess (logos Object[]) {String} picture URL de la imagen.
 * @apiSuccess (logos Object[]) {String} created_at Fecha de creación de la imagen.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha actualizado el logo exitosamente.",
  "data": {
    "active": false,
    "_id": "611d4b40494b0623b8e2f921",
    "picture": "https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg",
    "created_at": "2021-08-18 13:06:08"
  }
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse LogoErrorIdOrNotFoundSettingsAdmin
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
  "msg": "Disculpe, pero no se logró determinar la acción a realizar."
}
 *
 * @apiUse GlobalErrorSystem
 *
 */

/**
 * @api {delete} /api/admin/settings/logos/:_id (07) Eliminar un logo.
 * @apiVersion 0.0.37
 * @apiName deleteLogoSettingsAdmin
 * @apiGroup SettingsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión del administrador.
 *
 * @apiParam (Path params) {String} _id ID del logo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} data Respuesta de retorno.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
  "msg": "Se ha eliminado el logo exitosamente."
}
 *
 * @apiUse GlobalParamsErrors
 *
 * @apiUse GlobalUnauthorized
 *
 * @apiUse ErrorGetSettingsAdmin
 *
 * @apiUse LogoErrorIdOrNotFoundSettingsAdmin
 *
 * @apiUse GlobalErrorSystem
 *
 */

