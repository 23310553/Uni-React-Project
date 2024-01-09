/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // remove
  collection.schema.removeField("cudg5ffh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilgh1das",
    "name": "Phone_Number",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 10,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // add
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

  // remove
  collection.schema.removeField("ilgh1das")

  return dao.saveCollection(collection)
})
