/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.listRule = "(@request.auth.app_id != \"\" && @request.auth.app_id.Status = \"Accepted ✔️\") || (@request.auth.role = 'Admin')"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.listRule = "(@request.auth.app_id != \"\" && (@request.auth.app_id.Status = \"Accepted ✔️\")) || (@request.auth.role = 'Admin')"

  return dao.saveCollection(collection)
})
