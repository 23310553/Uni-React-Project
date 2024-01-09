/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tghqpe8dsqrwdj2",
    "created": "2023-10-20 20:14:42.015Z",
    "updated": "2023-10-20 20:56:25.231Z",
    "name": "Room",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2ufpzlkk",
        "name": "Room_Number",
        "type": "number",
        "required": false,
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
        "id": "hebyglq7",
        "name": "Room_Status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Occupied",
            "Vacant"
          ]
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
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2");

  return dao.deleteCollection(collection);
})
