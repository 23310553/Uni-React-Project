/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a7sick9a",
    "name": "To",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "smrr5h2fyh3o0aj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // remove
  collection.schema.removeField("a7sick9a")

  return dao.saveCollection(collection)
})
