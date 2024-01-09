/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8efgkgec25e14ev",
    "created": "2023-10-20 20:12:34.574Z",
    "updated": "2023-10-20 20:12:34.574Z",
    "name": "Apartement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ulczkylu",
        "name": "Apartement_Number",
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
        "id": "kdb7dq3o",
        "name": "Apartement_Status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Occupied",
            "Vacant"
          ]
        }
      },
      {
        "system": false,
        "id": "cno5cajf",
        "name": "Apartement_Lease",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "2023/2024",
            "2024/2025",
            "2025/2026",
            "2026/2027"
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
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev");

  return dao.deleteCollection(collection);
})
