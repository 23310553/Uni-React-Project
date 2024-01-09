/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5y0sbiri",
    "name": "Parking_Status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Empty",
        "Assigned"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5y0sbiri",
    "name": "Status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Empty",
        "Assigned"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
