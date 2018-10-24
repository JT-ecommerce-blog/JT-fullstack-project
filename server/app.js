const express = require('express');
const { json } = require("body-parser");
const cors = require("cors");
const mongo = require("mongodb");


const app = express();
// const path = require("path");

app.use(cors());
app.use(json());

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jeff', lastName: 'Horner' },
    { id: 3, firstName: 'Terry', lastName: 'Dinh' }
  ];

  res.json(customers)
});
// route for the homepage
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname + '/../public/index.html'));
  console.log('homepage was requested');
});
const port = 3001;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});