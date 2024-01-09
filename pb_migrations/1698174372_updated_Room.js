/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tghqpe8dsqrwdj2")

  collection.viewRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
})
