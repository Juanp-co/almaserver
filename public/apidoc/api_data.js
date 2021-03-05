define({ "api": [
  {
    "type": "post",
    "url": "/api/admin/courses/:_id/theme/:themeId/content",
    "title": "(12) Agregar contenido a un tema.",
    "version": "0.0.18",
    "name": "addContentThemeCoursesAdmin",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html). Puede ser opcional si se envía 'urlVideo'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video del curso (youtube). Puede ser opcional si se envía la descripción</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with only description",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\"urlVideo\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with only video",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": null\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with description and video",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n}",
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
            "field": "content",
            "description": "<p>Detalles del contenido.</p>"
          }
        ],
        "content Object": [
          {
            "group": "content Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "content Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "content Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "content Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>Listado de temas del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el contenido al tema exitosamente.\",\n\t\"content\": {\n\t\t\"_id\": \"603a7993b0d63f53dce667c5\",\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\t\"urlVideo\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with only video",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el contenido al tema exitosamente.\",\n\t\"content\": {\n\t\t\"_id\": \"603a7993b0d63f53dce667c5\",\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": null\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with description and video",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el contenido al tema exitosamente.\",\n\t\"content\": {\n\t\t\"_id\": \"603a7993b0d63f53dce667c5\",\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para el contenido.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción o un video para el contenido.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses/:_id/levels",
    "title": "(07) Agregar cursos relacionados (cursos previos).",
    "version": "0.0.18",
    "name": "addLevelsCoursesAdmin",
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
            "field": "listIds",
            "description": "<p>Lista de IDs de los cursos previos.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"listIds\": [\n\t\t\"601e3bf1237386429c27576a\",\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se han agregado los cursos al listado exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"listIds\",\n      \"msg\": \"Disculpe, pero no se logró recibir la información.\"\n    },\n    {\n      \"input\": \"listIds\",\n      \"msg\": \"Disculpe, pero alguno de los cursos seleccionados es incorrecto.\"\n    },\n    {\n      \"input\": \"listIds\",\n      \"msg\": \"Disculpe, pero uno de los cursos seleccionados no existe o no se encuentra disponible.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses/:_id/theme/:themeId/test",
    "title": "(15) Agregar preguntas a las pruebas de un tema.",
    "version": "0.0.18",
    "name": "addQuestionTestThemeCoursesAdmin",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request when inputType !== 'text' | 'textarea'",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\"inputType\": \"radio\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [\n\t\t\"Una red de redes interconectada\",\n\t\t\"Una estúfa\",\n\t\t\"Una computador\",\n\t\t\"Una reunión de amigos\"\n\t],\n\t\"correctAnswer\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request when inputType === 'text' | 'textarea'",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\"inputType\": \"text\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [],\n\t\"correctAnswer\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without description",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": null,\n\t\"inputType\": \"text\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [],\n\t\"correctAnswer\": null\n}",
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
            "description": "<p>Detalles de la pregunta agregada.</p>"
          }
        ],
        "question Object": [
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "question Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "question Object",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "question Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado la pregunta exitosamente.\",\n\t\"question\": {\n\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\"require\": true,\n\t\t\"values\": [\n\t\t\t\"Una red de redes interconectada\",\n\t\t\t\"Una estúfa\",\n\t\t\t\"Una computador\",\n\t\t\t\"Una reunión de amigos\"\n\t\t],\n\t\t\"correctAnswer\": 0,\n\t\t\"_id\": \"603a7ff9d8e04e51906e8b15\",\n\t\t\"title\": \"¿PREGUNTA 01?\",\n\t\t\"inputType\": \"radio\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para la pregunta.\"\n    },\n    {\n      \"input\": \"inputType\",\n      \"msg\": \"Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta.\"\n    },\n    {\n      \"input\": \"values\",\n      \"msg\": \"Disculpe, pero debe indicar las opciones de respuestas para la pregunta.\"\n    },\n    {\n      \"input\": \"inputType\",\n      \"msg\": \"Disculpe, pero debe indicar la respuesta correcta.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses/:_id/theme",
    "title": "(09) Agregar tema a un curso.",
    "version": "0.0.18",
    "name": "addThemeCoursesAdmin",
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
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without description",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": null\n}",
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
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "Array",
            "optional": false,
            "field": "content",
            "description": "<p>Listado de temas del curso (vacío).</p>"
          },
          {
            "group": "theme Object",
            "type": "Array",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de pruebas del curso (vacío).</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del curso.</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del contenido del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el tema exitosamente.\",\n\t\"theme\": {\n\t\t\"_id\": \"603975b0b0d63f53dce667c2\",\n\t\t\"title\": \"01 - INTRODUCCIÓN\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\t\"content\": [],\n\t\t\"test\": [],\n\t\t\"created_at\": \"2021-02-26 17:26:56\",\n\t\t\"updated_at\": \"2021-02-26 17:26:56\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para el tema.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses",
    "title": "(02) Crear nuevo curso.",
    "version": "0.0.18",
    "name": "createCoursesAdmin",
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
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Base64 de la imagen a cargar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request without levels",
        "content": "{\n\t\"title\": \"NUEVO CURSO\",\n\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA...\",\n\t\"toRoles\": [\n\t\t5\n\t]\n}",
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
          "title": "Success with data",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha guardado el nuevo curso exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título válido para el curso.\"\n        },\n        {\n            \"input\": \"description\",\n            \"msg\": \"Disculpe, pero indicar una descripción válida para el curso.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero los roles a los que va digido el curso.\"\n        },\n        {\n            \"input\": \"banner\",\n            \"msg\": \"Disculpe, pero indicar una imagen para el curso.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/courses/:_id/theme/:themeId/content/:contentId",
    "title": "(14) Eliminar contenido a un tema.",
    "version": "0.0.18",
    "name": "deleteContentThemeCoursesAdmin",
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
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
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
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el contenido exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Content not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/admin/courses/:_id/theme/:themeId/test/:questionId",
    "title": "(17) Elminar una pregunta de la prueba de un tema.",
    "version": "0.0.18",
    "name": "deleteQuestionTestThemeCoursesAdmin",
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
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID del pregunta.</p>"
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
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado la pregunta exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la pregunta seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la pregunta seleccionada es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/admin/courses/:_id/theme/:themeId",
    "title": "(11) Eliminar un tema.",
    "version": "0.0.18",
    "name": "deleteThemeCoursesAdmin",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el tema y su contenido exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para el curso.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id",
    "title": "(03) Obtener detalles de un curso.",
    "version": "0.0.19",
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
            "description": "<p>URL de la imagen del curso.</p>"
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
            "type": "Object[]",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Object[]",
            "optional": false,
            "field": "levels",
            "description": "<p>Listado de cursos que el usuario debe visualizar antes.</p>"
          },
          {
            "group": "course Object",
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "totalsUsers",
            "description": "<p>Total de usuarios con el curso.</p>"
          }
        ],
        "temary Object[]": [
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>Listado de contenido del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas para el examen del tema.</p>"
          }
        ],
        "content Object[]": [
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del contenido.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          }
        ],
        "test Object[]": [
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "test Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          }
        ],
        "levels Object[]": [
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo.</p>"
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
            "field": "phone",
            "description": "<p>Teléfono.</p>"
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
          "title": "Success with all data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n    \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\",\n\t\t\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=VopHjhP5d2E\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\",\n\t\t\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.\",\n\t\t\t\t\t\t\"placeholder\": null,\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"603748515407373ad46fa578\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 1\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.\",\n\t\t\t\t\t\t\"placeholder\": null,\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Opción A\",\n\t\t\t\t\t\t\t\"Opción B\",\n\t\t\t\t\t\t\t\"Opción C\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 1,\n\t\t\t\t\t\t\"_id\": \"6037491e5407373ad46fa579\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n        \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"created_at\": \"2021-02-23 00:20:39\",\n\t\t\"updated_at\": \"2021-02-26 16:02:50\",\n\t\t\"totalsUsers\": 0\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with simple data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t\"speaker\": null,\n\t\t\"speakerPosition\": null,\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n    \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\t\"temary\": [],\n\t\t\"levels\": [],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"created_at\": \"2021-02-23 00:20:39\",\n\t\t\"updated_at\": \"2021-02-26 16:02:50\",\n\t\t\"totalsUsers\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/courses/:_id/enable",
    "title": "(04) Publicar o retirar curso del listado público.",
    "version": "0.0.18",
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
            "description": "<p>Datos del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success published course",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha publicado el curso exitosamente.\",\n\t\"data\": {\n\t\t\"enable\": true\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success withdraw course",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha retirado el curso exitosamente.\",\n\t\"data\": {\n\t\t\"enable\": false\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Must contain a description",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso debe contener una descripción.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must contain a image",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso debe contener una imagen.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must contain a speaker name",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso debe contener el nombre del ponente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must contain a speaker position",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso debe contener el cargo o posición del ponente.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must indicate the roles",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero se debe indicar a que roles va dirigido el curso.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must contain themes",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero se debe el curso no puede ser publicado sin temas.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Must contain at least one content in the themes",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero los temas del curso deben tener al menos un contenido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The themes must contain their tests with questions",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero los temas del curso contener sus pruebas con sus respectivas preguntas.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/courses/counters",
    "title": "(00) Obtener contador de cursos.",
    "version": "0.0.18",
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
            "field": "enable",
            "description": "<p>Buscar solo cursos publicados (valores: 'true', 'false') (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "ignoreIds",
            "description": "<p>En caso de agregar cursos a los listados, puede agregar un listado de ids separados por comas (,). Ejemplo: 5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8. (opcional).</p>"
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
            "description": "<p>Totalizador de cursos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total de cursos.\",\n    \"totals\": 3\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/courses",
    "title": "(01) Obtener listado de cursos.",
    "version": "0.0.19",
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
            "field": "enable",
            "description": "<p>Buscar solo cursos publicados (valores: 'true', 'false') (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso a buscar (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "ignoreIds",
            "description": "<p>En caso de usar como buscador de cursos para agregar a los listados previos, puede agregar un listado de ids separados por comas (,). Esto cargará los cursos publicados disponibles ignorando los IDs indicados. Ejemplo: 5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8,5fea3193ff37862c30b2d9a8. (opcional).</p>"
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
            "description": "<p>Listado de cursos.</p>"
          }
        ],
        "courses Object[]": [
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra publicado.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Object[]",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos.\",\n\t\"courses\": [\n\t\t{\n      \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\"enable\": false,\n\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/admin/courses/:_id/levels/:levelId",
    "title": "(08) Eliminar un cursos relacionado (curso previo).",
    "version": "0.0.18",
    "name": "removeALevelCoursesAdmin",
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
            "field": "levelId",
            "description": "<p>ID del curso previo a eliminar.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha removido el curso del listado exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema previo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/banner",
    "title": "(06) Actualizar imagen del curso.",
    "version": "0.0.19",
    "name": "updateBannerCoursesAdmin",
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
            "field": "banner",
            "description": "<p>Base64 de la imagen a cargar.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgA...\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la imagen del curso exitosamente.\",\n  \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"banner\",\n      \"msg\": \"Disculpe, pero la imagen seleccionada es incorrecta.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/theme/:themeId/content/:contentId",
    "title": "(13) Actualizar contenido a un tema.",
    "version": "0.0.18",
    "name": "updateContentThemeCoursesAdmin",
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
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html). Puede ser opcional si se envía 'urlVideo'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video del curso (youtube). Puede ser opcional si se envía la descripción</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with only description",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\"urlVideo\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with only video",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": null\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with description and video",
        "content": "{\n\t\"title\": \"Contenido 01\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n}",
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
            "field": "content",
            "description": "<p>Detalles del contenido.</p>"
          }
        ],
        "content Object": [
          {
            "group": "content Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "content Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "content Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>Listado de temas del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\t\"urlVideo\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with only video",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": null,\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with description and video",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO 01\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\",\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=3wQVZOjxa5w\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para el contenido.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción o un video para el contenido.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Content not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/theme/:themeId/test/:questionId",
    "title": "(16) Actualizar una pregunta de la prueba de un tema.",
    "version": "0.0.18",
    "name": "updateQuestionTestThemeCoursesAdmin",
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
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID del pregunta.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos y si 'inputType' es diferente de 'text' o 'textarea'..</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request when inputType !== 'text' | 'textarea'",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\"inputType\": \"radio\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [\n\t\t\"Una red de redes interconectada\",\n\t\t\"Una estúfa\",\n\t\t\"Una computador\",\n\t\t\"Una reunión de amigos\"\n\t],\n\t\"correctAnswer\": 0\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request when inputType === 'text' | 'textarea'",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\"inputType\": \"text\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [],\n\t\"correctAnswer\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without description",
        "content": "{\n\t\"title\": \"¿Pregunta 01?\",\n\t\"description\": null,\n\t\"inputType\": \"text\",\n\t\"require\": true,\n\t\"placeholder\": \"Indica tu respuesta\",\n\t\"values\": [],\n\t\"correctAnswer\": null\n}",
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
            "description": "<p>Detalles de la pregunta agregada.</p>"
          }
        ],
        "question Object": [
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "question Object",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "question Object",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "question Object",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "question Object",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with only description",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado la pregunta exitosamente.\",\n\t\"question\": {\n\t\t\"description\": \"<p>Seleccione una opción</p>\",\n\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\"require\": true,\n\t\t\"values\": [\n\t\t\t\"Una red de redes interconectada\",\n\t\t\t\"Una estúfa\",\n\t\t\t\"Una computador\",\n\t\t\t\"Una reunión de amigos\"\n\t\t],\n\t\t\"correctAnswer\": 0,\n\t\t\"_id\": \"603a7ff9d8e04e51906e8b15\",\n\t\t\"title\": \"¿PREGUNTA 01?\",\n\t\t\"inputType\": \"radio\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para la pregunta.\"\n    },\n    {\n      \"input\": \"inputType\",\n      \"msg\": \"Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta.\"\n    },\n    {\n      \"input\": \"values\",\n      \"msg\": \"Disculpe, pero debe indicar las opciones de respuestas para la pregunta.\"\n    },\n    {\n      \"input\": \"inputType\",\n      \"msg\": \"Disculpe, pero debe indicar la respuesta correcta.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la pregunta seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la pregunta seleccionada es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/info",
    "title": "(05) Actualizar información básica de un curso.",
    "version": "0.0.18",
    "name": "updateSimpleInfoCoursesAdmin",
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
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Nombre completo del orador (ponente).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador (ponente) del curso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\"toRoles\": [\n\t\t5\n\t]\n}",
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
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
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
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el curso.</p>"
          },
          {
            "group": "course Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del contenido del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del curso exitosamente.\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"updated_at\": 1614377534,\n\t\t\"__v\": 1\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título generar para el curso.\"\n        },\n        {\n            \"input\": \"description\",\n            \"msg\": \"Disculpe, pero indicar una descripción válida para el curso.\"\n        },\n        {\n            \"input\": \"speaker\",\n            \"msg\": \"Disculpe, pero indicar el nombre completo del orador del curso.\"\n        },\n        .\n        .\n        .\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/courses/:_id/theme/:themeId",
    "title": "(10) Actualizar contenido de un tema.",
    "version": "0.0.18",
    "name": "updateThemeCoursesAdmin",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without description",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": null\n}",
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
            "field": "theme",
            "description": "<p>Detalles del tema.</p>"
          }
        ],
        "theme Object": [
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"theme\": {\n\t\t\"title\": \"01 - INTRODUCCIÓN\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>...\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido para el tema.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado porque ya los usuarios lo poseen en sus listados.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/CoursesAdmin.js",
    "groupTitle": "CoursesAdmin"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/add",
    "title": "(03) Agergar un curso al listado del usuario.",
    "version": "0.0.18",
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
            "type": "Object[]",
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
        "temary Object[]": [
          {
            "group": "temary Object[]",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última vista.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el tema fue aprobado o no.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "approvedDate",
            "description": "<p>Fecha de aprobación del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido del tema (histórico de usuario).</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "tests",
            "description": "<p>Listado de pruebas realizadas para el tema.</p>"
          }
        ],
        "content Object[]": [
          {
            "group": "content Object[]",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "content Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del contenido.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          }
        ],
        "tests Object[]": [
          {
            "group": "tests Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la prueba.</p>"
          },
          {
            "group": "tests Object[]",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Cantidad de puntos obtenidos.</p>"
          },
          {
            "group": "tests Object[]",
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
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha agregado el curso exitosamente.\",\n\t\"added\": {\n\t\t\"approved\": false,\n\t\t\"_id\": \"603a9846d2238146649ae0ce\",\n\t\t\"userid\": \"6022194c88342006d4a700f3\",\n\t\t\"courseId\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 0,\n\t\t\t\t\"date\": null,\n\t\t\t\t\"approved\": false,\n\t\t\t\t\"approvedDate\": null,\n\t\t\t\t\"temaryId\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036d8c51d222f3680f3a1d7\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036f4b01d222f3680f3a1dd\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"test\": []\n\t\t\t}\n\t\t],\n\t\t\"created_at\": \"2021-02-27 14:06:46\",\n\t\t\"updated_at\": \"2021-02-27 14:06:46\",\n\t\t\"__v\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Course without themes",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el curso actual no cuenta con temas.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Course added previously",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero ya tiene disponible este curso en su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/counters",
    "title": "(00) Obtener contador de cursos.",
    "version": "0.0.18",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total de cursos.\",\n    \"totals\": 2\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses",
    "error": {
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/courses",
    "title": "(01) Obtener listado de cursos.",
    "version": "0.0.19",
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
            "description": "<p>Campo a ordenar (valor = title).</p>"
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
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          }
        ],
        "courses Object[]": [
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "speaker",
            "description": "<p>Orador del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "speakerPosition",
            "description": "<p>Cargo o posición del orador.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "courses Object[]",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Cursos.\",\n    \"courses\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses",
    "error": {
      "examples": [
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/courses/:slug",
    "title": "(02) Obtener detalles de un curso.",
    "version": "0.0.19",
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
            "description": "<p>Url de la imagen del curso.</p>"
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
            "type": "Object[]",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Object[]",
            "optional": false,
            "field": "levels",
            "description": "<p>Listado de cursos que el usuario debe completar antes continuar.</p>"
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
            "type": "Object[]",
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
        "temary Object[] dataCourseUser": [
          {
            "group": "temary Object[] dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del tema.</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el tema fue aprobado o no.</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "approvedDate",
            "description": "<p>Fecha de aprobación del tema.</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema relacionado.</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>Lisado de contenido del tema (Avances del usuario).</p>"
          },
          {
            "group": "temary Object[] dataCourseUser",
            "type": "Object[]",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de pruebas del tema.</p>"
          }
        ],
        "content Object[] temary dataCourseUser": [
          {
            "group": "content Object[] temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del contenido (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "content Object[] temary dataCourseUser",
            "type": "String|Null",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del contenido.</p>"
          },
          {
            "group": "content Object[] temary dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ID del contenido.</p>"
          }
        ],
        "test Object[] temary dataCourseUser": [
          {
            "group": "test Object[] temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la prueba realizada.</p>"
          },
          {
            "group": "test Object[] temary dataCourseUser",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Puntos obtenidos.</p>"
          },
          {
            "group": "test Object[] temary dataCourseUser",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de realización de la prueba.</p>"
          }
        ],
        "temary Object[]": [
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>Listado del contenido del tema.</p>"
          }
        ],
        "content Object[]": [
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del tema.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del contenido.</p>"
          }
        ],
        "levels Object[]": [
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>descripción del curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success without dataCourseUser",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada...\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada...\"\n\t\t\t}\n\t\t]\n\t},\n\t\"dataCourseUser\": null\n}",
          "type": "JSON"
        },
        {
          "title": "Success without levels",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": []\n\t},\n\t\"dataCourseUser\": null\n}",
          "type": "JSON"
        },
        {
          "title": "Success with dataCourseUser",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t    \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t{\n\t\t    \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\"\n\t\t\t}\n\t\t]\n\t},\n\t\"dataCourseUser\": {\n\t\t\"_id\": \"603a9846d2238146649ae0ce\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 0,\n\t\t\t\t\"date\": null,\n\t\t\t\t\"approved\": false,\n\t\t\t\t\"approvedDate\": null,\n\t\t\t\t\"temaryId\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036d8c51d222f3680f3a1d7\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036f4b01d222f3680f3a1dd\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"test\": []\n\t\t\t}\n\t\t],\n\t\t\"approved\": false,\n\t\t\"created_at\": \"2021-02-27 14:06:46\",\n\t\t\"updated_at\": \"2021-02-27 14:06:46\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/courses/:slug/theme/:themeId/test",
    "title": "(06) Obtener prueba (examen) para aprobar un tema.",
    "version": "0.0.18",
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
            "type": "Object[]",
            "optional": false,
            "field": "test",
            "description": "<p>Listado de preguntas de la prueba.</p>"
          }
        ],
        "test Object[]": [
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "extra",
            "description": "<p>Información extra para completar la pregunta.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "test Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "test Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "test Object[]",
            "type": "String[]",
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
      "examples": [
        {
          "title": "Unfinished all content of theme",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"msg\": \"Disculpe, pero no puede realizar la prueba hasta haber completado el contenido del tema.\"\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found course in user list",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n  \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't view the content",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
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
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:slug/theme/:themeId",
    "title": "(04) Obtener un tema.",
    "version": "0.0.18",
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
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>Listado del contenido del tema.</p>"
          }
        ],
        "content Object[]": [
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del contenido.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "content Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video.</p>"
          },
          {
            "group": "content Object[]",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Indica si el contenido fue visto (0 = Sin Ver | 1 = Viendo | 2 = Visto).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Tema\",\n\t\"theme\": {\n\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\"title\": \"TEMA 1\",\n\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1>\",\n\t\t\"view\": 0,\n\t\t\"content\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\"title\": \"CONTENIDO 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</h1>\",\n\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=VopHjhP5d2E\",\n\t\t\t\t\"view\": 0\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\"title\": \"CONTENIDO PRUEBA\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</h1>\",\n\t\t\t\t\"urlVideo\": null,\n\t\t\t\t\"view\": 0\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Course no available",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found course in user list",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n  \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't view the content",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/test",
    "title": "(07) Enviar repuestas de una prueba para aprobar el curso.",
    "version": "0.0.18",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Listado de respuestas.</p>"
          }
        ],
        "data Object[]": [
          {
            "group": "data Object[]",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "data Object[]",
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
      "examples": [
        {
          "title": "Validation data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"data\",\n            \"msg\": \"Disculpe, pero no se logró recibir la información de la prueba.\"\n        },\n        {\n            \"input\": \"questionId\",\n            \"msg\": \"Disculpe, pero una de las preguntas de la prueba es incorrecta.\"\n        },\n        {\n            \"input\": \"answer\",\n            \"msg\": \"Disculpe, pero debe completar todas las respuesta de la prueba.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found course in user list",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n  \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
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
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "/api/courses/:slug/theme/:themeId/content/:contentId/:action",
    "title": "(05) Marcar como 'VIENDO' o 'VISTO' un contenido de un tema.",
    "version": "0.0.18",
    "name": "setWatchingOrViewedContentThemeCourses",
    "group": "Courses",
    "description": "<p>Este endpoint es para actualizar el progreso del usuario en relación al contenido de un tema. En la ruta, el parámetro ':action' indica la acción a realizar, donde los valores:</p> <p>'1' indica que el usuario está viendo el contenido. '2' indica que el usuario ya vió el contenido.</p> <p>Automáticamente, el servicio realiza una actualización del estado en el que se encuentra el tema en relación a su contenido. Ejemplo:</p> <ol> <li>Si el usuario no ha visto ningún contenido del TEMA, este tendrá un valor de cero (0), que significa 'NO VISTO'.</li> <li>Si el usuario ha visto al menos un contenido del TEMA, este tendrá un valor de uno (1), que significa 'VIENDO' o 'VISUALIZANDO'.</li> <li>Si el usuario ha visto todos los contenidos del TEMA, este tendrá un valor de dos (2), que significa que ha 'VISTO' completamente el contenido.</li> </ol> <p>Si el punto tres (3) se cumple, podrá solicita la prueba respectiva del tema. Ver punto: &quot;(06) Obtener prueba (examen) para aprobar un tema&quot; en este mismo grupo de endpoints.</p>",
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
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>Acción a realizar (valores: 1 = viendo | 2 = visto).</p>"
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
      "examples": [
        {
          "title": "Invalid action",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid slug",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el curso seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found course in user list",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no ha registrado el curso en su listado.\",\n  \"addCourse\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Theme not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid themeId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el tema seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Content not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid contentId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el contenido seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't view the content",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no puede visualizar el contenido. Debe finalizar los cursos previos a este.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n        },\n        {\n            \"input\": \"date\",\n            \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n        },\n        {\n            \"input\": \"initHour\",\n            \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n        },\n        {\n            \"input\": \"endHour\",\n            \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "events Object[]": [
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Object[]",
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
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n        },\n        {\n            \"input\": \"date\",\n            \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n        },\n        {\n            \"input\": \"initHour\",\n            \"msg\": \"Disculpe, pero indicar la hora (correcta) de inicio para el evento.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero debe seleccionar los roles para este evento.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
            "type": "String[]",
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
            "type": "Object[]",
            "optional": false,
            "field": "notInserts[notInserts]",
            "description": "<p>Listado de miembros no agregados (en caso de aplicar).</p>"
          }
        ],
        "notInserts Object[]": [
          {
            "group": "notInserts Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "notInserts Object[]",
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
      "examples": [
        {
          "title": "Error action",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error IDs users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero alguno de los usuarios seleccionados son incorrectos.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Empty data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero debe seleccionar que usuario(s) se agregará(n) o eliminará(n).\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/GroupsAdmin.js",
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
            "type": "Object[]",
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
      "examples": [
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
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/GroupsAdmin.js",
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
    "filename": "Docs/Admin/GroupsAdmin.js",
    "groupTitle": "GroupsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
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
        "members Object[]": [
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object[]",
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
    "filename": "Docs/Admin/GroupsAdmin.js",
    "groupTitle": "GroupsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
    "filename": "Docs/Admin/GroupsAdmin.js",
    "groupTitle": "GroupsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Listado de grupos.</p>"
          }
        ],
        "groups Object[]": [
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "totalMembers",
            "description": "<p>Total de miembros.</p>"
          },
          {
            "group": "groups Object[]",
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
    "filename": "Docs/Admin/GroupsAdmin.js",
    "groupTitle": "GroupsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "String[]",
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
      "examples": [
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
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/GroupsAdmin.js",
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
      "examples": [
        {
          "title": "The code exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"name\",\n      \"msg\": \"Disculpe, pero debe indicar un nombre para el grupo.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el grupo seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/GroupsAdmin.js",
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
    "filename": "Docs/Public.js",
    "groupTitle": "Public",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el evento seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "events Object[]": [
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "initDate",
            "description": "<p>Hora de inicio del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Hora de finalización del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "Array|Number",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Object[]",
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
    "filename": "Docs/Public.js",
    "groupTitle": "Public",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
    "filename": "Docs/Public.js",
    "groupTitle": "Public",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
    "type": "get",
    "url": "/api/admin/reports",
    "title": "(00) Obtener reportes.",
    "version": "0.0.20",
    "name": "getReportsAdmin",
    "group": "ReportsAdmin",
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
            "field": "initDate",
            "description": "<p>Fecha de inicio de la consulta (formato: YYYY-MM-DD) (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Fecha de final de la consulta (formato: YYYY-MM-DD) (opcional) (Si se envía este parámetro, se requerirá la fecha de inicio. Sino, las fechas de filtrado se ignorarán).</p>"
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
            "field": "report",
            "description": "<p>Datos para los reportes.</p>"
          }
        ],
        "report Object": [
          {
            "group": "report Object",
            "type": "Object",
            "optional": false,
            "field": "courses",
            "description": "<p>Datos de los reportes para cursos.</p>"
          },
          {
            "group": "report Object",
            "type": "Object",
            "optional": false,
            "field": "events",
            "description": "<p>Datos de los reportes para eventos.</p>"
          },
          {
            "group": "report Object",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Datos de los reportes para grupos.</p>"
          },
          {
            "group": "report Object",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>Datos de los reportes para usuarios.</p>"
          }
        ],
        "courses, events and groups Object": [
          {
            "group": "courses, events and groups Object",
            "type": "Object",
            "optional": false,
            "field": "title",
            "description": "<p>Título de grupo de datos.</p>"
          },
          {
            "group": "courses, events and groups Object",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Datos para el reporte.</p>"
          }
        ],
        "users Object": [
          {
            "group": "users Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del grupo de reporte.</p>"
          },
          {
            "group": "users Object",
            "type": "String",
            "optional": false,
            "field": "qty",
            "description": "<p>Cantidad.</p>"
          },
          {
            "group": "users Object",
            "type": "Object",
            "optional": false,
            "field": "ages",
            "description": "<p>Datos de reportes por edades.</p>"
          },
          {
            "group": "users Object",
            "type": "Object",
            "optional": false,
            "field": "gender",
            "description": "<p>Datos de reportes por género (sexo).</p>"
          },
          {
            "group": "users Object",
            "type": "Object",
            "optional": false,
            "field": "roles",
            "description": "<p>Datos de reportes por roles.</p>"
          },
          {
            "group": "users Object",
            "type": "Object",
            "optional": false,
            "field": "families",
            "description": "<p>Datos de reportes por familias.</p>"
          }
        ],
        "ages, gender, roles, families Object of users Object": [
          {
            "group": "ages, gender, roles, families Object of users Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del grupo de datos.</p>"
          },
          {
            "group": "ages, gender, roles, families Object of users Object",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Datos para el reporte.</p>"
          }
        ],
        "data Object[]": [
          {
            "group": "data Object[]",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Etiqueta del valor a mostrar en el reporte.</p>"
          },
          {
            "group": "data Object[]",
            "type": "Number",
            "optional": false,
            "field": "qty",
            "description": "<p>Cantidad.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Reporte\",\n\t\"report\": {\n\t\t\"courses\": {\n\t\t\t\"title\": \"Cursos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Publicados\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Borradores\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Viendo\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 2\n\t\t},\n\t\t\"events\": {\n\t\t\t\"title\": \"Eventos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Pendientes\",\n\t\t\t\t\t\"qty\": 0\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Finalizados\",\n\t\t\t\t\t\"qty\": 7\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 7\n\t\t},\n\t\t\"groups\": {\n\t\t\t\"title\": \"Grupos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Sin miembros\",\n\t\t\t\t\t\"qty\": 3\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Con miembros\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 4\n\t\t},\n\t\t\"users\": {\n\t\t\t\"title\": \"Miembros\",\n\t\t\t\"qty\": 8,\n\t\t\t\"ages\": {\n\t\t\t\t\"title\": \"Edades\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"0 a 15 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"16 a 20 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"21 a 30 años\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"31 a 40 años\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"41 a 50 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"51 a 60 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Mayores de 61 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"No indicados\",\n\t\t\t\t\t\t\"qty\": 5\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"families\": {\n\t\t\t\t\"title\": \"Miembros y grupos\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"No pertenece\",\n\t\t\t\t\t\t\"qty\": 7\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Pertenece\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"gender\": {\n\t\t\t\t\"title\": \"Géneros\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Hombres\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Mujeres\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Otro\",\n\t\t\t\t\t\t\"qty\": 5\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"roles\": {\n\t\t\t\t\"title\": \"Roles\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Admins\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Pastores\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Supervisores\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Líderes\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Padres espirituales\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Personas\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ReportsAdmin.js",
    "groupTitle": "ReportsAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
    "version": "0.0.19",
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
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil del usuario.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombre de la localidad.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembro.\",\n\t\"data\": {\n\t\t\"member\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"civilStatus\": 0,\n\t\t\t\"department\": 19,\n\t\t\t\"city\": 18,\n\t\t\t\"locality\": \"CRUZ ROJA\",\n\t\t\t\"direction\": \"C/CRUZ ROJA #62\",\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"phone\": \"563161234567\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\",\n\t\t\t\"email\": \"anthony@example.com\"\n\t\t},\n\t\t\"totalReferrals\": 1,\n\t\t\"totalCourses\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not belong at the group",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero usted no pertenece a ningún grupo familiar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The group not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el grupo familiar no existe.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found member in group",
          "content": "HTTP/1.1 403 Forbidden\n{\n\t\"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The member not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar la información solicitada.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error memberId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n\t\"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
            "type": "Object[]",
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
        "members Object[]": [
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object[]",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/referrals/:memberId",
    "title": "(01) Obtener datos de un usuario referido.",
    "version": "0.0.19",
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
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil del usuario.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (array index) del departamento.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (array index) de la ciudad.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombre de la localidad.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
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
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembro.\",\n\t\"data\": {\n\t\t\"member\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"civilStatus\": 0,\n\t\t\t\"department\": 19,\n\t\t\t\"city\": 18,\n\t\t\t\"locality\": \"CRUZ ROJA\",\n\t\t\t\"direction\": \"C/CRUZ ROJA #62\",\n\t\t\t\"_id\": \"6022194c88342006d4a700f3\",\n\t\t\t\"phone\": \"563161234567\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\",\n\t\t\t\"email\": \"anthony@example.com\"\n\t\t},\n\t\t\"totalReferrals\": 1,\n\t\t\"totalCourses\": 0\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error memberId",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n\t\"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The member Doesn't belong to the group",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The member not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero no se logró encontrar la información solicitada.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de referidos del usuario.</p>"
          }
        ],
        "referrals Object[]": [
          {
            "group": "referrals Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referrals Object[]",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
      "examples": [
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
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/courses",
    "title": "(03) Obtener cursos de un usuario.",
    "version": "0.0.19",
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
        "courses Object[]": [
          {
            "group": "courses Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug (Valor url) del curso.</p>"
          },
          {
            "group": "courses Object[]",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": [\n\t\t{\n      \"banner\": \"http://url.com/images/1614664308734.jpeg\",\n\t\t\t\"_id\": \"5ff8d0c1fd462643e42df1f6\",\n\t\t\t\"title\": \"CURSO NUEVO 2\",\n\t\t\t\"slug\": \"curso-nuevo-1\",\n\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without courses",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/User.js",
    "groupTitle": "User",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
    "filename": "Docs/User.js",
    "groupTitle": "User",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"email\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su correo electrónico.\"\n        },\n        {\n            \"input\": \"phone\",\n            \"msg\": \"Disculpe, pero debe indicar su número de teléfono. Sólo se permiten números (0-9).\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        },\n        .\n        .\n        .\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"document\",\n            \"msg\": \"Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
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
            "type": "Object[]",
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
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ],
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "input[input]",
            "description": "<p>Nombre del campo fallo (Solo aplica en validaciones).</p>"
          }
        ]
      }
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/users/:_id/courses",
    "title": "(06) Obtener listado de cursos de un usuario.",
    "version": "0.0.21",
    "name": "getCoursesUsersListAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          }
        ],
        "courses Object[]": [
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>URL de la imagen del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra publicado.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el curso fue aprobado o no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de cursos del usuario.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603afb2309bf7a3428ac58f7\",\n\t\t\t\"banner\": \"http://localhost:9000/images/1614784438.jpeg\",\n\t\t\t\"slug\": \"curso-01\",\n\t\t\t\"title\": \"CURSO 01\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"approved\": false\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/users/:_id/referrals",
    "title": "(05) Obtener listado de referidos de un usuario.",
    "version": "0.0.21",
    "name": "getReferralsUsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de referidos del usuario.</p>"
          }
        ],
        "referrals Object": [
          {
            "group": "referrals Object",
            "type": "String|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>Datos del usuario referido.</p>"
          },
          {
            "group": "referrals Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "referrals Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referrals Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "referrals Object",
            "type": "Number",
            "optional": false,
            "field": "TotalReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de referidos del usuario.\",\n\t\"referrals\": [\n\t\t{\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"604068999b20e72f341972ec\",\n\t\t\t\"document\": \"CC3123123123\",\n\t\t\t\"names\": \"SUPERVISOR\",\n\t\t\t\"lastNames\": \"PRUEBA\",\n\t\t\t\"phone\": \"3161234567\",\n\t\t\t\"totalsReferrals\": 0\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el miembro seleccionado es incorrecto.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
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
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Listado de preguntas de seguridad.</p>"
          }
        ],
        "users Object[]": [
          {
            "group": "users Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del usuario.</p>"
          },
          {
            "group": "users Object[]",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Role del usuario.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "users Object[]",
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
    "filename": "Docs/Admin/UsersAdmin.js",
    "groupTitle": "UsersAdmin",
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
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Listado de errores a mostrar.</p>"
          }
        ],
        "errors Object[]": [
          {
            "group": "errors Object[]",
            "type": "String",
            "optional": false,
            "field": "msg[msg]",
            "description": "<p>Mensaje de error.</p>"
          },
          {
            "group": "errors Object[]",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  }
] });
