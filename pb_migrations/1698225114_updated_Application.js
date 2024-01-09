/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnm284ho",
    "name": "Building_Preference",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung Building 1 Sesame Street Stellenbosch",
        "Huawei Building 2 Sesame Street Stellenbosch"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnm284ho",
    "name": "Building_Preference",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung Building",
        "Huawei Building"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
