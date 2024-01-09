/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7gzxw83d",
    "name": "Bill_ID",
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
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // remove
  collection.schema.removeField("7gzxw83d")

  return dao.saveCollection(collection)
})
