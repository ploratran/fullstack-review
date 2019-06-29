const express = require('express');
const getRepos = require('../helpers/github.js');
const bodyParser = require('body-parser');
const callDb = require('../database/index.js');
let app = express();

//use bodyparser to parse data as string to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('print: ', req.body.user); //"ploratran"

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API,
  getRepos.getReposByUsername(req.body.user, function(data){

    let github = JSON.parse(data);

    for(var i = 0; i < github.length; i++){
      console.log(github[i].full_name); //list of: ploratran/ToyProblemsJS + ....
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

