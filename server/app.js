const express = require('express');
const { json } = require("body-parser");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // const db = client.db(dbName);

  client.close();
});

const app = express();
// const path = require("path");

// illeviates any browser cors issue
app.use(cors());
// puts the db info into a json
app.use(json());

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jeff', lastName: 'Horner' },
    { id: 3, firstName: 'Terry', lastName: 'Dinh' }
  ];

  res.json(customers)
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});