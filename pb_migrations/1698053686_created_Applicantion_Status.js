/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ia4t56zu3gzgj68",
    "created": "2023-10-23 09:34:46.135Z",
    "updated": "2023-10-23 09:34:46.135Z",
    "name": "Applicationion_Status",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k4zgirio",
        "name": "App_ID",
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
      },
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
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68");

  return dao.deleteCollection(collection);
})
