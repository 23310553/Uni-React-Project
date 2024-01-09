/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "06917sug04wggkk",
    "created": "2023-10-20 20:16:50.581Z",
    "updated": "2023-10-20 20:16:50.581Z",
    "name": "Parking",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ej8chyo2",
        "name": "Parking_Number",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "5wqghijg",
        "name": "Parking_Address",
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
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk");

  return dao.deleteCollection(collection);
})
