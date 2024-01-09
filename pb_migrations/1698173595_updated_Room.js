/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // remove
  collection.schema.removeField("kelogxgw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f89bl7tb",
    "name": "Applicant_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "smrr5h2fyh3o0aj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kelogxgw",
    "name": "Apartment_Number",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f89bl7tb",
    "name": "Applicant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "smrr5h2fyh3o0aj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
