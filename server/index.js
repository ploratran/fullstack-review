const express = require('express');
const getRepos = require('../helpers/github.js');
const bodyParser = require('body-parser');
let app = express();

//use bodyparser to parse data "{"user": "mimimama"}" from client into object {user: "mimimama"}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  //console.log('print: ', req.body.user); //"mimimama"
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // get data from client and insert to database
  console.log('print here:', getRepos.getReposByUsername(req.body.user));

  res.status(200).end();
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

