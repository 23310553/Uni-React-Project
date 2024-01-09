/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  collection.listRule = "@request.auth.role = 'Admin'"
  collection.viewRule = "@request.auth.role = 'Admin'"
  collection.updateRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9az9innn1eqclru")

  collection.listRule = ""
  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
