/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.indexes = [
    "CREATE INDEX `idx_mJdYI5K` ON `Application` (`ID_or_Passport_Number`)"
  ]

  // remove
  collection.schema.removeField("izvlfoyw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6gvvhr1",
    "name": "Student_Number",
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
    "id": "ppbwsfvw",
    "name": "Bill_Paper_First_Name",
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
    "id": "bypozxcm",
    "name": "Bill_Payer_Last_Name",
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
    "id": "zijwvkvg",
    "name": "Bill_Payer_Email",
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
    "id": "jhnvudhc",
    "name": "Bill_Payer_ID_Number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rnv0bgjy",
    "name": "Bill_Payer_Phone_Number",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smrr5h2fyh3o0aj")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mJdYI5K` ON `Application` (`Student_Number`)"
  ]

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
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("m6gvvhr1")

  // remove
  collection.schema.removeField("ppbwsfvw")

  // remove
  collection.schema.removeField("bypozxcm")

  // remove
  collection.schema.removeField("zijwvkvg")

  // remove
  collection.schema.removeField("jhnvudhc")

  // remove
  collection.schema.removeField("rnv0bgjy")

  return dao.saveCollection(collection)
})
