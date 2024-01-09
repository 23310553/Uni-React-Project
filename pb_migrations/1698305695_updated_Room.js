/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2a3lbtv",
    "name": "Building",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung Building: 1 Sesame Street Stellenbocsh",
        "Huawei Building: 2 Sesame Street Stellenbocsh"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2a3lbtv",
    "name": "Building",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung Building",
        "Huawei Building"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
