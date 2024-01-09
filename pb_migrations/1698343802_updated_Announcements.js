/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bszlvqoottiex93")

  collection.listRule = "@request.auth.app_id.Status = \"Accepted ✔️\""

  return dao.saveCollection(collection)
})
