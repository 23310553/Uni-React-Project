/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqe3d378lw7nfnn")

  // remove
  collection.schema.removeField("qwa24gdw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "riozscpe",
    "name": "Message",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqe3d378lw7nfnn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwa24gdw",
    "name": "Message",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("riozscpe")

  return dao.saveCollection(collection)
})
