/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ia4t56zu3gzgj68",
    "created": "2023-10-23 09:34:46.135Z",
    "updated": "2023-10-24 09:01:51.879Z",
    "name": "Application_Status",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3pupzihy",
        "name": "Status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Pending ⏳",
            "Accepted ✔️",
            "Rejected ✖️"
          ]
        }
      },
      {
        "system": false,
        "id": "slfce0tp",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "smrr5h2fyh3o0aj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.role = \"Admin\"",
    "updateRule": "@request.auth.role = \"Admin\"",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
