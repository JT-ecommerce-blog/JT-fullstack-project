let express = require('express');
let app = express();
const path = require('path');

//route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
  console.log(__dirname);
});

app.listen(3001, () => {
  console.log('Server has started...');
});