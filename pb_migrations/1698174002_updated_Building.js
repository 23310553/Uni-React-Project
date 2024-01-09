/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdmepslo1m9vbih")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdmepslo1m9vbih")

  collection.listRule = "@request.auth.role = 'Admin'"
  collection.viewRule = "@request.auth.role = 'Admin'"
  collection.createRule = "@request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
})
