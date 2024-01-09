/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.createRule = "@request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
