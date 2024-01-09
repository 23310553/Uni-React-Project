/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.viewRule = ""
  collection.updateRule = "@request.auth.role = \"superUser\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.viewRule = "@request.auth.role = \"superUser\""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
