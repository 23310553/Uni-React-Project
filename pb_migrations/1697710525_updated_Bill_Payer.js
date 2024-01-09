/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cudg5ffh",
    "name": "Phone_Number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cudg5ffh",
    "name": "Phone_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
