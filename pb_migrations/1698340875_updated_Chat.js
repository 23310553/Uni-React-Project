/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqe3d378lw7nfnn")

  collection.listRule = "To = @request.auth.id"
  collection.viewRule = "To = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqe3d378lw7nfnn")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
