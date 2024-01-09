/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdmepslo1m9vbih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lgh59cxe",
    "name": "Apartments",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8efgkgec25e14ev",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdmepslo1m9vbih")

  // remove
  collection.schema.removeField("lgh59cxe")

  return dao.saveCollection(collection)
})
