/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zbsacahaj61ubcv",
    "created": "2023-10-25 11:02:24.219Z",
    "updated": "2023-10-25 11:02:24.219Z",
    "name": "Contact_Us",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4fzqgm5x",
        "name": "Phone_Number",
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
  const collection = dao.findCollectionByNameOrId("zbsacahaj61ubcv");

  return dao.deleteCollection(collection);
})
