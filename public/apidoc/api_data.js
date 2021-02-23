define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/comments",
    "title": "(07) Obtener comentarios del curso.",
    "version": "0.0.10",
    "name": "commentsCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ],
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>Ordenado de los comentarios (1 = ASC | !1 = DESC).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de los comentarios.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de comentarios.</p>"
          }
        ],
        "comments Array Object": [
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Comentarios del curso.\",\n\t\"data\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd5932e679cc15ac790192\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": [],\n\t\t\t\t\"created_at\": \"2021-01-12 03:09:22\",\n\t\t\t\t\"updated_at\": \"2021-01-12 03:09:22\"\n\t\t\t}\n\t\t],\n\t\t\"totals\": 1\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with comments likes and unlikes",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Comentarios del curso.\",\n\t\"data\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd5932e679cc15ac790192\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [\n          {\n            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n            \"document\": \"CC12345678\",\n            \"names\": \"USUARIO TRES\",\n            \"lastNames\": \"PRUEBA TRES\"\n          },\n          .\n          .\n          .\n\t\t\t\t],\n\t\t\t\t\"unlikes\": [\n          {\n            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n            \"document\": \"CC12345678\",\n            \"names\": \"USUARIO TRES\",\n            \"lastNames\": \"PRUEBA TRES\"\n          },\n          .\n          .\n          .\n\t\t\t\t],\n\t\t\t\t\"created_at\": \"2021-01-12 03:09:22\",\n\t\t\t\t\"updated_at\": \"2021-01-12 03:09:22\"\n\t\t\t}\n\t\t],\n\t\t\"totals\": 1\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without comments",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Comentarios del curso.\",\n\t\"data\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"comments\": [],\n\t\t\"totals\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/theme/:themeId/comments",
    "title": "(09) Obtener comentarios de un tema.",
    "version": "0.0.10",
    "name": "commentsThemeCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ],
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>Ordenado de los comentarios (1 = ASC | !1 = DESC).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de los comentarios.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de comentarios.</p>"
          }
        ],
        "comments Array Object": [
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Comentarios del curso.\",\n\t\"data\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd5932e679cc15ac790192\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": [],\n\t\t\t\t\"created_at\": \"2021-01-12 03:09:22\",\n\t\t\t\t\"updated_at\": \"2021-01-12 03:09:22\"\n\t\t\t}\n\t\t],\n\t\t\"totals\": 1\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without comments",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Comentarios del tema.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"themeId\": \"5ff8e4116f5c8648c0353e97\",\n        \"comments\": [],\n        \"totals\": 0\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses",
    "title": "(02) Crear nuevo curso.",
    "version": "0.0.11",
    "name": "createCoursesAdmin",
    "group": "CoursesAdmin",
    "description": "<p>El siguiente ENDPOINT es para poder crear un curso, cargando los diferentes temas a presentar al usuario, las preguntas para la prueba (examen) y demás ajustes para poder cargar y visualizar el curso.</p> <p>Lea detenidamente los parámetros requeridos en el servicio para poder crear el nuevo curso, cargar el contenido y sobretodo poder cargar las preguntas para las pruebas (PRESTE ATENCIÓN A ESTA).</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>Base64 o URL de la imagen a cargar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|String",
            "optional": false,
            "field": "levels",
            "description": "<p>IDs de los cursos previos (Opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas (Opcional puede enviarse vacío).</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Preguntas del examen para el tema.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (Solo videos provenientes de Youtube).</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request without levels",
        "content": "{\n  \"title\": \"CURSO POR EDITAR\",\n  \"code\": \"AAA-0003\",\n  \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n  \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n  \"toRoles\": [\n    5\n  ],\n  \"speaker\": \"Anthony Velásquez\",\n  \"speakerPosition\": 2,\n  \"levels\": [],\n  \"temary\": [\n    {\n      \"title\": \"Introducción\",\n      \"description\": \"<p>Descripción</p>\",\n      \"content\": [\n        {\n          \"title\": \"Contenido 1\",\n          \"description\": \"<p>Contenido 01</p>\",\n          \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n        },\n        {\n          \"title\": \"Contenido 2\",\n          \"description\": \"<p>Contenido 02</p>\",\n          \"urlVideo\": null\n        },\n        .\n        .\n        .\n      ],\n      \"test\": [\n        {\n          \"title\": \"01 - ¿Qué es el internet?\",\n          \"description\": \"<p>Seleccione una opción</p>\",\n          \"extra\": null,\n          \"inputType\": \"radio\",\n          \"placeholder\": \"Indica tu respuesta\",\n          \"require\": true,\n          \"values\": [\n            \"Una red de redes interconectada\",\n            \"Una estúfa\",\n            \"Una computador\",\n            \"Una reunión de amigos\"\n          ],\n          \"correctAnswer\": 0\n        },\n        {\n          \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n          \"description\": \"<p>Indique una respuesta</p>\",\n          \"extra\": null,\n          \"inputType\": \"text\",\n          \"placeholder\": \"Indique una respuesta\",\n          \"require\": true,\n          \"values\": [],\n          \"correctAnswer\": null\n        },\n        .\n        .\n        .\n      ]\n    }\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with levels",
        "content": "{\n  \"title\": \"CURSO POR EDITAR\",\n  \"code\": \"AAA-0003\",\n  \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n  \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n  \"toRoles\": [\n    5\n  ],\n  \"speaker\": \"Anthony Velásquez\",\n  \"speakerPosition\": 2,\n  \"levels\": [ \"5ff8d0c1fd462643e42df1f6\", ... ],\n  \"temary\": [\n    {\n      \"title\": \"Introducción\",\n      \"description\": \"<p>Descripción</p>\",\n      \"content\": [\n        {\n          \"title\": \"Contenido 1\",\n          \"description\": \"<p>Contenido 01</p>\",\n          \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n        },\n        {\n          \"title\": \"Contenido 2\",\n          \"description\": \"<p>Contenido 02</p>\",\n          \"urlVideo\": null\n        },\n        .\n        .\n        .\n      ],\n      \"test\": [\n        {\n          \"title\": \"01 - ¿Qué es el internet?\",\n          \"description\": \"<p>Seleccione una opción</p>\",\n          \"extra\": null,\n          \"inputType\": \"radio\",\n          \"placeholder\": \"Indica tu respuesta\",\n          \"require\": true,\n          \"values\": [\n            \"Una red de redes interconectada\",\n            \"Una estúfa\",\n            \"Una computador\",\n            \"Una reunión de amigos\"\n          ],\n          \"correctAnswer\": 0\n        },\n        {\n          \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n          \"description\": \"<p>Indique una respuesta</p>\",\n          \"extra\": null,\n          \"inputType\": \"text\",\n          \"placeholder\": \"Indique una respuesta\",\n          \"require\": true,\n          \"values\": [],\n          \"correctAnswer\": null\n        },\n        .\n        .\n        .\n      ]\n    }\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without toRoles, banner, levels and test",
        "content": "{\n  \"title\": \"CURSO POR EDITAR\",\n  \"code\": \"AAA-0003\",\n  \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n  \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n  \"toRoles\": [],\n  \"speaker\": \"Anthony Velásquez\",\n  \"speakerPosition\": 2,\n  \"levels\": [],\n  \"temary\": []\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Detalles del curso.</p>"
          }
        ],
        "course Object": [
          {
            "group": "course Object",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "levels",
            "description": "<p>Listado de cursos previos.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra público para los usuarios.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "draft",
            "description": "<p>Indica si el curso se encuentra en borrador (preparación).</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Number",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del contenido del curso.</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Listado de contenido del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para la prueba que deberá presentar el usuario.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha creado el nuevo curso exitosamente.\",\n\t\"course\": {\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"levels\": [],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"draft\": true,\n\t\t\"_id\": \"601fbab782fea34e787d449b\",\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0004\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601fbab782fea34e787d449c\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601fbab782fea34e787d449d\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601fbab782fea34e787d449e\",\n\t\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\"\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\t\"_id\": \"601fbab782fea34e787d44a1\",\n\t\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"601fbab782fea34e787d44a2\",\n\t\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"comments\": [],\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": []\n\t\t\t}\n\t\t],\n\t\t\"comments\": [],\n\t\t\"likes\": [],\n\t\t\"unlikes\": [],\n\t\t\"created_at\": \"2021-02-07 05:02:31\",\n\t\t\"updated_at\": \"2021-02-07 05:02:31\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without toRoles, banner, levels and temary",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha creado el nuevo curso exitosamente.\",\n\t\"course\": {\n\t\t\"banner\": null,\n\t\t\"levels\": [],\n\t\t\"toRoles\": [],\n\t\t\"enable\": false,\n\t\t\"draft\": true,\n\t\t\"_id\": \"601fbab782fea34e787d449b\",\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0004\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [],\n\t\t\"comments\": [],\n\t\t\"likes\": [],\n\t\t\"unlikes\": [],\n\t\t\"created_at\": \"2021-02-07 05:02:31\",\n\t\t\"updated_at\": \"2021-02-07 05:02:31\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título generar para el curso.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, pero indicar el nombre completo del orador del curso.\"\n        },\n        {\n            \"input\": \"code\",\n            \"msg\": \"Disculpe, pero el código indicado ya se encuentra registrado.\"\n        },\n        {\n            \"input\": \"temary\",\n            \"msg\": \"Disculpe, pero indicar el temario del curso.\"\n        },\n        {\n            \"input\": \"test\",\n            \"msg\": \"Disculpe, pero indicar las preguntas para la prueba de este curso.\"\n        },\n        {\n            \"input\": \"levels\",\n            \"msg\": \"Disculpe, pero alguno de los cursos previos seleccionados es incorrecto.\"\n        },\n        {\n            \"input\": \"levels\",\n            \"msg\": \"Disculpe, pero alguno de los cursos previos seleccionados no existen.\"\n        },\n        {\n            \"input\": \"temary.title\",\n            \"msg\": \"Disculpe, pero debe indicar un título para el tema.\"\n        },\n        {\n            \"input\": \"temary.description\",\n            \"msg\": \"Disculpe, pero la descripción para este tema es incorrecta.\"\n        },\n        {\n            \"input\": \"temary.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"content.title\",\n            \"msg\": \"Disculpe, pero debe indicar un título para el contenido.\"\n        },\n        {\n            \"input\": \"content.description\",\n            \"msg\": \"Disculpe, pero la descripción ingresada para el contenido es incorrecta.\"\n        },\n        {\n            \"input\": \"content.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"test.title\",\n            \"msg\": \"Disculpe, pero todas las preguntas para la prueba deben contener un título.\"\n        },\n        {\n            \"input\": \"test.inputType\",\n            \"msg\": \"Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.\"\n        },\n        {\n            \"input\": \"test.correctAnswer\",\n            \"msg\": \"Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/courses/:_id",
    "title": "(05) Eliminar un curso.",
    "version": "0.0.10",
    "name": "deleteCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha eliminado el curso exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't delete",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso no puede ser eliminado. Los usuarios ya poseen el curso en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id",
    "title": "(03) Obtener detalles de un curso.",
    "version": "0.0.10",
    "name": "detailsCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Datos del curso.</p>"
          }
        ],
        "course Object": [
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario creador del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Orador del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL del banner del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "levels",
            "description": "<p>Listado de cursos que el usuario debe visualizar antes.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "draft",
            "description": "<p>Indica si el curso se encuentra en modo borrador.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra disponible al público.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Object",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de comentarios, 'Me gusta' y 'No me gusta'.</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Listado de contenido del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para el examen del tema.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del contenido.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          }
        ],
        "levels Array Object": [
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso previo.</p>"
          },
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso previo.</p>"
          },
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso previo.</p>"
          }
        ],
        "totals Object": [
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "totalComments",
            "description": "<p>Número (total) de comentarios.</p>"
          },
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "totalLikes",
            "description": "<p>Número (total) de 'Me gusta'.</p>"
          },
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "totalUnlikes",
            "description": "<p>Número (total) de 'No me gusta'.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"user\": {\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"USUARIO\",\n\t\t\t\"lastNames\": \"ADMIN\"\n\t\t},\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0003\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa5\",\n\t\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\",\n\t\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"levels\": [],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"draft\": false,\n\t\t\"enable\": true,\n\t\t\"created_at\": \"2021-02-06 16:28:25\",\n\t\t\"updated_at\": \"2021-02-07 02:37:41\",\n\t\t\"totals\": {\n\t\t\t\"totalComments\": 1,\n\t\t\t\"totalLikes\": 1,\n\t\t\t\"totalUnlikes\": 1\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with levels",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"user\": {\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"USUARIO\",\n\t\t\t\"lastNames\": \"ADMIN\"\n\t\t},\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0003\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa5\",\n\t\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\",\n\t\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ff8d0c1fd462643e42df1f6\",\n\t\t\t\t\"title\": \"CURSO NUEVO 2\",\n\t\t\t\t\"slug\": \"curso-nuevo-1\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"draft\": false,\n\t\t\"enable\": true,\n\t\t\"created_at\": \"2021-02-06 16:28:25\",\n\t\t\"updated_at\": \"2021-02-07 02:37:41\",\n\t\t\"totals\": {\n\t\t\t\"totalComments\": 1,\n\t\t\t\"totalLikes\": 1,\n\t\t\t\"totalUnlikes\": 1\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/enable",
    "title": "(06) Publicar un curso o removerlo.",
    "version": "0.0.10",
    "name": "enableCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si se publicará el curso o será removido (valores: 1 = enable | 0 = remove).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request if enable",
        "content": "{\n    \"enable\": 1\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request if remove",
        "content": "{\n    \"enable\": 0\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha publicado el curso exitosamente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha retirado el curso exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't disabled",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso no puede ser deshabilitado. Los usuarios ya poseen el curso en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid 'enable' param.",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Fails validations",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"msg\": \"Disculpe, para publicar el curso es necesario que indique a que grupo de usuarios va dirigido.\"\n        },\n        {\n            \"msg\": \"Disculpe, para publicar el curso es necesario que indique el temario para este.\"\n        },\n        {\n            \"msg\": \"Disculpe, para publicar el curso es necesario que indique las pruebas (examen) para este.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/counters",
    "title": "(00) Obtener contador de cursos.",
    "version": "0.0.5",
    "name": "getCountersCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | lider)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "totals",
            "description": "<p>Totalizador de cursos.</p>"
          }
        ],
        "totals Object": [
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "enables",
            "description": "<p>Total de cursos publicados.</p>"
          },
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "drafts",
            "description": "<p>Total de cursos en borrador.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total de cursos.\",\n    \"totals\": {\n        \"enables\": 0,\n        \"drafts\": 3\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses",
    "title": "(01) Obtener listado de cursos.",
    "version": "0.0.5",
    "name": "getCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | lider)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = title | code).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página a visualizar (Por defecto = 1).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Total de resultados por página (Por defecto = 10).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          }
        ],
        "courses Array Object": [
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario que registró el curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Orador del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen principal del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "draft",
            "description": "<p>Indica si el curso se encuentra en modo borrador.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra disponible al público.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del curso.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"courses\": [\n        {\n            \"_id\": \"5fea3193ff37862c30b2d9a8\",\n            \"user\": {\n                \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n                \"document\": \"CC123456789\",\n                \"names\": \"USUARIO\",\n                \"lastNames\": \"ADMIN\"\n            },\n            \"speaker\": \"Anthony Velásquez\",\n            \"speakerPosition\": 2,\n            \"code\": \"AAA-1235\",\n            \"title\": \"CURSO 000001\",\n            \"slug\": \"curso-nuevo-1\",\n            \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n            \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n            \"toRoles\": [\n                5\n            ],\n            \"draft\": true,\n            \"enable\": false,\n            \"created_at\": \"2020-12-28 14:27:15\",\n            \"updated_at\": \"2020-12-28 14:44:37\"\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/likes",
    "title": "(08) Obtener 'Me gusta' y 'No me gusta' del curso.",
    "version": "0.0.9",
    "name": "likesAndUnlikesCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de los 'Me gusta' y 'No me gusta'.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalLikes",
            "description": "<p>Total de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalUnlikes",
            "description": "<p>Total de 'No me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de 'No me gusta'.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"'Me gusta' y 'No me gustas' del curso.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"totalLikes\": 3,\n        \"totalUnlikes\": 3,\n        \"likes\": [\n            {\n                \"_id\": \"5ffd4af6c149424030d7d8b3\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 02:08:38\"\n            },\n            .\n            .\n            .\n        ],\n        \"unlikes\": [\n            {\n                \"_id\": \"5ffd4af6c149424030d7d8b3\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 02:08:38\"\n            },\n            .\n            .\n            .\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/theme/:themeId/likes",
    "title": "(10) Obtener 'Me gusta' y 'No me gusta' de un tema.",
    "version": "0.0.10",
    "name": "likesAndUnlikesThemeCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de los 'Me gusta' y 'No me gusta'.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalLikes",
            "description": "<p>Total de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalUnlikes",
            "description": "<p>Total de 'No me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de 'No me gusta'.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"'Me gusta' y 'No me gustas' del tema.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"themeId\": \"5ff8e4116f5c8648c0353e97\",\n        \"totalLikes\": 3,\n        \"totalUnlikes\": 3,\n        \"likes\": [\n            {\n                \"_id\": \"5ffd5d0f11e3aa47f051a0dc\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 03:25:51\"\n            },\n            .\n            .\n            .\n        ],\n        \"unlikes\": [\n            {\n                \"_id\": \"5ffd326508f3ed208cc764bc\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 00:23:49\"\n            },\n            .\n            .\n            .\n        ]\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without likes and unlikes",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"'Me gusta' y 'No me gustas' del tema.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"themeId\": \"5ff8e4116f5c8648c0353e97\",\n        \"totalLikes\": 0,\n        \"totalUnlikes\": 0,\n        \"likes\": [],\n        \"unlikes\": []\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id",
    "title": "(04) Actualizar un curso.",
    "version": "0.0.10",
    "name": "updateCoursesAdmin",
    "group": "CoursesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso (Generado automáticamente al crear, en caso de no modificar, enviar tal cual).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>Base64 o URL de la imagen a cargar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|String",
            "optional": false,
            "field": "levels",
            "description": "<p>IDs de los cursos previos (Opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas (Opcional puede enviarse vacío).</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema (en caso de existir).</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Preguntas del examen para el tema.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del contenido (en caso de existir).</p>"
          },
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (Solo videos provenientes de Youtube).</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta de la prueba (en caso de existir).</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"CURSO POR EDITAR\",\n\t\"code\": \"AAA-0004\",\n\t\"slug\": \"curso-por-editar-2\",\n\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\"speaker\": \"Anthony Velásquez\",\n\t\"speakerPosition\": 2,\n\t\"toRoles\": [\n\t\t5\n\t],\n\t\"levels\": [],\n\t\"temary\": [\n\t\t{\n\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\"title\": \"Introducción\",\n\t\t\t\"description\": null,\n\t\t\t\"content\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"Contenido 111111\",\n\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa5\",\n\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\",\n\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t],\n\t\t\t\"test\": [\n\t\t\t\t{\n\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t],\n\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t]\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with levels",
        "content": "{\n\t\"title\": \"CURSO POR EDITAR\",\n\t\"code\": \"AAA-0004\",\n\t\"slug\": \"curso-por-editar-2\",\n\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\"speaker\": \"Anthony Velásquez\",\n\t\"speakerPosition\": 2,\n\t\"toRoles\": [\n\t\t5\n\t],\n  \"levels\": [ \"5ff8d0c1fd462643e42df1f6\", ... ],\n\t\"temary\": [\n\t\t{\n\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\"title\": \"Introducción\",\n\t\t\t\"description\": null,\n\t\t\t\"content\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"Contenido 111111\",\n\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa5\",\n\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\",\n\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t],\n\t\t\t\"test\": [\n\t\t\t\t{\n\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t],\n\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t]\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without toRoles, banner, levels and test",
        "content": "{\n\t\"title\": \"CURSO POR EDITAR\",\n\t\"code\": \"AAA-0004\",\n\t\"slug\": \"curso-por-editar-2\",\n\t\"banner\": null,\n\t\"description\": null,\n\t\"speaker\": \"Anthony Velásquez\",\n\t\"speakerPosition\": 2,\n\t\"toRoles\": [],\n  \"levels\": [],\n  \"temary\": []\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Detalles del cruso.</p>"
          }
        ],
        "course Object": [
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Number",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para la prueba que deberá presentar el usuario.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra público para los usuarios.</p>"
          },
          {
            "group": "course Object",
            "type": "Boolean",
            "optional": false,
            "field": "draft",
            "description": "<p>Indica si el curso se encuentra en borrador (preparación).</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del contenido del curso.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Comentarios realizados por los usuarios.</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado el curso exitosamente.\",\n\t\"course\": {\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"levels\": [],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"draft\": false,\n\t\t\"_id\": \"601fbab782fea34e787d449b\",\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0004\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601fbf7e38120f39e411f2ed\",\n\t\t\t\t\t\t\"title\": \"Contenido 111111\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa5\",\n\t\t\t\t\t\t\"title\": \"Contenido 2\",\n\t\t\t\t\t\t\"description\": \"<p>Contenido 02</p>\",\n\t\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\t\t\t\"Una estúfa\",\n\t\t\t\t\t\t\t\"Una computador\",\n\t\t\t\t\t\t\t\"Una reunión de amigos\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 0,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\t\t\t\"extra\": null,\n\t\t\t\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"comments\": [],\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": []\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"created_at\": \"2021-02-07 05:02:31\",\n\t\t\"updated_at\": \"2021-02-07 05:22:54\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success witout temary and tests",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el curso exitosamente.\",\n    \"course\": {\n        \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n        \"levels\": [\n            \"5ff8d0c1fd462643e42df1f6\"\n        ],\n        \"toRoles\": [\n            5\n        ],\n        \"enable\": false,\n        \"draft\": true,\n        \"_id\": \"601e48e6f9fd624dccb74beb\",\n        \"speaker\": \"Anthony Velásquez\",\n        \"speakerPosition\": 2,\n        \"code\": \"AAA-0002\",\n        \"title\": \"CURSO NUEVO\",\n        \"slug\": \"curso-nuevo-actualizado\",\n        \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n        \"temary\": [],\n        \"test\": [],\n        \"created_at\": \"2021-02-06 02:44:38\",\n        \"updated_at\": \"2021-02-06 02:45:45\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The code exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el nuevp código ingresado ya se encuentra asignado a otro curso.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título generar para el curso.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, pero indicar el nombre completo del orador del curso.\"\n        },\n        {\n            \"input\": \"code\",\n            \"msg\": \"Disculpe, pero el código indicado ya se encuentra registrado.\"\n        },\n        {\n            \"input\": \"temary\",\n            \"msg\": \"Disculpe, pero indicar el temario del curso.\"\n        },\n        {\n            \"input\": \"test\",\n            \"msg\": \"Disculpe, pero indicar las preguntas para la prueba de este curso.\"\n        },\n        {\n            \"input\": \"levels\",\n            \"msg\": \"Disculpe, pero alguno de los cursos previos seleccionados es incorrecto.\"\n        },\n        {\n            \"input\": \"levels\",\n            \"msg\": \"Disculpe, pero alguno de los cursos previos seleccionados no existen.\"\n        },\n        {\n            \"input\": \"temary.title\",\n            \"msg\": \"Disculpe, pero debe indicar un título para el tema.\"\n        },\n        {\n            \"input\": \"temary.description\",\n            \"msg\": \"Disculpe, pero la descripción para este tema es incorrecta.\"\n        },\n        {\n            \"input\": \"temary.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"content.title\",\n            \"msg\": \"Disculpe, pero debe indicar un título para el contenido.\"\n        },\n        {\n            \"input\": \"content.description\",\n            \"msg\": \"Disculpe, pero la descripción ingresada para el contenido es incorrecta.\"\n        },\n        {\n            \"input\": \"content.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"test.title\",\n            \"msg\": \"Disculpe, pero todas las preguntas para la prueba deben contener un título.\"\n        },\n        {\n            \"input\": \"test.inputType\",\n            \"msg\": \"Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.\"\n        },\n        {\n            \"input\": \"test.correctAnswer\",\n            \"msg\": \"Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug",
    "title": "(03) Agergar un curso al listado del usuario.",
    "version": "0.0.11",
    "name": "addCourseUser",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "added",
            "description": "<p>Detalles del curso.</p>"
          }
        ],
        "added Object": [
          {
            "group": "added Object",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el curso está aprobado.</p>"
          },
          {
            "group": "added Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "added Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "added Object",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "added Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Actividad de los temas del curso.</p>"
          },
          {
            "group": "added Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          },
          {
            "group": "added Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última vista.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el tema fue aprobado o no.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "approvedDate",
            "description": "<p>Fecha de aprobación del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido del tema (histórico de usuario).</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "tests",
            "description": "<p>Listado de pruebas realizadas para el tema.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del contenido.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          }
        ],
        "tests Array Object": [
          {
            "group": "tests Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la prueba.</p>"
          },
          {
            "group": "tests Array Object",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Cantidad de puntos obtenidos.</p>"
          },
          {
            "group": "tests Array Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de presentación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha agregado el curso exitosamente.\",\n\t\"added\": {\n\t\t\"approved\": false,\n\t\t\"_id\": \"601fb09edec8a05c800602b8\",\n\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\"courseId\": \"601f09f99775034e10510fa2\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 0,\n\t\t\t\t\"date\": null,\n\t\t\t\t\"approved\": false,\n\t\t\t\t\"approvedDate\": null,\n\t\t\t\t\"temaryId\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"601f09f99775034e10510fa4\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": []\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"created_at\": \"2021-02-07 04:19:26\",\n\t\t\"updated_at\": \"2021-02-07 04:19:26\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course added previously",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya tiene disponible este curso en su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course without themes",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso actual no cuenta con temas.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/comment",
    "title": "(05) Comentar un curso.",
    "version": "0.0.11",
    "name": "commentCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Mensaje a comentar.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario agregado.</p>"
          }
        ],
        "comment Object": [
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "comment Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot;.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del comentario.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha agregado el comentario exitosamente.\",\n    \"comment\": {\n        \"answer\": null,\n        \"_id\": \"5ffd56368cee8d4f7c0c8a20\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n        \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n        \"likes\": [],\n        \"unlikes\": [],\n        \"created_at\": \"2021-01-12 02:56:38\",\n        \"updated_at\": \"2021-01-12 02:56:38\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'comment' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\\-+\"'/@.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/comment",
    "title": "(09) Comentar un tema.",
    "version": "0.0.11",
    "name": "commentThemeCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Mensaje a comentar.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario agregado.</p>"
          }
        ],
        "comment Object": [
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "comment Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot;.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comment Object",
            "type": "String|Null",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del comentario.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha agregado el comentario exitosamente.\",\n    \"comment\": {\n        \"answer\": null,\n        \"_id\": \"5ffd5932e679cc15ac790192\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n        \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n        \"likes\": [],\n        \"unlikes\": [],\n        \"created_at\": \"2021-01-12 02:56:38\",\n        \"updated_at\": \"2021-01-12 02:56:38\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'comment' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el comentario debe cumplir con los siguientes parámetros: 1. Letras o números (az-AZ 0-9) y los siguientes caracteres especiales: .,#*?¿¡!()\\-+\"'/@.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/counters",
    "title": "(00) Obtener contador de cursos.",
    "version": "0.0.6",
    "name": "getCountersCourses",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de cursos disponibles.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total de cursos.\",\n    \"totals\": 1\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses",
    "title": "(01) Obtener listado de cursos.",
    "version": "0.0.6",
    "name": "getCoursesList",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = title | code).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página a visualizar (Por defecto = 1).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Total de resultados por página (Por defecto = 10).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          }
        ],
        "courses Array Object": [
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Orador del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL del banner del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos\",\n    \"courses\": [\n        {\n            \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n            \"speaker\": \"Anthony Velásquez\",\n            \"speakerPosition\": 2,\n            \"title\": \"CURSO NUEVO 2\",\n            \"slug\": \"curso-nuevo-1\",\n            \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n            \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\"\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:slug",
    "title": "(02) Obtener detalles de un curso.",
    "version": "0.0.10",
    "name": "getDetailsCourses",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Detalles del curso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object|Null",
            "optional": false,
            "field": "dataCourseUser",
            "description": "<p>Progreso del curso del usuario.</p>"
          }
        ],
        "course Object": [
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Number",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Imagen del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "levels",
            "description": "<p>Listado de cursos que el usuario debe completar antes continuar.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "course Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          }
        ],
        "dataCourseUser Object": [
          {
            "group": "dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "dataCourseUser Object",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Actividad de los temas del curso.</p>"
          },
          {
            "group": "dataCourseUser Object",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el curso ha sido aprobado.</p>"
          },
          {
            "group": "dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "temary Array Object dataCourseUser": [
          {
            "group": "temary Array Object dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del tema.</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el tema fue aprobado o no.</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "approvedDate",
            "description": "<p>Fecha de aprobación del tema.</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema relacionado.</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Lisado de contenido del tema (Avances del usuario).</p>"
          },
          {
            "group": "temary Array Object dataCourseUser",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de pruebas del tema.</p>"
          }
        ],
        "content Array Object temary dataCourseUser": [
          {
            "group": "content Array Object temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "content Array Object temary dataCourseUser",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del contenido.</p>"
          },
          {
            "group": "content Array Object temary dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          }
        ],
        "test Array Object temary dataCourseUser": [
          {
            "group": "test Array Object temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la prueba realizada.</p>"
          },
          {
            "group": "test Array Object temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Puntos obtenidos.</p>"
          },
          {
            "group": "test Array Object temary dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de realización de la prueba.</p>"
          }
        ],
        "temary Array Object": [
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Listado del contenido del tema.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del contenido.</p>"
          }
        ],
        "levels Array Object": [
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso previo.</p>"
          },
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso previo.</p>"
          },
          {
            "group": "levels Array Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso previo.</p>"
          }
        ],
        "comments Array Object": [
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0003\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"levels\": [],\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd5932e679cc15ac790192\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": [],\n\t\t\t\t\"created_at\": \"2021-01-12 03:09:22\",\n\t\t\t\t\"updated_at\": \"2021-01-12 03:09:22\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"likes\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd326508f3ed208cc764bc\",\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"created_at\": \"2021-01-12 00:23:49\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"unlikes\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd326508f3ed208cc764bc\",\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"created_at\": \"2021-01-12 00:23:49\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t},\n\t\"dataCourseUser\": {\n\t\t\"_id\": \"601f7123b54f1b58e430f7dc\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 2,\n\t\t\t\t\"date\": \"2021-02-07 02:52:08\",\n\t\t\t\t\"approved\": true,\n\t\t\t\t\"approvedDate\": \"2021-02-07 01:55:31\",\n\t\t\t\t\"temaryId\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 2,\n\t\t\t\t\t\t\"date\": \"2021-02-07 03:11:37\",\n\t\t\t\t\t\t\"contentId\": \"601f09f99775034e10510fa4\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f8ee3b9d38c24ecbc812e\",\n\t\t\t\t\t\t\"points\": \"100\",\n\t\t\t\t\t\t\"date\": \"2021-02-07 01:55:31\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"approved\": false,\n\t\t\"created_at\": \"2021-02-06 23:48:35\",\n\t\t\"updated_at\": \"2021-02-07 02:52:08\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with levels",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\"speaker\": \"Anthony Velásquez\",\n\t\t\"speakerPosition\": 2,\n\t\t\"code\": \"AAA-0003\",\n\t\t\"title\": \"CURSO POR EDITAR\",\n\t\t\"slug\": \"curso-por-editar-2\",\n\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"title\": \"Introducción\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\t\t\"title\": \"Contenido 1\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ff8d0c1fd462643e42df1f6\",\n\t\t\t\t\"title\": \"CURSO NUEVO 2\",\n\t\t\t\t\"slug\": \"curso-nuevo-1\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd5932e679cc15ac790192\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [],\n\t\t\t\t\"unlikes\": [],\n\t\t\t\t\"created_at\": \"2021-01-12 03:09:22\",\n\t\t\t\t\"updated_at\": \"2021-01-12 03:09:22\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"likes\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd326508f3ed208cc764bc\",\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"created_at\": \"2021-01-12 00:23:49\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"unlikes\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"5ffd326508f3ed208cc764bc\",\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"created_at\": \"2021-01-12 00:23:49\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t},\n\t\"dataCourseUser\": {\n\t\t\"_id\": \"601f7123b54f1b58e430f7dc\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 2,\n\t\t\t\t\"date\": \"2021-02-07 02:52:08\",\n\t\t\t\t\"approved\": true,\n\t\t\t\t\"approvedDate\": \"2021-02-07 01:55:31\",\n\t\t\t\t\"temaryId\": \"601f09f99775034e10510fa3\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 2,\n\t\t\t\t\t\t\"date\": \"2021-02-07 03:11:37\",\n\t\t\t\t\t\t\"contentId\": \"601f09f99775034e10510fa4\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f8ee3b9d38c24ecbc812e\",\n\t\t\t\t\t\t\"points\": \"100\",\n\t\t\t\t\t\t\"date\": \"2021-02-07 01:55:31\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"approved\": false,\n\t\t\"created_at\": \"2021-02-06 23:48:35\",\n\t\t\"updated_at\": \"2021-02-07 02:52:08\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:slug/theme/:themeId/test",
    "title": "(12) Obtener prueba (examen) para aprobar un tema.",
    "version": "0.0.10",
    "name": "getTestCourses",
    "group": "Courses",
    "description": "<p>El siguiente ENDPOINT es para poder obtener las preguntas de la prueba (examen) para poder aprobar el curso. El servicio retorna un listado de pregunta con diferentes parámetros para poder ser ajustadas en la vista. Entre las opciones de los diferentes campos (inputType) se disponen: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select'.</p> <p>Los tipos de campos variarán dependiendo del contenido de la llave 'value'. Si el arreglo 'value' contiene datos, este obligariamente debe ser diferente de 'text' o 'textarea'.</p> <p>Para más información sobre como se crean las pruebas para los cursos, visualice el servicio '(02) Crear nuevo curso.' en la sección 'CoursesAdmin'.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas de la prueba.</p>"
          }
        ],
        "test Array Object": [
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Array Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select').</p>"
          },
          {
            "group": "test Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Array Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Array Object",
            "type": "Array|String",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Examen del tema\",\n\t\"test\": [\n\t\t{\n\t\t\t\"_id\": \"601f09f99775034e10510fa8\",\n\t\t\t\"title\": \"01 - ¿Qué es el internet?\",\n\t\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\t\"extra\": null,\n\t\t\t\"inputType\": \"radio\",\n\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\"require\": true,\n\t\t\t\"values\": [\n\t\t\t\t\"Una red de redes interconectada\",\n\t\t\t\t\"Una estúfa\",\n\t\t\t\t\"Una computador\",\n\t\t\t\t\"Una reunión de amigos\"\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"_id\": \"601f09f99775034e10510fa9\",\n\t\t\t\"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n\t\t\t\"description\": \"<p>Indique una respuesta</p>\",\n\t\t\t\"extra\": null,\n\t\t\t\"inputType\": \"text\",\n\t\t\t\"placeholder\": \"Indique una respuesta\",\n\t\t\t\"require\": true,\n\t\t\t\"values\": []\n\t\t}\n\t]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Unfinished all content of theme",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"msg\": \"Disculpe, pero no puede realizar la prueba hasta haber completado todo el contenido del tema.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found theme in user data",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar la relación de la prueba en su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found course in user data",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Not found test theme",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't access to test",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The test was approved",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya ha aprobado este examen anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "All tests was completed",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya ha aprobado todos los exámenes de este curso.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:slug/theme/:themeId",
    "title": "(07) Obtener un tema.",
    "version": "0.0.9",
    "name": "getThemeCourses",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "theme",
            "description": "<p>Detalles del tema.</p>"
          }
        ],
        "theme Object": [
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tiema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Indica si el tema fue visto (0 = Sin Ver | 1 = Viendo | 2 = Visto).</p>"
          },
          {
            "group": "theme Object",
            "type": "Array|Object",
            "optional": false,
            "field": "content",
            "description": "<p>Listado del contenido del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
          },
          {
            "group": "theme Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "theme Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          }
        ],
        "content Array Object": [
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del contenido.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "content Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          },
          {
            "group": "content Array Object",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Indica si el contenido fue visto (0 = Sin Ver | 1 = Viendo | 2 = Visto).</p>"
          }
        ],
        "comments Array Object": [
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta recibida (No implementado).</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario comentador.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "likes",
            "description": "<p>Listado de &quot;Me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "Array|Object",
            "optional": false,
            "field": "unlikes",
            "description": "<p>Listado de &quot;No me gusta&quot; recibidos.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del comentario.</p>"
          },
          {
            "group": "comments Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "likes and unlikes Array Object": [
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos báse del usuario.</p>"
          },
          {
            "group": "likes and unlikes Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Tema\",\n\t\"theme\": {\n\t\t\"_id\": \"601f09f99775034e10510fa3\",\n\t\t\"title\": \"Introducción\",\n\t\t\"description\": null,\n\t\t\"content\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa4\",\n\t\t\t\t\"title\": \"Contenido 1\",\n\t\t\t\t\"description\": \"<p>Contenido 01</p>\",\n\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"comments\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f9848a8f5013c48c36f03\",\n\t\t\t\t\"answer\": null,\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"likes\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"601f98b2a8f5013c48c36f30\",\n\t\t\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\t\"user\": {\n\t\t\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"created_at\": \"2021-02-07 02:37:22\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"unlikes\": [],\n\t\t\t\t\"created_at\": \"2021-02-07 02:35:36\",\n\t\t\t\t\"updated_at\": \"2021-02-07 02:35:36\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"likes\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"601f9874a8f5013c48c36f04\",\n\t\t\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t\t\t},\n\t\t\t\t\"created_at\": \"2021-02-07 02:36:20\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"unlikes\": []\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not complete previous courses",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/comment/:commentId/like",
    "title": "(06) \"Me gusta\" o \"No me gusta\" a un comentario de un curso.",
    "version": "0.0.11",
    "name": "likeOrUnlikeCommentCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID del comentario.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>Valor para indicar si le &quot;gusta&quot; o &quot;no gusta&quot; el curso (0 = no gusta | 1 = gusta).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request (like)",
        "content": "{\n    \"like\": 1\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (unlike)",
        "content": "{\n    \"like\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (error)",
        "content": "{\n    \"like\": 3\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Detalles de la acción.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "like",
            "description": "<p>Datos en caso de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "unlike",
            "description": "<p>Datos en caso de &quot;No me gusta&quot;.</p>"
          }
        ],
        "like or unlike Object": [
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (like)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success (unlike)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"No me gusta agregado exitosamente.\",\n    \"data\": {\n        \"unlike\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Comment not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el comentario no existe o no se encuentra disponible.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid commentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el comentario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'like' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se determinó la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Was realized",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya has realizado esta acción anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/comment/:commentId/like",
    "title": "(11) \"Me gusta\" o \"No me gusta\" a un comentario de un tema.",
    "version": "0.0.11",
    "name": "likeOrUnlikeCommentThemeCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID del tema.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>Valor para indicar si le &quot;gusta&quot; o &quot;no gusta&quot; el curso (0 = no gusta | 1 = gusta).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request (like)",
        "content": "{\n    \"like\": 1\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (unlike)",
        "content": "{\n    \"like\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (error)",
        "content": "{\n    \"like\": 3\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Detalles de la acción.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "like",
            "description": "<p>Datos en caso de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "unlike",
            "description": "<p>Datos en caso de &quot;No me gusta&quot;.</p>"
          }
        ],
        "like or unlike Object": [
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (like)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success (unlike)",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"No me gusta agregado exitosamente.\",\n    \"data\": {\n        \"unlike\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Comment not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el comentario no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid commentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el comentario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'like' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se determinó la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Was realized",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya has realizado esta acción anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/like",
    "title": "(04) \"Me gusta\" o \"No me gusta\" a un curso.",
    "version": "0.0.11",
    "name": "likeOrUnlikeCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>Valor para indicar si le &quot;gusta&quot; o &quot;no gusta&quot; el curso (0 = no gusta | 1 = gusta).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request (like)",
        "content": "{\n    \"like\": 1\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (unlike)",
        "content": "{\n    \"like\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (error)",
        "content": "{\n    \"like\": 3\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Detalles de la acción.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "like",
            "description": "<p>Datos en caso de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "unlike",
            "description": "<p>Datos en caso de &quot;No me gusta&quot;.</p>"
          }
        ],
        "like or unlike Object": [
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (like)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success (unlike)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"No me gusta agregado exitosamente.\",\n    \"data\": {\n        \"unlike\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'like' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se determinó la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Was realized",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya has realizado esta acción anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/like",
    "title": "(10) \"Me gusta\" o \"No me gusta\" a un tema.",
    "version": "0.0.11",
    "name": "likeOrUnlikeThemeCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>Valor para indicar si le &quot;gusta&quot; o &quot;no gusta&quot; el curso (0 = no gusta | 1 = gusta).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request (like)",
        "content": "{\n    \"like\": 1\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (unlike)",
        "content": "{\n    \"like\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request (error)",
        "content": "{\n    \"like\": 3\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Detalles de la acción.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "like",
            "description": "<p>Datos en caso de &quot;Me gusta&quot;.</p>"
          },
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "unlike",
            "description": "<p>Datos en caso de &quot;No me gusta&quot;.</p>"
          }
        ],
        "like or unlike Object": [
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "like or unlike Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (like)",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success (unlike)",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"No me gusta agregado exitosamente.\",\n    \"data\": {\n        \"unlike\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validate 'like' value",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se determinó la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Was realized",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya has realizado esta acción anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/test",
    "title": "(13) Enviar repuestas de una prueba para aprobar el curso.",
    "version": "0.0.10",
    "name": "sendAnswersTestCourses",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "data",
            "description": "<p>Listado de respuestas.</p>"
          }
        ],
        "data Array|Object": [
          {
            "group": "data Array|Object",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "data Array|Object",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"data\": [\n        {\n            \"questionId\": \"5ff8e4116f5c8648c0353e99\",\n            \"answer\": \"0\"\n        },\n        {\n            \"questionId\": \"5ff8e4116f5c8648c0353e9a\",\n            \"answer\": \"Lorem\"\n        },\n        .\n        .\n        .\n    ]\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number|String",
            "optional": false,
            "field": "average",
            "description": "<p>Promedio de respuestas obtenido.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si aprobó o no el curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success and approved",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Ha aprobado el curso exitosamente.\",\n    \"average\": 100,\n    \"approved\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Success with decimal average",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Ha aprobado el curso exitosamente.\",\n    \"average\": \"66.66\",\n    \"approved\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Success and not approved",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del curso.\",\n    \"average\": 50,\n    \"approved\": false\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Not found theme in user data",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar la relación de la prueba en su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"data\",\n            \"msg\": \"Disculpe, pero no se logró recibir la información de la prueba.\"\n        },\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero una de las preguntas de la prueba es incorrecta.\"\n        },\n        {\n            \"input\": \"answer\",\n            \"msg\": \"Disculpe, pero debe completar todas las respuesta de la prueba.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "The test was approved",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya ha aprobado este examen anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "All tests was completed",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya ha aprobado todos los exámenes de este curso.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "/api/courses/:slug/theme/:themeId/content/:contentId/:action",
    "title": "(08) Marcar como 'VIENDO' o 'VISTO' un contenido de un tema.",
    "version": "0.0.14",
    "name": "setWatchingOrViewedContentThemeCourses",
    "group": "Courses",
    "description": "<p>Se puede utilizar este endpoint para actualizar el progreso del usuario en relación al contenido de un tema. En la ruta, el parámetro ':action' indica la acción a realizar, donde los valores:</p> <p>'watching' indica que el usuario está viendo el contenido. 'viewed' indica que el usuario está ya vió el contenido.</p> <p>Automáticamente, el servicio realiza una actualización del estado en el que se encuentra el tema en relación a su contenido. Ejemplo:</p> <ol> <li>Si el usuario no ha visto ningún contenido del TEMA, este tendrá un valor de cero (0), que significa 'NO VISTO'.</li> <li>Si el usuario ha visto al menos un contenido del TEMA, este tendrá un valor de uno (1), que significa 'VIENDO' o 'VISUALIZANDO'.</li> <li>Si el usuario ha visto todos los contenidos del TEMA, este tendrá un valor de dos (2), que significa que ha 'VISTO' todo el contenido.</li> </ol> <p>Si el punto tres (3) se cumple, podrá solicita la prueba respectiva del tema. Ver punto: &quot;(12) Obtener prueba (examen) para aprobar un tema&quot; en este mismo grupo de endpoints.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "themeId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Acción a realizar (valores = 'watching' | 'viewed').</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "updated",
            "description": "<p>Indica si el progreso fue exitoso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"¡Éxito al guardar el progreso!\",\n\t\"updated\": true\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "addCourse[addCourse]",
            "description": "<p>Indica si se agregará el curso.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe o ya no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course in user not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n    \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Content not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el contenido seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid action",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el contenido seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not complete previous courses",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/admin/events",
    "title": "(01) Crear nuevo evento.",
    "version": "0.0.11",
    "name": "createEventsAdmin",
    "group": "EventsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initHour",
            "description": "<p>Hora de inicio (Formato: HH:mm. Ejm: 08:30 | 23:59).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endHour",
            "description": "<p>Hora de finalización (Formato: HH:mm. Ejm: 08:30 | 23:59).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el evento.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"title\": \"REUNIÓN DE UNIFICACIÓN FAMILIAR\",\n    \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n    \"date\": \"2021-03-01\",\n    \"initHour\": \"00:00\",\n    \"endHour\": \"23:59\",\n    \"toRoles\": [5]\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>Detalles del evento.</p>"
          }
        ],
        "events Object": [
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del usuario que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha creado el evento exitosamente.\",\n\t\"event\": {\n\t\t\"_id\": \"603007b13b9d883c78abb864\",\n\t\t\"title\": \"REUNIÓN DE UNIFICACIÓN FAMILIAR\",\n\t\t\"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"date\": \"2021-03-01\",\n\t\t\"initHour\": \"00:00\",\n\t\t\"endHour\": \"23:59\",\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n        },\n        {\n            \"input\": \"date\",\n            \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n        },\n        {\n            \"input\": \"initHour\",\n            \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n        },\n        {\n            \"input\": \"endHour\",\n            \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/events/:_id",
    "title": "(04) Eliminar un evento.",
    "version": "0.0.4",
    "name": "deleteEventsAdmin",
    "group": "EventsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento a actualizar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha eliminado el evento exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el evento a eliminar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/events/:_id",
    "title": "(02) Obtener detalles de un evento.",
    "version": "0.0.4",
    "name": "detailsEventsAdmin",
    "group": "EventsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento a obtener.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Detalles del evento.</p>"
          }
        ],
        "event Object": [
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del usuario que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Evento.\",\n    \"event\": {\n        \"_id\": \"5fe00cf5e2c9942e5c866453\",\n        \"title\": \"EVENTO NUEVO\",\n        \"description\": \"description\",\n        \"date\": \"2020-07-07\",\n        \"initHour\": \"00:00\",\n        \"endHour\": \"00:00\",\n        \"toRoles\": [\n            5\n        ],\n        \"user\": {\n            \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n            \"document\": \"CC123456789\",\n            \"names\": \"USUARIO\",\n            \"lastNames\": \"ADMIN\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/events",
    "title": "(00) Obtener listado de eventos registrados.",
    "version": "0.0.4",
    "name": "getEventsAdmin",
    "group": "EventsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = date [requerido]).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "events Array Object": [
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Array Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del usuario que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Eventos.\",\n    \"events\": [\n        {\n            \"_id\": \"5fe00cf5e2c9942e5c866453\",\n            \"title\": \"EVENTO NUEVO\",\n            \"date\": \"2020-07-07\",\n            \"initHour\": \"00:00\",\n            \"endHour\": \"00:00\",\n            \"toRoles\": [\n                5\n            ],\n            \"user\": {\n                \"gender\": 0,\n                \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n                \"document\": \"CC123456789\",\n                \"names\": \"USUARIO\",\n                \"lastNames\": \"ADMIN\"\n            }\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Eventos.\",\n    \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/events/:_id",
    "title": "(03) Actualizar un evento.",
    "version": "0.0.4",
    "name": "updateEventsAdmin",
    "group": "EventsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento a actualizar.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initHour",
            "description": "<p>Hora de inicio (Formato: HH:mm. Ejm: 08:30 | 23:59).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endHour",
            "description": "<p>Hora de finalización (Formato: HH:mm. Ejm: 08:30 | 23:59).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el evento.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"title\": \"Evento especial\",\n    \"description\": \"Lorem ipsum\",\n    \"date\": \"2020-07-07\",\n    \"initHour\": \"00:00\",\n    \"endHour\": \"00:00\",\n    \"toRoles\": [\n        5,\n        3\n    ]\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>Detalles del evento.</p>"
          }
        ],
        "events Object": [
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el evento exitosamente.\",\n    \"event\": {\n        \"_id\": \"5fe00cf5e2c9942e5c866453\",\n        \"title\": \"EVENTO ESPECIAL\",\n        \"description\": \"Lorem ipsum\",\n        \"date\": \"2020-01-07\",\n        \"initHour\": \"00:00\",\n        \"endHour\": \"23:00\",\n        \"toRoles\": [\n            5,\n            3\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el evento a actualizar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n        },\n        {\n            \"input\": \"date\",\n            \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n        },\n        {\n            \"input\": \"initHour\",\n            \"msg\": \"Disculpe, pero indicar la hora (correcta) de inicio para el evento.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero debe seleccionar los roles para este evento.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/groups/:_id/members/add",
    "title": "(06) Agregar miembros al grupo.",
    "version": "0.0.8",
    "name": "addMembersGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array|String",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de IDs de los usuarios a agregar al grupo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"members\": [\n        \"5fcf0821fc917d476c1cf3e3\"\n    ]\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "notInserts[notInserts]",
            "description": "<p>Listado de miembros no agregados (en caso de aplicar).</p>"
          }
        ],
        "notInserts Array Object": [
          {
            "group": "notInserts Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "notInserts Array Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "notInserts Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "notInserts Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el listado de miembros exitosamente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Success, but some members wasn't added",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el listado de miembros exitosamente. Algunos miembros no lograron ser agregados porque ya pertenecen a otro grupo.\",\n    \"notInserts\": [\n        {\n            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n            \"document\": \"CC12345678\",\n            \"names\": \"USUARIO TRES\",\n            \"lastNames\": \"PRUEBA TRES\"\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error action",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error IDs users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero alguno de los usuarios seleccionados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Empty data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero debe seleccionar que usuario(s) se agregará(n) o eliminará(n).\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/groups",
    "title": "(02) Crear nuevo grupo.",
    "version": "0.0.11",
    "name": "createGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo (opcional).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"name\": \"Familia Rodriguez\",\n    \"code\": \"VEL-001\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without code",
        "content": "{\n    \"name\": \"Familia Rodriguez\",\n    \"code\": null\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Detalles del grupo.</p>"
          }
        ],
        "group Object": [
          {
            "group": "group Object",
            "type": "Array|Object",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de miembros (vacío).</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del contenido del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>ID del usuario que creó el grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha creado el grupo exitosamente.\",\n    \"group\": {\n        \"members\": [],\n        \"_id\": \"6018fbe959529c4068b62af5\",\n        \"name\": \"FAMILIA RODRIGUEZ\",\n        \"code\": \"VEL-001\",\n        \"created_at\": \"2021-02-02 02:14:49\",\n        \"updated_at\": \"2021-02-02 02:14:49\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e2\"\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success with auto-code",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha creado el grupo exitosamente.\",\n    \"group\": {\n        \"members\": [],\n        \"_id\": \"6018fbe959529c4068b62af5\",\n        \"name\": \"FAMILIA RODRIGUEZ\",\n        \"code\": \"GROUP-1\",\n        \"created_at\": \"2021-02-02 02:14:49\",\n        \"updated_at\": \"2021-02-02 02:14:49\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e2\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"name\",\n            \"msg\": \"Disculpe, pero debe indicar un nombre para el grupo.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "The code exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/groups/:_id",
    "title": "(05) Eliminar un grupo.",
    "version": "0.0.8",
    "name": "deleteGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha eliminado el grupo exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/groups/:_id",
    "title": "(03) Obtener detalles de un grupo.",
    "version": "0.0.8",
    "name": "detailsGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Datos del grupo.</p>"
          }
        ],
        "group Object": [
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario creador del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Array|Object",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de miembros pertenecientes al grupo</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "members Array Object": [
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Grupo\",\n    \"group\": {\n        \"_id\": \"6018e503e02a45115407e82f\",\n        \"user\": {\n            \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n            \"document\": \"CC123456789\",\n            \"names\": \"USUARIO\",\n            \"lastNames\": \"ADMIN\"\n        },\n        \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n        \"code\": \"AAA-001\",\n        \"members\": [\n            {\n                \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                \"document\": \"CC12345678\",\n                \"names\": \"USUARIO TRES\",\n                \"lastNames\": \"PRUEBA TRES\"\n                \"phone\": \"563161234567\"\n            },\n            .\n            .\n            .\n        ],\n        \"created_at\": \"2021-02-02 00:37:07\",\n        \"updated_at\": \"2021-02-02 02:16:16\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/groups/counters",
    "title": "(00) Obtener contador de grupos.",
    "version": "0.0.8",
    "name": "getCountersGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | lider)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo a buscar (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de grupos registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total de grupos\",\n    \"totals\": 2\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/groups",
    "title": "(01) Obtener listado de grupos.",
    "version": "0.0.8",
    "name": "getGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | lider)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = name | code).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página a visualizar (Por defecto = 1).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Total de resultados por página (Por defecto = 10).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo (opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Listado de grupos.</p>"
          }
        ],
        "groups Array Object": [
          {
            "group": "groups Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "groups Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del grupo.</p>"
          },
          {
            "group": "groups Array Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "groups Array Object",
            "type": "Number",
            "optional": false,
            "field": "totalMembers",
            "description": "<p>Total de miembros.</p>"
          },
          {
            "group": "groups Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Grupos\",\n    \"groups\": [\n        {\n            \"_id\": \"6018fbe959529c4068b62af5\",\n            \"name\": \"FAMILIA RODRIGUEZ\",\n            \"code\": \"VEL-001\",\n            \"totalMembers\": 0,\n            \"created_at\": \"2021-02-02 02:14:49\"\n        },\n        {\n            \"_id\": \"6018e503e02a45115407e82f\",\n            \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n            \"code\": \"AAA-001\",\n            \"totalMembers\": 1,\n            \"created_at\": \"2021-02-02 00:37:07\"\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"groups\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/groups/:_id/members/remove",
    "title": "(07) Remover miembros del grupo.",
    "version": "0.0.8",
    "name": "removeMembersGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array|String",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de IDs de los usuarios a remover del grupo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"members\": [\n        \"5fcf0821fc917d476c1cf3e3\"\n    ]\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el listado de miembros exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error action",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error IDs users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero alguno de los usuarios seleccionados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Empty data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero debe seleccionar que usuario(s) se agregará(n) o eliminará(n).\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/groups/:_id",
    "title": "(04) Actualizar un grupo.",
    "version": "0.0.8",
    "name": "updateGroupsAdmin",
    "group": "GroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin | pastor | supervisor | lider).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"name\": \"Familia Rodriguez\",\n    \"code\": \"AAA-001\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Detalles del grupo.</p>"
          }
        ],
        "group Object": [
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha creado el grupo exitosamente.\",\n    \"group\": {\n        \"_id\": \"6018e503e02a45115407e82f\",\n        \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n        \"code\": \"AAA-001\",\n        \"created_at\": \"2021-02-02 00:37:07\",\n        \"updated_at\": \"2021-02-02 02:16:16\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The code exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"name\",\n            \"msg\": \"Disculpe, pero debe indicar un nombre para el grupo.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/Groups.js",
    "groupTitle": "GroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/events/:_id",
    "title": "(04) Obtener detalles de un evento público.",
    "version": "0.0.16",
    "name": "detailsPublicEventsPublic",
    "group": "Public",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (para obtener el rol y obtener los eventos relacionados).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento a obtener.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Detalles del evento.</p>"
          }
        ],
        "event Object": [
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del usuario que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Evento.\",\n\t\"event\": {\n\t\t\"_id\": \"602bccfb1b70b930e43a3eb2\",\n\t\t\"title\": \"EVENTO NUEVO\",\n\t\t\"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"date\": \"2021-03-01\",\n\t\t\"initHour\": \"00:00\",\n\t\t\"endHour\": \"23:59\",\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el evento seleccionado incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Public.js",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "(03) Obtener eventos públicos.",
    "version": "0.0.16",
    "name": "getPublicEventsPublic",
    "group": "Public",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (para obtener el rol y obtener los eventos relacionados).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = date [requerido]).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Fecha de busqueda inicial (formato: YYYY-MM-DD) (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Fecha de busqueda final (formato: YYYY-MM-DD) (requerido si 'initDate' es enviado).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "events Array Object": [
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Array Object",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Array Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del usuario que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Eventos.\",\n\t\"events\": [\n\t\t{\n\t\t\t\"_id\": \"602bccfb1b70b930e43a3eb2\",\n\t\t\t\"title\": \"EVENTO NUEVO\",\n\t\t\t\"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"date\": \"2021-03-01\",\n\t\t\t\"initHour\": \"00:00\",\n\t\t\t\"endHour\": \"23:59\",\n\t\t\t\"toRoles\": [\n\t\t\t\t5\n\t\t\t],\n\t\t\t\"user\": {\n\t\t\t\t\"gender\": 0,\n\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\t\"document\": \"CC123456789\",\n\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t\t}\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Eventos.\",\n    \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Public.js",
    "groupTitle": "Public"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "(01) Iniciar sesión",
    "version": "0.0.16",
    "name": "loginPublic",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>Indica si inicia sesión como administrador.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"document\": \"CC12345678\",\n    \"password\": \"password\",\n    \"admin\": true\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with admin=false",
        "content": "{\n    \"document\": \"CC12345678\",\n    \"password\": \"password\",\n    \"admin\": false\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la sesión.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la sesión.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (array index) del nivel educativo.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (array index) de la profesión.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (array index) del tipo de sangre.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si tiene empresa.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (array index) del tipo de empresa (en caso de poseer).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si está bautizado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombrede la localidad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"¡Inicio de sesión con éxito!\",\n\t\"data\": {\n\t\t\"gender\": null,\n\t\t\"birthday\": null,\n\t\t\"civilStatus\": null,\n\t\t\"educationLevel\": null,\n\t\t\"profession\": null,\n\t\t\"bloodType\": null,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": false,\n\t\t\"role\": 5,\n\t\t\"department\": null,\n\t\t\"city\": null,\n\t\t\"locality\": null,\n\t\t\"direction\": null,\n\t\t\"created_at\": \"2021-02-18 19:23:23\",\n\t\t\"updated_at\": \"2021-02-18 19:25:33\",\n\t\t\"_id\": \"602f057d8d3e7d073cef3e87\",\n\t\t\"email\": \"user3@example.com\",\n\t\t\"document\": \"CC12345675\",\n\t\t\"names\": \"ANTHONY\",\n\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t},\n\t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMDU3ZDhkM2U3ZDA3M2NlZjNlODciLCJkb2N1bWVudCI6IkNDMTIzNDU2NzUiLCJyb2xlIjo1LCJpYXQiOjE2MTM2OTUwMzIsImV4cCI6MTY0NTI1MjYzMn0.INSchol5fi6UAElm-d9hdYi95vq_U3leX59rKnCa9Y8\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no cuenta con privilegios para poder acceder a esta área.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el número de documento no se encuentra registrado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su número de documento.\"\n        },\n        {\n            \"input\": \"password\",\n            \"msg\": \"Disculpe, pero debe asignar su contraseña correctamente.\"\n        }\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid password",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Contraseña incorrecta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error generate token",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"¡Ha ocurrido un error al momento de iniciar la sesión!\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Public.js",
    "groupTitle": "Public"
  },
  {
    "type": "delete",
    "url": "/api/logout",
    "title": "(02) Finalizar sesión.",
    "version": "0.0.2",
    "name": "logoutPublic",
    "group": "Public",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha finalizado la sesión exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Public.js",
    "groupTitle": "Public"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "(00) Registro de usuario.",
    "version": "0.0.16",
    "name": "registerPublic",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>Número de documento del referido (Opcional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with Referred",
        "content": "{\n\t\"email\": \"user3@example.com\",\n\t\"password\": \"password\",\n\t\"names\": \"Anthony\",\n\t\"lastNames\": \"Velásquez\",\n\t\"document\": \"CC12345675\",\n\t\"referred\": \"CC12345678\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without Referred",
        "content": "{\n\t\"email\": \"user3@example.com\",\n\t\"password\": \"password\",\n\t\"names\": \"Anthony\",\n\t\"lastNames\": \"Velásquez\",\n\t\"document\": \"CC12345675\",\n\t\"referred\": null\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Registro exitoso.\",\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Public.js",
    "groupTitle": "Public"
  },
  {
    "type": "post",
    "url": "/api/admin/questions",
    "title": "(01) Agregar nueva pregunta de seguridad",
    "version": "0.0.11",
    "name": "createQuestionsAdmin",
    "group": "QuestionsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"question\": \"¿Cuál es su color favorito?\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Detalles de la pregunta de seguridad.</p>"
          }
        ],
        "question Object": [
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Última fecha de actualización.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha registrado la pregunta de seguridad exitosamente.\",\n    \"question\": {\n        \"_id\": \"5fd65964404e8c2654e37de4\",\n        \"question\": \"¿Cuál es su color favorito?\",\n        \"created_at\": \"2020-12-13 13:11:48\",\n        \"updated_at\": \"2020-12-13 13:11:48\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero la pregunta de seguridad no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error ID param",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el ID de la pregunta de seguridad es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"question\",\n            \"msg\": \"Disculpe, pero debe indicar la pregunta.\"\n        }\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/QuestionsAdmin.js",
    "groupTitle": "QuestionsAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/questions/:_id",
    "title": "(04) Eliminar una pregunta de seguridad",
    "version": "0.0.3",
    "name": "deleteQuestionsAdmin",
    "group": "QuestionsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la pregunta de seguridad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se han eliminado la pregunta de seguridad exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero la pregunta de seguridad no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error ID param",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el ID de la pregunta de seguridad es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't delete",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no puede eliminar la pregunta de seguridad, debido a que se encuentra en uso por los usuarios.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/QuestionsAdmin.js",
    "groupTitle": "QuestionsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/questions/:_id",
    "title": "(02) Obtener detalles de una pregunta de seguridad",
    "version": "0.0.3",
    "name": "detailsQuestionsAdmin",
    "group": "QuestionsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la pregunta de seguridad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Detalles de la pregunta de seguridad.</p>"
          }
        ],
        "question Object": [
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Última fecha de actualización.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Detalles de la pregunta de seguridad exitosamente.\",\n    \"question\": {\n        \"_id\": \"5f8608596cd607042cdbea86\",\n        \"question\": \"¿Cuál es su color favorito?\",\n        \"created_at\": \"2020-10-13 15:04:41\",\n        \"updated_at\": \"2020-10-13 15:04:41\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero la pregunta de seguridad no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error ID param",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el ID de la pregunta de seguridad es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/QuestionsAdmin.js",
    "groupTitle": "QuestionsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/questions",
    "title": "(00) Obtener preguntas de seguridad.",
    "version": "0.0.3",
    "name": "getQuestionsAdmin",
    "group": "QuestionsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "questions",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "questions Array Object": [
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          },
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          },
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Última fecha de actualización.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Preguntas de seguridad.\",\n    \"questions\": [\n        {\n            \"_id\": \"5f8608596cd607042cdbea86\",\n            \"question\": \"¿Cuál es su color favorito?\",\n            \"created_at\": \"2020-10-13 15:04:41\",\n            \"updated_at\": \"2020-10-13 15:04:41\"\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/QuestionsAdmin.js",
    "groupTitle": "QuestionsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/questions/:_id",
    "title": "(03) Actualizar pregunta de seguridad.",
    "version": "0.0.3",
    "name": "updateQuestionsAdmin",
    "group": "QuestionsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la pregunta de seguridad.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"question\": \"¿Cuál es su color favorito de mi hijo(a)?\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>Detalles de la pregunta de seguridad.</p>"
          }
        ],
        "question Object": [
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Última fecha de actualización.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado la pregunta de seguridad exitosamente.\",\n    \"question\": {\n        \"_id\": \"5fd65964404e8c2654e37de4\",\n        \"question\": \"¿Cuál es su color favorito de mi hijo(a)?\",\n        \"created_at\": \"2020-12-13 13:11:48\",\n        \"updated_at\": \"2020-12-13 13:11:48\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero la pregunta de seguridad no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error ID param",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el ID de la pregunta de seguridad es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"question\",\n            \"msg\": \"Disculpe, pero debe indicar la pregunta.\"\n        }\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/QuestionsAdmin.js",
    "groupTitle": "QuestionsAdmin"
  },
  {
    "type": "get",
    "url": "/api/",
    "title": "Test connection",
    "version": "0.0.1",
    "name": "testServer",
    "group": "Test",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Process message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Welcome to ALMA API REST\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Test.js",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "/api/user/group/:memberId",
    "title": "(01) Obtener datos de un miembro del grupo familiar.",
    "version": "0.0.13",
    "name": "getDataMemberUserGroup",
    "group": "UserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "memberId",
            "description": "<p>ID del miembro a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del miembro del grupo.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object",
            "optional": false,
            "field": "member",
            "description": "<p>Datos del perfil del miembro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "totalCourses",
            "description": "<p>Total de cursos que ha visualizado.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "totalReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembro.\",\n\t\"data\": {\n\t\t\"member\": {\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\",\n\t\t\t\"direction\": \"any direction\"\n\t\t},\n\t\t\"totalReferrals\": 1,\n\t\t\"totalCourses\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error session",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\t\"msg\": \"Disculpe, pero no está autorizado para ver este contenido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found member in group",
          "content": "HTTP/1.1 403 Forbidden\n{\n\t\"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The member Doesn't belong to the group",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found member data",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar la información del miembro.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/group",
    "title": "(00) Obtener datos del grupo familiar.",
    "version": "0.0.16",
    "name": "getFamilyUserGroup",
    "group": "UserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object|Null",
            "optional": false,
            "field": "group",
            "description": "<p>Datos del grupo familiar del usuario.</p>"
          }
        ],
        "group Object": [
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Array|Object",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de miembros pertenecientes al grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          }
        ],
        "members Array Object": [
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Array Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mi grupo familiar\",\n\t\"group\": {\n\t\t\"_id\": \"6018e503e02a45115407e82f\",\n\t\t\"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n\t\t\"code\": \"AAA-001\",\n\t\t\"members\": [\n\t\t\t{\n\t\t\t\t\"gender\": 2,\n\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\t\"lastNames\": \"PRUEBA TRES\",\n\t\t\t\t\"direction\": \"any direction\"\n\t\t\t}\n\t\t],\n\t\t\"created_at\": \"2021-02-02 00:37:07\",\n\t\t\"updated_at\": \"2021-02-02 02:45:50\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mi grupo familiar\",\n\t\"group\": null\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/referrals/:memberId",
    "title": "(01) Obtener datos de un usuario referido.",
    "version": "0.0.16",
    "name": "getDataMemberUserReferrals",
    "group": "UserReferrals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "memberId",
            "description": "<p>ID del miembro a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del miembro del grupo.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object",
            "optional": false,
            "field": "member",
            "description": "<p>Datos del perfil del miembro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "totalCourses",
            "description": "<p>Total de cursos que ha visualizado.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "totalReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembro.\",\n\t\"data\": {\n\t\t\"member\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\",\n\t\t\t\"direction\": \"any direction\"\n\t\t},\n\t\t\"totalReferrals\": 1,\n\t\t\"totalCourses\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error session",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\t\"msg\": \"Disculpe, pero no está autorizado para ver este contenido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found member in group",
          "content": "HTTP/1.1 403 Forbidden\n{\n\t\"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The member Doesn't belong to the group",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found member data",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar la información del miembro.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserReferrals.js",
    "groupTitle": "UserReferrals"
  },
  {
    "type": "get",
    "url": "/api/user/referrals",
    "title": "(00) Obtener listado de referidos.",
    "version": "0.0.16",
    "name": "getUserReferrals",
    "group": "UserReferrals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de referidos del usuario.</p>"
          }
        ],
        "referrals Array Object": [
          {
            "group": "referrals Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "referrals Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "referrals Array Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referrals Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis referidos.\",\n\t\"referrals\": [\n\t\t{\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"document\": \"CC1234567777\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis referidos.\",\n\t\"referrals\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserReferrals.js",
    "groupTitle": "UserReferrals"
  },
  {
    "type": "put",
    "url": "/api/user/change-password",
    "title": "(02) Cambiar contraseña.",
    "version": "0.0.2",
    "name": "changePasswordUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña actual.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>Nueva contraseña.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"password\": \"password\",\n    \"newPassword\": \"password2\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado su contraseña exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"password\",\n            \"msg\": \"Disculpe, pero debe indicar su contraseña actual.\"\n        },\n        {\n            \"input\": \"newPassword\",\n            \"msg\": \"Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.\"\n        }\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid current password",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero la contraseña actual es incorrecta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/courses",
    "title": "(03) Obtener cursos de un usuario.",
    "version": "0.0.12",
    "name": "getCoursesListUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de curso del usuario.</p>"
          }
        ],
        "courses Array Object": [
          {
            "group": "courses Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>URL del banner del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "courses Array Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n\t\t\t\"_id\": \"5ff8d0c1fd462643e42df1f6\",\n\t\t\t\"title\": \"CURSO NUEVO 2\",\n\t\t\t\"slug\": \"curso-nuevo-1\",\n\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without courses",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "(00) Obtener datos de la sesión.",
    "version": "0.0.16",
    "name": "getDataSessionUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la sesión.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (array index) del nivel educativo.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (array index) de la profesión.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (array index) del tipo de sangre.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si tiene empresa.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (array index) del tipo de empresa (en caso de poseer).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si está bautizado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombrede la localidad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Datos de la sesión\",\n\t\"data\": {\n\t\t\"gender\": null,\n\t\t\"birthday\": null,\n\t\t\"civilStatus\": null,\n\t\t\"educationLevel\": null,\n\t\t\"profession\": null,\n\t\t\"bloodType\": null,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": false,\n\t\t\"role\": 5,\n\t\t\"department\": null,\n\t\t\"city\": null,\n\t\t\"locality\": null,\n\t\t\"direction\": null,\n\t\t\"created_at\": \"2021-02-18 19:23:23\",\n\t\t\"updated_at\": \"2021-02-18 19:25:33\",\n\t\t\"_id\": \"602f057d8d3e7d073cef3e87\",\n\t\t\"email\": \"user3@example.com\",\n\t\t\"document\": \"CC12345675\",\n\t\t\"names\": \"ANTHONY\",\n\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "(01) Actualizar datos del perfil.",
    "version": "0.0.14",
    "name": "registerUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (index array) del sexo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento (YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (index array) del estado civil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (index array) del tipo de sangre.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si posee una empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (index array) del tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si se ha bautizado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>ID (index array)del departamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>ID (index array)de la ciudad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombredel barrio o vereda.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"email\": \"user3@example.com\",\n    \"phone\": \"573161234567\",\n    \"names\": \"Anthony alejandro\",\n    \"lastNames\": \"Velasquez rodriguez\",\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true,\n    \"department\": 19,\n    \"city\": 18,\n    \"locality\": \"URB. NUEVO MUNDO\",\n    \"direction\": \"URB. NUEVO MUNDO #66\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos actualizados.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (array index) del nivel educativo.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (array index) de la profesión.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (array index) del tipo de sangre.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si tiene empresa.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (array index) del tipo de empresa (en caso de poseer).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si está bautizado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombrede la localidad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ],
        "securityQuestion Object": [
          {
            "group": "securityQuestion Object",
            "type": "String|Null",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información exitosamente.\",\n\t\"data\": {\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": true,\n\t\t\"department\": 19,\n\t\t\"city\": 18,\n\t\t\"locality\": \"URB. NUEVO MUNDO\",\n\t\t\"direction\": \"URB. NUEVO MUNDO #66\",\n\t\t\"_id\": \"602f057d8d3e7d073cef3e87\",\n\t\t\"email\": \"user3@example.com\",\n\t\t\"names\": \"ANTHONY ALEJANDRO\",\n\t\t\"lastNames\": \"VELASQUEZ RODRIGUEZ\",\n\t\t\"phone\": \"573161234567\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"email\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su correo electrónico.\"\n        },\n        {\n            \"input\": \"phone\",\n            \"msg\": \"Disculpe, pero debe indicar su número de teléfono. Sólo se permiten números (0-9).\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        },\n        .\n        .\n        .\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/admin/users/:_id",
    "title": "(04) Actualizar datos de un usuario.",
    "version": "0.0.3",
    "name": "changeRoleUsersAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (index array) del sexo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento (Formato: YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (index array) del estado civil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (index array) del tipo de sangre.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si posee una empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (index array) del tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si se ha bautizado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>ID (index array) del departamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>ID (index array) de la ciudad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombredel sector o localidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"email\": \"user@example.com\",\n    \"phone\": \"584121490196\",\n    \"names\": \"Usuario tres\",\n    \"lastNames\": \"Prueba tres\",\n    \"document\": \"CC12345678\",\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true,\n    \"department\": 19,\n    \"city\": 18,\n    \"locality\": \"URB. NUEVO MUNDO\",\n    \"direction\": \"URB. NUEVO MUNDO #66\"\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la sesión.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento (Formato: YYYY-MM-DD).</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (array index) del nivel educativo.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (array index) de la profesión.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (array index) del tipo de sangre.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si tiene empresa.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (array index) del tipo de empresa (en caso de poseer).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si está bautizado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombre de la localidad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se han actualizado los datos del usuario exitosamente.\",\n\t\"user\": {\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": true,\n\t\t\"role\": 5,\n\t\t\"department\": 19,\n\t\t\"city\": 18,\n\t\t\"locality\": \"URB. NUEVO MUNDO\",\n\t\t\"direction\": \"URB. NUEVO MUNDO #66\",\n\t\t\"created_at\": \"2020-12-07 23:59:12\",\n\t\t\"updated_at\": \"2021-02-18 17:51:10\",\n\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\"phone\": \"584121490196\",\n\t\t\"document\": \"CC12345678\",\n\t\t\"names\": \"USUARIO TRES\",\n\t\t\"lastNames\": \"PRUEBA TRES\",\n\t\t\"email\": \"user@example.com\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el usuario a actualizar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el usuario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/users/counters",
    "title": "(00) Obtener total de usuarios.",
    "version": "0.0.16",
    "name": "countersUsersAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>Número de documento o nombre a buscar (Opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "totals",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total usuarios.\",\n    \"totals\": 2\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/users",
    "title": "(02) Crear nuevo usuario.",
    "version": "0.0.17",
    "name": "createUsersAdmin",
    "group": "UsersAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Rol para el usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"email\": \"user2@example.com\",\n  \"phone\": \"573161234567\",\n  \"names\": \"Anthony alejandro\",\n  \"lastNames\": \"velasquez rodriguez\",\n  \"document\": \"CC24402234\",\n  \"role\": 5\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha registrado el nuevo usuario exitosamente.\",\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Without privileges",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"msg\": \"Disculpe, pero no tiene permisos para realizar esta acción.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"email\",\n            \"msg\": \"Disculpe, pero el correo electrónico ya se encuentra asignado a otro usuario. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/users/:_id",
    "title": "(03) Obtener detalles de un usuario.",
    "version": "0.0.3",
    "name": "getDetailsUsersAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de la sesión.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (array index) del nivel educativo.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "bloodType",
            "description": "<p>ID (array index) del tipo de sangre.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "company",
            "description": "<p>Indica si tiene empresa.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "companyType",
            "description": "<p>ID (array index) del tipo de empresa (en caso de poseer).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si está bautizado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "Object",
            "optional": false,
            "field": "securityQuestion",
            "description": "<p>Datos de la pregunta de seguridad.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (array index) de la profesión.</p>"
          }
        ],
        "securityQuestion Object": [
          {
            "group": "securityQuestion Object",
            "type": "String|Null",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Detalles del usuario.\",\n    \"user\": {\n        \"educationLevel\": null,\n        \"bloodType\": 1,\n        \"company\": false,\n        \"companyType\": null,\n        \"baptized\": false,\n        \"role\": 5,\n        \"securityQuestion\": {\n            \"questionId\": \"5f8608596cd607042cdbea86\"\n        },\n        \"created_at\": \"2020-12-07 23:59:12\",\n        \"updated_at\": \"2020-12-13 12:57:12\",\n        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n        \"phone\": \"584121490196\",\n        \"document\": \"CC12345678\",\n        \"names\": \"USUARIO TRES\",\n        \"lastNames\": \"PRUEBA TRES\",\n        \"direction\": \"any direction\",\n        \"profession\": null\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el usuario seleccionado no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el usuario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/users/:_id/referrals",
    "title": "(06) Obtener listado de referidos de un usuario.",
    "version": "0.0.11",
    "name": "getReferralsUsersListAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del usuario y listado de referidos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de referidos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "members",
            "description": "<p>Listado de referidos del usuario.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>Datos del usuario referido.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ],
        "referred Object and members Array Object": [
          {
            "group": "referred Object and members Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "referred Object and members Array Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referred Object and members Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referred Object and members Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de referidos.\",\n\t\"data\": {\n\t\t\"user\": {\n\t\t\t\"referred\": {\n\t\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\t\"document\": \"CC12345675\",\n\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t\t},\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\"document\": \"CC12345678\",\n\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t},\n\t\t\"totals\": 1,\n\t\t\"members\": [\n\t\t\t{\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\t\t\"document\": \"CC12345675\",\n\t\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t\t\t},\n\t\t\t\t\"totalsReferrals\": 1\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without members",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de referidos.\",\n\t\"data\": {\n\t\t\"user\": {\n\t\t\t\"referred\": {\n\t\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\t\"document\": \"CC12345675\",\n\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t\t},\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\"document\": \"CC12345678\",\n\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t},\n\t\t\"totals\": 0,\n\t\t\"members\": []\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without referred data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de referidos.\",\n\t\"data\": {\n\t\t\"user\": {\n\t\t\t\"referred\": null,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\"document\": \"CC12345678\",\n\t\t\t\"names\": \"USUARIO TRES\",\n\t\t\t\"lastNames\": \"PRUEBA TRES\"\n\t\t},\n\t\t\"totals\": 1,\n\t\t\"members\": [\n\t\t\t{\n\t\t\t\t\"user\": {\n\t\t\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\t\t\"document\": \"CC12345675\",\n\t\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t\t\t},\n\t\t\t\t\"totalsReferrals\": 1\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el usuario a seleccionado no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el usuario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/users",
    "title": "(01) Obtener listado de usuarios.",
    "version": "0.0.16",
    "name": "getUsersAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Total de resultados por página (por defecto = 10).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Página (por defecto = 1).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo por ordenar (campos = document | created | names | lastNames) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>Número de documento o nombre a buscar (Opcional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array|Object",
            "optional": false,
            "field": "users",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "users Array Object": [
          {
            "group": "users Array Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "users Array Object",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Usuarios.\",\n\t\"users\": [\n\t\t{\n\t\t\t\"gender\": 0,\n\t\t\t\"role\": 5,\n\t\t\t\"created_at\": \"2021-02-09 00:10:26\",\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"phone\": \"563161234567\",\n\t\t\t\"document\": \"CC12345675\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t{\n\t\t\t\"gender\": 1,\n\t\t\t\"role\": 1,\n\t\t\t\"created_at\": \"2020-12-13 10:03:12\",\n\t\t\t\"_id\": \"5fd62d49304a9a5a686adc1a\",\n\t\t\t\"phone\": \"563161234567\",\n\t\t\t\"document\": \"CC123456788\",\n\t\t\t\"names\": \"ADMIN DOS\",\n\t\t\t\"lastNames\": \"PRUEBA\"\n\t\t},\n\t\t{\n\t\t\t\"gender\": 2,\n\t\t\t\"role\": 5,\n\t\t\t\"created_at\": \"2020-12-07 23:59:12\",\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\"phone\": \"573161234567\",\n\t\t\t\"document\": \"CC12345678\",\n\t\t\t\"names\": \"PEDRO JOSE\",\n\t\t\t\"lastNames\": \"PÉREZ\"\n\t\t}\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Usuarios.\",\n    \"users\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/users/:_id",
    "title": "(05) Cambiar rol de un usuario.",
    "version": "0.0.3",
    "name": "updateUsersAdmin",
    "group": "UsersAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (admin).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path params": [
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role para el usuario.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"role\": 3\n}",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje del proceso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se asignado el nuevo rol al usuario exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Mensaje general.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array|Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Array Object": [
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Array Object",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el usuario a actualizar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el usuario seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid role",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el rol seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n    \"msg\": \"Ha ocurrido un error inesperado.\",\n    \"errors\": [${err}]\n  }",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  }
] });
