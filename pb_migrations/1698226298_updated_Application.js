/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.viewRule = "User_id.name = @request.auth.name  || @request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
