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
    "version": "0.0.18",
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
            "description": "<p>URL o Base64 de la imagen del banner del curso.</p>"
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
            "description": "<p>URL o base64 de la imagen del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\",\n\t\t\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=VopHjhP5d2E\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\",\n\t\t\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.</h1>...\",\n\t\t\t\t\t\t\"urlVideo\": null\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"test\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.\",\n\t\t\t\t\t\t\"placeholder\": null,\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"603748515407373ad46fa578\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 1\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.\",\n\t\t\t\t\t\t\"placeholder\": null,\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Opción A\",\n\t\t\t\t\t\t\t\"Opción B\",\n\t\t\t\t\t\t\t\"Opción C\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 1,\n\t\t\t\t\t\t\"_id\": \"6037491e5407373ad46fa579\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"created_at\": \"2021-02-23 00:20:39\",\n\t\t\"updated_at\": \"2021-02-26 16:02:50\",\n\t\t\"totalsUsers\": 0\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with simple data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"user\": {\n\t\t\t\"gender\": 0,\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"phone\": \"584121490196\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t\t},\n\t\t\"speaker\": null,\n\t\t\"speakerPosition\": null,\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...,\n\t\t\"temary\": [],\n\t\t\"levels\": [],\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n\t\t\"enable\": false,\n\t\t\"created_at\": \"2021-02-23 00:20:39\",\n\t\t\"updated_at\": \"2021-02-26 16:02:50\",\n\t\t\"totalsUsers\": 0\n\t}\n}",
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
    "version": "0.0.18",
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
            "description": "<p>URL o base64 de la imagen principal del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\"enable\": false,\n\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "version": "0.0.18",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la imagen del curso exitosamente.\"\n}",
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
    "version": "0.0.18",
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
            "description": "<p>URL o base64 de la imagen del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. ...\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "version": "0.0.18",
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
            "description": "<p>URL o Base64 de la imagen del curso previo.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del curso previo.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del curso previo.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del curso previo.</p>"
          },
          {
            "group": "levels Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>descripción del curso previo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success without dataCourseUser",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQA...\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada...\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada...\"\n\t\t\t}\n\t\t]\n\t},\n\t\"dataCourseUser\": null\n}",
          "type": "JSON"
        },
        {
          "title": "Success without levels",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"data:image/jpeg;base64,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\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": []\n\t},\n\t\"dataCourseUser\": null\n}",
          "type": "JSON"
        },
        {
          "title": "Success with dataCourseUser",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\"speaker\": \"ANTHONY VELASQUEZ\",\n\t\t\"speakerPosition\": \"SOFTWARE DEVELOPER\",\n\t\t\"code\": \"CURSO-JAVASCRIPT-2021\",\n\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\"banner\": \"data:image/jpeg;base64,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\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"title\": \"TEMA 1\",\n\t\t\t\t\"description\": \"<h1>Proin eget tortor risus.&nbsp;</h1><p>&nbsp;</p><p><i>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.</i></p><ul><li>Pellentesque in ipsum id orci porta dapibus.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec sollicitudin molestie malesuada.&nbsp;</li><li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ul><p><strong>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.&nbsp;</strong></p><p>&nbsp;</p><ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus suscipit tortor eget felis porttitor volutpat.</li><li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Cras ultricies ligula sed magna dictum porta.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Sed porttitor lectus nibh.&nbsp;</li><li>Donec rutrum congue leo eget malesuada.&nbsp;</li><li>Donec sollicitudin molestie malesuada.</li></ol>\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036d8c51d222f3680f3a1d7\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO 1\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"6036f4b01d222f3680f3a1dd\",\n\t\t\t\t\t\t\"title\": \"CONTENIDO PRUEBA\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t\"levels\": [\n\t\t\t{\n\t\t\t\t\"banner\": \"data:image/jpeg;base64,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\",\n\t\t\t\t\"_id\": \"601f09f99775034e10510fa2\",\n\t\t\t\t\"title\": \"CURSO CON TEMAS Y PRUEBAS\",\n\t\t\t\t\"slug\": \"curso-con-temas-y-pruebas\",\n\t\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"banner\": \"data:image/jpeg;base64,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\",\n\t\t\t\t\"_id\": \"603490a7cb2c7e406c5ff2b5\",\n\t\t\t\t\"slug\": \"curso-javascript-2021\",\n\t\t\t\t\"title\": \"CURSO JAVASCRIPT 2021\",\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\\n\\nDonec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.\"\n\t\t\t}\n\t\t]\n\t},\n\t\"dataCourseUser\": {\n\t\t\"_id\": \"603a9846d2238146649ae0ce\",\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"view\": 0,\n\t\t\t\t\"date\": null,\n\t\t\t\t\"approved\": false,\n\t\t\t\t\"approvedDate\": null,\n\t\t\t\t\"temaryId\": \"6036d87e1d222f3680f3a1d5\",\n\t\t\t\t\"content\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036d8c51d222f3680f3a1d7\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\t\"date\": null,\n\t\t\t\t\t\t\"contentId\": \"6036f4b01d222f3680f3a1dd\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"test\": []\n\t\t\t}\n\t\t],\n\t\t\"approved\": false,\n\t\t\"created_at\": \"2021-02-27 14:06:46\",\n\t\t\"updated_at\": \"2021-02-27 14:06:46\"\n\t}\n}",
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
        "courses Object[]": [
          {
            "group": "courses Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>URL o base64 de la imagen del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"banner\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...\",\n\t\t\t\"_id\": \"5ff8d0c1fd462643e42df1f6\",\n\t\t\t\"title\": \"CURSO NUEVO 2\",\n\t\t\t\"slug\": \"curso-nuevo-1\",\n\t\t\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
            "type": "Object[]",
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
        "referred Object and members Object[]": [
          {
            "group": "referred Object and members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "referred Object and members Object[]",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referred Object and members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referred Object and members Object[]",
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
      "examples": [
        {
          "title": "Invalid role",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero el rol seleccionado es incorrecto.\"\n}",
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
  }
] });
