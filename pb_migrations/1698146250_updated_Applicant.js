/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.name = "Application"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mJdYI5K` ON `Application` (`Student_Number`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l75tbpwm",
    "name": "User_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.name = "Applicant"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mJdYI5K` ON `Applicant` (`Student_Number`)"
  ]

  // remove
  collection.schema.removeField("l75tbpwm")

  return dao.saveCollection(collection)
})
