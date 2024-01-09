/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  collection.listRule = "@request.auth.role = \"Admin\""
  collection.viewRule = "@request.auth.role = \"Admin\""
  collection.createRule = "@request.auth.role = \"Admin\""
  collection.updateRule = "@request.auth.role = \"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ia4t56zu3gzgj68")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
