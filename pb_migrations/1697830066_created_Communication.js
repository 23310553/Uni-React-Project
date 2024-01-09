/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "962on2gd39jae4o",
    "created": "2023-10-20 19:27:46.950Z",
    "updated": "2023-10-20 19:27:46.950Z",
    "name": "Communication",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ejb7yynh",
        "name": "Adminstrator",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "szeypwko",
        "name": "Urgency",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            ".",
            "!",
            "URGENT!"
          ]
        }
      },
      {
        "system": false,
        "id": "mvp8pj1m",
        "name": "Communication",
        "type": "editor",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "qqwijezx",
        "name": "Date",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o");

  return dao.deleteCollection(collection);
})
