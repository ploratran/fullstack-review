const express = require('express');
const getRepos = require('../helpers/github.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();

//use bodyparser to parse data as string to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var githubUser = req.body.user;
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API,

  getRepos.getReposByUsername(githubUser, function(data){

    let githubData = JSON.parse(data);

    db.saveRepos(githubData);
    for(var i = 0; i < githubData.length; i++){
      //console.log("data from api: ", githubData[i]);
      db.saveRepos(githubData[i]);
    }
  });
  // save the repo information in the database
  // get data from client and insert to database

  res.end();
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

