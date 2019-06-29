const express = require('express');
const getRepos = require('../helpers/github.js');
const bodyParser = require('body-parser');
let app = express();

//use bodyparser to parse data as string to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('print: ', req.body.user); //"ploratran"
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  getRepos.getReposByUsername(req.body.user);
  // save the repo information in the database
  // get data from client and insert to database

  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //get data from database and send back to client
  //db.find()
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

