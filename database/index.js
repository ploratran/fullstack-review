const mongoose = require('mongoose');

// open a connection to mongodb fetcher database
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true }); //connect mongoose to server

//get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

//const getRepos = require('../helpers/github.js');

//define a schema named "repoSchema"
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id_: Number,
  owner: String,
  size: Number,
  url: String
});


//compiling schema into a Model named "Repo".
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to the MongoDB
  //create new document instances from model Repo
  console.log(repos.length);
  for(var i = 0; i < repos.length; i++){
    var newRepos = new Repo({
      id_ : repos[i].id_,
      owner: repos[i].owner,
      size: repos[i].size,
      url: repos[i].url
    });
  }
  console.log('docs: ', newRepos._doc);

}

module.exports.save = save;