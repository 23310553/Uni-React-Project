/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cl3gzlg",
    "name": "Type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "General",
        "Event",
        "Maintenance",
        "Urgent"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cl3gzlg",
    "name": "Type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "General",
        "Event",
        "Maintence",
        "Urgent"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
