/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w5rwao29",
    "name": "Building",
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
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // remove
  collection.schema.removeField("w5rwao29")

  return dao.saveCollection(collection)
})
