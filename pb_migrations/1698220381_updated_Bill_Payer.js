/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b4smt5st",
    "name": "ID_or_Passport_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b82uz2atnkuzf25")

  // remove
  collection.schema.removeField("b4smt5st")

  return dao.saveCollection(collection)
})
