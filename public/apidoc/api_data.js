define({ "api": [
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
        "Path param": [
          {
            "group": "Path param",
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
        "Path param": [
          {
            "group": "Path param",
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
        "Path param": [
          {
            "group": "Path param",
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
        "Path param": [
          {
            "group": "Path param",
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
        "Path param": [
          {
            "group": "Path param",
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
        "Path param": [
          {
            "group": "Path param",
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
