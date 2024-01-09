/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cno5cajf",
    "name": "Apartement_Lease",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "2023/2024",
        "2024/2025",
        "2025/2026",
        "2026/2027"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cno5cajf",
    "name": "Apartement_Lease",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "2023/2024",
        "2024/2025",
        "2025/2026",
        "2026/2027"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
