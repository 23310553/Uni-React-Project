/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.listRule = "@request.auth.app_id.User_id.app_id.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("962on2gd39jae4o")

  collection.listRule = "@collection.Application.id != \"\""

  return dao.saveCollection(collection)
})
