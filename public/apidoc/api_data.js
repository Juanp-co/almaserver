define({ "api": [
  {
    "type": "get",
    "url": "/api/",
    "title": "Test connection",
    "version": "1.0.0",
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
  }
] });
