/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9az9innn1eqclru",
    "created": "2023-10-25 11:02:42.095Z",
    "updated": "2023-10-25 11:02:42.095Z",
    "name": "Policy_and_Rules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z7xsrzgg",
        "name": "PDF",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru");

  return dao.deleteCollection(collection);
})
