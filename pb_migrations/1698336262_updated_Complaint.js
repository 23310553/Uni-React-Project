/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  // remove
  collection.schema.removeField("bayskthf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wy4n80ag",
    "name": "Complaint",
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
    "id": "bayskthf",
    "name": "Complaint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("wy4n80ag")

  return dao.saveCollection(collection)
})
