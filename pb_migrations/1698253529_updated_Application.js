/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6yigjr5a",
    "name": "Status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending ⏳",
        "Accepted ✔️",
        "Rejected ✖️"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // remove
  collection.schema.removeField("6yigjr5a")

  return dao.saveCollection(collection)
})