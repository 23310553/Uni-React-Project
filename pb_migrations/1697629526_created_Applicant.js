/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "smrr5h2fyh3o0aj",
    "created": "2023-10-18 11:45:26.083Z",
    "updated": "2023-10-18 11:45:26.083Z",
    "name": "Application",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwyjvjgq",
        "name": "Name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj");

  return dao.deleteCollection(collection);
})
