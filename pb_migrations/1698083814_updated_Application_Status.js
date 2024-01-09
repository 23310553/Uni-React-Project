/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slfce0tp",
    "name": "field",
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
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  // remove
  collection.schema.removeField("slfce0tp")

  return dao.saveCollection(collection)
})
