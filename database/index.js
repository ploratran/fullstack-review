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
  id: Number, //unique id
  // userName: String, //'ploratran'
  fullName: String, //name of repo url
  forkCount: Number //num of fork count
});


//compiling schema into a Model named "Repo".
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to the MongoDB

}

module.exports.save = save;