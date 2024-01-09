/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // remove
  collection.schema.removeField("bfppqcng")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apf5s63o",
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
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfppqcng",
    "name": "Apartement",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8efgkgec25e14ev",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("apf5s63o")

  return dao.saveCollection(collection)
})
