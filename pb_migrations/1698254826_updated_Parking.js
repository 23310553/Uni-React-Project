/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // remove
  collection.schema.removeField("5wqghijg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
