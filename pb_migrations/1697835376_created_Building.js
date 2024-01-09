/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zdmepslo1m9vbih",
    "created": "2023-10-20 20:07:48.903Z",
    "updated": "2023-10-20 20:56:16.112Z",
    "name": "Building",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fawpmmjw",
        "name": "Building_Name",
        "type": "text",
        "required": false,
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
        "id": "amcsjzdm",
        "name": "Building_Address",
        "type": "text",
        "required": false,
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zdmepslo1m9vbih");

  return dao.deleteCollection(collection);
})
