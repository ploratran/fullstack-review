const express = require('express');
const helper = require('../helpers/github.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//use bodyparser to parse data as string to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var githubUser = req.body.user; //tylertuan

  helper.getReposByUsername(githubUser, (err, repoData) =>{
    if(err){
      console.log("error getting data");
      res.status(400).end('error');
    }else{
      db.save(repoData);
      res.status(200).end('ok');
    }
  });
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


// var processRepoData = (err, repoData) => {
  //   if(err) {
  //     console.log("error using helper in post request", err);
  //   }else{
  //     console.log(repoData);
  //     return "callback invoked here";
  //   }
  // }