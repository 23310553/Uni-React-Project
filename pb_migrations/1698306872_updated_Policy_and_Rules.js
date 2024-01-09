/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  // remove
  collection.schema.removeField("z7xsrzgg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j2poekuv",
    "name": "PDF",
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
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z7xsrzgg",
    "name": "PDF",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("j2poekuv")

  return dao.saveCollection(collection)
})
