define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/comments",
    "title": "(07) Obtener comentarios del curso.",
    "version": "0.0.7",
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
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Numero (total) de comentarios.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Comentarios del curso.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"totals\": 3,\n        \"comments\": [\n            {\n                \"_id\": \"5ffd56368cee8d4f7c0c8a20\",\n                \"answer\": null,\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n                \"likes\": [\n                    {\n                        \"_id\": \"5ffd577aba47443708fa9432\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-12 03:02:02\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"unlikes\": [\n                    {\n                        \"_id\": \"5ffd577aba47443708fa9432\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-12 03:02:02\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"created_at\": \"2021-01-12 02:56:38\",\n                \"updated_at\": \"2021-01-12 02:56:38\"\n            },\n            .\n            .\n            .\n        ]\n    }\n}",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
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
    "version": "0.0.7",
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
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Numero (total) de comentarios.</p>"
          },
          {
            "group": "data Object",
            "type": "Array|Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Listado de comentarios.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Comentarios del tema.\",\n    \"data\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"themeId\": \"5ff8e4116f5c8648c0353e97\",\n        \"totals\": 3,\n        \"comments\": [\n            {\n                \"_id\": \"5ffd5932e679cc15ac790192\",\n                \"answer\": null,\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n                \"likes\": [\n                    {\n                        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"document\": \"CC12345678\",\n                        \"names\": \"USUARIO TRES\",\n                        \"lastNames\": \"PRUEBA TRES\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"unlikes\": [\n                    {\n                        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"document\": \"CC12345678\",\n                        \"names\": \"USUARIO TRES\",\n                        \"lastNames\": \"PRUEBA TRES\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"created_at\": \"2021-01-12 03:09:22\",\n                \"updated_at\": \"2021-01-12 03:09:22\"\n            },\n            .\n            .\n            .\n        ]\n    }\n}",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
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
    "version": "0.0.5",
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
            "field": "description",
            "description": "<p>Descripción del evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para las pruebas.</p>"
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
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
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"CURSO 01\",\n\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n\t\"temary\": [\n        {\n            \"title\": \"01 - Introducción\",\n            \"description\": \"Introducción al curso\",\n            \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n        },\n        {\n            \"title\": \"02 - Internet\",\n            \"description\": \"¿Qué es el internet y cómo se funciona?\",\n            \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n        }\n    ],\n\t\"test\": [\n        {\n            \"title\": \"01 - ¿Qué es el internet?\",\n            \"description\": \"Seleccione una opción\",\n            \"extra\": null,\n            \"placeholder\": null,\n            \"inputType\": \"radio\",\n            \"require\": true,\n            \"values\": [\n                \"Una red de redes interconectada\",\n                \"Una estúfa\",\n                \"Una computador\",\n                \"Una reunión de amigos\"\n            ],\n            \"correctAnswer\": 0\n        },\n        {\n            \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n            \"description\": \"Indique una respuesta\",\n            \"extra\": null,\n            \"placeholder\": \"Indique una respuesta\",\n            \"inputType\": \"text\",\n            \"require\": true,\n            \"values\": [],\n            \"correctAnswer\": null\n        }\n    ],\n\t\"toRoles\": [ 5 ],\n\t\"speaker\": \"Anthony Velásquez\",\n\t\"speakerPosition\": 2,\n\t\"code\": \"AAA-1111\"\n}",
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
            "description": "<p>Detalles del evento.</p>"
          }
        ],
        "course Object": [
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha creado el nuevo curso exitosamente.\",\n    \"course\": {\n        \"toRoles\": [\n            5\n        ],\n        \"enable\": false,\n        \"draft\": true,\n        \"_id\": \"5feacc6eda2a713754f99e25\",\n        \"speaker\": \"Anthony Velásquez\",\n        \"speakerPosition\": 2,\n        \"code\": \"AAA-1111\",\n        \"title\": \"CURSO 01\",\n        \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n        \"temary\": [\n            {\n                \"_id\": \"5feacc6eda2a713754f99e26\",\n                \"title\": \"01 - Introducción\",\n                \"description\": \"Introducción al curso\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"comments\": []\n            },\n            {\n                \"_id\": \"5feacc6eda2a713754f99e27\",\n                \"title\": \"02 - Internet\",\n                \"description\": \"¿Qué es el internet y cómo se funciona?\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"comments\": []\n            }\n        ],\n        \"test\": [\n            {\n                \"description\": \"Seleccione una opción\",\n                \"extra\": null,\n                \"placeholder\": \"Indica tu respuesta\",\n                \"require\": true,\n                \"values\": [\n                    \"Una red de redes interconectada\",\n                    \"Una estúfa\",\n                    \"Una computador\",\n                    \"Una reunión de amigos\"\n                ],\n                \"correctAnswer\": null,\n                \"_id\": \"5feacc6eda2a713754f99e28\",\n                \"title\": \"01 - ¿Qué es el internet?\",\n                \"inputType\": \"radio\"\n            },\n            {\n                \"description\": \"Indique una respuesta\",\n                \"extra\": null,\n                \"placeholder\": \"Indique una respuesta\",\n                \"require\": true,\n                \"values\": [],\n                \"correctAnswer\": null,\n                \"_id\": \"5feacc6eda2a713754f99e29\",\n                \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n                \"inputType\": \"text\"\n            }\n        ],\n        \"created_at\": \"2020-12-29 01:27:58\",\n        \"updated_at\": \"2020-12-29 01:27:58\"\n    }\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título generar para el curso.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, pero indicar el nombre completo del orador del curso.\"\n        },\n        {\n            \"input\": \"code\",\n            \"msg\": \"Disculpe, pero el código indicado ya se encuentra registrado.\"\n        },\n        {\n            \"input\": \"temary\",\n            \"msg\": \"Disculpe, pero indicar el temario del curso.\"\n        },\n        {\n            \"input\": \"test\",\n            \"msg\": \"Disculpe, pero indicar las preguntas para la prueba de este curso.\"\n        },\n        {\n            \"input\": \"temary.title\",\n            \"msg\": \"Disculpe, pero todos los temas deben contener un título.\"\n        },\n        {\n            \"input\": \"temary.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"test.title\",\n            \"msg\": \"Disculpe, pero todas las preguntas para la prueba deben contener un título.\"\n        },\n        {\n            \"input\": \"test.inputType\",\n            \"msg\": \"Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.\"\n        },\n        {\n            \"input\": \"test.correctAnswer\",\n            \"msg\": \"Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.\"\n        }\n    ]\n  }",
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
    "version": "0.0.5",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a eliminar no existe.\"\n}",
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
    "url": "/api/admin/courses/:_id",
    "title": "(03) Obtener detalles de un curso.",
    "version": "0.0.7",
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
            "field": "test",
            "description": "<p>Listado de preguntas del curso.</p>"
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
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          },
          {
            "group": "temary Array Object",
            "type": "Object",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de comentarios, 'Me gusta' y 'No me gusta'.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Curso\",\n    \"course\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"user\": {\n            \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n            \"document\": \"CC123456789\",\n            \"names\": \"USUARIO\",\n            \"lastNames\": \"ADMIN\"\n        },\n        \"speaker\": \"Anthony Velásquez\",\n        \"speakerPosition\": 2,\n        \"code\": \"AAA-1111\",\n        \"title\": \"CURSO NUEVO 2\",\n        \"slug\": \"curso-nuevo-1\",\n        \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n        \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n        \"temary\": [\n            {\n                \"_id\": \"5ff8e4116f5c8648c0353e97\",\n                \"title\": \"01 - Introducción\",\n                \"description\": \"Introducción al curso\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"totals\": {\n                    \"totalComments\": 1,\n                    \"totalLikes\": 1,\n                    \"totalUnlikes\": 1\n                }\n            },\n            {\n                \"_id\": \"5ff8e4116f5c8648c0353e98\",\n                \"title\": \"02 - Internet\",\n                \"description\": \"¿Qué es el internet y cómo se funciona?\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"totals\": {\n                    \"totalComments\": 0,\n                    \"totalLikes\": 0,\n                    \"totalUnlikes\": 0\n                }\n            }\n        ],\n        \"test\": [\n            {\n                \"description\": \"Seleccione una opción\",\n                \"extra\": null,\n                \"placeholder\": \"Indica tu respuesta\",\n                \"require\": true,\n                \"values\": [\n                    \"Una red de redes interconectada\",\n                    \"Una estúfa\",\n                    \"Una computador\",\n                    \"Una reunión de amigos\"\n                ],\n                \"correctAnswer\": 0,\n                \"_id\": \"5ff8e4116f5c8648c0353e99\",\n                \"title\": \"01 - ¿Qué es el internet?\",\n                \"inputType\": \"radio\"\n            },\n            {\n                \"description\": \"Indique una respuesta\",\n                \"extra\": null,\n                \"placeholder\": \"Indique una respuesta\",\n                \"require\": true,\n                \"values\": [],\n                \"correctAnswer\": null,\n                \"_id\": \"5ff8e4116f5c8648c0353e9a\",\n                \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n                \"inputType\": \"text\"\n            }\n        ],\n        \"toRoles\": [\n            5\n        ],\n        \"draft\": false,\n        \"enable\": true,\n        \"created_at\": \"2021-01-08 16:38:09\",\n        \"updated_at\": \"2021-01-12 03:09:22\",\n        \"totals\": {\n            \"totalComments\": 3,\n            \"totalLikes\": 1,\n            \"totalUnlikes\": 0\n        }\n    }\n}",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado no existe.\"\n}",
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
    "version": "0.0.5",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid 'enable' param.",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero debe indicar si publicará o removerá el curso de la sección pública.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"msg\": \"Disculpe, para poder publicar el curso es necesario que indique el temario para este.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, para poder publicar el curso es necesario que indique las pruebas para este.\"\n        }\n    ]\n  }",
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
            "description": "<p>ID del evento.</p>"
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
            "field": "baner",
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
    "version": "0.0.7",
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
            "description": "<p>Numero (total) de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalUnlikes",
            "description": "<p>Numero (total) de 'No me gusta'.</p>"
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
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
    "version": "0.0.7",
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
            "description": "<p>Numero (total) de 'Me gusta'.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totalUnlikes",
            "description": "<p>Numero (total) de 'No me gusta'.</p>"
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
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
    "version": "0.0.5",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del curso.</p>"
          },
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
            "type": "Array|Object",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Object",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para las pruebas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
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
        "title": "Example JSON Request",
        "content": "{\n    \"speaker\": \"Anthony Velásquez\",\n    \"speakerPosition\": 2,\n    \"code\": \"AAA-1111\",\n    \"title\": \"INTERNET\",\n    \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n    \"temary\": [\n        {\n            \"_id\": \"5feacc6eda2a713754f99e26\",\n            \"title\": \"01 - Introducción\",\n            \"description\": \"Introducción al curso\",\n            \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n            \"comments\": []\n        },\n        {\n            \"_id\": \"5feacc6eda2a713754f99e27\",\n            \"title\": \"02 - Internet\",\n            \"description\": \"¿Qué es el internet y cómo se funciona?\",\n            \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n            \"comments\": []\n        }\n    ],\n    \"test\": [\n        {\n            \"description\": \"Seleccione una opción\",\n            \"extra\": null,\n            \"placeholder\": \"Indica tu respuesta\",\n            \"require\": true,\n            \"values\": [\n                \"Una red de redes interconectada\",\n                \"Una estúfa\",\n                \"Una computador\",\n                \"Una reunión de amigos\"\n            ],\n            \"correctAnswer\": null,\n            \"_id\": \"5feacc6eda2a713754f99e28\",\n            \"title\": \"01 - ¿Qué es el internet?\",\n            \"inputType\": \"radio\"\n        },\n        {\n            \"description\": \"Indique una respuesta\",\n            \"extra\": null,\n            \"placeholder\": \"Indique una respuesta\",\n            \"require\": true,\n            \"values\": [],\n            \"correctAnswer\": null,\n            \"_id\": \"5feacc6eda2a713754f99e29\",\n            \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n            \"inputType\": \"text\"\n        }\n    ],\n    \"toRoles\": [\n        5\n    ]\n}",
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
            "description": "<p>Detalles del evento.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el curso exitosamente.\",\n    \"course\": {\n        \"toRoles\": [\n            5\n        ],\n        \"enable\": false,\n        \"draft\": true,\n        \"_id\": \"5feacc6eda2a713754f99e25\",\n        \"speaker\": \"Anthony Velásquez\",\n        \"speakerPosition\": 2,\n        \"code\": \"AAA-1111\",\n        \"title\": \"INTERNET\",\n        \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n        \"temary\": [\n            {\n                \"_id\": \"5fead328f7bcf73dc82d8670\",\n                \"title\": \"01 - Introducción\",\n                \"description\": \"Introducción al curso\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"comments\": []\n            },\n            {\n                \"_id\": \"5fead328f7bcf73dc82d8671\",\n                \"title\": \"02 - Internet\",\n                \"description\": \"¿Qué es el internet y cómo se funciona?\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n                \"comments\": []\n            }\n        ],\n        \"test\": [\n            {\n                \"description\": \"Seleccione una opción\",\n                \"extra\": null,\n                \"placeholder\": \"Indica tu respuesta\",\n                \"require\": true,\n                \"values\": [\n                    \"Una red de redes interconectada\",\n                    \"Una estúfa\",\n                    \"Una computador\",\n                    \"Una reunión de amigos\"\n                ],\n                \"correctAnswer\": 0,\n                \"_id\": \"5fead328f7bcf73dc82d8672\",\n                \"title\": \"01 - ¿Qué es el internet??????\",\n                \"inputType\": \"radio\"\n            },\n            {\n                \"description\": \"Indique una respuesta\",\n                \"extra\": null,\n                \"placeholder\": \"Indique una respuesta\",\n                \"require\": true,\n                \"values\": [],\n                \"correctAnswer\": null,\n                \"_id\": \"5fead328f7bcf73dc82d8673\",\n                \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n                \"inputType\": \"text\"\n            }\n        ],\n        \"created_at\": \"2020-12-29 01:27:58\",\n        \"updated_at\": \"2020-12-29 01:56:40\"\n    }\n}",
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
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el curso a actualizar no existe.\"\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título generar para el curso.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, pero indicar el nombre completo del orador del curso.\"\n        },\n        {\n            \"input\": \"code\",\n            \"msg\": \"Disculpe, pero el código indicado ya se encuentra registrado.\"\n        },\n        {\n            \"input\": \"temary\",\n            \"msg\": \"Disculpe, pero indicar el temario del curso.\"\n        },\n        {\n            \"input\": \"test\",\n            \"msg\": \"Disculpe, pero indicar las preguntas para la prueba de este curso.\"\n        },\n        {\n            \"input\": \"temary.title\",\n            \"msg\": \"Disculpe, pero todos los temas deben contener un título.\"\n        },\n        {\n            \"input\": \"temary.urlVideo\",\n            \"msg\": \"Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.\"\n        },\n        {\n            \"input\": \"test.title\",\n            \"msg\": \"Disculpe, pero todas las preguntas para la prueba deben contener un título.\"\n        },\n        {\n            \"input\": \"test.inputType\",\n            \"msg\": \"Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.\"\n        },\n        {\n            \"input\": \"test.correctAnswer\",\n            \"msg\": \"Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.\"\n        }\n    ]\n  }",
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
    "version": "0.0.6",
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
            "type": "Array|Object",
            "optional": false,
            "field": "tests",
            "description": "<p>Listado de pruebas realizadas.</p>"
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
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha agregado el curso exitosamente.\",\n    \"course\": {\n        \"approved\": false,\n        \"_id\": \"5ffd48143cf55c0338aee30d\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n        \"courseId\": \"5ff8d0c1fd462643e42df1f7\",\n        \"temary\": [\n            {\n                \"view\": 0,\n                \"date\": null,\n                \"temaryId\": \"5ff8e4116f5c8648c0353e97\"\n            },\n            {\n                \"view\": 0,\n                \"date\": null,\n                \"temaryId\": \"5ff8e4116f5c8648c0353e98\"\n            }\n        ],\n        \"tests\": [],\n        \"created_at\": \"2021-01-12 01:56:20\",\n        \"updated_at\": \"2021-01-12 01:56:20\"\n    }\n}",
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
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha agregado el comentario exitosamente.\",\n    \"comment\": {\n        \"answer\": null,\n        \"_id\": \"5ffd56368cee8d4f7c0c8a20\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n        \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n        \"likes\": [],\n        \"unlikes\": [],\n        \"created_at\": \"2021-01-12 02:56:38\",\n        \"updated_at\": \"2021-01-12 02:56:38\"\n    }\n}",
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
    "title": "(08) Comentar un tema.",
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha agregado el comentario exitosamente.\",\n    \"comment\": {\n        \"answer\": null,\n        \"_id\": \"5ffd5932e679cc15ac790192\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n        \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n        \"likes\": [],\n        \"unlikes\": [],\n        \"created_at\": \"2021-01-12 02:56:38\",\n        \"updated_at\": \"2021-01-12 02:56:38\"\n    }\n}",
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
    "version": "0.0.6",
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
            "type": "Array|Object",
            "optional": false,
            "field": "tests",
            "description": "<p>Listado de pruebas realizadas.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Curso\",\n    \"course\": {\n        \"_id\": \"5ff8d0c1fd462643e42df1f6\",\n        \"speaker\": \"Anthony Velásquez\",\n        \"speakerPosition\": 2,\n        \"code\": \"AAA-1111\",\n        \"title\": \"CURSO NUEVO 2\",\n        \"slug\": \"curso-nuevo-1\",\n        \"banner\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png\",\n        \"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\",\n        \"temary\": [\n            {\n                \"_id\": \"5ff8e4116f5c8648c0353e97\",\n                \"title\": \"01 - Introducción\",\n                \"description\": \"Introducción al curso\",\n                \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\"\n            },\n            .\n            .\n            .\n        ],\n        \"comments\": [\n            {\n                \"_id\": \"5ffa8946751a3923e00d1b58\",\n                \"answer\": null,\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"comment\": \"2222222222222222222222222222222222222222222\",\n                \"likes\": [\n                    {\n                        \"_id\": \"5ffa89ca90ec7523986daf6a\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-09 23:59:54\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"unlikes\": [\n                    {\n                        \"_id\": \"5ffa89ca90ec7523986daf6a\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-09 23:59:54\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"created_at\": \"2021-01-09 23:57:42\",\n                \"updated_at\": \"2021-01-09 23:57:42\"\n            },\n            .\n            .\n            .\n        ],\n        \"likes\": [\n            {\n                \"_id\": \"5ffd2b0bca99de399451f35c\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": null,\n                \"created_at\": \"2021-01-11 23:52:27\"\n            },\n            .\n            .\n            .\n        ],\n        \"unlikes\": [\n            {\n                \"_id\": \"5ffd2b0bca99de399451f35c\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": null,\n                \"created_at\": \"2021-01-11 23:52:27\"\n            },\n            .\n            .\n            .\n        ]\n    },\n    \"dataCourseUser\": {\n        \"_id\": \"5ff9ef04a066c04bb08373bc\",\n        \"temary\": [\n            {\n                \"view\": 1,\n                \"date\": \"2021-01-12 00:29:29\",\n                \"temaryId\": \"5ff8e4116f5c8648c0353e97\"\n            },\n            .\n            .\n            .\n        ],\n        \"tests\": [\n            {\n                \"_id\": \"5ffa9d937b716f448cb70266\",\n                \"points\": \"50\",\n                \"date\": \"2021-01-10 01:24:19\"\n            },\n            .\n            .\n            .\n        ],\n        \"approved\": true,\n        \"created_at\": \"2021-01-09 12:59:32\",\n        \"updated_at\": \"2021-01-12 00:29:29\"\n    }\n}",
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
    "url": "/api/courses/:slug/test",
    "title": "(11) Obtener prueba (examen) para aprobar un curso.",
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Prueba del curso\",\n    \"test\": [\n        {\n            \"description\": \"Seleccione una opción\",\n            \"extra\": null,\n            \"placeholder\": \"Indica tu respuesta\",\n            \"require\": true,\n            \"values\": [\n                \"Una red de redes interconectada\",\n                \"Una estúfa\",\n                \"Una computador\",\n                \"Una reunión de amigos\"\n            ],\n            \"_id\": \"5ff8e4116f5c8648c0353e99\",\n            \"title\": \"01 - ¿Qué es el internet?\",\n            \"inputType\": \"radio\"\n        },\n        {\n            \"description\": \"Indique una respuesta\",\n            \"extra\": null,\n            \"placeholder\": \"Indique una respuesta\",\n            \"require\": true,\n            \"values\": [],\n            \"_id\": \"5ff8e4116f5c8648c0353e9a\",\n            \"title\": \"02 - ¿Cuál es el objetivo de internet?\",\n            \"inputType\": \"text\"\n        }\n    ]\n}",
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
    "version": "0.0.6",
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
        ],
        "Query params": [
          {
            "group": "Query params",
            "type": "String",
            "optional": false,
            "field": "prevThemeId",
            "description": "<p>ID del tema anterior visto (opcional si es el primer tema).</p>"
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
            "field": "title",
            "description": "<p>Título del tiema.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Tema\",\n    \"theme\": {\n        \"_id\": \"5ff8e4116f5c8648c0353e97\",\n        \"title\": \"01 - Introducción\",\n        \"description\": \"Introducción al curso\",\n        \"urlVideo\": \"https://www.youtube.com/watch?v=-JVdH8ne-2s\",\n        \"comments\": [\n            {\n                \"_id\": \"5ffd5932e679cc15ac790192\",\n                \"answer\": null,\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"comment\": \"Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n                \"likes\": [\n                    {\n                        \"_id\": \"5ffd326508f3ed208cc764bc\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-12 00:23:49\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"unlikes\": [\n                    {\n                        \"_id\": \"5ffd326508f3ed208cc764bc\",\n                        \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                        \"user\": {\n                            \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                            \"document\": \"CC12345678\",\n                            \"names\": \"USUARIO TRES\",\n                            \"lastNames\": \"PRUEBA TRES\"\n                        },\n                        \"created_at\": \"2021-01-12 00:23:49\"\n                    },\n                    .\n                    .\n                    .\n                ],\n                \"created_at\": \"2021-01-12 03:09:22\",\n                \"updated_at\": \"2021-01-12 03:09:22\"\n            }\n        ],\n        \"likes\": [\n            {\n                \"_id\": \"5ffd326508f3ed208cc764bc\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 00:23:49\"\n            },\n            .\n            .\n            .\n        ],\n        \"unlikes\": [\n            {\n                \"_id\": \"5ffd326508f3ed208cc764bc\",\n                \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n                \"user\": {\n                    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n                    \"document\": \"CC12345678\",\n                    \"names\": \"USUARIO TRES\",\n                    \"lastNames\": \"PRUEBA TRES\"\n                },\n                \"created_at\": \"2021-01-12 00:23:49\"\n            },\n            .\n            .\n            .\n        ]\n    }\n}",
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
    "url": "/api/courses/:slug/comment/:_id/like",
    "title": "(06) \"Me gusta\" o \"No me gusta\" a un comentario de un curso.",
    "version": "0.0.6",
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
            "field": "_id",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
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
          "title": "Invalid _id",
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
    "title": "(10) \"Me gusta\" o \"No me gusta\" a un comentario de un tema.",
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
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
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
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
    "title": "(09) \"Me gusta\" o \"No me gusta\" a un tema.",
    "version": "0.0.6",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Me gusta agregado exitosamente.\",\n    \"data\": {\n        \"like\": {\n            \"_id\": \"5ffd4af6c149424030d7d8b3\",\n            \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n            \"created_at\": \"2021-01-12 02:08:38\"\n        }\n    }\n}",
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
    "url": "/api/courses/:slug/test",
    "title": "(12) Enviar repuestas de una prueba para aprobar el curso.",
    "version": "0.0.6",
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
            "type": "Number",
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
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The test was approved before",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya ha aprobado este curso anteriormente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"data\",\n            \"msg\": \"Disculpe, pero no se logró recibir la información de la prueba.\"\n        },\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero una de las preguntas de la prueba es incorrecta.\"\n        },\n        {\n            \"input\": \"answer\",\n            \"msg\": \"Disculpe, pero debe completar todas las respuesta de la prueba.\"\n        }\n    ]\n  }",
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
    "version": "0.0.4",
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
        "content": "{\n    \"title\": \"Evento nuevo\",\n    \"description\": \"description\",\n    \"date\": \"2020-07-07\",\n    \"initHour\": \"00:00\",\n    \"endHour\": \"00:00\",\n    \"toRoles\": [\n        5\n    ]\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha creado el evento exitosamente.\",\n    \"event\": {\n        \"toRoles\": [\n            5\n        ],\n        \"_id\": \"5fe00cf5e2c9942e5c866453\",\n        \"title\": \"EVENTO NUEVO\",\n        \"description\": \"description\",\n        \"date\": \"2020-07-07\",\n        \"initHour\": \"00:00\",\n        \"endHour\": \"00:00\",\n        \"created_at\": \"2020-12-20 21:48:21\",\n        \"updated_at\": \"2020-12-20 21:48:21\",\n    }\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Eventos.\",\n    \"events\": [\n        {\n            \"_id\": \"5fe00cf5e2c9942e5c866453\",\n            \"title\": \"EVENTO NUEVO\",\n            \"date\": \"2020-07-07\",\n            \"initHour\": \"00:00\",\n            \"endHour\": \"00:00\",\n            \"toRoles\": [\n                5\n            ],\n            \"user\": {\n                \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n                \"document\": \"CC123456789\",\n                \"names\": \"USUARIO\",\n                \"lastNames\": \"ADMIN\"\n            }\n        },\n        .\n        .\n        .\n    ]\n}",
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
    "type": "get",
    "url": "/api/events/:_id",
    "title": "(05) Obtener detalles de un evento público.",
    "version": "0.0.4",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Evento.\",\n    \"event\": {\n        \"_id\": \"5fe00cf5e2c9942e5c866453\",\n        \"title\": \"EVENTO ESPECIAL\",\n        \"description\": \"Lorem ipsum\",\n        \"date\": \"2020-01-07\",\n        \"initHour\": \"00:00\",\n        \"endHour\": \"23:00\",\n        \"toRoles\": [\n            5\n        ],\n        \"user\": {\n            \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n            \"document\": \"CC123456789\",\n            \"names\": \"USUARIO\",\n            \"lastNames\": \"ADMIN\"\n        }\n    }\n}",
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
    "title": "(04) Obtener eventos públicos.",
    "version": "0.0.4",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Eventos.\",\n    \"events\": [\n        {\n            \"_id\": \"5fe00cf5e2c9942e5c866453\",\n            \"title\": \"EVENTO ESPECIAL\",\n            \"date\": \"2020-01-07\",\n            \"initHour\": \"00:00\",\n            \"endHour\": \"23:00\",\n            \"toRoles\": [\n                5\n            ],\n            \"user\": {\n                \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n                \"document\": \"CC123456789\",\n                \"names\": \"USUARIO\",\n                \"lastNames\": \"ADMIN\"\n            }\n        },\n        .\n        .\n        .\n    ]\n}",
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
    "type": "get",
    "url": "/api/questions",
    "title": "(03) Obtener preguntas de seguridad.",
    "version": "0.0.2",
    "name": "getQuestionsPublic",
    "group": "Public",
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
            "description": "<p>Listado de preguntas.</p>"
          }
        ],
        "questions Array Object": [
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "questions Array Object",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Pregunta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Preguntas de seguridad.\",\n    \"questions\": [\n        {\n            \"_id\": \"5f8608596cd607042cdbea86\",\n            \"question\": \"¿Cuál es su color favorito?\"\n        },\n        .\n        .\n        .\n    ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Preguntas de seguridad.\",\n    \"questions\": []\n}",
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
    "version": "0.0.2",
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"document\": \"CC12345678\",\n    \"password\": \"password\"\n}",
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
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"¡Inicio de sesión con éxito!\",\n    \"data\": {\n        \"educationLevel\": null,\n        \"bloodType\": 1,\n        \"company\": false,\n        \"companyType\": null,\n        \"baptized\": true,\n        \"role\": 5,\n        \"securityQuestion\": {\n            \"questionId\": \"5f8608596cd607042cdbea86\"\n        },\n        \"created_at\": \"2020-12-08 21:35:19\",\n        \"updated_at\": \"2020-12-08 21:42:41\",\n        \"_id\": \"5fd039a0de66a52ce800e83a\",\n        \"phone\": \"3161234567\",\n        \"document\": \"CC12345678\",\n        \"names\": \"USUARIO\",\n        \"lastNames\": \"PRUEBA\",\n        \"direction\": \"any direction\",\n        \"profession\": null\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwMzlhMGRlNjZhNTJjZTgwMGU4M2EiLCJkb2N1bWVudCI6IkNDMTIzNDU2NzUiLCJyb2xlIjoicGVyc29uYSIsImlhdCI6MTYwNzQ4MjEzMiwiZXhwIjoxNjM5MDM5NzMyfQ.92zoGj9xfzCXAyUtLtN2qYdmtBrK8NClpXlpqekH2Rw\"\n}",
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
    "version": "0.0.2",
    "name": "registerPublic",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
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
            "description": "<p>Tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta de seguridad (obtenido desde API).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta de seguridad.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si se ha bautizado.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"phone\": \"3161234567\",\n    \"password\": \"password\",\n    \"names\": \"Usuario\",\n    \"lastNames\": \"Prueba\",\n    \"direction\": \"any direction\",\n    \"document\": \"CC12345678\",\n    \"educationLevel\": null,\n    \"profession\": null,\n    \"bloodType\": 1,\n    \"company\": false,\n    \"companyType\": null,\n    \"questionId\": \"5f8608596cd607042cdbea86\",\n    \"answer\": \"respuesta\",\n    \"baptized\": true\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Registro exitoso.\",\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero seleccionar una pregunta de seguridad.\"\n        }\n    ]\n  }",
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
    "version": "0.0.3",
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
        "title": "{",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha registrado la pregunta de seguridad exitosamente.\",\n    \"question\": {\n        \"_id\": \"5fd65964404e8c2654e37de4\",\n        \"question\": \"¿Cuál es su color favorito?\",\n        \"created_at\": \"2020-12-13 13:11:48\",\n        \"updated_at\": \"2020-12-13 13:11:48\"\n    }\n}",
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
        "title": "{",
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
    "type": "put",
    "url": "/api/user/change-question",
    "title": "(03) Actualizar pregunta y respuesta de seguridad.",
    "version": "0.0.2",
    "name": "changeSecurityQuestionUser",
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
            "field": "questionId",
            "description": "<p>ID de la pregunta de seguridad.</p>"
          },
          {
            "group": "Parameter",
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
        "content": "{\n    \"questionId\": \"5f8608596cd607042cdbea86\",\n    \"answer\": \"password\"\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado los datos de seguridad exitosamente.\"\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero seleccionar una pregunta de seguridad.\"\n        },\n        {\n            \"input\": \"answer\",\n            \"msg\": \"Disculpe, pero debe indicar una respuesta de seguridad.\"\n        }\n    ]\n}",
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
    "version": "0.0.2",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Datos de la sesión\",\n    \"data\": {\n        \"educationLevel\": 0,\n        \"bloodType\": 5,\n        \"company\": true,\n        \"companyType\": 4,\n        \"baptized\": true,\n        \"role\": 5,\n        \"securityQuestion\": {\n            \"questionId\": \"5f8608596cd607042cdbea86\"\n        },\n        \"created_at\": \"2020-12-08 13:43:16\",\n        \"updated_at\": \"2020-12-08 21:34:22\",\n        \"_id\": \"5fcfc945f4647b4c200cca05\",\n        \"phone\": \"3161234568\",\n        \"document\": \"CC12345677\",\n        \"names\": \"USUARIO\",\n        \"lastNames\": \"PRUEBA\",\n        \"direction\": \"any direction\",\n        \"profession\": 44\n    }\n}",
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
    "version": "0.0.2",
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
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
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
            "description": "<p>Tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si se ha bautizado.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"phone\": \"3161234568\",\n    \"names\": \"Usuario\",\n    \"lastNames\": \"Prueba\",\n    \"direction\": \"any direction\",\n    \"document\": \"CC12345677\",\n    \"educationLevel\": null,\n    \"profession\": null,\n    \"bloodType\": 1,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado la información exitosamente.\",\n    \"data\": {\n        \"educationLevel\": 0,\n        \"bloodType\": 5,\n        \"company\": true,\n        \"companyType\": 4,\n        \"baptized\": true,\n        \"role\": 5,\n        \"securityQuestion\": {\n            \"questionId\": \"5f8608596cd607042cdbea86\"\n        },\n        \"created_at\": \"2020-12-08 13:43:16\",\n        \"updated_at\": \"2020-12-08 21:34:22\",\n        \"_id\": \"5fcfc945f4647b4c200cca05\",\n        \"phone\": \"584121490198\",\n        \"document\": \"CC12345677\",\n        \"names\": \"ANTHONY TERCERO\",\n        \"lastNames\": \"VELÁSQUEZ\",\n        \"direction\": \"any direction\",\n        \"profession\": 44\n    }\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra con otro usuario. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero seleccionar una pregunta de seguridad.\"\n        }\n    ]\n  }",
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
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
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
            "description": "<p>Tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "baptized",
            "description": "<p>Indica si se ha bautizado.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"phone\": \"3161234567\",\n    \"names\": \"Usuario\",\n    \"lastNames\": \"Prueba\",\n    \"direction\": \"any direction\",\n    \"document\": \"CC12345678\",\n    \"educationLevel\": null,\n    \"profession\": null,\n    \"bloodType\": 1,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se han actualizado los datos del usuario exitosamente.\",\n    \"user\": {\n        \"educationLevel\": null,\n        \"bloodType\": 1,\n        \"company\": false,\n        \"companyType\": null,\n        \"baptized\": true,\n        \"role\": 5,\n        \"securityQuestion\": {\n            \"questionId\": \"5f8608596cd607042cdbea86\"\n        },\n        \"created_at\": \"2020-12-07 23:59:12\",\n        \"updated_at\": \"2020-12-13 15:37:43\",\n        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n        \"phone\": \"584121490196\",\n        \"document\": \"CC12345678\",\n        \"names\": \"USUARIO TRES\",\n        \"lastNames\": \"PRUEBA TRES\",\n        \"direction\": \"any direction\",\n        \"profession\": null\n    }\n}",
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
    "version": "0.0.3",
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
            "field": "document",
            "description": "<p>Número de documento a buscar (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre o apellido del usuario (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Rol a buscar (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona) (Opcional).</p>"
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
    "version": "0.0.3",
    "name": "createUsersAdmin",
    "group": "UsersAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>ID (index array) Nivel educativo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "profession",
            "description": "<p>ID (index array) de la profesión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
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
            "description": "<p>Tipo de empresa en caso de que posea.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta de seguridad (obtenido desde API).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Respuesta de seguridad.</p>"
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
            "field": "role",
            "description": "<p>Rol para el usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"phone\": \"3161234567\",\n    \"password\": \"password\",\n    \"names\": \"Usuario\",\n    \"lastNames\": \"Prueba\",\n    \"direction\": \"any direction\",\n    \"document\": \"CC12345678\",\n    \"educationLevel\": null,\n    \"profession\": null,\n    \"bloodType\": 1,\n    \"company\": false,\n    \"companyType\": null,\n    \"questionId\": \"5f8608596cd607042cdbea86\",\n    \"answer\": \"respuesta\",\n    \"baptized\": true,\n    \"role\": 5\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha registrado el nuevo usuario exitosamente.\",\n}",
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
    "url": "/api/admin/users",
    "title": "(01) Obtener listado de usuarios.",
    "version": "0.0.3",
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
            "field": "document",
            "description": "<p>Número de documento a buscar (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre o apellido del usuario (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Rol a buscar (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona) (Opcional).</p>"
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
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "users Array Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Usuarios.\",\n    \"users\": [\n        {\n            \"role\": 1,\n            \"created_at\": \"2020-12-13 10:03:12\",\n            \"_id\": \"5fd62d49304a9a5a686adc1a\",\n            \"phone\": \"584121490196\",\n            \"document\": \"CC123456788\",\n            \"names\": \"ADMIN DOS\",\n            \"lastNames\": \"PRUEBA\"\n        },\n        .\n        .\n        .\n    ]\n}",
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
