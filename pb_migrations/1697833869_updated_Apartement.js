/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  collection.name = "Apartment"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  collection.name = "Apartement"

  return dao.saveCollection(collection)
})
