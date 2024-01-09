/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  collection.createRule = "@request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
