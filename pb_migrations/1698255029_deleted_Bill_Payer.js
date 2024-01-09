/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "b82uz2atnkuzf25",
    "created": "2023-10-19 09:44:44.751Z",
    "updated": "2023-10-25 07:53:36.753Z",
    "name": "Bill_Payer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "32mxn9v8",
        "name": "First_Name",
        "type": "text",
        "required": true,
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
        "id": "izoueafe",
        "name": "Last_Name",
        "type": "text",
        "required": true,
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
        "id": "b4smt5st",
        "name": "ID_or_Passport_Number",
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
        "id": "gpgjad5l",
        "name": "Email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "7gzxw83d",
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
        "id": "ilgh1das",
        "name": "Phone_Number",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 10,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "App_ID.User_id.name = @request.auth.name  || @request.auth.role = 'Admin'",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
