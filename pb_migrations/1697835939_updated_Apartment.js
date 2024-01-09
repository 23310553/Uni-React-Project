/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // remove
  collection.schema.removeField("uqk5fb7n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afxza3dk",
    "name": "Building_Name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zdmepslo1m9vbih",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqk5fb7n",
    "name": "Building_name",
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

  // remove
  collection.schema.removeField("afxza3dk")

  return dao.saveCollection(collection)
})
