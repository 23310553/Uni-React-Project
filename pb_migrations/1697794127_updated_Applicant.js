/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.listRule = "@request.auth.App_Id = @request.auth.App_Id.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
