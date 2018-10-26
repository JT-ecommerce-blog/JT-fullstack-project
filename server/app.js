const express = require('express');
const { json } = require("body-parser");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const assert = require('assert');

// Database Name
const dbName = 'thecource';

// Connection URL
let url = `mongodb://localhost:27017/${dbName}`;

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  client.close();
});

const app = express();
// const path = require("path");

// illeviates any browser cors issue
app.use(cors());
// puts the db info into a json
app.use(json());

app.get('/get-data', (req, res, next) => {
  let resultsArray = [];
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);

    //defining all the entries into the cursor variable
    var cursor = db.collection('user-data').find();
    cursor.forEach((doc, err) => {
      assert.equal(null, err);
      resultsArray.push(doc);
    }, () => {
      db.close();
      res.render('.././public/index.html', {items: resultsArray});
    });
  });
});

//inserting form data to new db collection
app.get('/insert', (req, res, next) => {
  //creating a new object with the data inputted on the frontend form
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  //after the form is submitted, the user is redirected to the homepage
  res.redirect('/');

  //opening connection to the db and identifying what collection will be accepting the form data
  mongo.connect(url = (err, db) => {
    assert.equal(null, err);
    db.collection('/user-data').insertOne(item = (err, result) => {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });
});

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