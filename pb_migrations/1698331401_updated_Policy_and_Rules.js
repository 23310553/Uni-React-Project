/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbbipg4z",
    "name": "Status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Unresolved",
        "Resolved"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  // remove
  collection.schema.removeField("tbbipg4z")

  return dao.saveCollection(collection)
})
