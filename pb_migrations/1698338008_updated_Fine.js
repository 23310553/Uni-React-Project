/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6jsqi8zu160gmau")

  collection.listRule = "Issued_To.name = @request.auth.name  || @request.auth.role = 'Admin'"
  collection.viewRule = "Issued_To.name = @request.auth.name  || @request.auth.role = 'Admin'"
  collection.createRule = "@request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4swev61u",
    "name": "Due",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6jsqi8zu160gmau")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  // remove
  collection.schema.removeField("4swev61u")

  return dao.saveCollection(collection)
})
