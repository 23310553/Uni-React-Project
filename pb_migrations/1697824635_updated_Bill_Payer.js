/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "32mxn9v8",
    "name": "First_Name",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "32mxn9v8",
    "name": "Name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
