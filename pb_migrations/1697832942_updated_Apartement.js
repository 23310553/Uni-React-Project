/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3e6fkytt",
    "name": "Apartement_rooms",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Single",
        "Two-bedroom",
        "Three-bedroom"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // remove
  collection.schema.removeField("3e6fkytt")

  return dao.saveCollection(collection)
})
