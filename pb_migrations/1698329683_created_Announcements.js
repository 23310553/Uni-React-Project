/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bszlvqoottiex93",
    "created": "2023-10-26 14:14:43.673Z",
    "updated": "2023-10-26 14:14:43.673Z",
    "name": "Announcements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amws43ap",
        "name": "Announcement",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "pnioqeyl",
        "name": "Admin",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "1cl3gzlg",
        "name": "Type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "General",
            "Event",
            "Maintence",
            "Urgent"
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
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93");

  return dao.deleteCollection(collection);
})
