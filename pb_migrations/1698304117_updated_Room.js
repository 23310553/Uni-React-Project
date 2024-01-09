/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p3jxvrat",
    "name": "Apartment_Number",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "111",
        "112",
        "113",
        "114",
        "101",
        "102",
        "103",
        "104",
        "105",
        "206",
        "207",
        "208",
        "309",
        "310"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p3jxvrat",
    "name": "Apartment_Number",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
