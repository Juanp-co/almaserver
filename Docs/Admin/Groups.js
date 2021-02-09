/**
 * @api {get} /api/admin/groups/counters (00) Obtener contador de grupos.
 * @apiVersion 0.0.8
 * @apiName getCountersGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} code Código del grupo a buscar (opcional).
 * @apiParam (Query Params) {String} name Nombre del grupo a buscar (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Number} totals Total de grupos registrados.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Total de grupos",
    "totals": 2
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
 * @api {get} /api/admin/groups (01) Obtener listado de grupos.
 * @apiVersion 0.0.8
 * @apiName getGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | lider)
 *
 * @apiParam (Query Params) {String} input Campo a ordenar (valor = name | code).
 * @apiParam (Query Params) {Number} value Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).
 * @apiParam (Query Params) {Number} page Página a visualizar (Por defecto = 1).
 * @apiParam (Query Params) {Number} limit Total de resultados por página (Por defecto = 10).
 * @apiParam (Query Params) {String} code Código del grupo (opcional).
 * @apiParam (Query Params) {String} name Nombre del grupo (opcional).
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} groups Listado de grupos.
 *
 * @apiSuccess (groups Array Object) {String} _id ID del grupo.
 * @apiSuccess (groups Array Object) {String} title Título del grupo.
 * @apiSuccess (groups Array Object) {String} code Código del grupo.
 * @apiSuccess (groups Array Object) {Number} totalMembers Total de miembros.
 * @apiSuccess (groups Array Object) {String} created_at Fecha de registro del grupo.
 *
 * @apiSuccessExample {JSON} Success with data
 * HTTP/1.1 200 Success
 * {
    "msg": "Grupos",
    "groups": [
        {
            "_id": "6018fbe959529c4068b62af5",
            "name": "FAMILIA RODRIGUEZ",
            "code": "VEL-001",
            "totalMembers": 0,
            "created_at": "2021-02-02 02:14:49"
        },
        {
            "_id": "6018e503e02a45115407e82f",
            "name": "FAMILIA VELASQUEZ RODRIGUEZ",
            "code": "AAA-001",
            "totalMembers": 1,
            "created_at": "2021-02-02 00:37:07"
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
    "msg": "Cursos.",
    "groups": []
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
 * @api {post} /api/admin/groups (02) Crear nuevo grupo.
 * @apiVersion 0.0.11
 * @apiName createGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam {String} name Nombre del grupo.
 * @apiParam {String|Null} code Código del grupo (opcional).
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "name": "Familia Rodriguez",
    "code": "VEL-001"
}
 * @apiExample {JSON} Example JSON Request without code
 * {
    "name": "Familia Rodriguez",
    "code": null
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Detalles del grupo.
 *
 * @apiSuccess (group Object) {Array|Object} members Listado de miembros (vacío).
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} title Título del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de creación del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del contenido del grupo.
 * @apiSuccess (group Object) {String} userid ID del usuario que creó el grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha creado el grupo exitosamente.",
    "group": {
        "members": [],
        "_id": "6018fbe959529c4068b62af5",
        "name": "FAMILIA RODRIGUEZ",
        "code": "VEL-001",
        "created_at": "2021-02-02 02:14:49",
        "updated_at": "2021-02-02 02:14:49",
        "userid": "5fcf0821fc917d476c1cf3e2"
    }
}
 * @apiSuccessExample {JSON} Success with auto-code
 * HTTP/1.1 201 Created
 * {
    "msg": "Se ha creado el grupo exitosamente.",
    "group": {
        "members": [],
        "_id": "6018fbe959529c4068b62af5",
        "name": "FAMILIA RODRIGUEZ",
        "code": "GROUP-1",
        "created_at": "2021-02-02 02:14:49",
        "updated_at": "2021-02-02 02:14:49",
        "userid": "5fcf0821fc917d476c1cf3e2"
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
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "name",
            "msg": "Disculpe, pero debe indicar un nombre para el grupo."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} The code exists
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el código indicado ya se encuentra asignado a otro grupo."
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
 * @api {get} /api/admin/groups/:_id (03) Obtener detalles de un grupo.
 * @apiVersion 0.0.8
 * @apiName detailsGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Datos del grupo.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {Object|Null} user Datos del usuario creador del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {Array|Object} members Listado de miembros pertenecientes al grupo
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccess (members Array Object) {String} _id ID del usuario.
 * @apiSuccess (members Array Object) {String} document Número de documento.
 * @apiSuccess (members Array Object) {String} names Nombre(s).
 * @apiSuccess (members Array Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Grupo",
    "group": {
        "_id": "6018e503e02a45115407e82f",
        "user": {
            "_id": "5fcf0821fc917d476c1cf3e2",
            "document": "CC123456789",
            "names": "USUARIO",
            "lastNames": "ADMIN"
        },
        "name": "FAMILIA VELASQUEZ RODRIGUEZ",
        "code": "AAA-001",
        "members": [
            {
                "_id": "5fcf0821fc917d476c1cf3e3",
                "document": "CC12345678",
                "names": "USUARIO TRES",
                "lastNames": "PRUEBA TRES"
            },
            .
            .
            .
        ],
        "created_at": "2021-02-02 00:37:07",
        "updated_at": "2021-02-02 02:16:16"
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
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
 * @api {put} /api/admin/groups/:_id (04) Actualizar un grupo.
 * @apiVersion 0.0.8
 * @apiName updateGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {String} name Nombre del grupo.
 * @apiParam {String} code Código del grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "name": "Familia Rodriguez",
    "code": "AAA-001"
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Object} group Detalles del grupo.
 *
 * @apiSuccess (group Object) {String} _id ID del grupo.
 * @apiSuccess (group Object) {String} name Nombre del grupo.
 * @apiSuccess (group Object) {String} code Código del grupo.
 * @apiSuccess (group Object) {String} created_at Fecha de registro del grupo.
 * @apiSuccess (group Object) {String} updated_at Fecha de la última actualización del grupo.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha creado el grupo exitosamente.",
    "group": {
        "_id": "6018e503e02a45115407e82f",
        "name": "FAMILIA VELASQUEZ RODRIGUEZ",
        "code": "AAA-001",
        "created_at": "2021-02-02 00:37:07",
        "updated_at": "2021-02-02 02:16:16"
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} The code exists
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el código indicado ya se encuentra asignado a otro grupo."
}
 *
 * @apiErrorExample {JSON} Validation fields
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "name",
            "msg": "Disculpe, pero debe indicar un nombre para el grupo."
        }
    ]
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
 * @api {delete} /api/admin/groups/:_id (05) Eliminar un grupo.
 * @apiVersion 0.0.8
 * @apiName deleteGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha eliminado el grupo exitosamente."
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
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
 * @api {put} /api/admin/groups/:_id/members/add (06) Agregar miembros al grupo.
 * @apiVersion 0.0.8
 * @apiName addMembersGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {Array|String} members Listado de IDs de los usuarios a agregar al grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "members": [
        "5fcf0821fc917d476c1cf3e3"
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 * @apiSuccess {Array|Object} notInserts[notInserts] Listado de miembros no agregados (en caso de aplicar).
 *
 * @apiSuccess (notInserts Array Object) {String} _id ID del usuario.
 * @apiSuccess (notInserts Array Object) {String} document Número de documento.
 * @apiSuccess (notInserts Array Object) {String} names Nombre(s).
 * @apiSuccess (notInserts Array Object) {String} lastNames Apellido(s).
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el listado de miembros exitosamente."
}
 *
 * @apiSuccessExample {JSON} Success, but nothing to add
 * HTTP/1.1 200 Success
 * {
    "msg": "¡Nada que actualizar!"
}
 * @apiSuccessExample {JSON} Success, but some members wasn't added
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el listado de miembros exitosamente. Algunos miembros no lograron ser agregados porque ya pertenecen a otro grupo.",
    "notInserts": [
        {
            "_id": "5fcf0821fc917d476c1cf3e3",
            "document": "CC12345678",
            "names": "USUARIO TRES",
            "lastNames": "PRUEBA TRES"
        }
    ]
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error action
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se logró determinar la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Error IDs users
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero alguno de los usuarios seleccionados son incorrectos."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error data
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero los datos enviados son incorrectos."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Empty data
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero debe seleccionar que usuario(s) se agregará(n) o eliminará(n)."
        }
    ]
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
 * @api {put} /api/admin/groups/:_id/members/remove (07) Remover miembros del grupo.
 * @apiVersion 0.0.8
 * @apiName removeMembersGroupsAdmin
 * @apiGroup GroupsAdmin
 *
 * @apiHeader {String} x-access-token Token de la sesión (admin | pastor | supervisor | lider).
 *
 * @apiParam (Path params) {String} _id ID del grupo.
 *
 * @apiParam {Array|String} members Listado de IDs de los usuarios a remover del grupo.
 *
 * @apiExample {JSON} Example JSON Request
 * {
    "members": [
        "5fcf0821fc917d476c1cf3e3"
    ]
}
 *
 * @apiSuccess {String} msg Mensaje del proceso.
 *
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 Success
 * {
    "msg": "Se ha actualizado el listado de miembros exitosamente."
}
 *
 * @apiSuccessExample {JSON} Success, but nothing to remove
 * HTTP/1.1 200 Success
 * {
    "msg": "¡Nada que actualizar!"
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
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "msg": "Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible."
}
 *
 * @apiErrorExample {JSON} Invalid _id
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero el grupo seleccionado es incorrecto."
}
 *
 * @apiErrorExample {JSON} Error action
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "Disculpe, pero no se logró determinar la acción a realizar."
}
 *
 * @apiErrorExample {JSON} Error IDs users
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero alguno de los usuarios seleccionados son incorrectos."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error data
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero los datos enviados son incorrectos."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Empty data
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "msg": "¡Error en los parámetros!",
    "errors": [
        {
            "input": "members",
            "msg": "Disculpe, pero debe seleccionar que usuario(s) se agregará(n) o eliminará(n)."
        }
    ]
  }
 *
 * @apiErrorExample {JSON} Error internal server
 * HTTP/1.1 500 Internal Error Server
 * {
    "msg": "Ha ocurrido un error inesperado.",
    "errors": [${err}]
  }
 */
