/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwiuljgc",
    "name": "Building_Address",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zdmepslo1m9vbih",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // remove
  collection.schema.removeField("zwiuljgc")

  return dao.saveCollection(collection)
})
