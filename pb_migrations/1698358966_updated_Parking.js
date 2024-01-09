/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  collection.listRule = "App_ID.User_id.name = @request.auth.name || @request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("06917sug04wggkk")

  collection.listRule = "@request.auth.role = 'Admin'"

  return dao.saveCollection(collection)
})
