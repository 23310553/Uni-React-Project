/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  collection.listRule = "id = @request.auth.App_Id"

  return dao.saveCollection(collection)
})
