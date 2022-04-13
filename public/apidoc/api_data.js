define({ "api": [
  {
    "type": "post",
    "url": "/api/admin/banks",
    "title": "(01) Agregar un banco.",
    "version": "0.0.25",
    "name": "createBanksAdmin",
    "group": "BanksAdmin",
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
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"BANCO 01\",\n\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010101.</p> .....\",\n\t\"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n}",
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
            "field": "bank",
            "description": "<p>Detalles del banco.</p>"
          }
        ],
        "bank Object": [
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se registrado el banco exitosamente.\",\n\t\"bank\": {\n\t\t\"_id\": \"604be0e0ca004b1018e8a820\",\n\t\t\"title\": \"BANCO 01\",\n\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010101.</p>.....\",\n\t\t\"picture\": \"http://localhost:7000/images/banks/1615585504.jpeg\",\n\t\t\"created_at\": \"2021-03-12 16:45:04\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el banco.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción para el banco.\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero debe indicar una imagen para el banco.\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/BanksAdmin.js",
    "groupTitle": "BanksAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/banks/:_id",
    "title": "(04) Eliminar un banco.",
    "version": "0.0.25",
    "name": "deleteBanksAdmin",
    "group": "BanksAdmin",
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
            "description": "<p>ID del banco.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el banco exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/BanksAdmin.js",
    "groupTitle": "BanksAdmin",
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
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el banco seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el banco seleccionado es incorrecto.\"\n}",
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
    "url": "/api/admin/banks/:_id",
    "title": "(02) Obtener detalles de un banco.",
    "version": "0.0.25",
    "name": "detailsBanksAdmin",
    "group": "BanksAdmin",
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
            "description": "<p>ID del banco.</p>"
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
            "field": "bank",
            "description": "<p>Detalles del banco.</p>"
          }
        ],
        "bank Object": [
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Detalles banco.\",\n\t\"bank\": {\n\t\t\"_id\": \"604bdcd88150001af4c4b6f8\",\n\t\t\"title\": \"BANCO 02\",\n\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010101.</p>\",\n\t\t\"picture\": \"http://localhost:7000/images/banks/1615585136.jpeg\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/BanksAdmin.js",
    "groupTitle": "BanksAdmin",
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
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el banco seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el banco seleccionado es incorrecto.\"\n}",
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
    "url": "/api/admin/banks",
    "title": "(00) Obtener listado de bancos.",
    "version": "0.0.25",
    "name": "getBanksAdmin",
    "group": "BanksAdmin",
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
            "field": "banks",
            "description": "<p>Listado bancos.</p>"
          }
        ],
        "banks Object[]": [
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Bancos\",\n\t\"banks\": [\n\t\t{\n\t\t\t\"_id\": \"604bdd2f5a94aa3824e40086\",\n\t\t\t\"title\": \"BANCO 02\",\n\t\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010101.</p>\",\n\t\t\t\"picture\": \"http://localhost:7000/images/banks/1615584559.jpeg\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Bancos\",\n\t\"banks\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/BanksAdmin.js",
    "groupTitle": "BanksAdmin",
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
    "url": "/api/admin/banks/:_id",
    "title": "(03) Actualizar datos de un banco.",
    "version": "0.0.25",
    "name": "updateBanksAdmin",
    "group": "BanksAdmin",
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
            "description": "<p>ID del banco a editar.</p>"
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
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"BANCO 01 - Editado\",\n\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010202.</p> .....\",\n\t\"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with URL in picture",
        "content": "{\n\t\"title\": \"BANCO 01 - Editado\",\n\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010202.</p> .....\",\n\t\"picture\": \"http://localhost:7000/images/banks/1615585504.jpeg\",\n}",
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
            "field": "bank",
            "description": "<p>Detalles del banco.</p>"
          }
        ],
        "bank Object": [
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "bank Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha actualizado el banco exitosamente.\",\n\t\"bank\": {\n\t\t\"_id\": \"604be0e0ca004b1018e8a820\",\n\t\t\"title\": \"BANCO 01 - Editado\",\n\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010202.</p>.....\",\n\t\t\"picture\": \"http://localhost:7000/images/banks/1615588099.jpeg\"\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with some url picture",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha actualizado el banco exitosamente.\",\n\t\"bank\": {\n\t\t\"_id\": \"604be0e0ca004b1018e8a820\",\n\t\t\"title\": \"BANCO 01 - Editado\",\n\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010202.</p>.....\",\n\t\t\"picture\": \"http://localhost:7000/images/banks/1615585504.jpeg\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el banco.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción para el banco.\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero debe indicar una imagen para el banco.\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/BanksAdmin.js",
    "groupTitle": "BanksAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/churches",
    "title": "(01) Agregar una iglesia.",
    "version": "0.0.50",
    "name": "createChurchesAdmin",
    "group": "ChurchesAdmin",
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
            "type": "Object",
            "optional": false,
            "field": "church",
            "description": "<p>Detalles de la iglesia.</p>"
          }
        ],
        "church Object": [
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se registrado la iglesia exitosamente.\",\n\t\"church\": {\n    \"_id\": \"624a357644f15f3ce8200c2f\",\n    \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n    \"description\": \"IGLESIA PRINCIPAL\",\n    \"phone1\": \"00000000000\",\n    \"phone2\": \"00000000000\",\n    \"email\": \"church@example.com\",\n    \"address\": \"Str 37, Villavicencio, COL\",\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -73.630175,\n        4.134516\n      ]\n    },\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/churches/church-624a357644f15f3ce8200c2f-1649030518.jpg\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ChurchesAdmin.js",
    "groupTitle": "ChurchesAdmin",
    "parameter": {
      "fields": {
        "church Object": [
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de imagen.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n  \"phone1\": \"00000000000\",\n  \"phone2\": \"00000000000\",\n  \"email\": \"church@example.com\",\n  \"address\": \"Str 37, Villavicencio, COL\",\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [-64.1828984935545, 10.454209446329]\n  },\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/.....\"",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"name\",\n      \"msg\": \"Disculpe, pero indicar el nombre para la iglesia.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción para la iglesia\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero la imagen indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero la ubicación seleccionada es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero las coordenadas de la ubicación seleccionada son incorrectas.\"\n    },\n    {\n      \"input\": \"address\",\n      \"msg\": \"Disculpe, pero la dirección indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"phone1\",\n      \"msg\": \"Disculpe, pero el teléfono principal indicado es incorrecto.\"\n    },\n    {\n      \"input\": \"phone2\",\n      \"msg\": \"Disculpe, pero el teléfono secundario indicado es incorrecto.\"\n    },\n    {\n      \"input\": \"email\",\n      \"msg\": \"Disculpe, pero el correo electrónico indicado es incorrecto.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/churches/:_id",
    "title": "(04) Eliminar una iglesia.",
    "version": "0.0.50",
    "name": "deleteChurchesAdmin",
    "group": "ChurchesAdmin",
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
            "description": "<p>ID de la iglesia.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado la iglesia exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ChurchesAdmin.js",
    "groupTitle": "ChurchesAdmin",
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
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada es incorrecta.\"\n}",
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
    "url": "/api/admin/churches/:_id",
    "title": "(02) Obtener detalles de una iglesia.",
    "version": "0.0.50",
    "name": "detailsChurchesAdmin",
    "group": "ChurchesAdmin",
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
            "description": "<p>ID de la iglesia.</p>"
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
            "field": "church",
            "description": "<p>Detalles de la iglesia.</p>"
          }
        ],
        "church Object": [
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que creó la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Detalles iglesia\",\n  \"church\": {\n    \"_id\": \"624a357644f15f3ce8200c2f\",\n    \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n    \"description\": \"IGLESIA PRINCIPAL\",\n    \"picture\": null,\n    \"phone1\": null,\n    \"phone2\": null,\n    \"address\": null,\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -73.630175,\n        4.134516\n      ]\n    },\n    \"user\": {\n      \"_id\": \"6164f0f06eb4da089c812f4d\",\n      \"names\": \"PERFIL\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"3153268404\",\n      \"picture\": null,\n      \"position\": null\n    }\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ChurchesAdmin.js",
    "groupTitle": "ChurchesAdmin",
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
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada es incorrecta.\"\n}",
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
    "url": "/api/admin/churches",
    "title": "(00) Obtener listado de iglesias.",
    "version": "0.0.50",
    "name": "getChurchesAdmin",
    "group": "ChurchesAdmin",
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
            "field": "churches",
            "description": "<p>Listado iglesias.</p>"
          }
        ],
        "churches Object[]": [
          {
            "group": "churches Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Listado de iglesias\",\n  \"churches\": [\n    {\n      \"_id\": \"624a357644f15f3ce8200c2f\",\n      \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n      \"description\": \"IGLESIA PRINCIPAL\",\n      \"phone1\": null,\n      \"phone2\": null,\n      \"email\": null,\n      \"address\": null,\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -73.630175,\n          4.134516\n        ]\n      },\n      \"picture\": null\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Listado de iglesias\",\n\t\"churches\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ChurchesAdmin.js",
    "groupTitle": "ChurchesAdmin",
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
    "url": "/api/admin/churches/:_id",
    "title": "(03) Actualizar datos de una iglesia.",
    "version": "0.0.50",
    "name": "updateChurchesAdmin",
    "group": "ChurchesAdmin",
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
            "type": "Object",
            "optional": false,
            "field": "church",
            "description": "<p>Detalles de la iglesia.</p>"
          }
        ],
        "church Object": [
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se actualizado la iglesia exitosamente.\",\n\t\"church\": {\n    \"_id\": \"624a357644f15f3ce8200c2f\",\n    \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n    \"description\": \"IGLESIA PRINCIPAL\",\n    \"phone1\": \"00000000000\",\n    \"phone2\": \"00000000000\",\n    \"email\": \"church@example.com\",\n    \"address\": \"Str 37, Villavicencio, COL\",\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -73.630175,\n        4.134516\n      ]\n    },\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/churches/church-624a357644f15f3ce8200c2f-1649030518.jpg\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ChurchesAdmin.js",
    "groupTitle": "ChurchesAdmin",
    "parameter": {
      "fields": {
        "church Object": [
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de ubicación.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de imagen.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n  \"phone1\": \"00000000000\",\n  \"phone2\": \"00000000000\",\n  \"email\": \"church@example.com\",\n  \"address\": \"Str 37, Villavicencio, COL\",\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [-64.1828984935545, 10.454209446329]\n  },\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/.....\"",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"name\",\n      \"msg\": \"Disculpe, pero indicar el nombre para la iglesia.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción para la iglesia\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero la imagen indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero la ubicación seleccionada es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero las coordenadas de la ubicación seleccionada son incorrectas.\"\n    },\n    {\n      \"input\": \"address\",\n      \"msg\": \"Disculpe, pero la dirección indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"phone1\",\n      \"msg\": \"Disculpe, pero el teléfono principal indicado es incorrecto.\"\n    },\n    {\n      \"input\": \"phone2\",\n      \"msg\": \"Disculpe, pero el teléfono secundario indicado es incorrecto.\"\n    },\n    {\n      \"input\": \"email\",\n      \"msg\": \"Disculpe, pero el correo electrónico indicado es incorrecto.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la iglesia seleccionada es incorrecta.\"\n}",
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
    "url": "/api/admin/consolidates",
    "title": "(00) Obtener reporte de consolidación.",
    "version": "0.0.36",
    "name": "getConsolidatesAdmin",
    "group": "ConsolidatesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión admin.</p>"
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
            "field": "data",
            "description": "<p>Datos del reporte de consolidación.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "consolidates",
            "description": "<p>Datos de visitas a consolidados.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>Datos de los miembros de consolidación.</p>"
          },
          {
            "group": "data Object",
            "type": "String[]",
            "optional": false,
            "field": "pendingVisits",
            "description": "<p>Listado de los IDs de los miembros consolidados pendientes por visitas.</p>"
          }
        ],
        "consolidates Object[]": [
          {
            "group": "consolidates Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del registro de la visita.</p>"
          },
          {
            "group": "consolidates Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "consolidator",
            "description": "<p>Miembro que registró la información.</p>"
          },
          {
            "group": "consolidates Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "member",
            "description": "<p>Datos del miembro consolidado.</p>"
          },
          {
            "group": "consolidates Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la visita (YYYY-MM-DD).</p>"
          },
          {
            "group": "consolidates Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "action",
            "description": "<p>Acción realizada (Visita ó llamada).</p>"
          },
          {
            "group": "consolidates Object[]",
            "type": "String",
            "optional": false,
            "field": "observation",
            "description": "<p>Observación agregada en la visita.</p>"
          }
        ],
        "consolidator, members Object[] and member Object": [
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "consolidator, members Object[] and member Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Consolidaciones.\",\n\t\"data\": {\n\t\t\"consolidates\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"606bdbf35fd5900c1092d191\",\n\t\t\t\t\"consolidator\": {\n          \"position\": null,\n\t\t\t\t\t\"gender\": 0,\n          \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n\t\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\t\t\"phone\": \"31612345678\",\n\t\t\t\t\t\"document\": \"CC123456789\",\n\t\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\t\"lastNames\": \"ADMINISTRADOR\"\n\t\t\t\t},\n\t\t\t\t\"member\": {\n          \"position\": null,\n\t\t\t\t\t\"gender\": null,\n          \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n\t\t\t\t\t\"_id\": \"606b6b833784652d9c46eb04\",\n\t\t\t\t\t\"phone\": \"3161231231\",\n\t\t\t\t\t\"document\": \"CC11123123\",\n\t\t\t\t\t\"names\": \"MILEIDY\",\n\t\t\t\t\t\"lastNames\": \"CABELLO\"\n\t\t\t\t},\n\t\t\t\t\"actión\": \"Visita\",\n\t\t\t\t\"date\": \"2021-04-05\",\n\t\t\t\t\"observation\": \"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. SED PORTTITOR LECTUS NIBH. CURABITUR NON NULLA SIT AMET NISL TEMPUS CONVALLIS QUIS AC LECTUS. SED PORTTITOR LECTUS NIBH. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. NULLA QUIS LOREM UT LIBERO MALESUADA FEUGIAT.\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"members\": [\n\t\t\t{\n        \"position\": null,\n\t\t\t\t\"gender\": 0,\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\t\"phone\": \"31612345678\",\n\t\t\t\t\"document\": \"CC123456789\",\n\t\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\t\"lastNames\": \"ADMINISTRADOR\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"pendingVisits\": [\n\t\t\t\"606b6b833784652d9c46eb04\",\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ConsolidatesAdmin.js",
    "groupTitle": "ConsolidatesAdmin",
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
    "url": "/api/admin/consolidates/members",
    "title": "(02) Obtener listado de miembros consolidados.",
    "version": "0.0.36",
    "name": "getMembersConsolidatesAdmin",
    "group": "ConsolidatesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión admin.</p>"
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
            "field": "members",
            "description": "<p>Listado de miembros.</p>"
          }
        ],
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembros\",\n\t\"members\": [\n\t\t{\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n      \"position\": null,\n\t\t\t\"gender\": null,\n\t\t\t\"_id\": \"606b5e0d2aa2d1032873d03a\",\n\t\t\t\"phone\": \"563169999999\",\n\t\t\t\"document\": \"CC9999999999\",\n\t\t\t\"names\": \"NUMERO NUEVE\",\n\t\t\t\"lastNames\": \"NUEVE\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembros\",\n\t\"members\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/ConsolidatesAdmin.js",
    "groupTitle": "ConsolidatesAdmin",
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
    "url": "/api/admin/consolidates/report",
    "title": "(01) Registrar visita de consolidación.",
    "version": "0.0.39",
    "name": "registerVisitConsolidatesAdmin",
    "group": "ConsolidatesAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión admin.</p>"
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
            "field": "userId",
            "description": "<p>ID del miembro consolidado que ha sido visitado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de registro de la visita.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Observation",
            "description": "<p>Observación indicada de la visita.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"userId\": \"606b6b833784652d9c46eb04\",\n  \"visitor\": \"611902c09e346616b6eaadb5\",\n  \"date\": \"2021-02-05\",\n  \"observation\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\"\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha registrado la visita al consolidado exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"userId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado para la visita es incorrecto.\"\n    },\n    {\n      \"input\": \"visitor\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como visitador es incorrecto.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero indicar una fecha para la visita.\"\n    },\n    {\n      \"input\": \"observation\",\n      \"msg\": \"Disculpe, pero indicar un observación válida.\"\n    },\n    {\n      \"input\": \"action\",\n      \"msg\": \"Disculpe, pero debe indicar el tipo de acción realizada\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/ConsolidatesAdmin.js",
    "groupTitle": "ConsolidatesAdmin"
  },
  {
    "type": "post",
    "url": "/api/admin/courses/:_id/theme",
    "title": "(05) Agregar tema a un curso.",
    "version": "0.0.28",
    "name": "addThemeCoursesAdmin",
    "group": "CoursesAdmin",
    "description": "<p>Los temas para los cursos pueden contener diversos contenidos. Un tema puede temer una descripción, una descripción y un video, una descripción y un quiz.</p> <p>Las mezclas NO pueden ser 'Quiz - Video'. Los Quiz solo son preguntas para responder. Estos pueden contener una descripción solamente.</p>",
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
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html).</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video (youtube).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html)</p>"
          }
        ],
        "quiz Object[] Param": [
          {
            "group": "quiz Object[] Param",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "quiz Object[] Param",
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
        "title": "Example JSON Request with only description",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\"quiz\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with video",
        "content": "{\n\t\"title\": \"01 - Introducción\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\"quiz\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with quiz",
        "content": "{\n\t\"title\": \"CONTENIDO QUIZ\",\n\t\"description\": null,\n\t\"urlVideo\": null,\n\t\"quiz\": [\n\t\t{\n\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"placeholder\": null,\n\t\t\t\"require\": false,\n\t\t\t\"values\": [],\n\t\t\t\"correctAnswer\": null,\n\t\t\t\"_id\": \"603afbbb09bf7a3428ac5900\",\n\t\t\t\"title\": \"PREGUNTA 1\",\n\t\t\t\"inputType\": \"text\"\n\t\t},\n\t\t{\n\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"placeholder\": null,\n\t\t\t\"require\": true,\n\t\t\t\"values\": [\n\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\"Respuesta 3\"\n\t\t\t],\n\t\t\t\"correctAnswer\": 2,\n\t\t\t\"_id\": \"603afbdb09bf7a3428ac5901\",\n\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\"inputType\": \"radio\"\n\t\t},\n\t\t{\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\"placeholder\": \"Mensaje de prueba\",\n\t\t\t\"require\": true,\n\t\t\t\"values\": [],\n\t\t\t\"correctAnswer\": null,\n\t\t\t\"_id\": \"603afbf509bf7a3428ac5902\",\n\t\t\t\"title\": \"PREGUNTA 3\",\n\t\t\t\"inputType\": \"text\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (youtube).</p>"
          },
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
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Listado de pregunta para el Quiz.</p>"
          }
        ],
        "quiz Object[]": [
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el tema exitosamente.\",\n\t\"theme\": {\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\t\"urlVideo\": null,\n\t\t\"_id\": \"606035a03961a109ecf47bae\",\n\t\t\"title\": \"CONTENIDO TEXTO\",\n\t\t\"quiz\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with video",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el tema exitosamente.\",\n\t\"theme\": {\n\t  \"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\t\"_id\": \"606035b33961a109ecf47baf\",\n\t\t\"title\": \"CONTENIDO VIDEO\",\n\t\t\"quiz\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success with quiz",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el tema exitosamente.\",\n\t\"theme\": {\n\t\t\"description\": null,\n\t\t\"urlVideo\": null,\n\t\t\"_id\": \"606039a6f6303543549ea3e3\",\n\t\t\"title\": \"CONTENIDO QUIZ\",\n\t\t\"quiz\": [\n\t\t\t{\n\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\"require\": false,\n\t\t\t\t\"values\": [],\n\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\"_id\": \"606039a6f6303543549ea3e4\",\n\t\t\t\t\"title\": \"PREGUNTA 1\",\n\t\t\t\t\"inputType\": \"text\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\"require\": true,\n\t\t\t\t\"values\": [\n\t\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\t\"Respuesta 3\"\n\t\t\t\t],\n\t\t\t\t\"correctAnswer\": 2,\n\t\t\t\t\"_id\": \"606039a6f6303543549ea3e5\",\n\t\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\t\"inputType\": \"radio\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"placeholder\": \"Mensaje de prueba\",\n\t\t\t\t\"require\": true,\n\t\t\t\t\"values\": [],\n\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\"_id\": \"606039a6f6303543549ea3e6\",\n\t\t\t\t\"title\": \"PREGUNTA 3\",\n\t\t\t\t\"inputType\": \"text\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t}\n}",
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
          "title": "Quiz validation fields",
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
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados.\"\n}",
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
    "version": "0.0.28",
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
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso (1-5).</p>"
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
        "content": "{\n\t\"title\": \"NUEVO CURSO\",\n\t\"description\": \"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n\t\"level\": 1,\n\t\"toRoles\": [\n\t\t5\n\t]\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"title\",\n            \"msg\": \"Disculpe, pero indicar un título válido para el curso.\"\n        },\n        {\n            \"input\": \"description\",\n            \"msg\": \"Disculpe, pero indicar una descripción válida para el curso.\"\n        },\n        {\n            \"input\": \"level\",\n            \"msg\": \"Disculpe, pero seleccionar el nivel para el curso.\"\n        },\n        {\n            \"input\": \"toRoles\",\n            \"msg\": \"Disculpe, pero los roles a los que va digido el curso.\"\n        }\n    ]\n  }",
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
    "url": "/api/admin/courses/:_id",
    "title": "(08) Elminar un curso.",
    "version": "0.0.28",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el curso exitosamente.\"\n}",
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
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados.\"\n}",
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
    "title": "(07) Eliminar un tema.",
    "version": "0.0.28",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el tema exitosamente.\"\n}",
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
          "title": "Can't edit course published",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados.\"\n}",
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
    "url": "/api/admin/courses/:_id",
    "title": "(01) Obtener detalles de un curso.",
    "version": "0.0.27",
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
            "description": "<p>Datos del miembro creador del curso.</p>"
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
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
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
            "description": "<p>Total de miembros con el curso.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (Youtube).</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Listado de contenido del tema.</p>"
          }
        ],
        "quiz Object[]": [
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with all data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603afb2309bf7a3428ac58f1\",\n\t\t\"user\": {\n\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e2\",\n\t\t\t\"names\": \"ANTHONY\",\n\t\t\t\"lastNames\": \"ADMINISTRADOR\",\n\t\t\t\"document\": \"CC123456789\",\n\t\t\t\"gender\": 1,\n\t\t\t\"phone\": \"31612345678\"\n\t\t},\n\t\t\"speaker\": \"PEDRO PÉREZ\",\n\t\t\"speakerPosition\": \"LÍDER ESPIRITUAL\",\n\t\t\"code\": \"NIVEL-UNO\",\n\t\t\"title\": \"Nivel uno\",\n\t\t\"slug\": \"nivel-uno\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"level\": 1,\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb6e09bf7a3428ac58ea\",\n\t\t\t\t\"title\": \"Video\",\n\t\t\t\t\"description\": \"<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>\",\n\t\t\t\t\"urlVideo\": null,\n\t\t\t\t\"quiz\": null\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb6e09bf7a3428ac58fa\",\n\t\t\t\t\"title\": \"Video\",\n\t\t\t\t\"description\": \"<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>\",\n\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\t\t\t\"quiz\": null\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb7809bf7a3428ac58fb\",\n\t\t\t\t\"title\": \"QUIZ\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"urlVideo\": null,\n\t\t\t\t\"quiz\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.\",\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": false,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\t\t\"_id\": \"603afbbb09bf7a3428ac5900\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 1 EDITADA\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\t\t\t\"Respuesta 3\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"correctAnswer\": 2,\n\t\t\t\t\t\t\"_id\": \"603afbdb09bf7a3428ac5901\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t]\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"toRoles\": [\n\t\t\t1,\n\t\t\t2,\n\t\t\t3,\n\t\t\t4,\n\t\t\t5\n\t\t],\n\t\t\"enable\": true,\n\t\t\"created_at\": \"2021-02-27 21:08:35\",\n\t\t\"updated_at\": \"2021-03-29 01:24:48\",\n\t\t\"totalsUsers\": 13\n\t}\n}",
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
    "type": "put",
    "url": "/api/admin/courses/:_id/enable",
    "title": "(03) Publicar o retirar curso del listado público.",
    "version": "0.0.28",
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
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Datos del curso.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "levels",
            "description": "<p>Listados de cursos previos que han sido retirados de la sección pública (en caso de disponer)</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el curso se encuentra publicado.</p>"
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
        ]
      },
      "examples": [
        {
          "title": "Success published course",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha publicado el curso exitosamente.\",\n\t\"data\": {\n\t\t\"enable\": true\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success remove course",
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
    "url": "/api/admin/courses",
    "title": "(00) Obtener listado de cursos.",
    "version": "0.0.28",
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
            "description": "<p>Campo a ordenar (valor = level).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional si input no se enviado).</p>"
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
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"enable\": true,\n\t\t\t\"_id\": \"603afb2309bf7a3428ac58f1\",\n\t\t\t\"level\": 1,\n\t\t\t\"title\": \"Nivel uno\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "type": "put",
    "url": "/api/admin/courses/:_id/info",
    "title": "(04) Actualizar información básica de un curso.",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados.\"\n}",
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
    "title": "(06) Actualizar contenido de un tema.",
    "version": "0.0.28",
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
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html).</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video (youtube).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Descripción del tema. Este puede ser texto simple o enriquecido (html)</p>"
          }
        ],
        "quiz Object[] Param": [
          {
            "group": "quiz Object[] Param",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (solo para tipo: text | textarea).</p>"
          },
          {
            "group": "quiz Object[] Param",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "quiz Object[] Param",
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
        "title": "Example JSON Request with only description",
        "content": "{\n\t\"title\": \"CONTENIDO TEXTO EDITIADO\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\"urlVideo\": null,\n\t\"quiz\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with video",
        "content": "{\n\t\"title\": \"CONTENIDO VIDEO EDITADO\",\n\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\"quiz\": null\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with quiz",
        "content": "{\n\t\"title\": \"CONTENIDO QUIZ EDITADO\",\n\t\"description\": null,\n\t\"urlVideo\": null,\n\t\"quiz\": [\n\t\t{\n\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"placeholder\": null,\n\t\t\t\"require\": false,\n\t\t\t\"values\": [],\n\t\t\t\"correctAnswer\": null,\n\t\t\t\"_id\": \"603afbbb09bf7a3428ac5900\",\n\t\t\t\"title\": \"PREGUNTA 1 EDITADA\",\n\t\t\t\"inputType\": \"text\"\n\t\t},\n\t\t{\n\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"placeholder\": null,\n\t\t\t\"require\": true,\n\t\t\t\"values\": [\n\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\"Respuesta 3\"\n\t\t\t],\n\t\t\t\"correctAnswer\": 2,\n\t\t\t\"_id\": \"603afbdb09bf7a3428ac5901\",\n\t\t\t\"title\": \"PREGUNTA 2 EDITADA\",\n\t\t\t\"inputType\": \"radio\"\n\t\t},\n\t\t{\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\"placeholder\": \"Mensaje de prueba\",\n\t\t\t\"require\": true,\n\t\t\t\"values\": [],\n\t\t\t\"correctAnswer\": null,\n\t\t\t\"_id\": \"603afbf509bf7a3428ac5902\",\n\t\t\t\"title\": \"PREGUNTA 3 EDITADA\",\n\t\t\t\"inputType\": \"text\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del tema.</p>"
          },
          {
            "group": "theme Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (youtube).</p>"
          },
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
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Listado de pregunta para el Quiz.</p>"
          }
        ],
        "quiz Object[]": [
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "correctAnswer",
            "description": "<p>Respuesta correcta. Solo aplica si 'values' contiene elementos.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success description edited",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO TEXTO EDITIADO\",\n\t\t\"description\": \"<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3><h4>h4. Bootstrap heading</h4><h5>h5. Bootstrap heading</h5><h6>h6. Bootstrap heading</h6><p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>\",\n\t\t\"urlVideo\": null,\n\t\t\"quiz\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success video edited",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO VIDEO EDITADO\",\n\t\t\"description\": null,\n\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\t\"quiz\": null\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success quiz edited",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información del tema exitosamente.\",\n\t\"content\": {\n\t\t\"title\": \"CONTENIDO QUIZ EDITADO\",\n\t\t\"description\": null,\n\t\t\"urlVideo\": null,\n\t\t\"quiz\": [\n\t\t\t{\n\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\"require\": false,\n\t\t\t\t\"values\": [],\n\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\"_id\": \"6060390df6303543549ea3e0\",\n\t\t\t\t\"title\": \"PREGUNTA 1 EDITADA\",\n\t\t\t\t\"inputType\": \"text\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\"require\": true,\n\t\t\t\t\"values\": [\n\t\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\t\"Respuesta 3\"\n\t\t\t\t],\n\t\t\t\t\"correctAnswer\": 2,\n\t\t\t\t\"_id\": \"6060390df6303543549ea3e1\",\n\t\t\t\t\"title\": \"PREGUNTA 2 EDITADA\",\n\t\t\t\t\"inputType\": \"radio\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.\",\n\t\t\t\t\"placeholder\": \"Mensaje de prueba\",\n\t\t\t\t\"require\": true,\n\t\t\t\t\"values\": [],\n\t\t\t\t\"correctAnswer\": null,\n\t\t\t\t\"_id\": \"6060390df6303543549ea3e2\",\n\t\t\t\t\"title\": \"PREGUNTA 3 EDITADA\",\n\t\t\t\t\"inputType\": \"text\"\n\t\t\t}\n\t\t]\n\t}\n}",
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
          "title": "Quiz validation fields",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que ya se encuentra publicado.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Can't edit course with users",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero este curso no puede ser modificado debido a que los miembros lo poseen en sus listados.\"\n}",
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
    "url": "/api/courses",
    "title": "(00) Obtener listado de cursos.",
    "version": "0.0.28",
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
            "description": "<p>Campo a ordenar (valor = level).</p>"
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
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String",
            "optional": false,
            "field": "enable",
            "description": "<p>Indica si el usuario puede visualizar el curso (dependerá de su progreso).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Cursos\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603afb2309bf7a3428ac58f1\",\n\t\t\t\"speaker\": \"PEDRO PÉREZ\",\n\t\t\t\"speakerPosition\": \"LÍDER ESPIRITUAL\",\n\t\t\t\"title\": \"Nivel uno\",\n\t\t\t\"slug\": \"nivel-uno\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"level\": 1,\n\t\t\t\"enable\": true\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "title": "(01) Obtener detalles de un curso.",
    "version": "0.0.28",
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
            "type": "Object",
            "optional": false,
            "field": "dataCourseUser",
            "description": "<p>Progreso del curso del miembro.</p>"
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
            "field": "description",
            "description": "<p>Descripción del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "course Object",
            "type": "Object[]",
            "optional": false,
            "field": "temary",
            "description": "<p>Listado de temas del curso.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video (youtube).</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Object[]|Null",
            "optional": false,
            "field": "quiz",
            "description": "<p>Listado del preguntas del quiz.</p>"
          },
          {
            "group": "temary Object[]",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Indica el progreso del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          }
        ],
        "quiz Object[]": [
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título o pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la pregunta.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>Tipo de campo para la pregunta (valores: 'checkbox' | 'radio' | 'text' | 'textarea').</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "placeholder",
            "description": "<p>Información que resalta el campo (en caso de ser: text | textarea).</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "require",
            "description": "<p>Indica si el campo es obligatorio responder.</p>"
          },
          {
            "group": "quiz Object[]",
            "type": "String[]",
            "optional": false,
            "field": "values",
            "description": "<p>Listado de respuestas (Solo si 'inputType' es diferente de 'text' o 'textarea').</p>"
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
            "field": "course",
            "description": "<p>Datos del progreso del curso.</p>"
          }
        ],
        "course Object[] dataCourseUser Object": [
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si el curso ha sido aprobado.</p>"
          },
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "Object[]",
            "optional": false,
            "field": "temary",
            "description": "<p>Actividad de los temas del curso.</p>"
          },
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación.</p>"
          },
          {
            "group": "course Object[] dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización.</p>"
          }
        ],
        "temary Object[] course dataCourseUser Object": [
          {
            "group": "temary Object[] course dataCourseUser Object",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Valor de vista del tema (0 = sin ver | 1 = viendo | 2 = visto).</p>"
          },
          {
            "group": "temary Object[] course dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la última visualización del tema.</p>"
          },
          {
            "group": "temary Object[] course dataCourseUser Object",
            "type": "String",
            "optional": false,
            "field": "temaryId",
            "description": "<p>ID del tema relacionado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success without dataCourseUser",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Curso\",\n\t\"course\": {\n\t\t\"_id\": \"603afb2309bf7a3428ac58f1\",\n\t\t\"speaker\": \"PEDRO PÉREZ\",\n\t\t\"speakerPosition\": \"LÍDER ESPIRITUAL\",\n\t\t\"code\": \"NIVEL-UNO\",\n\t\t\"title\": \"Nivel uno\",\n\t\t\"slug\": \"nivel-uno\",\n\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"level\": 1,\n\t\t\"temary\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb6e09bf7a3428ac58ea\",\n\t\t\t\t\"title\": \"Video\",\n\t\t\t\t\"description\": \"<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>\",\n\t\t\t\t\"urlVideo\": null,\n\t\t\t\t\"quiz\": null,\n\t\t\t\t\"view\": 2\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb6e09bf7a3428ac58fa\",\n\t\t\t\t\"title\": \"Video\",\n\t\t\t\t\"description\": \"<p>Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p><p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.</p>\",\n\t\t\t\t\"urlVideo\": \"https://www.youtube.com/watch?v=Eau625TqwR8\",\n\t\t\t\t\"quiz\": null,\n\t\t\t\t\"view\": 1\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb7809bf7a3428ac58fb\",\n\t\t\t\t\"title\": \"QUIZ\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"urlVideo\": null,\n\t\t\t\t\"quiz\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.\",\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": false,\n\t\t\t\t\t\t\"values\": [],\n\t\t\t\t\t\t\"_id\": \"603afbbb09bf7a3428ac5900\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 1 EDITADA\",\n\t\t\t\t\t\t\"inputType\": \"text\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"description\": \"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\t\t\"placeholder\": \"Indica tu respuesta\",\n\t\t\t\t\t\t\"require\": true,\n\t\t\t\t\t\t\"values\": [\n\t\t\t\t\t\t\t\"Respuesta 1\",\n\t\t\t\t\t\t\t\"Respuesta 2\",\n\t\t\t\t\t\t\t\"Respuesta 3\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"_id\": \"603afbdb09bf7a3428ac5901\",\n\t\t\t\t\t\t\"title\": \"PREGUNTA 2\",\n\t\t\t\t\t\t\"inputType\": \"radio\"\n\t\t\t\t\t},\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t\t.\n\t\t\t\t],\n\t\t\t\t\"view\": 0\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t},\n\t\"dataCourseUser\": {\n\t\t\"_id\": \"60617a5be9576a4170b5f9e5\",\n\t\t\"course\": {\n\t\t\t\"approved\": false,\n\t\t\t\"courseId\": \"603afb2309bf7a3428ac58f1\",\n\t\t\t\"level\": 1,\n\t\t\t\"temary\": [\n\t\t\t\t{\n\t\t\t\t\t\"view\": 2,\n\t\t\t\t\t\"date\": \"2021-03-29 03:15:42\",\n\t\t\t\t\t\"temaryId\": \"603afb6e09bf7a3428ac58ea\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"view\": 1,\n\t\t\t\t\t\"date\": \"2021-03-29 03:15:42\",\n\t\t\t\t\t\"temaryId\": \"603afb6e09bf7a3428ac58fa\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"view\": 0,\n\t\t\t\t\t\"date\": \"2021-03-29 03:16:14\",\n\t\t\t\t\t\"temaryId\": \"603afb7809bf7a3428ac58fb\"\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t],\n\t\t\t\"created_at\": \"2021-03-29 01:57:31\",\n\t\t\t\"updated_at\": \"2021-03-29 01:57:31\"\n\t\t}\n\t}\n}",
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
    "type": "post",
    "url": "/api/courses/:slug/theme/:themeId/quiz",
    "title": "(03) Enviar repuestas de un QUIZ.",
    "version": "0.0.28",
    "name": "sendAnswersQuizCourses",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Ha aprobado el examen exitosamente.\",\n    \"average\": 100,\n    \"approved\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Success with decimal average",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Ha aprobado el examen exitosamente.\",\n    \"average\": \"84.66\",\n    \"approved\": true\n}",
          "type": "JSON"
        },
        {
          "title": "Success, but not approved",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Disculpe, pero no logró cumplir con el promédio mínimo para la aprobación del examen.\",\n    \"average\": 66.66,\n    \"approved\": false\n}",
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
    "url": "/api/courses/:slug/theme/:themeId/:action",
    "title": "(02) Marcar como 'VIENDO' o 'VISTO' un tema.",
    "version": "0.0.28",
    "name": "setWatchingOrViewedThemeCourses",
    "group": "Courses",
    "description": "<p>Este endpoint es para actualizar el progreso del miembro en relación a un tema. En la ruta, el parámetro ':action' indica la acción a realizar, donde los valores:</p> <p>'1' indica que el miembro está viendo el contenido. '2' indica que el miembro ya visualizó el contenido.</p>",
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
    "url": "/api/admin/devotionals",
    "title": "(02) Agregar un devocional.",
    "version": "0.0.38",
    "name": "createDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "field": "devotional",
            "description": "<p>Detalles del devocional.</p>"
          }
        ],
        "devotional Object": [
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video Youtube.</p>"
          },
          {
            "group": "devotional Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que registró el devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg\",\n    \"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without picture and urlVideo",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": null,\n    \"urlVideo\": null,\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
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
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video de youtube.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"1 Corintios 13:4-7\",\n\t\"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n\t\"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without picture and urlVideo",
        "content": "{\n\t\"title\": \"1 Corintios 13:4-7\",\n\t\"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n\t\"picture\": null,\n\t\"urlVideo\": null\n}",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción.\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero la imagen suministrada es incorrecta.\"\n    },\n    {\n      \"input\": \"urlVideo\",\n      \"msg\": \"Disculpe, pero la URL para el video debe ser de YouTube.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/devotionals/:_id",
    "title": "(04) Eliminar un devocional.",
    "version": "0.0.38",
    "name": "deleteDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "description": "<p>ID del devocional.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el devocional exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado es incorrecto.\"\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.\"\"\n}",
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
    "url": "/api/admin/devotionals/:_id",
    "title": "(03) Obtener detalles de un devocional.",
    "version": "0.0.38",
    "name": "detailsDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "description": "<p>ID del devocional.</p>"
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
            "field": "devotional",
            "description": "<p>Detalles del devocional.</p>"
          }
        ],
        "devotional Object": [
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video Youtube.</p>"
          },
          {
            "group": "devotional Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que registró el devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg\",\n    \"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without picture and urlVideo",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": null,\n    \"urlVideo\": null,\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado es incorrecto.\"\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.\"\"\n}",
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
    "url": "/api/admin/devotionals",
    "title": "(01) Obtener listado de devocionales.",
    "version": "0.0.38",
    "name": "getDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "field": "devotionals",
            "description": "<p>Listado devocionales.</p>"
          }
        ],
        "devotionals Object[]": [
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que registró el devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
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
            "field": "fullname",
            "description": "<p>Nombre completo del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Devocionales.\",\n  \"devotionals\": [\n    {\n      \"_id\": \"6128782300553eba8dade331\",\n      \"title\": \"1 CORINTIOS 13:4-7\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782300553eba8dade331-1630042147.jpg\",\n      \"user\": {\n        \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n        \"fullname\": \"ANTHONY EDITADO ADMINISTRADOR\"\n      },\n      \"created_at\": \"2021-08-27 00:29:07\",\n      \"updated_at\": \"2021-08-27 00:29:10\"\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Devocionales\",\n\t\"devotionals\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
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
    "url": "/api/admin/devotionals",
    "title": "(00) Obtener total de devocionales.",
    "version": "0.0.38",
    "name": "getTotalsDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "description": "<p>Datos de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de devocionales.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Total de devocionales.\",\n\t\"data\": {\n\t  \"totals\": 3\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
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
    "url": "/api/admin/devotionals/:_id",
    "title": "(04) Actualizar datos de un banco.",
    "version": "0.0.38",
    "name": "updateDevotionalsAdmin",
    "group": "DevotionalsAdmin",
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
            "description": "<p>ID del devocional.</p>"
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
            "description": "<p>Descripción.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL del video de youtube.</p>"
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
            "field": "devotional",
            "description": "<p>Detalles del devocional.</p>"
          }
        ],
        "devotional Object": [
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video Youtube.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se actualizado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg\",\n    \"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\",\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 14:39:17\"\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without picture and urlVideo",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se actualizado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": null,\n    \"urlVideo\": null,\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/DevotionalsAdmin.js",
    "groupTitle": "DevotionalsAdmin",
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"title\": \"1 Corintios 13:4-7\",\n\t\"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n\t\"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n\t\"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request without picture and urlVideo",
        "content": "{\n\t\"title\": \"1 Corintios 13:4-7\",\n\t\"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n\t\"picture\": null,\n\t\"urlVideo\": null\n}",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero debe indicar una descripción.\"\n    },\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, pero la imagen suministrada es incorrecta.\"\n    },\n    {\n      \"input\": \"urlVideo\",\n      \"msg\": \"Disculpe, pero la URL para el video debe ser de YouTube.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado es incorrecto.\"\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.\"\"\n}",
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
    "url": "/api/devotionals/:_id",
    "title": "(02) Obtener detalles de un devocional.",
    "version": "0.0.38",
    "name": "detailsDevotionals",
    "group": "Devotionals",
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
            "description": "<p>ID del devocional.</p>"
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
            "field": "devotional",
            "description": "<p>Detalles del devocional.</p>"
          }
        ],
        "devotional Object": [
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String|Null",
            "optional": false,
            "field": "urlVideo",
            "description": "<p>URL video Youtube.</p>"
          },
          {
            "group": "devotional Object",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que registró el devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotional Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782a00553eba8dade339-1630042154.jpg\",\n    \"urlVideo\": \"https://www.youtube.com/watch?v=tRwyP2EV5dE\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without picture and urlVideo",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se registrado el devocional exitosamente.\",\n  \"devotional\": {\n    \"_id\": \"6128782a00553eba8dade339\",\n    \"title\": \"1 CORINTIOS 13:4-7\",\n    \"description\": \"<h1><i><strong>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. ...\",\n    \"picture\": null,\n    \"urlVideo\": null,\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"created_at\": \"2021-08-27 00:29:14\",\n    \"updated_at\": \"2021-08-27 00:29:17\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Devotionals.js",
    "groupTitle": "Devotionals",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado es incorrecto.\"\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.\"\"\n}",
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
    "url": "/api/devotionals",
    "title": "(01) Obtener listado de devocionales.",
    "version": "0.0.38",
    "name": "getDevotionals",
    "group": "Devotionals",
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
            "field": "devotionals",
            "description": "<p>Listado devocionales.</p>"
          }
        ],
        "devotionals Object[]": [
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del usuario que registró el devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del devocional.</p>"
          },
          {
            "group": "devotionals Object[]",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del devocional.</p>"
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
            "field": "fullname",
            "description": "<p>Nombre completo del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Devocionales.\",\n  \"devotionals\": [\n    {\n      \"_id\": \"6128782300553eba8dade331\",\n      \"title\": \"1 CORINTIOS 13:4-7\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/devotionals/devotional-6128782300553eba8dade331-1630042147.jpg\",\n      \"user\": {\n        \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n        \"fullname\": \"ANTHONY EDITADO ADMINISTRADOR\"\n      },\n      \"created_at\": \"2021-08-27 00:29:07\",\n      \"updated_at\": \"2021-08-27 00:29:10\"\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Devocionales\",\n\t\"devotionals\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Devotionals.js",
    "groupTitle": "Devotionals",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devotionals",
    "title": "(00) Obtener total de devocionales.",
    "version": "0.0.38",
    "name": "getTotalsDevotionals",
    "group": "Devotionals",
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
            "description": "<p>Datos de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de devocionales.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Total de devocionales.\",\n\t\"data\": {\n\t  \"totals\": 3\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Devotionals.js",
    "groupTitle": "Devotionals",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/events",
    "title": "(01) Crear nuevo evento.",
    "version": "0.0.47",
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Imagen relacionada al evento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha creado el evento exitosamente.\",\n\t\"event\": {\n\t\t\"_id\": \"603007b13b9d883c78abb864\",\n\t\t\"title\": \"REUNIÓN DE UNIFICACIÓN FAMILIAR\",\n\t\t\"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"date\": \"2021-03-01\",\n\t\t\"dateEnd\": \"2021-03-01\",\n\t\t\"initHour\": \"00:00\",\n\t\t\"endHour\": \"23:59\",\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la imagen relacionada al evento (opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de inicio (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final (Formato YYYY-MM-DD).</p>"
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
            "type": "Number[]",
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
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"date\": \"2021-09-15\",\n  \"dateEnd\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with url picture",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\",\n  \"date\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero indicar una descripción para el evento.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n    },\n    {\n      \"input\": \"initHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n    },\n    {\n      \"input\": \"endHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n    },\n    {\n      \"input\": \"toRoles\",\n      \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/events/:_id",
    "title": "(04) Eliminar un evento.",
    "version": "0.0.35",
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
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha eliminado el evento exitosamente.\"\n}",
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
    "version": "0.0.47",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la imagen relacionada al evento (opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de inicio (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final (Formato YYYY-MM-DD).</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el evento.</p>"
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Imagen relacionada al evento.</p>"
          },
          {
            "group": "event Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Evento.\",\n  \"event\": {\n    \"_id\": \"5fe00cf5e2c9942e5c866453\",\n    \"title\": \"EVENTO 1\",\n    \"description\": \"Para todos los roles\",\n    \"date\": \"2021-03-03\",\n    \"dateEnd\": \"2021-03-03\",\n    \"initHour\": \"00:00\",\n    \"endHour\": \"23:00\",\n    \"toRoles\": [\n      0,\n      1,\n      2,\n      3,\n      4\n    ],\n    \"picture\": null,\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    }\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"date\": \"2021-09-15\",\n  \"dateEnd\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with url picture",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\",\n  \"date\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      }
    ],
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
    "version": "0.0.47",
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
            "description": "<p>Listado de eventos.</p>"
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Imagen relacionada al evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Eventos.\",\n  \"events\": [\n    {\n      \"_id\": \"611a39d47636c51470deed92\",\n      \"title\": \"PRUEBA DESDE ADMIN\",\n      \"date\": \"2021-09-15\",\n      \"dateEnd\": \"2021-09-15\",\n      \"initHour\": \"08:00\",\n      \"endHour\": \"11:30\",\n      \"toRoles\": [\n        2,\n        3,\n        4\n      ],\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\",\n      \"user\": {\n        \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n        \"names\": \"ANTHONY\",\n        \"lastNames\": \"ADMINISTRADOR\",\n        \"document\": null,\n        \"gender\": null,\n        \"phone\": \"31612345678\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n        \"position\": null\n      }\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Eventos.\",\n  \"events\": []\n}",
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
    "version": "0.0.47",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la imagen relacionada al evento (opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de inicio (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final (Formato YYYY-MM-DD).</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el evento.</p>"
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Imagen relacionada al evento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el evento exitosamente.\",\n  \"event\": {\n    \"_id\": \"611924490ec7059a63f7a805\",\n    \"title\": \"PRUEBA 1 PARA REGISTRO DESDE APP\",\n    \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n    \"date\": \"2021-08-31\",\n    \"dateEnd\": \"2021-08-31\",\n    \"initHour\": \"09:00\",\n    \"endHour\": \"12:59\",\n    \"toRoles\": [\n      4\n    ],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/EventsAdmin.js",
    "groupTitle": "EventsAdmin",
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"date\": \"2021-09-15\",\n  \"dateEnd\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with url picture",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\",\n  \"date\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero indicar una descripción para el evento.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n    },\n    {\n      \"input\": \"initHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n    },\n    {\n      \"input\": \"endHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n    },\n    {\n      \"input\": \"toRoles\",\n      \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n    }\n  ]\n}",
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
    "url": "/api/events",
    "title": "(01) Crear nuevo evento.",
    "version": "0.0.47",
    "name": "createEvents",
    "group": "Events",
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen del evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n  \"msg\": \"Evento.\",\n  \"event\": {\n    \"_id\": \"611a39d47636c51470deed92\",\n    \"title\": \"PRUEBA DESDE ADMIN\",\n    \"description\": \"<P>PRAESENT SAPIEN MASSA, CONVALLIS A PELLENTESQUE NEC, ...</P>\",\n    \"date\": \"2021-09-15\",\n    \"dateEnd\": \"2021-09-15\",\n    \"initHour\": \"08:00\",\n    \"endHour\": \"11:30\",\n    \"toRoles\": [\n      2,\n      3,\n      4\n    ],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    }\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Events.js",
    "groupTitle": "Events",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la imagen relacionada al evento (opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de inicio (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final (Formato YYYY-MM-DD).</p>"
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
            "type": "Number[]",
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
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"date\": \"2021-09-15\",\n  \"dateEnd\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with url picture",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\",\n  \"date\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      }
    ],
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero indicar una descripción para el evento.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n    },\n    {\n      \"input\": \"initHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n    },\n    {\n      \"input\": \"endHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n    },\n    {\n      \"input\": \"toRoles\",\n      \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n    }\n  ]\n}",
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
    "url": "/api/events/:_id",
    "title": "(04) Eliminar un evento.",
    "version": "0.0.35",
    "name": "deleteEvents",
    "group": "Events",
    "description": "<p>Solo el miembro que registró el evento podrá eliminarlo (salvo el administrador). Si cualquier otro usuario intenta eliminar el evento, la respuestá será un 404.</p>",
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
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha eliminado el evento exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Events.js",
    "groupTitle": "Events",
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
    "url": "/api/events/:_id",
    "title": "(02) Obtener detalles de un evento.",
    "version": "0.0.47",
    "name": "detailsEvents",
    "group": "Events",
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "event Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen del evento.</p>"
          },
          {
            "group": "event Object",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Evento.\",\n  \"event\": {\n    \"_id\": \"611a39d47636c51470deed92\",\n    \"title\": \"EVENTO 01\",\n    \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n    \"date\": \"2021-09-15\",\n    \"dateEnd\": \"2021-09-15\",\n    \"initHour\": \"08:00\",\n    \"endHour\": \"11:30\",\n    \"toRoles\": [\n      2,\n      3,\n      4\n    ],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    }\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Events.js",
    "groupTitle": "Events",
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
    "title": "(00) Obtener listado de eventos públicos.",
    "version": "0.0.47",
    "name": "getEvents",
    "group": "Events",
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
            "description": "<p>Listado de eventos.</p>"
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
            "description": "<p>Fecha incial del evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          },
          {
            "group": "events Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Imagen relacionada al evento.</p>"
          },
          {
            "group": "events Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "user",
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Eventos.\",\n  \"events\": [\n    {\n      \"_id\": \"611a39d47636c51470deed92\",\n      \"title\": \"EVENTO\",\n      \"date\": \"2021-09-15\",\n      \"dateEnd\": \"2021-09-15\",\n      \"initHour\": \"08:00\",\n      \"endHour\": \"11:30\",\n      \"toRoles\": [\n        2,\n        3,\n        4\n      ],\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\",\n      \"user\": {\n        \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n        \"names\": \"ANTHONY\",\n        \"lastNames\": \"ADMINISTRADOR\",\n        \"document\": null,\n        \"gender\": null,\n        \"phone\": \"31612345678\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n        \"position\": null\n      }\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Eventos.\",\n  \"events\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Events.js",
    "groupTitle": "Events",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/events/:_id",
    "title": "(03) Actualizar un evento.",
    "version": "0.0.47",
    "name": "updateEvents",
    "group": "Events",
    "description": "<p>Solo el miembro que registró el evento podrá editarlo (salvo el administrador). Si cualquier otro usuario intenta editar el evento, la respuestá será un 404.</p>",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la imagen relacionada al evento (opcional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de inicio (Formato YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final (Formato YYYY-MM-DD).</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido el evento.</p>"
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
            "description": "<p>Fecha inicial del evento.</p>"
          },
          {
            "group": "events Object",
            "type": "String",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>Fecha final del evento.</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "toRoles",
            "description": "<p>Roles a los que va dirigido.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el evento exitosamente.\",\n  \"event\": {\n    \"_id\": \"611924490ec7059a63f7a805\",\n    \"title\": \"EVENTO 01\",\n    \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n    \"date\": \"2021-08-31\",\n    \"initHour\": \"09:00\",\n    \"endHour\": \"12:59\",\n    \"toRoles\": [\n      4\n    ],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Events.js",
    "groupTitle": "Events",
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"date\": \"2021-09-15\",\n  \"dateEnd\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with url picture",
        "content": "{\n  \"title\": \"EVENTO 01\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ....\",\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611924490ec7059a63f7a805-1629037641.jpg\",\n  \"date\": \"2021-09-15\",\n  \"initHour\": \"08:00\",\n  \"endHour\": \"11:30\",\n  \"toRoles\": [\n    2,\n    3,\n    4\n  ]\n}",
        "type": "JSON"
      }
    ],
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título para el evento.\"\n    },\n    {\n      \"input\": \"description\",\n      \"msg\": \"Disculpe, pero indicar una descripción para el evento.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero debe indicar la fecha para el evento.\"\n    },\n    {\n      \"input\": \"initHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de inicio para el evento.\"\n    },\n    {\n      \"input\": \"endHour\",\n      \"msg\": \"Disculpe, pero indicar la hora de finalización del evento.\"\n    },\n    {\n      \"input\": \"toRoles\",\n      \"msg\": \"Disculpe, pero debe seleccionar a quienes va dirigido el evento.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/families-groups",
    "title": "(01) Crear un grupo familiar.",
    "version": "0.0.28",
    "name": "createGroupFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del admin.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "members",
            "description": "<p>Miembros del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
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
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "members Object": [
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "leader",
            "description": "<p>Datos del líder.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "host",
            "description": "<p>Datos del anfitrión.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "helper",
            "description": "<p>Datos del asistente.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "master",
            "description": "<p>Datos del maestro.</p>"
          },
          {
            "group": "members Object",
            "type": "Object[]",
            "optional": false,
            "field": "assistants",
            "description": "<p>Listado de asistentes.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ],
        "leader, host, helper and master Object and assistants Object[]": [
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha creado el nuevo grupo exitosamente.\",\n  \"group\": {\n    \"members\": {\n      \"leaderId\": null,\n      \"hostId\": null,\n      \"assistantId\": null,\n      \"masterId\": null,\n      \"assistantsIds\": []\n    },\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -73.630175,\n        4.134516\n      ]\n    },\n    \"_id\": \"6126901bc09d294bd193e34b\",\n    \"number\": 99,\n    \"direction\": \"DIRECCIÓN CUALQUIERA\",\n    \"sector\": 99,\n    \"subSector\": 99,\n    \"created_at\": \"2021-08-25 13:46:51\",\n    \"updated_at\": \"2021-08-25 13:46:51\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Number group exists.",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.\",\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parametros!\",\n  \"errors\": [\n    {\n      \"input\": \"sector\",\n      \"msg\": \"Disculpe, pero debe indicar el sector.\"\n    },\n    {\n      \"input\": \"subSector\",\n      \"msg\": \"Disculpe, pero debe indica el sub-sector.\"\n    },\n    {\n      \"input\": \"number\",\n      \"msg\": \"Disculpe, pero debe indicar el número del grupo.\"\n    },\n    {\n      \"input\": \"direction\",\n      \"msg\": \"Disculpe, pero debe indicar una dirección.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero la ubicación seleccionada en el mapa es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero las coordenadas de la ubicación seleccionada en el mapa son incorrectas.\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de geolocalización (opcional).</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de geolocalización.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación ([longitud , latitud] = [-73.630175 , 4.134516]).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"sector\": 99,\n\t\"subSector\": 99,\n\t\"number\": 99,\n\t\"direction\": \"Dirección cualquiera\",\n\t\"location\": {\n\t  \"type\": \"Point\",\n\t  \"coordinates\": [ -73.630175, 4.134516 ]\n\t}\n}",
        "type": "JSON"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/admin/families-groups/:_id",
    "title": "(05) Eliminar un grupo familiar.",
    "version": "0.0.28",
    "name": "deleteGroupFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha eliminado el grupo familiar exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Can't delete",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero este grupo no puede eliminarse debido a que ya tiene reportes registrados.\"\n}",
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
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/families-groups/:_id",
    "title": "(02) Obtener detalles de un grupo familiar.",
    "version": "0.0.36",
    "name": "getDetailsGroupFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del admin.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "members",
            "description": "<p>Miembros del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
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
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "members Object": [
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "leader",
            "description": "<p>Datos del líder.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "host",
            "description": "<p>Datos del anfitrión.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "helper",
            "description": "<p>Datos del asistente.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "master",
            "description": "<p>Datos del maestro.</p>"
          },
          {
            "group": "members Object",
            "type": "Object[]",
            "optional": false,
            "field": "assistants",
            "description": "<p>Listado de asistentes.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ],
        "leader, host, helper and master Object and assistants Object[]": [
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Grupo Familiar\",\n  \"group\": {\n    \"_id\": \"6063385c98fc731c04777829\",\n    \"number\": 2,\n    \"direction\": \"DIRECCIÓN CUALQUIERA ASDASD ASDASD\",\n    \"sector\": 4,\n    \"subSector\": 2,\n    \"members\": {\n      \"leader\": null,\n      \"host\": {\n        \"_id\": \"604068461caad10e2c965406\",\n        \"names\": \"PRUEBA\",\n        \"lastNames\": \"USUARIO\",\n        \"document\": \"CC123123123\",\n        \"gender\": null,\n        \"phone\": \"573151234567\",\n        \"picture\": null,\n        \"position\": null\n      },\n      \"helper\": {\n        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n        \"names\": \"PEDRO JOSÉ\",\n        \"lastNames\": \"PÉREZ RODRIGUEZ\",\n        \"document\": \"CC12345678\",\n        \"gender\": null,\n        \"phone\": \"3161234567\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n        \"position\": null\n      },\n      \"master\": null,\n      \"assistants\": [\n        {\n          \"_id\": \"5fcf0821fc917d476c1cf3e9\",\n          \"names\": \"EMILIA\",\n          \"lastNames\": \"GOMEZ\",\n          \"document\": \"CC99999999\",\n          \"gender\": 1,\n          \"phone\": \"3169999999\",\n          \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e9/picture-5fcf0821fc917d476c1cf3e9-1629254970.jpg\",\n          \"position\": null\n        },\n        .\n        .\n        .\n      ]\n    },\n    \"created_at\": \"2021-03-30 09:40:28\",\n    \"updated_at\": \"2021-08-27 17:51:52\"\n  }\n}",
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
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin"
  },
  {
    "type": "get",
    "url": "/api/admin/families-groups",
    "title": "(00) Obtener listado de grupos familiares.",
    "version": "0.0.28",
    "name": "getFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>Campo a ordenar (valores: sector | subSector | number).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional).</p>"
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
            "description": "<p>Listado de grupos familiares.</p>"
          }
        ],
        "groups Object[]": [
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": [\n\t\t{\n\t\t\t\"_id\": \"6069917b2760da31bcd519be\",\n\t\t\t\"number\": 3,\n\t\t\t\"sector\": 1,\n\t\t\t\"subSector\": 2,\n\t\t\t\"created_at\": \"2021-04-04 05:14:19\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin",
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
    "url": "/api/admin/families-groups/:_id",
    "title": "(03) Actualizar datos de un grupo familiar.",
    "version": "0.0.36",
    "name": "updateGroupFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
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
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de geolocalización (opcional).</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de geolocalización.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación ([longitud , latitud] = [-73.630175 , 4.134516]).</p>"
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
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el grupo familiar exitosamente.\",\n  \"group\": {\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -73.630175,\n        4.134516\n      ]\n    },\n    \"_id\": \"6126901bc09d294bd193e34b\",\n    \"number\": 98,\n    \"direction\": \"DIRECCIÓN CUALQUIERA\",\n    \"sector\": 99,\n    \"subSector\": 99,\n    \"updated_at\": \"2021-08-25 13:50:19\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Number group exists.",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.\",\n}",
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parametros!\",\n  \"errors\": [\n    {\n      \"input\": \"sector\",\n      \"msg\": \"Disculpe, pero debe indicar el sector.\"\n    },\n    {\n      \"input\": \"subSector\",\n      \"msg\": \"Disculpe, pero debe indica el sub-sector.\"\n    },\n    {\n      \"input\": \"number\",\n      \"msg\": \"Disculpe, pero debe indicar el número del grupo.\"\n    },\n    {\n      \"input\": \"direction\",\n      \"msg\": \"Disculpe, pero debe indicar una dirección.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero la ubicación seleccionada en el mapa es incorrecta.\"\n    },\n    {\n      \"input\": \"location\",\n      \"msg\": \"Disculpe, pero las coordenadas de la ubicación seleccionada en el mapa son incorrectas.\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin",
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"sector\": 99,\n\t\"subSector\": 99,\n\t\"number\": 99,\n\t\"direction\": \"Dirección cualquiera\",\n\t\"location\": {\n\t  \"type\": \"Point\",\n\t  \"coordinates\": [ -73.630175, 4.134516 ]\n\t}\n}",
        "type": "JSON"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/admin/families-groups/:_id/members",
    "title": "(04) Actualizar miembros de un grupo familiar.",
    "version": "0.0.36",
    "name": "updateMembersGroupFamiliesGroupsAdmin",
    "group": "FamiliesGroupsAdmin",
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
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "members",
            "description": "<p>IDs de los miembros.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "leaderId",
            "description": "<p>ID del miembro líder.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "hostId",
            "description": "<p>ID del miembro anfitrión.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "helperId",
            "description": "<p>ID del miembro auxiliar.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "masterId",
            "description": "<p>ID del miembro maestro.</p>"
          },
          {
            "group": "member Object",
            "type": "String[]",
            "optional": false,
            "field": "assistantsIds",
            "description": "<p>Listado de IDs de los asistentes</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"members\": {\n\t\t\"leaderId\": null,\n\t\t\"hostId\": \"604068461caad10e2c965406\",\n\t\t\"helperId\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\"masterId\": null,\n\t\t\"assistantsIds\": [ \"5fcf0821fc917d476c1cf3e9\", ... ]\n\t}\n}",
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
            "field": "members",
            "description": "<p>Datos de los miembros.</p>"
          }
        ],
        "members Object": [
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "leader",
            "description": "<p>Datos del líder.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "host",
            "description": "<p>Datos del anfitrión.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "helper",
            "description": "<p>Datos del auxiliar.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "master",
            "description": "<p>Datos del maestro.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "assistants",
            "description": "<p>Listado de asistentes.</p>"
          }
        ],
        "leader, host, helper and master Object and assistants Object[]": [
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "leader, host, helper and master Object and assistants Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Grupo Familiar\",\n  \"members\": {\n    \"leader\": null,\n    \"host\": {\n      \"_id\": \"604068461caad10e2c965406\",\n      \"names\": \"PRUEBA\",\n      \"lastNames\": \"USUARIO\",\n      \"document\": \"CC123123123\",\n      \"gender\": null,\n      \"phone\": \"573151234567\",\n      \"picture\": null,\n      \"position\": null\n    },\n    \"helper\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n      \"names\": \"PEDRO JOSÉ\",\n      \"lastNames\": \"PÉREZ RODRIGUEZ\",\n      \"document\": \"CC12345678\",\n      \"gender\": null,\n      \"phone\": \"3161234567\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n      \"position\": null\n    },\n    \"master\": null,\n    \"assistants\": [\n      {\n        \"_id\": \"5fcf0821fc917d476c1cf3e9\",\n        \"names\": \"EMILIA\",\n        \"lastNames\": \"GOMEZ\",\n        \"document\": \"CC99999999\",\n        \"gender\": 1,\n        \"phone\": \"3169999999\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e9/picture-5fcf0821fc917d476c1cf3e9-1629254970.jpg\",\n        \"position\": null\n      },\n      .\n      .\n      .\n    ]\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parametros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero no se recibió la información a actualizar.\"\n    },\n    {\n      \"input\": \"leaderId\",\n      \"msg\": \"Disculpe, pero debe seleccionar a un miembro como líder del grupo.\"\n    },\n    {\n      \"input\": \"leaderId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como líder es incorrecto.\"\n    },\n    {\n      \"input\": \"hostId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como anfitrión es incorrecto.\"\n    },\n    {\n      \"input\": \"helperId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como auxiliar es incorrecto.\"\n    },\n    {\n      \"input\": \"masterId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como maestro es incorrecto.\"\n    },\n    {\n      \"input\": \"assistantsIds\",\n      \"msg\": \"Disculpe, pero uno de los miembros seleccionados como asistentes es incorrecto.\"\n    }\n  ]\n}",
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
    "filename": "Docs/Admin/FamiliesGroupsAdmin.js",
    "groupTitle": "FamiliesGroupsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/groups/:_id/members/add",
    "title": "(06) Agregar miembros al grupo.",
    "version": "0.0.36",
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
            "description": "<p>Listado de IDs de los miembros a agregar al grupo.</p>"
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
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "notInserts Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "notInserts Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el listado de miembros exitosamente. Algunos miembros no lograron ser agregados porque ya pertenecen a otro grupo.\",\n  \"notInserts\": [\n    {\n      \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n      \"names\": \"PEDRO JOSÉ\",\n      \"lastNames\": \"PÉREZ RODRIGUEZ\",\n      \"document\": \"CC12345678\",\n      \"gender\": null,\n      \"phone\": \"3161234567\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n      \"position\": null\n    },\n    .\n    .\n    .\n  ]\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero alguno de los miembros seleccionados son incorrectos.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Empty data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero debe seleccionar que miembro(s) se agregará(n) o eliminará(n).\"\n    }\n  ]\n}",
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
            "description": "<p>ID del miembro que creó el grupo.</p>"
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
    "version": "0.0.36",
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
            "description": "<p>Datos del miembro creador del grupo.</p>"
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
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ],
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Grupo\",\n  \"group\": {\n    \"_id\": \"60330f5102626e2040bd2393\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    },\n    \"name\": \"FAMILIA PEREZ\",\n    \"code\": \"GROUP-0\",\n    \"members\": [\n      {\n        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n        \"names\": \"PEDRO JOSÉ\",\n        \"lastNames\": \"PÉREZ RODRIGUEZ\",\n        \"document\": \"CC12345678\",\n        \"gender\": null,\n        \"phone\": \"3161234567\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n        \"position\": null\n      },\n      .\n      .\n      .\n    ],\n    \"created_at\": \"2021-02-21 20:56:33\",\n    \"updated_at\": \"2021-03-01 22:46:53\"\n  }\n}",
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
            "description": "<p>Listado de IDs de los miembros a remover del grupo.</p>"
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero alguno de los miembros seleccionados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n        }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Empty data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"members\",\n            \"msg\": \"Disculpe, pero debe seleccionar que miembro(s) se agregará(n) o eliminará(n).\"\n        }\n    ]\n  }",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se ha actualizado el grupo exitosamente.\",\n    \"group\": {\n        \"_id\": \"6018e503e02a45115407e82f\",\n        \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n        \"code\": \"AAA-001\",\n        \"created_at\": \"2021-02-02 00:37:07\",\n        \"updated_at\": \"2021-02-02 02:16:16\"\n    }\n}",
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
    "url": "/api/birthdays",
    "title": "(13) Obtener todos los miembros con su fecha de nacimiento.",
    "version": "0.0.49",
    "name": "birthdaysPublic",
    "group": "Public",
    "description": "<p>Se obtienen los datos de todos los usuarios con su fecha de nacimiento. La manipulación de los datos para indicar sus fecha de cumpleaños deberá ser realizada por quien consume el servicio.</p>",
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
            "field": "birthdayList",
            "description": "<p>Listado de miembros.</p>"
          }
        ],
        "birthdayList Object[]": [
          {
            "group": "birthdayList Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>Género.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargos dentro de la organización.</p>"
          },
          {
            "group": "birthdayList Object[]",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Datos de cumpleaños\",\n  \"birthdayList\": [\n    {\n      \"_id\": \"62150f82a582520458cc89f0\",\n      \"names\": \"ADRIANA\",\n      \"lastNames\": \"CIFUENTES\",\n      \"phone\": \"3136320063\",\n      \"document\": null\n      \"gender\": 1,\n      \"picture\": null,\n      \"position\": null,\n      \"birthday\": \"1970-11-02\",\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Datos de cumpleaños\",\n\t\"birthdayList\": []\n}",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/churches",
    "title": "(15) Obtener listado de iglesias registradas.",
    "version": "0.0.50",
    "name": "churchesPublic",
    "group": "Public",
    "description": "<p>El siguiente servicio es para obtener el nombre y el ID de las iglesias registradas. La respuesta del servicio puede ser utilizada para los formularios donde aplique asignar el ID de la iglesia a un miembro registrado.</p>",
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
            "field": "churches",
            "description": "<p>Listado de iglesias.</p>"
          }
        ],
        "churches Object[]": [
          {
            "group": "churches Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "churches Object[]",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de la iglesia.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Listado de iglesias\",\n  \"churches\": [\n    {\n      \"_id\": \"624a357644f15f3ce8200c2f\",\n      \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\"\n    },\n    .\n    .\n    .\n  ]\n}",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/events/:_id",
    "title": "(04) Obtener detalles de un evento público.",
    "version": "0.0.36",
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
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Evento.\",\n\t\"event\": {\n\t\t\"_id\": \"602bccfb1b70b930e43a3eb2\",\n\t\t\"title\": \"EVENTO NUEVO\",\n\t\t\"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\"date\": \"2021-03-01\",\n\t\t\"initHour\": \"00:00\",\n\t\t\"endHour\": \"23:59\",\n\t\t\"toRoles\": [\n\t\t\t5\n\t\t],\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    }\n\t}\n}",
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
    "url": "/api/resources",
    "title": "(01) Listado de documentos compartidos (público).",
    "version": "0.0.51",
    "name": "getDocumentsListPublic",
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "resources",
            "description": "<p>Listado de retorno.</p>"
          }
        ],
        "resources Object[]": [
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del recurso compartido.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del recurso.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "urlDoc",
            "description": "<p>URL del documento PDF.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Listado de roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del documento.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de actalización del documento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Mis recursos compartidos\",\n  \"resources\": [\n    {\n      \"_id\": \"6252676c8400314c8c94c0ee\",\n      \"title\": \"PRUEBA DOCUMENTO\",\n      \"urlDoc\": \"https://delii.s3.amazonaws.com/alma/resources/documento-1649567592.pdf\",\n      \"roles\": [\n        0,\n        1,\n        2,\n        3\n      ],\n      \"created_at\": 1649567596,\n      \"updated_at\": 1649567596\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Mis recursos compartidos\",\n\t\"resources\": []\n}",
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
    "type": "get",
    "url": "/api/families-groups",
    "title": "(12) Obtener listado de grupos familiares.",
    "version": "0.0.41",
    "name": "getFamiliesGroupsPublic",
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Listado de grupos familiares asociados al usuario.</p>"
          }
        ],
        "groups Object[]": [
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del group familiar.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Ubicación del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "isLeader",
            "description": "<p>Indica si el miembro es líder.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del grupo.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": [\n    {\n      \"_id\": \"6063385c98fc731c04777829\",\n      \"number\": 1,\n      \"sector\": 1,\n      \"subSector\": 1,\n      \"direction\": \"DIRECCIÓN CUALQUIERA EDITADA\",\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -64.18147,\n          10.451304\n        ]\n      },\n      \"isLeader\": true,\n      \"created_at\": \"2021-03-30 09:40:28\"\n    },\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": []\n}",
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
    "type": "get",
    "url": "/api/members",
    "title": "(10) Obtener listado de grupos familiares.",
    "version": "0.0.25",
    "name": "getFamiliesGroupsPublic",
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
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valores = sector | subSector | number).</p>"
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
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector a filtrar (opcional si se envía subSector o number).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector a filtrar (opcional si se envía sector o number).</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo a filtrar (opcional si se envía sector o subSector).</p>"
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
            "description": "<p>Listado de miembros.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": [\n    {\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -64.18147,\n          10.451304\n        ]\n      },\n      \"_id\": \"6063385c98fc731c04777829\",\n      \"sector\": 1,\n      \"subSector\": 1,\n      \"number\": 1,\n      \"direction\": \"DIRECCIÓN CUALQUIERA EDITADA\"\n    },\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": []\n}",
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
    "type": "get",
    "url": "/api/members",
    "title": "(09) Obtener listado de miembros.",
    "version": "0.0.36",
    "name": "getMembersPublic",
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
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": "<p>Campo a ordenar (valor = names).</p>"
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
            "field": "word",
            "description": "<p>Número de teléfono o nombre para filtrar el listado.</p>"
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
            "field": "members",
            "description": "<p>Listado de miembros.</p>"
          }
        ],
        "members Object[]": [
          {
            "group": "members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>Género (sexo) del miembro.</p>"
          },
          {
            "group": "members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen de perfil.</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Número de teléfono.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de miembros.\",\n\t\"members\": [\n\t\t{\n\t\t\t\"gender\": null,\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n\t\t  \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\"phone\": \"3161234567\",\n\t\t\t\"names\": \"PEDRO\",\n\t\t\t\"lastNames\": \"PEREZ\"\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de miembros.\",\n\t\"members\": []\n}",
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
    "type": "get",
    "url": "/api/params-app",
    "title": "(11) Obterner parámetros para la app.",
    "version": "0.0.37",
    "name": "getParamsAppPublic",
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "facebook",
            "description": "<p>URL de Facebook.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "instagram",
            "description": "<p>URL de Instagram.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "twitter",
            "description": "<p>URL de Twitter.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "web",
            "description": "<p>URL de Website.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "youtube",
            "description": "<p>URL de YouTube.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "banner",
            "description": "<p>URL del banner.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "logo",
            "description": "<p>URL del logo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with params",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Parámetros\",\n  \"data\": {\n    \"facebook\": \"https://facebook.com/aacd\",\n    \"instagram\": \"https://instagram.com/aacd\",\n    \"twitter\": \"https://twitter.com/aacd\",\n    \"web\": \"https://www.aacd.com\",\n    \"youtube\": \"https://facebook.com/channel/aacd\",\n    \"banner\": \"https://delii.s3.amazonaws.com/alma/settings/banners/picture-1629314103.jpg\",\n    \"logo\": \"https://delii.s3.amazonaws.com/alma/settings/logo/picture-1629314103.jpg\"\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Success without params",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Parámetros\",\n  \"data\": {\n    \"facebook\": null,\n    \"instagram\": null,\n    \"twitter\": null,\n    \"web\": null,\n    \"youtube\": null,\n    \"banner\": null,\n    \"logo\": null\n  }\n}",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/banks",
    "title": "(08) Obtener listado de bancos.",
    "version": "0.0.25",
    "name": "getPublicBanksPublic",
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "banks",
            "description": "<p>Listado de bancos.</p>"
          }
        ],
        "banks Object[]": [
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título para el banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del banco.</p>"
          },
          {
            "group": "banks Object[]",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Bancos\",\n\t\"banks\": [\n\t\t{\n\t\t\t\"_id\": \"604bdd2f5a94aa3824e40086\",\n\t\t\t\"title\": \"BANCO 02\",\n\t\t\t\"description\": \"<p><b>Núm. cuenta</b>: 01010101010101010101.</p>\",\n\t\t\t\"picture\": \"http://localhost:7000/images/banks/1615584559.jpeg\"\n\t\t}\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Bancos\",\n\t\"banks\": []\n}",
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
    "type": "get",
    "url": "/api/events",
    "title": "(03) Obtener eventos públicos.",
    "version": "0.0.36",
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
            "description": "<p>Listado de eventos.</p>"
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
            "description": "<p>Información del miembro que agregó el evento.</p>"
          }
        ],
        "user Object": [
          {
            "group": "user Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
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
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "user Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Eventos.\",\n\t\"events\": [\n    {\n    \"_id\": \"611a39d47636c51470deed92\",\n    \"title\": \"PRUEBA DESDE ADMIN\",\n    \"date\": \"2021-09-15\",\n    \"initHour\": \"08:00\",\n    \"endHour\": \"11:30\",\n    \"toRoles\": [\n      3,\n      4\n    ],\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/events/event-611a39d47636c51470deed92-1629109103.jpg\",\n    \"user\": {\n      \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n      \"names\": \"ANTHONY EDITADO\",\n      \"lastNames\": \"ADMINISTRADOR\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"31612345678\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null\n    }\n    },\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
        "content": "{\n    \"phone\": \"3161234567\",\n    \"password\": \"password\",\n    \"admin\": true\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with admin=false",
        "content": "{\n    \"phone\": \"3161234567\",\n    \"password\": \"password\",\n    \"admin\": false\n}",
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
            "description": "<p>Role del miembro.</p>"
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
            "description": "<p>ID del miembro.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"¡Inicio de sesión con éxito!\",\n\t\"data\": {\n\t\t\"gender\": null,\n\t\t\"birthday\": null,\n\t\t\"civilStatus\": null,\n\t\t\"educationLevel\": null,\n\t\t\"profession\": null,\n\t\t\"bloodType\": null,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": false,\n\t\t\"role\": 5,\n\t\t\"group\": null,\n\t\t\"department\": null,\n\t\t\"city\": null,\n\t\t\"locality\": null,\n\t\t\"direction\": null,\n\t\t\"created_at\": \"2021-03-26 13:01:21\",\n\t\t\"updated_at\": \"2021-03-26 13:03:05\",\n\t\t\"_id\": \"605e21d8a4fe940ef4d7d28b\",\n\t\t\"email\": \"3161234567@example.com\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n\t\t\"phone\": \"3161234567\",\n\t\t\"document\": \"CC1490199\",\n\t\t\"names\": \"ANTHONY\",\n\t\t\"lastNames\": \"VELÁSQUEZ\"\n\t},\n\t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVlMjFkOGE0ZmU5NDBlZjRkN2QyOGIiLCJyb2xlIjo1LCJpYXQiOjE2MTY3ODYzMDMsImV4cCI6MTY0ODM0MzkwM30.aWCtwE5ZOY6JtHcaMqRcf0WfmhE5mgVjhwLQuBIK9Uc\"\n}",
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
    "type": "get",
    "url": "/api/organization",
    "title": "(15) Obtener estructura de organización de todas las iglesias.",
    "version": "0.0.50",
    "name": "organizationPublic",
    "group": "Public",
    "description": "<p>El siguiente servicio retorna la estructuración organizacional de las iglesias registradas. El objeto 'lvls', almacena los IDs de los miembros relacionados al cargo o rol respectivo. El listado de objetos 'users', guarda la información de cada uno de los miembros asociados a la iglesia.</p> <p>Se maneja de la siguiente forma para que quien consula el servicio pueda hacer la relación respectiva de los datos en relación al rol asignado.</p>",
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
            "field": "data",
            "description": "<p>Listado de iglesias.</p>"
          }
        ],
        "data Object[]": [
          {
            "group": "data Object[]",
            "type": "Object",
            "optional": false,
            "field": "church",
            "description": "<p>Datos de la iglesia.</p>"
          },
          {
            "group": "data Object[]",
            "type": "Object",
            "optional": false,
            "field": "lvls",
            "description": "<p>Niveles (estructura en base al rol del usuario).</p>"
          },
          {
            "group": "data Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Datos de los usuarios relacionados a la iglesia.</p>"
          }
        ],
        "church Object": [
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "description",
            "description": "<p>descripción de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone1",
            "description": "<p>Teléfono principal.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "phone2",
            "description": "<p>Teléfono secundario.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "address",
            "description": "<p>Dirección de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>datos de la ubicación de la iglesia.</p>"
          },
          {
            "group": "church Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de la iglesia.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenadas.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación ([ x, y ]).</p>"
          }
        ],
        "lvls Object": [
          {
            "group": "lvls Object",
            "type": "String[]",
            "optional": false,
            "field": "pastors",
            "description": "<p>Listado de IDs de los pastores.</p>"
          },
          {
            "group": "lvls Object",
            "type": "String[]",
            "optional": false,
            "field": "supervisors",
            "description": "<p>Listado de IDs de los supervisores.</p>"
          },
          {
            "group": "lvls Object",
            "type": "String[]",
            "optional": false,
            "field": "leaders",
            "description": "<p>Listado de IDs de los líderes.</p>"
          },
          {
            "group": "lvls Object",
            "type": "String[]",
            "optional": false,
            "field": "peoples",
            "description": "<p>Listado de IDs de los miembros comunes.</p>"
          }
        ],
        "users Object[]": [
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Nombre completo del usuario.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genéro (sexo) del usuario.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto del perfil.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que pertenece.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Organización\",\n  \"data\": [\n    {\n      \"church\": {\n        \"picture\": null,\n        \"phone1\": null,\n        \"phone2\": null,\n        \"email\": null,\n        \"address\": null,\n        \"location\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            -73.630175,\n            4.134516\n          ]\n        },\n        \"_id\": \"624a357644f15f3ce8200c2f\",\n        \"name\": \"ASAMBLEA DE DIOS - PRINCIPAL\",\n        \"description\": \"IGLESIA PRINCIPAL\"\n      },\n      \"lvls\": {\n        \"pastors\": [\n          \"6169f99d3acd4c3221ddd728\",\n          .\n          .\n          .\n        ],\n        \"supervisors\": [\n          \"61820b3b2b0b95656950f111\",\n          .\n          .\n          .\n        ],\n        \"leaders\": [\n          \"619eb85825c4f804de6c7bb0\",\n          .\n          .\n          .\n        ],\n        \"peoples\": [\n          \"62150f82a582520458cc89f0\",\n          .\n          .\n          .\n        ]\n      },\n      \"users\": [\n        {\n          \"_id\": \"62150f82a582520458cc89f0\",\n          \"fullname\": \"ADRIANA CIFUENTES\",\n          \"gender\": 1,\n          \"picture\": null,\n          \"church\": \"624a357644f15f3ce8200c2f\"\n        },\n        .\n        .\n        .\n      ]\n    }\n  ]\n}",
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
          "title": "Error internal server",
          "content": "HTTP/1.1 500 Internal Error Server\n{\n  \"msg\": \"Ha ocurrido un error inesperado.\",\n  \"errors\": [${err}]\n}",
          "type": "JSON"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/recovery-password/change-password",
    "title": "(07) Recuperar contraseña - Cambiar contraseña.",
    "version": "0.0.45",
    "name": "recoveryPasswordChangePassPublic",
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
            "type": "Object",
            "optional": false,
            "field": "check",
            "description": "<p>Datos a validar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nueva contraseña.</p>"
          }
        ],
        "check Object": [
          {
            "group": "check Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "check Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with check only email",
        "content": "{\n\t\"phone\": \"3161234567\",\n\t\"check\": {\n\t\t\"email\": \"user@example.com\",\n\t\t\"birthday\": null\n\t},\n\t\"password\": \"password\"\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with check email and birthday",
        "content": "{\n\t\"phone\": \"3161234567\",\n\t\"check\": {\n\t\t\"email\": \"user@example.com\",\n\t\t\"birthday\": \"1994-07-07\"\n\t},\n\t\"password\": \"password\"\n}",
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
            "type": "Boolean",
            "optional": false,
            "field": "changed",
            "description": "<p>Indica si se asignó la nueva contraseña.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success, check only email",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Se ha asignado la nueva contraseña a su cuenta exitosamente.\",\n\t\"changed\": true\n}",
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
          "title": "Error action",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no se encontró la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Document not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el número de documento indicado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid document",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar un número de documento válido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Errors params",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no se recibieron los datos a validar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid email",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar un correo electrónico válido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Email isn't equals to user data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el correo electrónico indicado no coincide con el de su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid date",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar una fecha válida.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Birthday isn't equals to user data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la fecha indicada no coincide con su fecha de cumpleaños de su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid format password",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.\"\n}",
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
    "url": "/api/recovery-password/check-phone",
    "title": "(05) Recuperar contraseña - Verificar número de teléfono.",
    "version": "0.0.45",
    "name": "recoveryPasswordCheckDocumentPublic",
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"phone\": \"3161234567\"\n}",
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
            "type": "Object|Null",
            "optional": false,
            "field": "check",
            "description": "<p>Datos a verificar.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean|Null",
            "optional": false,
            "field": "setNewPassword",
            "description": "<p>Indica que se salta el paso de verificación y se procede a cambiar la contraseña.</p>"
          }
        ],
        "check Object": [
          {
            "group": "check Object",
            "type": "Boolean",
            "optional": false,
            "field": "email",
            "description": "<p>Verificar correo electrónico.</p>"
          },
          {
            "group": "check Object",
            "type": "Boolean",
            "optional": false,
            "field": "birthday",
            "description": "<p>Verificar fecha de nacimiento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success, check only email",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Por favor, complete los siguientes campos para recuperar su contraseña.\",\n\t\"check\": {\n\t\t\"email\": true,\n\t\t\"birthday\": false\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success, check email and birthday",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Por favor, complete los siguientes campos para recuperar su contraseña.\",\n\t\"check\": {\n\t\t\"email\": true,\n\t\t\"birthday\": true\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success, but checking ommited.",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Ahora puede asignar su nueva contraseña para recuperar el acceso a su cuenta.\",\n\t\"setNewPassword\": true\n}",
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
          "title": "Error action",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no se encontró la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Document not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el número de documento indicado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid document",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar un número de documento válido.\"\n}",
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
    "url": "/api/recovery-password/check-params",
    "title": "(06) Recuperar contraseña - Verificar datos solicitados.",
    "version": "0.0.45",
    "name": "recoveryPasswordCheckParamsPublic",
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
            "type": "Object",
            "optional": false,
            "field": "check",
            "description": "<p>Datos a validar.</p>"
          }
        ],
        "check Object": [
          {
            "group": "check Object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "check Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with check only email",
        "content": "{\n\t\"phone\": \"3161234567\",\n\t\"check\": {\n\t\t\"email\": \"user@example.com\",\n\t\t\"birthday\": null\n\t}\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request with check email and birthday",
        "content": "{\n\t\"phone\": \"3161234567\",\n\t\"check\": {\n\t\t\"email\": \"user@example.com\",\n\t\t\"birthday\": \"1994-07-07\"\n\t}\n}",
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
            "type": "Boolean",
            "optional": false,
            "field": "setNewPassword",
            "description": "<p>Indica si se asignará la nueva contraseña.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success, check only email",
          "content": "HTTP/1.1 201 Created\n{\n\t\"msg\": \"Por favor, indique su nueva contraseña.\",\n\t\"setNewPassword\": true\n}",
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
          "title": "Error action",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero no se encontró la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Document not found",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el número de documento indicado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid document",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar un número de documento válido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Errors params",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no se recibieron los datos a validar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid email",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar un correo electrónico válido.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Email isn't equals to user data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el correo electrónico indicado no coincide con el de su cuenta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid date",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero debe indicar una fecha válida.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Birthday isn't equals to user data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la fecha indicada no coincide con su fecha de cumpleaños de su cuenta.\"\n}",
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
    "title": "(00) Registro.",
    "version": "0.0.32",
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
            "description": "<p>Teléfono.</p>"
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n\t\"phone\": \"3161234567\",\n\t\"password\": \"password\",\n\t\"names\": \"Anthony\",\n\t\"lastNames\": \"Velásquez\"\n}",
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
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"phone\",\n      \"msg\": \"Disculpe, pero debe indicar un número de teléfono.\"\n    },\n    {\n      \"input\": \"names\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n    },\n    {\n      \"input\": \"lastNames\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) apellido(s).\"\n    },\n    {\n      \"input\": \"password\",\n      \"msg\": \"Disculpe, pero debe asignar una contraseña. Esta debe contener letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.\"\n    }\n  ]\n}",
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
    "type": "get",
    "url": "/api/admin/reports/families-groups",
    "title": "(01) Obtener reportes de los grupos familiares.",
    "version": "0.0.28",
    "name": "getFamiliesGroupsReportsAdmin",
    "group": "ReportsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "field": "sector",
            "description": "<p>Número del sector (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector (opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo (opcional).</p>"
          },
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
            "type": "Object[]",
            "optional": false,
            "field": "reports",
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "reports Object[]": [
          {
            "group": "reports Object[]",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Datos del grupo.</p>"
          },
          {
            "group": "reports Object[]",
            "type": "Object",
            "optional": false,
            "field": "report",
            "description": "<p>Datos del reporte.</p>"
          },
          {
            "group": "reports Object[]",
            "type": "Object[]",
            "optional": false,
            "field": "observations",
            "description": "<p>Listado de observaciones.</p>"
          }
        ],
        "group Object": [
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del grupo.</p>"
          }
        ],
        "report Object": [
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "brethren",
            "description": "<p>Número de hermanos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "friends",
            "description": "<p>Número de amigos de los hermanos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "scheduledVisits",
            "description": "<p>Número de visitas programadas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "discipleshipVisits",
            "description": "<p>Número de visitas al disipulado.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildren",
            "description": "<p>Número de niños cristianos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildrenFriends",
            "description": "<p>Número de amigos de los niños cristianos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Número de total de hermanos y sus amigos, y niños y sus amigos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "offering",
            "description": "<p>Total de ofrendas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendance",
            "description": "<p>Número de asistencias a la iglesia.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendanceChildren",
            "description": "<p>Número de asistencia de niños a la iglesia.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "conversions",
            "description": "<p>Número de conversiones.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "reconciliations",
            "description": "<p>Número de reconciliaciones.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "conversionsChildren",
            "description": "<p>Número de conversiones de niños.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "brethrenPlanning",
            "description": "<p>Número de hermanos planeando.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "bibleReading",
            "description": "<p>Número de lecturas bíblicas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Número de consolidados.</p>"
          }
        ],
        "observations Object[]": [
          {
            "group": "observations Object[]",
            "type": "String",
            "optional": false,
            "field": "observations",
            "description": "<p>Observaciones.</p>"
          },
          {
            "group": "observations Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del reporte.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Reportes de grupos familiares.\",\n\t\"reports\": [\n\t\t{\n\t\t\t\"group\": {\n\t\t\t\t\"_id\": \"6063385c98fc731c04777827\",\n\t\t\t\t\"sector\": 1,\n\t\t\t\t\"subSector\": 1,\n\t\t\t\t\"number\": 1,\n\t\t\t\t\"created_at\": \"2021-03-30 09:40:28\"\n\t\t\t},\n\t\t\t\"report\": {\n\t\t\t\t\"brethren\": 0,\n\t\t\t\t\"friends\": 0,\n\t\t\t\t\"scheduledVisits\": 0,\n\t\t\t\t\"discipleshipVisits\": 0,\n\t\t\t\t\"christianChildren\": 0,\n\t\t\t\t\"christianChildrenFriends\": 0,\n\t\t\t\t\"total\": 0,\n\t\t\t\t\"offering\": 0,\n\t\t\t\t\"churchAttendance\": 0,\n\t\t\t\t\"churchAttendanceChildren\": 0,\n\t\t\t\t\"conversions\": 0,\n\t\t\t\t\"reconciliations\": 0,\n\t\t\t\t\"conversionsChildren\": 0,\n\t\t\t\t\"brethrenPlanning\": 0,\n\t\t\t\t\"bibleReading\": 0,\n\t\t\t\t\"consolidated\": 0\n\t\t\t},\n\t\t\t\"observations\": []\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t\t{\n\t\t\t\"group\": {\n\t\t\t\t\"_id\": \"6063385c98fc731c04777829\",\n\t\t\t\t\"sector\": 4,\n\t\t\t\t\"subSector\": 2,\n\t\t\t\t\"number\": 2,\n\t\t\t\t\"created_at\": \"2021-03-30 09:40:28\"\n\t\t\t},\n\t\t\t\"report\": {\n\t\t\t\t\"brethren\": 16,\n\t\t\t\t\"friends\": 15,\n\t\t\t\t\"scheduledVisits\": 3,\n\t\t\t\t\"discipleshipVisits\": 6,\n\t\t\t\t\"christianChildren\": 10,\n\t\t\t\t\"christianChildrenFriends\": 8,\n\t\t\t\t\"total\": 2173,\n\t\t\t\t\"offering\": 35000,\n\t\t\t\t\"churchAttendance\": 6,\n\t\t\t\t\"churchAttendanceChildren\": 5,\n\t\t\t\t\"conversions\": 3,\n\t\t\t\t\"reconciliations\": 1,\n\t\t\t\t\"conversionsChildren\": 5,\n\t\t\t\t\"brethrenPlanning\": 3,\n\t\t\t\t\"bibleReading\": 9,\n\t\t\t\t\"consolidated\": 8\n\t\t\t},\n\t\t\t\"observations\": [\n\t\t\t\t{\n\t\t\t\t\t\"observations\": \"VESTIBULUM AC DIAM SIT AMET QUAM VEHICULA ELEMENTUM SED SIT AMET DUI. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. SED PORTTITOR LECTUS NIBH.\\nLOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. CURABITUR ARCU ERAT, ACCUMSAN ID IMPERDIET ET, PORTTITOR AT SEM. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA.\\nVESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. VIVAMUS MAGNA JUSTO, LACINIA EGET CONSECTETUR SED, CONVALLIS AT TELLUS.\",\n\t\t\t\t\t\"date\": \"2021-04-01 00:15:00\"\n\t\t\t\t},\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t\t.\n\t\t\t]\n\t\t}\n\t]\n}",
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
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "field": "consolidates",
            "description": "<p>Datos de los reportes para consolidación.</p>"
          },
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
            "description": "<p>Datos de los reportes para miembros.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Reporte\",\n\t\"report\": {\n\t\t\"consolidations\": {\n\t\t\t\"title\": \"Consolidaciones\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Miembros registrados\",\n\t\t\t\t\t\"qty\": 6\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Miembros visitados\",\n\t\t\t\t\t\"qty\": 2\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 8\n\t\t},\n\t\t\"courses\": {\n\t\t\t\"title\": \"Cursos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Publicados\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Borradores\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Viendo\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 2\n\t\t},\n\t\t\"events\": {\n\t\t\t\"title\": \"Eventos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Pendientes\",\n\t\t\t\t\t\"qty\": 0\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Finalizados\",\n\t\t\t\t\t\"qty\": 7\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 7\n\t\t},\n\t\t\"groups\": {\n\t\t\t\"title\": \"Grupos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Sin miembros\",\n\t\t\t\t\t\"qty\": 3\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Con miembros\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 4\n\t\t},\n\t\t\"users\": {\n\t\t\t\"title\": \"Miembros\",\n\t\t\t\"qty\": 8,\n\t\t\t\"ages\": {\n\t\t\t\t\"title\": \"Edades\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"0 a 15 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"16 a 20 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"21 a 30 años\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"31 a 40 años\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"41 a 50 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"51 a 60 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Mayores de 61 años\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"No indicados\",\n\t\t\t\t\t\t\"qty\": 5\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"families\": {\n\t\t\t\t\"title\": \"Miembros y grupos\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"No pertenece\",\n\t\t\t\t\t\t\"qty\": 7\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Pertenece\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"gender\": {\n\t\t\t\t\"title\": \"Géneros\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Hombres\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Mujeres\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Otro\",\n\t\t\t\t\t\t\"qty\": 5\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"roles\": {\n\t\t\t\t\"title\": \"Roles\",\n\t\t\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Admins\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Pastores\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Supervisores\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Líderes\",\n\t\t\t\t\t\t\"qty\": 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Personas\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}\n}",
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
    "type": "put",
    "url": "/api/admin/settings/banners",
    "title": "(02) Agregar un banner.",
    "version": "0.0.37",
    "name": "addBannerSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si se mostrará el banner una vez guardado.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"active\": false\n}",
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si la imagen se encuentra activa.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación de la imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha agregado el banner exitosamente.\",\n  \"data\": {\n    \"active\": false,\n    \"_id\": \"611d4b40494b0623b8e2f921\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg\",\n    \"created_at\": \"2021-08-18 13:06:08\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin",
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
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, la imagen suministrada es incorrecta.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/settings/logos",
    "title": "(05) Agregar un logo.",
    "version": "0.0.37",
    "name": "addLogoSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "field": "picture",
            "description": "<p>Base64 de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si se mostrará el logo una vez guardado.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n  \"active\": false\n}",
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si la imagen se encuentra activa.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación de la imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha agregado el logo exitosamente.\",\n  \"data\": {\n    \"active\": false,\n    \"_id\": \"611d4b40494b0623b8e2f921\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg\",\n    \"created_at\": \"2021-08-18 13:06:08\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin",
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
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"picture\",\n      \"msg\": \"Disculpe, la imagen suministrada es incorrecta.\"\n    }\n  ]\n}",
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
    "url": "/api/admin/settings/banners/:_id/:action",
    "title": "(03) Activar / Desactivar un banner.",
    "version": "0.0.37",
    "name": "changeStatusBannerSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>ID del banner.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Acción a realizar (valores: active = activar | disable = desactivar).</p>"
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
            "description": "<p>Datos de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si la imagen se encuentra activa.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación de la imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el banner exitosamente.\",\n  \"data\": {\n    \"active\": false,\n    \"_id\": \"611d4b40494b0623b8e2f921\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg\",\n    \"created_at\": \"2021-08-18 13:06:08\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found banner",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la portada seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid banner ID",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la portada seleccionada es incorrecta.\"\n}",
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
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin"
  },
  {
    "type": "put",
    "url": "/api/admin/settings/logos/:_id/:action",
    "title": "(06) Activar / Desactivar un logo.",
    "version": "0.0.37",
    "name": "changeStatusLogoSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>ID del logo.</p>"
          },
          {
            "group": "Path params",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Acción a realizar (valores: active = activar | disable = desactivar).</p>"
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID configuración.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "logos",
            "description": "<p>Listado de logos.</p>"
          }
        ],
        "logos Object[]": [
          {
            "group": "logos Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si la imagen se encuentra activa.</p>"
          },
          {
            "group": "logos Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "logos Object[]",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen.</p>"
          },
          {
            "group": "logos Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación de la imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el logo exitosamente.\",\n  \"data\": {\n    \"active\": false,\n    \"_id\": \"611d4b40494b0623b8e2f921\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg\",\n    \"created_at\": \"2021-08-18 13:06:08\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no se logró determinar la acción a realizar.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found logo",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el logo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid logo ID",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el logo seleccionado es incorrecto.\"\n}",
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
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin"
  },
  {
    "type": "delete",
    "url": "/api/admin/settings/banners/:_id",
    "title": "(04) Eliminar un banner.",
    "version": "0.0.37",
    "name": "deleteBannerSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>ID del banner.</p>"
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha eliminado el banner exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin",
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
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found banner",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero la portada seleccionada no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid banner ID",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero la portada seleccionada es incorrecta.\"\n}",
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
    "url": "/api/admin/settings/logos/:_id",
    "title": "(07) Eliminar un logo.",
    "version": "0.0.37",
    "name": "deleteLogoSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>ID del logo.</p>"
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha eliminado el logo exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin",
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
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found logo",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero el logo seleccionado no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid logo ID",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el logo seleccionado es incorrecto.\"\n}",
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
    "url": "/api/admin/settings",
    "title": "(00) Obtener ajustes del sistema.",
    "version": "0.0.37",
    "name": "getSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "facebook",
            "description": "<p>URL de Facebook.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "instagram",
            "description": "<p>URL de Instagram.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "twitter",
            "description": "<p>URL de Twitter.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "web",
            "description": "<p>URL de Website.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "youtube",
            "description": "<p>URL de YouTube.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID configuración.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "logos",
            "description": "<p>Listado de logos.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "banners",
            "description": "<p>Listado de portadas.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Última actualización de la configuración.</p>"
          }
        ],
        "logos and banners Object[]": [
          {
            "group": "logos and banners Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indica si la imagen se encuentra activa.</p>"
          },
          {
            "group": "logos and banners Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "logos and banners Object[]",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen.</p>"
          },
          {
            "group": "logos and banners Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación de la imagen.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Ajustes.\",\n  \"data\": {\n    \"facebook\": null,\n    \"instagram\": null,\n    \"web\": null,\n    \"youtube\": null,\n    \"_id\": \"611d13dc6f09d40f2c371def\",\n    \"logos\": [\n      {\n        \"active\": false,\n        \"_id\": \"611d4b40494b0623b8e2f921\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/logos/picture-1629309756.jpg\",\n        \"created_at\": \"2021-08-18 13:06:08\"\n      },\n      .\n      .\n      .\n    ],\n    \"banners\": [\n      {\n        \"active\": false,\n        \"_id\": \"611d5b60338fdf491936acbb\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/settings/banners/picture-1629313884.jpg\",\n        \"created_at\": \"2021-08-18 14:11:28\"\n      },\n      .\n      .\n      .\n    ],\n    \"updated_at\": \"2021-08-18 09:06:20\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin",
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
    "url": "/api/admin/settings",
    "title": "(01) Actualizar urls de redes sociales o website.",
    "version": "0.0.37",
    "name": "updateSettingsAdmin",
    "group": "SettingsAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión del administrador.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "facebook",
            "description": "<p>URL de Facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "instagram",
            "description": "<p>URL de Instagram.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "twitter",
            "description": "<p>URL de Website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "web",
            "description": "<p>URL de Website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "youtube",
            "description": "<p>URL de YouTube.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"facebook\": \"https://facebook.com/link\",\n  \"instagram\": \"https://instagram.com/link\",\n  \"twitter\": \"https://twitter.com/link\",\n  \"web\": \"https://website.com/\",\n  \"youtube\": \"https://youtube.com/channel/abcchanel\"\n}",
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
            "description": "<p>Respuesta de retorno.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "facebook",
            "description": "<p>URL de Facebook.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "instagram",
            "description": "<p>URL de Instagram.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "twitter",
            "description": "<p>URL de Twitter.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "web",
            "description": "<p>URL de Website.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "youtube",
            "description": "<p>URL de YouTube.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID configuración.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado la configuración exitosamente.\",\n  \"data\": {\n    \"facebook\": \"https://facebook.com/link\",\n    \"instagram\": \"https://instagram.com/link\",\n    \"twitter\": \"https://twitter.com/link\",\n    \"web\": \"https://website.com/\",\n    \"youtube\": \"https://youtube.com/channel/abcchanel\"\n    \"_id\": \"611d13dc6f09d40f2c371def\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"facebook\",\n      \"msg\": \"Disculpe, pero la URL de Facebook indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"instagram\",\n      \"msg\": \"Disculpe, pero la URL de Instagram indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"twitter\",\n      \"msg\": \"Disculpe, pero la URL de Twitter indicada es incorrecta.\"\n    },\n    {\n      \"input\": \"web\",\n      \"msg\": \"Disculpe, pero la URL del Sitio Web indicad es incorrecto.\"\n    },\n    {\n      \"input\": \"youtube\",\n      \"msg\": \"Disculpe, pero la URL de YouTube indicada es incorrecta.\"\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Not found settings",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"Disculpe, pero ha ocurrido un error al obtener la configuración.\"\n}",
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
    "filename": "Docs/Admin/SettingsAdmin.js",
    "groupTitle": "SettingsAdmin"
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
    "type": "delete",
    "url": "/api/user/resources/:_id",
    "title": "(02) Eliminar un documento compartido.",
    "version": "0.0.51",
    "name": "deleteUserDocuments",
    "group": "UserDocuments",
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
            "field": "_id",
            "description": "<p>ID del documento compartido.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha eliminado el documento exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n\t\"msg\": \"Disculpe, pero el documento seleccionado es incorrecto..\"\n}",
          "type": "JSON"
        },
        {
          "title": "Share documento not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"msg\": \"Disculpe, pero el documento seleccionado no existe o no se encuentra disponible.\"\n}",
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
    "filename": "Docs/UserDocuments.js",
    "groupTitle": "UserDocuments"
  },
  {
    "type": "get",
    "url": "/api/user/resources",
    "title": "(01) Obtener listado de documentos compartidos.",
    "version": "0.0.51",
    "name": "getUserDocuments",
    "group": "UserDocuments",
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
            "field": "resources",
            "description": "<p>Listado de retorno.</p>"
          }
        ],
        "resources Object[]": [
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del recurso compartido.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del recurso.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "String",
            "optional": false,
            "field": "urlDoc",
            "description": "<p>URL del documento PDF.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Listado de roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del documento.</p>"
          },
          {
            "group": "resources Object[]",
            "type": "Number",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de actalización del documento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Mis recursos compartidos\",\n  \"resources\": [\n    {\n      \"_id\": \"6252676c8400314c8c94c0ee\",\n      \"title\": \"PRUEBA DOCUMENTO\",\n      \"urlDoc\": \"https://delii.s3.amazonaws.com/alma/resources/documento-1649567592.pdf\",\n      \"roles\": [\n        0,\n        1,\n        2,\n        3\n      ],\n      \"created_at\": 1649567596,\n      \"updated_at\": 1649567596\n    }\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Mis recursos compartidos\",\n\t\"resources\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserDocuments.js",
    "groupTitle": "UserDocuments",
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
    "url": "/api/user/resources",
    "title": "(00) Agregar nuevo documento.",
    "version": "0.0.51",
    "name": "saveUserDocuments",
    "group": "UserDocuments",
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
            "field": "title",
            "description": "<p>Título para el documento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Base64 del documento PDF.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "rolesList",
            "description": "<p>Roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request Consolidated",
        "content": "{\n  \"title\": \"Prueba documento\",\n  \"rolesList\": [0, 1, 2, 3],\n  \"file\": \"data:application/pdf;base64,JVBERi0xLjUNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdG....\",\n}",
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
            "field": "resource",
            "description": "<p>Datos de retorno.</p>"
          }
        ],
        "resource Object": [
          {
            "group": "resource Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del recurso compartido.</p>"
          },
          {
            "group": "resource Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título del recurso.</p>"
          },
          {
            "group": "resource Object",
            "type": "String",
            "optional": false,
            "field": "urlDoc",
            "description": "<p>URL del documento PDF.</p>"
          },
          {
            "group": "resource Object",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Listado de roles a los que va dirigido el documento (0 = admin, 1 = pastores, 2 = supervisores, 3 = líderes).</p>"
          },
          {
            "group": "resource Object",
            "type": "Number",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del documento.</p>"
          },
          {
            "group": "resource Object",
            "type": "Number",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de actalización del documento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha agregado el nuevo documento exitosamente.\",\n  \"resource\": {\n    \"_id\": \"625551d7f5598629dca06331\",\n    \"title\": \"PRUEBA DOCUMENTO\",\n    \"urlDoc\": \"https://delii.s3.amazonaws.com/alma/resources/documento-1649758676.pdf\",\n    \"roles\": [\n      0,\n      1,\n      2,\n      3\n    ],\n    \"created_at\": 1649758679,\n    \"updated_at\": 1649758679\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"title\",\n      \"msg\": \"Disculpe, pero indicar un título válido.\"\n    },\n    {\n      \"input\": \"file\",\n      \"msg\": \"Disculpe, pero el documento suministrado es incorrecto.\"\n    },\n    {\n      \"input\": \"rolesList\",\n      \"msg\": \"Disculpe, pero uno de los roles seleccionados no está permitido.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserDocuments.js",
    "groupTitle": "UserDocuments"
  },
  {
    "type": "post",
    "url": "/api/user/families-groups/:_id/reports",
    "title": "(04) Crear reporte a un grupo familiar.",
    "version": "0.0.28",
    "name": "createReportsGroupUserFamiliesGroups",
    "group": "UserFamiliesGroups",
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
            "field": "_id",
            "description": "<p>ID del grupo.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "brethren",
            "description": "<p>Número de hermanos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "friends",
            "description": "<p>Número de amigos de los hermanos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scheduledVisits",
            "description": "<p>Número de visitas programadas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discipleshipVisits",
            "description": "<p>Número de visitas al disipulado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "christianChildren",
            "description": "<p>Número de niños cristianos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "christianChildrenFriends",
            "description": "<p>Número de amigos de los niños cristianos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Número de total de hermanos y sus amigos, y niños y sus amigos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offering",
            "description": "<p>Total de ofrendas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "churchAttendance",
            "description": "<p>Número de asistencias a la iglesia.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "churchAttendanceChildren",
            "description": "<p>Número de asistencia de niños a la iglesia.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "conversions",
            "description": "<p>Número de conversiones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reconciliations",
            "description": "<p>Número de reconciliaciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "conversionsChildren",
            "description": "<p>Número de conversiones de niños.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "brethrenPlanning",
            "description": "<p>Número de hermanos planeando.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bibleReading",
            "description": "<p>Número de lecturas bíblicas.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Número de consolidados.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "observations",
            "description": "<p>Observaciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del reporte.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"brethren\": 2,\n  \"friends\": 2,\n  \"christianChildren\": 1,\n  \"christianChildrenFriends\": 1,\n  \"scheduledVisits\": 0,\n  \"discipleshipVisits\": 0,\n  \"offering\": 0,\n  \"churchAttendance\": 0,\n  \"churchAttendanceChildren\": 0,\n  \"conversions\": 0,\n  \"reconciliations\": 0,\n  \"conversationsWithChildren\": 0,\n  \"brethrenPlanning\": 0,\n  \"bibleReading\": 0,\n  \"consolidated\": 0,\n  \"observations\": \"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.\\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.\",\n  \"date\": \"2021-04-10 01:15\"\n}",
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
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "brethren",
            "description": "<p>Número de hermanos.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "friends",
            "description": "<p>Número de amigos de los hermanos.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "scheduledVisits",
            "description": "<p>Número de visitas programadas.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "discipleshipVisits",
            "description": "<p>Número de visitas al disipulado.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildren",
            "description": "<p>Número de niños cristianos.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildrenFriends",
            "description": "<p>Número de amigos de los niños cristianos.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Número de total de hermanos y sus amigos, y niños y sus amigos.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "offering",
            "description": "<p>Total de ofrendas.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendance",
            "description": "<p>Número de asistencias a la iglesia.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendanceChildren",
            "description": "<p>Número de asistencia de niños a la iglesia.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "conversions",
            "description": "<p>Número de conversiones.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "reconciliations",
            "description": "<p>Número de reconciliaciones.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "conversionsChildren",
            "description": "<p>Número de conversiones de niños.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "brethrenPlanning",
            "description": "<p>Número de hermanos planeando.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "bibleReading",
            "description": "<p>Número de lecturas bíblicas.</p>"
          },
          {
            "group": "data Object",
            "type": "Number",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Número de consolidados.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "observations",
            "description": "<p>Observaciones.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del reporte.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha agregado el reporte exitosamente.\",\n\t\"data\": {\n\t\t\"brethren\": 2,\n\t\t\"friends\": 2,\n\t\t\"scheduledVisits\": 0,\n\t\t\"discipleshipVisits\": 0,\n\t\t\"christianChildren\": 1,\n\t\t\"christianChildrenFriends\": 1,\n\t\t\"total\": 6,\n\t\t\"offering\": 0,\n\t\t\"churchAttendance\": 0,\n\t\t\"churchAttendanceChildren\": 0,\n\t\t\"conversions\": 0,\n\t\t\"reconciliations\": 0,\n\t\t\"conversationsWithChildren\": 0,\n\t\t\"brethrenPlanning\": 0,\n\t\t\"bibleReading\": 0,\n\t\t\"consolidated\": 0,\n\t\t\"observations\": \"VESTIBULUM AC DIAM SIT AMET QUAM VEHICULA ELEMENTUM SED SIT AMET DUI. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. SED PORTTITOR LECTUS NIBH.\\nLOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. CURABITUR ARCU ERAT, ACCUMSAN ID IMPERDIET ET, PORTTITOR AT SEM. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA.\\nVESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. VIVAMUS MAGNA JUSTO, LACINIA EGET CONSECTETUR SED, CONVALLIS AT TELLUS.\",\n\t\t\"date\": \"2021-04-10 00:15:00\"\n\t}\n}",
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
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parametros!\",\n    \"errors\": [\n        {\n            \"input\": \"brethren\",\n            \"msg\": \"Disculpe, pero debe indicar el número de hermanos.\"\n        },\n        .\n        .\n        .\n        {\n            \"input\": \"observations\",\n            \"msg\": \"Disculpe, pero debe indicar una dirección.\"\n        },\n        {\n            \"input\": \"date\",\n            \"msg\": \"Disculpe, pero debe indicar la fecha y hora del reporte.\"\n        }\n    ]\n}",
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
    "filename": "Docs/FamiliesGroups.js",
    "groupTitle": "UserFamiliesGroups"
  },
  {
    "type": "get",
    "url": "/api/user/families-groups/:_id",
    "title": "(02) Obtener detalles de un grupo familiar.",
    "version": "0.0.28",
    "name": "getDetailsGroupUserFamiliesGroups",
    "group": "UserFamiliesGroups",
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
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección del grupo.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Número del sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Número del sub-sector.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
          },
          {
            "group": "group Object",
            "type": "Object",
            "optional": false,
            "field": "members",
            "description": "<p>Miembros del grupo.</p>"
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
            "description": "<p>Fecha de la última actualización del grupo.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ],
        "members Object": [
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "leader",
            "description": "<p>Datos del líder del grupo.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "host",
            "description": "<p>Datos del anfitrión del grupo.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "assistant",
            "description": "<p>Datos del asistente del grupo.</p>"
          },
          {
            "group": "members Object",
            "type": "Object|Null",
            "optional": false,
            "field": "master",
            "description": "<p>Datos del maestro del grupo.</p>"
          }
        ],
        "leader, host, assistant and master Object": [
          {
            "group": "leader, host, assistant and master Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del miembro.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
          },
          {
            "group": "leader, host, assistant and master Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo que realiza el usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupo Familiar\",\n\t\"group\": {\n\t\t\"_id\": \"6063385c98fc731c04777829\",\n\t\t\"number\": 2,\n\t\t\"direction\": \"DIRECCIÓN CUALQUIERA ASDASD ASDASD\",\n\t\t\"sector\": 4,\n\t\t\"subSector\": 2,\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -64.18147,\n        10.451304\n      ]\n    },\n\t\t\"members\": {\n\t\t\t\"leader\": {\n\t\t\t\t\"_id\": \"604068b49b20e72f341972ed\",\n\t\t\t\t\"names\": \"LIDER\",\n\t\t\t\t\"lastNames\": \"PRUEBA\",\n\t\t\t\t\"document\": \"CC1234123411\",\n\t\t\t\t\"gender\": null,\n\t\t\t\t\"phone\": 573151234561,\n\t\t\t\t\"position\": null\n\t\t\t},\n\t\t\t\"host\": {\n\t\t\t\t\"_id\": \"604068461caad10e2c965406\",\n\t\t\t\t\"names\": \"PRUEBA\",\n\t\t\t\t\"lastNames\": \"USUARIO\",\n\t\t\t\t\"document\": \"CC123123123\",\n\t\t\t\t\"gender\": null,\n\t\t\t\t\"phone\": \"573151234567\",\n\t\t\t\t\"position\": \"ANFITRIÓN Y LÍDER\"\n\t\t\t},\n\t\t\t\"assistant\": {\n\t\t\t\t\"_id\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\t\t\"names\": \"PEDRO JOSÉ\",\n\t\t\t\t\"lastNames\": \"PÉREZ RODRIGUEZ\",\n\t\t\t\t\"document\": \"CC12345678\",\n\t\t\t\t\"gender\": 0,\n\t\t\t\t\"phone\": \"3161234567\",\n\t\t\t\t\"position\": null\n\t\t\t},\n\t\t\t\"master\": null\n\t\t},\n\t\t\"created_at\": \"2021-03-30 09:40:28\",\n\t\t\"updated_at\": \"2021-04-03 11:51:52\"\n\t}\n}",
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
    "filename": "Docs/FamiliesGroups.js",
    "groupTitle": "UserFamiliesGroups"
  },
  {
    "type": "get",
    "url": "/api/user/families-groups/:_id/reports",
    "title": "(03) Obtener reportes de un grupo familiar.",
    "version": "0.0.28",
    "name": "getReportsGroupUserFamiliesGroups",
    "group": "UserFamiliesGroups",
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
            "field": "data",
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "data Object": [
          {
            "group": "data Object",
            "type": "Object",
            "optional": false,
            "field": "report",
            "description": "<p>Datos del reporte.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "observations",
            "description": "<p>Listado de observaciones.</p>"
          }
        ],
        "report Object": [
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "brethren",
            "description": "<p>Número de hermanos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "friends",
            "description": "<p>Número de amigos de los hermanos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "scheduledVisits",
            "description": "<p>Número de visitas programadas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "discipleshipVisits",
            "description": "<p>Número de visitas al disipulado.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildren",
            "description": "<p>Número de niños cristianos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "christianChildrenFriends",
            "description": "<p>Número de amigos de los niños cristianos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Número de total de hermanos y sus amigos, y niños y sus amigos.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "offering",
            "description": "<p>Total de ofrendas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendance",
            "description": "<p>Número de asistencias a la iglesia.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "churchAttendanceChildren",
            "description": "<p>Número de asistencia de niños a la iglesia.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "conversions",
            "description": "<p>Número de conversiones.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "reconciliations",
            "description": "<p>Número de reconciliaciones.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "conversionsChildren",
            "description": "<p>Número de conversiones de niños.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "brethrenPlanning",
            "description": "<p>Número de hermanos planeando.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "bibleReading",
            "description": "<p>Número de lecturas bíblicas.</p>"
          },
          {
            "group": "report Object",
            "type": "Number",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Número de consolidados.</p>"
          }
        ],
        "observations Object[]": [
          {
            "group": "observations Object[]",
            "type": "String",
            "optional": false,
            "field": "observations",
            "description": "<p>Observaciones.</p>"
          },
          {
            "group": "observations Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha del reporte.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Reporte del grupo familiar\",\n\t\"data\": {\n\t\t\"report\": {\n\t\t\t\"brethren\": 16,\n\t\t\t\"friends\": 15,\n\t\t\t\"scheduledVisits\": 3,\n\t\t\t\"discipleshipVisits\": 6,\n\t\t\t\"christianChildren\": 10,\n\t\t\t\"christianChildrenFriends\": 8,\n\t\t\t\"total\": 2173,\n\t\t\t\"offering\": 35000,\n\t\t\t\"churchAttendance\": 6,\n\t\t\t\"churchAttendanceChildren\": 5,\n\t\t\t\"conversions\": 3,\n\t\t\t\"reconciliations\": 1,\n\t\t\t\"conversionsChildren\": 5,\n\t\t\t\"brethrenPlanning\": 3,\n\t\t\t\"bibleReading\": 9,\n\t\t\t\"consolidated\": 8\n\t\t},\n\t\t\"observations\": [\n\t\t\t{\n\t\t\t\t\"observations\": \"VESTIBULUM AC DIAM SIT AMET QUAM VEHICULA ELEMENTUM SED SIT AMET DUI. VIVAMUS SUSCIPIT TORTOR EGET FELIS PORTTITOR VOLUTPAT. VESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. SED PORTTITOR LECTUS NIBH.\\nLOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLA PORTTITOR ACCUMSAN TINCIDUNT. CURABITUR ARCU ERAT, ACCUMSAN ID IMPERDIET ET, PORTTITOR AT SEM. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA.\\nVESTIBULUM ANTE IPSUM PRIMIS IN FAUCIBUS ORCI LUCTUS ET ULTRICES POSUERE CUBILIA CURAE; DONEC VELIT NEQUE, AUCTOR SIT AMET ALIQUAM VEL, ULLAMCORPER SIT AMET LIGULA. CRAS ULTRICIES LIGULA SED MAGNA DICTUM PORTA. MAURIS BLANDIT ALIQUET ELIT, EGET TINCIDUNT NIBH PULVINAR A. VIVAMUS MAGNA JUSTO, LACINIA EGET CONSECTETUR SED, CONVALLIS AT TELLUS.\",\n\t\t\t\t\"date\": \"2021-04-01 00:15:00\"\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without information",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Reporte del grupo familiar\",\n\t\"data\": {\n\t\t\"report\": {\n\t\t\t\"brethren\": 0,\n\t\t\t\"friends\": 0,\n\t\t\t\"scheduledVisits\": 0,\n\t\t\t\"discipleshipVisits\": 0,\n\t\t\t\"christianChildren\": 0,\n\t\t\t\"christianChildrenFriends\": 0,\n\t\t\t\"total\": 0,\n\t\t\t\"offering\": 0,\n\t\t\t\"churchAttendance\": 0,\n\t\t\t\"churchAttendanceChildren\": 0,\n\t\t\t\"conversions\": 0,\n\t\t\t\"reconciliations\": 0,\n\t\t\t\"conversionsChildren\": 0,\n\t\t\t\"brethrenPlanning\": 0,\n\t\t\t\"bibleReading\": 0,\n\t\t\t\"consolidated\": 0\n\t\t},\n\t\t\"observations\": []\n\t}\n}",
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
    "filename": "Docs/FamiliesGroups.js",
    "groupTitle": "UserFamiliesGroups"
  },
  {
    "type": "get",
    "url": "/api/user/families-groups",
    "title": "(00) Obtener listado de grupos familiares.",
    "version": "0.0.28",
    "name": "getUserFamiliesGroups",
    "group": "UserFamiliesGroups",
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
            "field": "groups",
            "description": "<p>Listado de grupos familiares asociados al usuario.</p>"
          }
        ],
        "groups Object[]": [
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "sector",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "subSector",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Datos de la localización.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "Boolean",
            "optional": false,
            "field": "isLeader",
            "description": "<p>Indica si el miembro es líder.</p>"
          },
          {
            "group": "groups Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación del grupo.</p>"
          }
        ],
        "location Object": [
          {
            "group": "location Object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de coordenada.</p>"
          },
          {
            "group": "location Object",
            "type": "Number[]",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Coordenadas de la ubicación del grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": [\n    {\n      \"_id\": \"6063385c98fc731c04777829\",\n      \"number\": 1,\n      \"sector\": 1,\n      \"subSector\": 1,\n      \"direction\": \"DIRECCIÓN CUALQUIERA EDITADA\",\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          -64.18147,\n          10.451304\n        ]\n      },\n      \"isLeader\": true,\n      \"created_at\": \"2021-03-30 09:40:28\"\n    },\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Grupos familiares\",\n\t\"groups\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/FamiliesGroups.js",
    "groupTitle": "UserFamiliesGroups",
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
    "url": "/api/user/families-groups",
    "title": "(01) Unirse a un grupo familiar.",
    "version": "0.0.28",
    "name": "getUserFamiliesGroups",
    "group": "UserFamiliesGroups",
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
            "field": "familyGroupId",
            "description": "<p>ID del grupo al que se unirá.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"familyGroupId\": \"6063385c98fc731c04777829\",\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha unido al grupo familiar exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parametros!\",\n  \"errors\": [\n    {\n      \"input\": \"familyGroupId\",\n      \"msg\": \"Disculpe, pero el grupo familiar seleccionado es incorrecto.\"\n    }\n  ]\n}",
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
    "filename": "Docs/FamiliesGroups.js",
    "groupTitle": "UserFamiliesGroups"
  },
  {
    "type": "put",
    "url": "/api/user/group/:_id/members/add",
    "title": "(04) Agregar miembros al grupo.",
    "version": "0.0.46",
    "name": "addMemberFamilyUserGroup",
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
            "description": "<p>Listado de IDs de los miembros a agregar al grupo.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Solicitudes enviadas exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Can't add",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"msg\": \"Disculpe, pero no puede realizar esta acción.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n    },\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los miembros seleccionados son incorrectos.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "put",
    "url": "/api/user/group/invitations/_id",
    "title": "(08) Aceptar invitación de un grupo.",
    "version": "0.0.46",
    "name": "approveInvitationsUserGroup",
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
            "field": "_id",
            "description": "<p>ID de la invitación</p>"
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
        ],
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha aceptado la invitación exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invitation not found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"msg\": \"Disculpe, pero el grupo indicado en la invitación no existe o no se encuentra disponible.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error token",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"msg\": \"Disculpe, pero no se logró encontrar los datos de su sesión.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invalid invitation _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero la invitación seleccionada es incorrecta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invitation not found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"msg\": \"Disculpe, pero la invitación seleccionada no existe o no se encuentra disponible.\"\n}",
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
    "type": "delete",
    "url": "/api/user/group/:_id",
    "title": "(03) Eliminar un grupo.",
    "version": "0.0.46",
    "name": "deleteFamilyUserGroup",
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
      "examples": [
        {
          "title": "Can't delete",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no puede realizar esta acción.\"\n}",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/group/person/:memberId",
    "title": "(09) Obtener datos de un miembro del grupo familiar.",
    "version": "0.0.46",
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
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de hijos espirituales.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "Boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición realizada por el miembro al momento de registrarse.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
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
            "type": "String",
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
          },
          {
            "group": "courses Object[]",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si ha aprobado el curso o no.</p>"
          }
        ],
        "referrals Object[]": [
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Numbers",
            "optional": false,
            "field": "totalsReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Miembro.\",\n\t\"data\": {\n\t\t\"member\": {\n      \"email\": \"pedro@example.com\",\n      \"position\": null,\n      \"gender\": 0,\n      \"birthday\": \"1994-07-07\",\n      \"civilStatus\": 0,\n      \"consolidated\": false,\n      \"petition\": null,\n      \"department\": 0,\n      \"city\": 0,\n      \"locality\": \"LOCALIDAD INICIAL\",\n      \"direction\": \"CUALQUIER DIRECCIÓN\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n      \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n      \"phone\": \"3161234567\",\n      \"names\": \"PEDRO JOSÉ\",\n      \"lastNames\": \"PÉREZ RODRIGUEZ\"\n\t\t},\n\t\t\"totalReferrals\": 1,\n\t\t\"totalCourses\": 5,\n\t\t\"courses\": [\n\t\t\t{\n\t\t\t\t\"_id\": \"603afb2309bf7a3428ac58f7\",\n\t\t\t\t\"slug\": \"nivel-uno\",\n\t\t\t\t\"title\": \"NIVEL UNO\",\n\t\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\t\"level\": 1\n\t\t\t\t\"approved\": true\n\t\t\t},\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"referrals\": [\n      {\n        \"_id\": \"604068461caad10e2c965406\",\n        \"names\": \"PRUEBA\",\n        \"lastNames\": \"USUARIO\",\n        \"document\": \"CC123123123\",\n        \"gender\": null,\n        \"phone\": \"573151234567\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n        \"position\": null,\n        \"totalsReferrals\": 0\n      },\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t]\n\t}\n}",
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
    "title": "(01) Obtener datos del grupo familiar.",
    "version": "0.0.46",
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
            "description": "<p>Datos del grupo familiar del miembro.</p>"
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
            "field": "userid",
            "description": "<p>ID del creador del grupo.</p>"
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
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mi grupo familiar\",\n\t\"group\": {\n\t\t\"_id\": \"6018e503e02a45115407e82f\",\n\t\t\"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n\t\t\"code\": \"AAA-001\",\n\t\t\"userid\": \"5fcf0821fc917d476c1cf3e3\",\n\t\t\"members\": [\n      {\n        \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n        \"names\": \"PEDRO JOSÉ\",\n        \"lastNames\": \"PÉREZ RODRIGUEZ\",\n        \"document\": \"CC12345678\",\n        \"gender\": null,\n        \"phone\": \"3161234567\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n        \"position\": null\n      },\n\t\t\t.\n\t\t\t.\n\t\t\t.\n\t\t],\n\t\t\"created_at\": \"2021-02-02 00:37:07\",\n\t\t\"updated_at\": \"2021-02-02 02:45:50\"\n\t}\n}",
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
    "url": "/api/user/group/invitations/totals",
    "title": "(07) Obtener invitaciones de grupos.",
    "version": "0.0.46",
    "name": "invitationsUserGroup",
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
            "type": "Object[]",
            "optional": false,
            "field": "invitations",
            "description": "<p>Listado de invitaciones.</p>"
          }
        ],
        "invitations Object[]": [
          {
            "group": "invitations Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID de la invitación.</p>"
          },
          {
            "group": "invitations Object[]",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Datos del grupo.</p>"
          },
          {
            "group": "invitations Object[]",
            "type": "Object",
            "optional": false,
            "field": "member",
            "description": "<p>Datos del miembro que envió la solicitud.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "totalMembers",
            "description": "<p>Total de miembros del grupo.</p>"
          }
        ],
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Invitaciones\",\n  \"invitations\": [\n    {\n      \"_id\": \"623fa770c51b0f2f74de4559\",\n      \"group\": {\n        \"_id\": \"623ed5890572e33ef0fbb2b3\",\n        \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n        \"code\": \"AAA-001\",\n        \"totalMembers\": 1\n      },\n      \"member\": {\n        \"_id\": \"617a09bd2b0b95656950e9c3\",\n        \"names\": \"USUARIO\",\n        \"lastNames\": \"PRUEBA\",\n        \"document\": null,\n        \"gender\": null,\n        \"phone\": \"3161234567\",\n        \"picture\": \"https://delii.s3.amazonaws.com/alma/users/617a09bd2b0b95656950e9c3/picture-617a09bd2b0b95656950e9c3-1635521638.jpg\",\n        \"position\": null\n      }\n    }\n  ]\n}",
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
    "type": "delete",
    "url": "/api/user/group/invitations/_id",
    "title": "(08) Rechazar invitación de un grupo.",
    "version": "0.0.46",
    "name": "rejectInvitationsUserGroup",
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
            "field": "_id",
            "description": "<p>ID de la invitación</p>"
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
        ],
        "members Object or members Object[]": [
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object or members Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha rechazado la invitación exitosamente.\"\n}",
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
          "title": "Invalid invitation _id",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"Disculpe, pero la invitación seleccionada es incorrecta.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Invitation not found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"msg\": \"Disculpe, pero la invitación seleccionada no existe o no se encuentra disponible.\"\n}",
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
    "url": "/api/user/group/:_id/members/remove",
    "title": "(05) Remover miembros del grupo.",
    "version": "0.0.46",
    "name": "removeMembersFamilyUserGroup",
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
            "description": "<p>Listado de IDs de los miembros a remover del grupo.</p>"
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
          "title": "Can't add",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"msg\": \"Disculpe, pero no puede realizar esta acción.\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error data",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los datos enviados son incorrectos.\"\n    },\n    {\n      \"input\": \"members\",\n      \"msg\": \"Disculpe, pero los miembros seleccionados son incorrectos.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/group",
    "title": "(00) Crear grupo familiar.",
    "version": "0.0.46",
    "name": "saveFamilyUserGroup",
    "group": "UserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token de la sesión (persona).</p>"
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
        "content": "{\n    \"name\": \"Familia Rodriguez\",\n    \"code\": \"ROD-001\"\n}",
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
            "description": "<p>ID del miembro que creó el grupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha creado el núcleo familiar exitosamente.\",\n    \"group\": {\n        \"_id\": \"6018fbe959529c4068b62af5\",\n        \"name\": \"FAMILIA RODRIGUEZ\",\n        \"code\": \"ROD-001\",\n        \"members\": [],\n        \"created_at\": \"2021-02-02 02:14:49\",\n        \"updated_at\": \"2021-02-02 02:14:49\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e2\"\n    }\n}",
          "type": "JSON"
        },
        {
          "title": "Success with auto-code",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha creado el grupo exitosamente.\",\n    \"group\": {\n        \"_id\": \"6018fbe959529c4068b62af5\",\n        \"name\": \"FAMILIA RODRIGUEZ\",\n        \"code\": \"GROUP-1\",\n        \"members\": [],\n        \"created_at\": \"2021-02-02 02:14:49\",\n        \"updated_at\": \"2021-02-02 02:14:49\",\n        \"userid\": \"5fcf0821fc917d476c1cf3e2\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"name\",\n      \"msg\": \"Disculpe, pero debe indicar un nombre para el grupo.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/group/invitations/totals",
    "title": "(06) Obtener total de invitaciones de grupos.",
    "version": "0.0.46",
    "name": "totalsInvitationsUserGroup",
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
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de invitaciones.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Total de invitaciones\",\n  \"totals\": 1\n}",
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
    "type": "put",
    "url": "/api/user/group/:_id",
    "title": "(02) Actualizar un grupo familiar.",
    "version": "0.0.46",
    "name": "updateFamilyUserGroup",
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
        "content": "{\n    \"name\": \"Familia Velasquez Rodriguez\",\n    \"code\": \"AAA-001\"\n}",
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
            "field": "userid",
            "description": "<p>ID del creador del grupo.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Se ha actualizado el núcleo familiar exitosamente.\",\n  \"group\": {\n    \"_id\": \"6018e503e02a45115407e82f\",\n    \"name\": \"FAMILIA VELASQUEZ RODRIGUEZ\",\n    \"userid\": \"5fcf0821fc917d476c1cf3e3\",\n    \"code\": \"AAA-001\",\n    \"created_at\": \"2021-02-02 00:37:07\",\n    \"updated_at\": \"2021-02-02 02:16:16\"\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Can't edit",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero no puede realizar esta acción.\"\n}",
          "type": "JSON"
        },
        {
          "title": "The code exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.\"\n}",
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
    "filename": "Docs/UserGroup.js",
    "groupTitle": "UserGroup"
  },
  {
    "type": "get",
    "url": "/api/user/referrals/:memberId",
    "title": "(02) Obtener datos de un hijo espiritual.",
    "version": "0.0.36",
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
            "type": "Number",
            "optional": false,
            "field": "totalsReferrals",
            "description": "<p>Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Listado de cursos.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de hijos espirituales.</p>"
          },
          {
            "group": "data Object",
            "type": "Object[]",
            "optional": false,
            "field": "visits",
            "description": "<p>Listado de visitas.</p>"
          }
        ],
        "member Object": [
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "member Object",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) del estado civil del miembro.</p>"
          },
          {
            "group": "member Object",
            "type": "Boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "member Object",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición realizada por el miembro al momento de registrarse.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
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
            "type": "String",
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
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Listado de roles.</p>"
          },
          {
            "group": "member Object",
            "type": "String",
            "optional": false,
            "field": "chuch",
            "description": "<p>ID de la iglesia a que asiste.</p>"
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
          },
          {
            "group": "courses Object[]",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si ha aprobado el curso o no.</p>"
          }
        ],
        "visits Object[]": [
          {
            "group": "visits Object[]",
            "type": "Object|Null",
            "optional": false,
            "field": "consolidator",
            "description": "<p>ID del curso.</p>"
          },
          {
            "group": "visits Object[]",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la visita (YYYY-MM-DD).</p>"
          },
          {
            "group": "visits Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "action",
            "description": "<p>Acción realizada (Visita ó llamada).</p>"
          },
          {
            "group": "visits Object[]",
            "type": "String",
            "optional": false,
            "field": "observation",
            "description": "<p>Observaciones obtenidas en la visita.</p>"
          }
        ],
        "referrals and consolidator Object[]": [
          {
            "group": "referrals and consolidator Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "referrals and consolidator Object[]",
            "type": "Numbers",
            "optional": false,
            "field": "totalsReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Miembro.\",\n  \"data\": {\n    \"member\": {\n      \"email\": \"4121490198@example.com\",\n      \"position\": null,\n      \"gender\": null,\n      \"birthday\": null,\n      \"civilStatus\": null,\n      \"consolidated\": false,\n      \"petition\": null,\n      \"department\": null,\n      \"city\": null,\n      \"locality\": null,\n      \"direction\": null,\n      \"picture\": null,\n      \"_id\": \"605e37d154abd33060a689dc\",\n      \"phone\": \"573151234568\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"VELÁSQUEZ\",\n      \"roles\": [ 3, 4 ],\n      \"church\": \"624a357644f15f3ce8200c2f\"\n    },\n    \"totalCourses\": 9,\n    \"totalReferrals\": 6,\n    \"courses\": [\n      {\n        \"_id\": \"603afb2309bf7a3428ac58f1\",\n        \"slug\": \"nivel-uno-2\",\n        \"title\": \"NIVEL UNO\",\n        \"description\": \"Donec sollicitudin molestie malesuada. ...\",\n        \"level\": 1,\n        \"approved\": false\n      },\n      .\n      .\n      .\n    ],\n    \"referrals\": [\n      {\n        \"_id\": \"607fb9d275581c087c36922c\",\n        \"names\": \"EIMY VALENTINA\",\n        \"lastNames\": \"VELASQUEZ TIRADO\",\n        \"document\": null,\n        \"gender\": null,\n        \"phone\": \"3167654321\",\n        \"picture\": null,\n        \"position\": null,\n        \"totalsReferrals\": 0\n      },\n      .\n      .\n      .\n    ],\n    \"visits\": []\n  }\n}",
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
    "title": "(01) Obtener listado de hijos espirituales.",
    "version": "0.0.36",
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
            "type": "Object|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>Datos del padre espiritual de este usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totals",
            "description": "<p>Total de hijos espirituales del miembro (este incluye sus hijos y los hijos de sus hijos).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de hijos espirituales.</p>"
          }
        ],
        "referred Object": [
          {
            "group": "referred Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referred Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombres.</p>"
          },
          {
            "group": "referred Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellidos.</p>"
          },
          {
            "group": "referred Object",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referred Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo del miembro.</p>"
          },
          {
            "group": "referred Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
          }
        ],
        "referred Object[]": [
          {
            "group": "referred Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referred Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "referred Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ],
        "referrals Object[]": [
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Numbers",
            "optional": false,
            "field": "totalsReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Mis referidos.\",\n  \"referred\": {\n    \"_id\": \"5fcf0821fc917d476c1cf3e2\",\n    \"names\": \"ANTHONY EDITADO\",\n    \"lastNames\": \"ADMINISTRADOR\",\n    \"document\": null,\n    \"gender\": null,\n    \"phone\": \"31612345678\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n    \"position\": null\n  },\n  \"totalsGroups\": 1,\n  \"totals\": 21,\n  \"referrals\": [\n    {\n      \"_id\": \"6081200245db7c27e4c91908\",\n      \"names\": \"ALEJANDRO\",\n      \"lastNames\": \"RODRIGUEZ\",\n      \"document\": null,\n      \"gender\": 2,\n      \"phone\": \"4121490195\",\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e2/picture-5fcf0821fc917d476c1cf3e2-1629235616.jpg\",\n      \"position\": null,\n      \"totalsReferrals\": 0\n    },\n    .\n    .\n    .\n  ]\n}",
          "type": "JSON"
        },
        {
          "title": "Success without data",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis referidos.\",\n\t\"referred\": null,\n\t\"totals\": 0,\n\t\"referrals\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "Docs/UserReferrals.js",
    "groupTitle": "UserReferrals",
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
    "url": "/api/user/referrals/visit",
    "title": "(03) Registrar visita a un hijo espiritual.",
    "version": "0.0.39",
    "name": "saveVisitUserReferrals",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>ID del miembro visitado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la visita (YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Number|Null",
            "optional": false,
            "field": "action",
            "description": "<p>Acción realizada (0 = Visita, 1 = Llamada).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "observation",
            "description": "<p>Observaciones de la visita.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request with Referred",
        "content": "{\n\t\"userId\": \"5fcf0821fc917d476c1cf3e2\",\n  \"visitor\": \"611902c09e346616b6eaadb5\",\n\t\"date\": \"2021-04-01\",\n\t\"action\": 1,\n\t\"observation\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\"\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha registrado la visita al consolidado exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"userId\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado para la visita es incorrecto.\"\n    },\n    {\n      \"input\": \"visitor\",\n      \"msg\": \"Disculpe, pero el miembro seleccionado como visitador es incorrecto.\"\n    },\n    {\n      \"input\": \"date\",\n      \"msg\": \"Disculpe, pero indicar una fecha para la visita.\"\n    },\n    {\n      \"input\": \"observation\",\n      \"msg\": \"Disculpe, pero indicar un observación válida.\"\n    },\n    {\n      \"input\": \"action\",\n      \"msg\": \"Disculpe, pero debe indicar el tipo de acción realizada.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserReferrals.js",
    "groupTitle": "UserReferrals"
  },
  {
    "type": "post",
    "url": "/api/user/referrals",
    "title": "(00) Registrar nuevo referido (hijo espiritual/consolidado).",
    "version": "0.0.31",
    "name": "saveVisitUserReferrals",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) Estado civil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del genero (sexo).</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Barrio o localidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>ID del miembro consolidador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición solicitada por el nuevo miembro.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "attendGroup",
            "description": "<p>Indica si el miembro asiste a un grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "groupId",
            "description": "<p>ID del grupo al que asiste el nuevo miembro.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request Consolidated",
        "content": "{\n  \"phone\": \"573161234567\",\n  \"names\": \"Anthony alejandro\",\n  \"lastNames\": \"Velasquez rodriguez\",\n  \"email\": \"anthony@example.com\",\n  \"birthday\": \"1994-07-07\",\n  \"civilStatus\": 0,\n  \"gender\": 0,\n  \"locality\": 'Barrio nuevo',\n  \"direction\": 'Dirección cualquiera',\n  \"consolidated\": true,\n  \"referred\": \"605e37d154abd33060a689dc\",\n  \"petition\": \"Por la familia, por salud y por mejora económica.\",\n  \"attendGroup\": true,\n  \"groupId\": \"6063385c98fc731c04777829\",\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha registrado el nuevo miebro exitosamente.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"phone\",\n      \"msg\": \"Disculpe, pero debe indicar un número de teléfono.\"\n    },\n    {\n      \"input\": \"names\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro.\"\n    },\n    {\n      \"input\": \"lastNames\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar el apellido del miembro.\"\n    }\n  ]\n}",
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
    "filename": "Docs/UserReferrals.js",
    "groupTitle": "UserReferrals"
  },
  {
    "type": "put",
    "url": "/api/user/change-password",
    "title": "(03) Cambiar contraseña.",
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
    "title": "(04) Obtener cursos de un miembro.",
    "version": "0.0.28",
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
            "description": "<p>Listado de curso del miembro.</p>"
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
          },
          {
            "group": "courses Object[]",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
          },
          {
            "group": "courses Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "approved",
            "description": "<p>Indica si ha aprobado el curso o no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis cursos.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603afb2309bf7a3428ac58f1\",\n\t\t\t\"slug\": \"nivel-uno\",\n\t\t\t\"title\": \"NIVEL UNO\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"level\": 1,\n\t\t\t\"approved\": false\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "version": "0.0.50",
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
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición.</p>"
          },
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
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "group",
            "description": "<p>ID del grupo al que pertenece.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición solicitada al ser consolidado.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "attendGroup",
            "description": "<p>Indica si asiste a un grupo familiar.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
          },
          {
            "group": "data Object",
            "type": "Number[]",
            "optional": false,
            "field": "familyGroupId",
            "description": "<p>IDs de los grupos familiares de los que forma parte.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombrede la localidad.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen de perfil.</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "consolidatorId",
            "description": "<p>Id del miembro que lo consolidó.</p>"
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
            "description": "<p>ID del miembro.</p>"
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
            "type": "String|Null",
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
            "type": "String|Null",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que pertenece.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Datos de la sesión\",\n  \"data\": {\n    \"email\": \"pedro@example.com\",\n    \"position\": null,\n    \"gender\": 0,\n    \"birthday\": \"1994-07-07\",\n    \"civilStatus\": 0,\n    \"educationLevel\": 4,\n    \"profession\": 90,\n    \"bloodType\": 7,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true,\n    \"roles\": [\n      4\n    ],\n    \"consolidated\": false,\n    \"group\": \"60330f5102626e2040bd2393\",\n    \"petition\": null,\n    \"attendGroup\": false,\n    \"meetingNew\": false,\n    \"familyGroupId\": [\n      \"6063385c98fc731c04777829\"\n    ],\n    \"department\": 0,\n    \"city\": 0,\n    \"locality\": \"LOCALIDAD INICIAL\",\n    \"direction\": \"CUALQUIER DIRECCIÓN\",\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n    \"_id\": \"5fcf0821fc917d476c1cf3e3\",\n    \"consolidatorId\": \"605fa31b5260482550a9a3bf\",\n    \"created_at\": \"2020-12-07 23:59:12\",\n    \"updated_at\": \"2021-08-18 06:45:28\",\n    \"phone\": \"3161234567\",\n    \"document\": \"CC12345678\",\n    \"names\": \"PEDRO JOSÉ\",\n    \"lastNames\": \"PÉREZ RODRIGUEZ\",\n    \"church\": \"624a357644f15f3ce8200c2f\"\n  }\n}",
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
    "url": "/api/user/reports",
    "title": "(05) Obtener reportes de la cuenta.",
    "version": "0.0.43",
    "name": "getReportsUser",
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
        "Query Params": [
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
            "type": "Object",
            "optional": false,
            "field": "reports",
            "description": "<p>Listado de curso del miembro.</p>"
          }
        ],
        "reports Object": [
          {
            "group": "reports Object",
            "type": "Object",
            "optional": false,
            "field": "courses",
            "description": "<p>Cursos del miembro.</p>"
          },
          {
            "group": "reports Object",
            "type": "Object",
            "optional": false,
            "field": "referrals",
            "description": "<p>Referidos del miembro.</p>"
          },
          {
            "group": "reports Object",
            "type": "Object",
            "optional": false,
            "field": "visits",
            "description": "<p>Visitas realizadas.</p>"
          },
          {
            "group": "reports Object",
            "type": "Object",
            "optional": false,
            "field": "typeVisits",
            "description": "<p>Tipos de visitas realizadas.</p>"
          }
        ],
        "courses, referrals and typVisits Object": [
          {
            "group": "courses, referrals and typVisits Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la sección.</p>"
          },
          {
            "group": "courses, referrals and typVisits Object",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del reporte. El arreglo contiene otros arreglos con el modelo de data.</p>"
          },
          {
            "group": "courses, referrals and typVisits Object",
            "type": "Number",
            "optional": false,
            "field": "qty",
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "visits Object": [
          {
            "group": "visits Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la sección.</p>"
          },
          {
            "group": "visits Object",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del reporte. El arreglo contiene otros arreglos con el modelo de data.</p>"
          },
          {
            "group": "visits Object",
            "type": "Object[]",
            "optional": false,
            "field": "membersPendingVisits",
            "description": "<p>Datos de los miembros pendientes por visitas.</p>"
          },
          {
            "group": "visits Object",
            "type": "Number",
            "optional": false,
            "field": "qty",
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "membersPendingVisits Object[]": [
          {
            "group": "membersPendingVisits Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "membersPendingVisits Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ],
        "data Array[] in referrals Object": [
          {
            "group": "data Array[] in referrals Object",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Datos del reporte.</p>"
          }
        ],
        "data Object[]": [
          {
            "group": "data Object[]",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Etiqueta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Mis reportes.\",\n\t\"reports\": {\n\t\t\"courses\": {\n\t\t\t\"title\": \"Mis cursos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Aprobados\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Cursando\",\n\t\t\t\t\t\"qty\": 0\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"qty\": 1\n\t\t},\n\t\t\"referrals\": {\n\t\t\t\"title\": \"Hijos espirituales\",\n\t\t\t\"data\": [\n\t\t\t\t[\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"PRUEBA USUARIO\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"PADRE PRUEBA\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"ANTHONY ALEJANDRO VELÁSQUEZ RODRÍGUEZ\",\n\t\t\t\t\t\t\"qty\": 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"SUPERVISOR PRUEBA\",\n\t\t\t\t\t\t\"qty\": 0\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t],\n\t\t\t\"qty\": 4\n\t\t},\n\t\t\"visits\": {\n\t\t\t\"title\": \"Visitas\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Pendientes\",\n\t\t\t\t\t\"qty\": 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Realizadas\",\n\t\t\t\t\t\"qty\": 18\n\t\t\t\t}\n\t\t\t],\n      \"membersPendingVisits\": [\n        {\n          \"_id\": \"6074337457d2b11cf80442dd\",\n          \"names\": \"AMBER\",\n          \"lastNames\": \"VELASQUEZ\",\n          \"document\": \"CC123456789\",\n          \"gender\": null,\n          \"phone\": \"3167654321\",\n          \"picture\": null,\n          \"position\": null\n        },\n        .\n        .\n        .\n      ],\n\t\t\t\"qty\": 18\n\t\t},\n\t\t\"typeVisits\": {\n\t\t  \"title\": \"Tipos de Visitas\",\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"label\":\"Presencial\",\n\t\t      \"qty\":18\n        },\n        {\n          \"label\":\"Telefónica\",\n          \"qty\":0\n        }\n      ],\n      \"qty\":18\n    }\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "Success without referrals data",
          "content": "HTTP/1.1 200 Success\n{{\n\t\"msg\": \"Mis reportes.\",\n\t\"reports\": {\n\t\t\"courses\": {\n\t\t\t\"title\": \"Mis cursos\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Aprobados\",\n\t\t\t\t\t\"qty\": 0\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"label\": \"Cursando\",\n\t\t\t\t\t\"qty\": 0\n\t\t\t\t}\n\t\t\t],\n      \"membersPendingVisits\": [],\n\t\t\t\"qty\": 0\n\t\t},\n\t\t\"referrals\": {\n\t\t\t\"title\": \"Hijos espirituales\",\n\t\t\t\"data\": [],\n\t\t\t\"qty\": 0\n\t\t}\n\t}\n}",
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
    "version": "0.0.50",
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
            "field": "document",
            "description": "<p>Número de documento (Ejm: CC123456789).</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (index array) del sexo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento (YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (index array) del estado civil.</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (index array)del departamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (index array)de la ciudad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombredel barrio o vereda.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que pertenece.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"document\": \"CC123456789\",\n    \"email\": \"user3@example.com\",\n    \"phone\": \"573161234567\",\n    \"names\": \"Anthony alejandro\",\n    \"lastNames\": \"Velasquez rodriguez\",\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": true,\n    \"meetingNew\": true,\n    \"department\": 19,\n    \"city\": 18,\n    \"locality\": \"URB. NUEVO MUNDO\",\n    \"direction\": \"URB. NUEVO MUNDO #66\",\n    \"church\": \"624a357644f15f3ce8200c2f\"\n}",
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
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
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
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que pertenece.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado la información exitosamente.\",\n\t\"data\": {\n\t\t\"gender\": 2,\n\t\t\"birthday\": \"1994-07-07\",\n\t\t\"civilStatus\": 0,\n\t\t\"educationLevel\": 0,\n\t\t\"profession\": 90,\n\t\t\"bloodType\": 7,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": true,\n\t\t\"meetingNew\": true,\n\t\t\"department\": 19,\n\t\t\"city\": 18,\n\t\t\"locality\": \"URB. NUEVO MUNDO\",\n\t\t\"direction\": \"URB. NUEVO MUNDO #66\",\n\t\t\"_id\": \"602f057d8d3e7d073cef3e87\",\n\t\t\"email\": \"user3@example.com\",\n\t\t\"names\": \"ANTHONY ALEJANDRO\",\n\t\t\"lastNames\": \"VELASQUEZ RODRIGUEZ\",\n\t\t\"phone\": \"573161234567\",\n\t\t\"document\": \"CC123456789\",\n\t\t\"church\": \"624a357644f15f3ce8200c2f\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"phone\",\n            \"msg\": \"Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9).\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar su(s) nombre(s).\"\n        },\n        .\n        .\n        .\n    ]\n  }",
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
    "url": "/api/user",
    "title": "(02) Actualizar foto perfil.",
    "version": "0.0.36",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>Base64 o URL de la foto de perfil (para eliminarla solo enviar el parámetro en null).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request Base64",
        "content": "{\n  \"picture\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/...\",\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request URL",
        "content": "{\n  \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\",\n}",
        "type": "JSON"
      },
      {
        "title": "Example JSON Request Null",
        "content": "{\n  \"picture\": null,\n}",
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
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen de perfil.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se ha actualizado su foto de perfil exitosamente.\",\n\t\"data\": {\n    \"picture\": \"https://delii.s3.amazonaws.com/alma/users/5fcf0821fc917d476c1cf3e3/picture-5fcf0821fc917d476c1cf3e3-1629254970.jpg\"\n\t}\n}",
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
    "url": "/api/admin/users/:_id",
    "title": "(04) Actualizar datos de un miembro.",
    "version": "0.0.34",
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
            "description": "<p>ID del miembro.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento del identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (index array) del sexo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento (Formato: YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (index array) del estado civil.</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "department",
            "description": "<p>ID (index array) del departamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "city",
            "description": "<p>ID (index array) de la ciudad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Nombredel sector o localidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo(s) o posición.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que asiste.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"email\": null,\n\t\t\"phone\": \"573161234567\",\n\t\t\"names\": \"AMBERCITA\",\n\t\t\"lastNames\": \"VELASQUEZ\",\n    \"document\": null,\n\t\t\"gender\": null,\n\t\t\"birthday\": null,\n\t\t\"civilStatus\": null,\n\t\t\"educationLevel\": null,\n\t\t\"profession\": null,\n\t\t\"bloodType\": null,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": false,\n    \"meetingNew\": false,\n    \"department\": null,\n    \"city\": null,\n    \"locality\": \"URB. NUEVO MUNDO\",\n    \"direction\": \"URB. NUEVO MUNDO #66\",\n\t\t\"position\": \"PADRE ESPIRITUAL Y LIDER\",\n\t\t\"church\": \"624a357644f15f3ce8200c2f\"\n}",
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
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
          },
          {
            "group": "data Object",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).</p>"
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
            "description": "<p>ID del miembro.</p>"
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
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que asiste.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Se han actualizado los datos del miembro exitosamente.\",\n\t\"user\": {\n\t\t\"email\": null,\n\t\t\"position\": \"PADRE ESPIRITUAL Y LIDER\",\n\t\t\"gender\": null,\n\t\t\"birthday\": null,\n\t\t\"civilStatus\": null,\n\t\t\"educationLevel\": null,\n\t\t\"profession\": null,\n\t\t\"bloodType\": null,\n\t\t\"company\": false,\n\t\t\"companyType\": null,\n\t\t\"baptized\": false,\n\t\t\"meetingNew\": false,\n\t\t\"roles\": [ 4 ],\n\t\t\"consolidated\": true,\n\t\t\"group\": null,\n\t\t\"familyGroupId\": [],\n\t\t\"department\": null,\n\t\t\"city\": null,\n\t\t\"locality\": \"URB. NUEVO MUNDO\",\n\t\t\"direction\": \"URB. NUEVO MUNDO #66\",\n\t\t\"_id\": \"6076598d598ae749a42a0147\",\n\t\t\"phone\": \"573161234567\",\n\t\t\"names\": \"AMBERCITA\",\n\t\t\"lastNames\": \"VELASQUEZ\",\n\t\t\"created_at\": \"2021-04-13 21:55:09\",\n\t\t\"updated_at\": \"2021-04-13 22:24:50\",\n\t\t\"document\": null,\n\t\t\"church\": \"624a357644f15f3ce8200c2f\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation fields",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"msg\": \"¡Error en los parámetros!\",\n  \"errors\": [\n    {\n      \"input\": \"phone\",\n      \"msg\": \"Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9).\"\n    },\n    {\n      \"input\": \"names\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar el nombre.\"\n    },\n    {\n      \"input\": \"lastNames\",\n      \"msg\": \"Disculpe, pero debe asegurarse de indicar el apellido.\"\n    }\n  ]\n}",
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
    "title": "(00) Obtener total de miembros.",
    "version": "0.0.40",
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
            "field": "search",
            "description": "<p>Número de documento o nombre a buscar (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "admins",
            "description": "<p>Obtiene los usuarios de tipo admin (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "Any",
            "optional": false,
            "field": "referreds",
            "description": "<p>Cargar solo miembros que fueron referidos.</p>"
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
            "description": "<p>Total de miembros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Total miembros.\",\n    \"totals\": 2\n}",
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
    "title": "(02) Crear nuevo miembro.",
    "version": "0.0.33",
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
            "description": "<p>Teléfono.</p>"
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
            "type": "String|Null",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico.</p>"
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
            "type": "Number|Null",
            "optional": false,
            "field": "civilStatus",
            "description": "<p>ID (array index) Estado civil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del genero (sexo).</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "locality",
            "description": "<p>Barrio o localidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "direction",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>ID del miembro consolidador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición solicitada por el nuevo miembro.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "attendGroup",
            "description": "<p>Indica si el miembro asiste a un grupo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Null",
            "optional": false,
            "field": "groupId",
            "description": "<p>ID del grupo al que asiste el nuevo miembro.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Roles asignar al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n  \"phone\": \"573161234567\",\n  \"names\": \"Anthony alejandro\",\n  \"lastNames\": \"Velasquez rodriguez\",\n  \"email\": \"anthony@example.com\",\n  \"birthday\": \"1994-07-07\",\n  \"civilStatus\": 0,\n  \"gender\": 0,\n  \"locality\": 'Barrio nuevo',\n  \"direction\": 'Dirección cualquiera',\n  \"consolidated\": true,\n  \"referred\": \"605e37d154abd33060a689dc\",\n  \"petition\": \"Por la familia, por salud y por mejora económica.\",\n  \"attendGroup\": true,\n  \"groupId\": \"6063385c98fc731c04777829\",\n  \"roles\": [ 4 ]\n}",
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
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Se ha registrado el nuevo miembro exitosamente.\",\n}",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"msg\": \"¡Error en los parámetros!\",\n    \"errors\": [\n        {\n            \"input\": \"phone\",\n            \"msg\": \"Disculpe, pero debe indicar un número de teléfono.\"\n        },\n        {\n            \"input\": \"names\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro.\"\n        },\n        {\n            \"input\": \"lastNames\",\n            \"msg\": \"Disculpe, pero debe asegurarse de indicar el apellido del miembro.\"\n        }\n    ]\n  }",
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
    "title": "(06) Obtener listado de cursos de un miembro.",
    "version": "0.0.28",
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
            "description": "<p>ID del miembro.</p>"
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
            "field": "level",
            "description": "<p>Nivel del curso.</p>"
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
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Listado de cursos del miembro.\",\n\t\"courses\": [\n\t\t{\n\t\t\t\"_id\": \"603afb2309bf7a3428ac58f7\",\n\t\t\t\"slug\": \"nivel-uno\",\n\t\t\t\"title\": \"NIVEL UNO\",\n\t\t\t\"description\": \"Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.\\n\\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n\\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.\",\n\t\t\t\"level\": 1\n\t\t\t\"approved\": false\n\t\t},\n\t\t.\n\t\t.\n\t\t.\n\t]\n}",
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
    "title": "(03) Obtener detalles de un miembro.",
    "version": "0.0.36",
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
            "description": "<p>ID del miembro.</p>"
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
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
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
            "type": "String|Null",
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
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo(s) o posición.</p>"
          },
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
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona).</p>"
          },
          {
            "group": "data Object",
            "type": "Object|Null",
            "optional": false,
            "field": "referred",
            "description": "<p>Datos del referido (padre espiritual).</p>"
          },
          {
            "group": "data Object",
            "type": "String|Null",
            "optional": false,
            "field": "petition",
            "description": "<p>Petición realizada por el mimebto al momento de registrarse.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "attendGroup",
            "description": "<p>Asiste a un grupo familiar.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "consolidated",
            "description": "<p>Indica si el miembro fue consolidado.</p>"
          },
          {
            "group": "data Object",
            "type": "Boolean",
            "optional": false,
            "field": "meetingNew",
            "description": "<p>Indica si el miembro asistió al curso de nuevo ingreso.</p>"
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
            "field": "picture",
            "description": "<p>Dirección.</p>"
          },
          {
            "group": "data Object",
            "type": "String",
            "optional": false,
            "field": "church",
            "description": "<p>ID de la iglesia a la que asiste.</p>"
          },
          {
            "group": "data Object",
            "type": "Object",
            "optional": false,
            "field": "totals",
            "description": "<p>Totales de cursos e hijos espirituales.</p>"
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
          }
        ],
        "totals Object": [
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "totalsCourses",
            "description": "<p>Cursos totales.</p>"
          },
          {
            "group": "totals Object",
            "type": "Number",
            "optional": false,
            "field": "totalsReferrals",
            "description": "<p>Total de referidos (Hijos espirituales).</p>"
          }
        ],
        "members Object": [
          {
            "group": "members Object",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "members Object",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "members Object",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "members Object",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "members Object",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "members Object",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "members Object",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "members Object",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Detalles del miembro.\",\n  \"user\": {\n    \"_id\": \"609d21bd32ce5839900cb1ff\",\n    \"document\": null,\n    \"email\": \"amber@gmail.com\",\n    \"phone\": \"3161231241\",\n    \"names\": \"AMBER LISSETH\",\n    \"lastNames\": \"VELASQUEZ\",\n    \"position\": null,\n    \"gender\": 1,\n    \"birthday\": \"2020-05-25\",\n    \"civilStatus\": 0,\n    \"educationLevel\": null,\n    \"profession\": null,\n    \"bloodType\": null,\n    \"company\": false,\n    \"companyType\": null,\n    \"baptized\": false,\n    \"roles\": [\n      4\n    ],\n    \"referred\": {\n      \"_id\": \"6081367a18fdbc37e89aff7d\",\n      \"names\": \"ANTHONY\",\n      \"lastNames\": \"VELASQUEZ\",\n      \"document\": null,\n      \"gender\": null,\n      \"phone\": \"584121480199\",\n      \"picture\": null,\n      \"position\": null\n    },\n    \"petition\": \"ASASD ASD ASDASDA SD\",\n    \"attendGroup\": true,\n    \"consolidated\": true,\n    \"department\": null,\n    \"city\": null,\n    \"locality\": \"ASDASDASDASDASD\",\n    \"direction\": \"ASDASDASDASDASDASD\",\n    \"picture\": null,\n    \"church\": \"624a357644f15f3ce8200c2f\",\n    \"totals\": {\n      \"totalsCourses\": 1,\n      \"totalsReferrals\": 0\n    },\n    \"created_at\": \"2021-05-13 07:55:25\",\n    \"updated_at\": \"2021-05-13 07:55:25\"\n  }\n}",
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
    "title": "(05) Obtener listado de referidos de un miembro.",
    "version": "0.0.36",
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
            "description": "<p>ID del miembro.</p>"
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
            "description": "<p>Datos del miembro y listado de referidos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Datos del miembro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "referrals",
            "description": "<p>Listado de referidos del miembro.</p>"
          }
        ],
        "referrals Object[]": [
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "referrals Object[]",
            "type": "Number",
            "optional": false,
            "field": "totalReferrals",
            "description": "<p>Total de referidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n  \"msg\": \"Listado de referidos del miembro.\",\n  \"referrals\": [\n    {\n      \"_id\": \"609d21bd32ce5839900cb1ff\",\n      \"names\": \"AMBER LISSETH\",\n      \"lastNames\": \"VELASQUEZ\",\n      \"document\": null,\n      \"gender\": 1,\n      \"phone\": \"3161231241\",\n      \"picture\": null,\n      \"position\": null,\n      \"totalsReferrals\": 0\n    },\n    .\n    .\n    .\n  ]\n}",
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
    "title": "(01) Obtener listado de miembros.",
    "version": "0.0.40",
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
            "description": "<p>Ordenado de input (1 = ASC | -1 = DESC) (Opcional).).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "admins",
            "description": "<p>Obtiene los usuarios de tipo admin (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder) (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Número de documento o nombre a buscar (Opcional).</p>"
          },
          {
            "group": "Query Params",
            "type": "Any",
            "optional": false,
            "field": "referreds",
            "description": "<p>Cargar solo miembros que fueron referidos.</p>"
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
            "description": "<p>Listado de usuarios.</p>"
          }
        ],
        "users Object[]": [
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID del miembro.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>Nombre(s).</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "lastNames",
            "description": "<p>Apellido(s).</p>"
          },
          {
            "group": "users Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "document",
            "description": "<p>Número de documento.</p>"
          },
          {
            "group": "users Object[]",
            "type": "Number|Null",
            "optional": false,
            "field": "gender",
            "description": "<p>ID (array index) del sexo (género).</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del miembro.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la foto de perfil.</p>"
          },
          {
            "group": "users Object[]",
            "type": "String|Null",
            "optional": false,
            "field": "position",
            "description": "<p>Cargo o posición del miembro.</p>"
          },
          {
            "group": "users Object[]",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Roles asignados al usuario (0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona)</p>"
          },
          {
            "group": "users Object[]",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de la última actualización del perfil.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 Success\n{\n\t\"msg\": \"Usuarios.\",\n\t\"users\": [\n    {\n      \"gender\": null,\n      \"roles\": [\n        3,\n        4\n      ],\n      \"picture\": \"https://delii.s3.amazonaws.com/alma/users/611902c09e346616b6eaadb5/picture-611902c09e346616b6eaadb5-1629251391.jpg\",\n      \"_id\": \"611902c09e346616b6eaadb5\",\n      \"phone\": \"31567554414\",\n      \"names\": \"EIMY\",\n      \"lastNames\": \"VALENTINA\",\n      \"created_at\": \"2021-08-15 07:04:16\",\n      \"document\": null\n    },\n    .\n    .\n    .\n\t]\n}",
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
    "title": "(07) Cambiar rol de un miembro.",
    "version": "0.0.33",
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
            "description": "<p>ID del miembro.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Rol para el miembro (valores: 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n    \"roles\": [ 3, 4 ]\n}",
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
          "content": "HTTP/1.1 200 Success\n{\n    \"msg\": \"Se asignado el nuevo rol al miembro exitosamente.\"\n}",
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
