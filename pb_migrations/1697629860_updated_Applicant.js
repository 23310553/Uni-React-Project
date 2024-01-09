/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mJdYI5K` ON `Application` (`Student_Number`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "co85ltpi",
    "name": "Middle_Name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grc8mohd",
    "name": "Last_Name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4wushpno",
    "name": "field",
    "type": "email",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a7tkwyve",
    "name": "Phone_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 10,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apuryqbt",
    "name": "Study_Program",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrrmguem",
    "name": "Study_Year",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixzefimn",
    "name": "Lease_Year",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izvlfoyw",
    "name": "Student_Number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": 8,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.indexes = []

  // remove
  collection.schema.removeField("co85ltpi")

  // remove
  collection.schema.removeField("grc8mohd")

  // remove
  collection.schema.removeField("4wushpno")

  // remove
  collection.schema.removeField("a7tkwyve")

  // remove
  collection.schema.removeField("apuryqbt")

  // remove
  collection.schema.removeField("zrrmguem")

  // remove
  collection.schema.removeField("ixzefimn")

  // remove
  collection.schema.removeField("izvlfoyw")

  return dao.saveCollection(collection)
})
