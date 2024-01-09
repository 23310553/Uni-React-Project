/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // remove
  collection.schema.removeField("apf5s63o")

  // remove
  collection.schema.removeField("g05lozgy")

  // add
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2a3lbtv",
    "name": "Building",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apf5s63o",
    "name": "Building",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zdmepslo1m9vbih",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g05lozgy",
    "name": "Appartment_Number",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8efgkgec25e14ev",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("p3jxvrat")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2a3lbtv",
    "name": "Building_new",
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
