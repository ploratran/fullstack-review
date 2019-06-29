const express = require('express');
const helper = require('../helpers/github.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();

//use bodyparser to parse data as string to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var githubUser = req.body.user;
  //console.log(githubUser);

  helper.getReposByUsername(githubUser, (err, repoData) => {
    console.log('do post request here');
  })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API,



});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // get data from database and send back to client
  //db.find()

  res.end()
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
