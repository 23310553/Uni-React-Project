/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // remove
  collection.schema.removeField("amws43ap")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qdfqbvps",
    "name": "Announcement",
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
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amws43ap",
    "name": "Announcement",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("qdfqbvps")

  return dao.saveCollection(collection)
})
