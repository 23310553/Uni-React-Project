/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuqtxz3w",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  // remove
  collection.schema.removeField("kuqtxz3w")

  return dao.saveCollection(collection)
})
