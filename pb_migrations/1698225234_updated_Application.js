/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vew16q0q",
    "name": "Apartment_Preference",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Single",
        "Two Bedroom",
        "Three Bedroom"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // remove
  collection.schema.removeField("vew16q0q")

  return dao.saveCollection(collection)
})
