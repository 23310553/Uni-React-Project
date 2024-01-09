/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8efgkgec25e14ev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulczkylu",
    "name": "Apartment_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdb7dq3o",
    "name": "Apartment_Status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Occupied",
        "Vacant"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cno5cajf",
    "name": "Apartment_Lease",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3e6fkytt",
    "name": "Apartment_rooms",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Single",
        "Two-bedroom",
        "Three-bedroom"
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
    "id": "ulczkylu",
    "name": "Apartement_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdb7dq3o",
    "name": "Apartement_Status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Occupied",
        "Vacant"
      ]
    }
  }))

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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3e6fkytt",
    "name": "Apartement_rooms",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Single",
        "Two-bedroom",
        "Three-bedroom"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
