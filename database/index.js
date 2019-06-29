//DATABASE MODEL
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
  userName: String, //'ploratran'
  fullName: String, //name of repo url
  forkCount: Number //num of fork count
});


//compiling our schema into a Model named "Repo".
let Repo = mongoose.model('Repo', repoSchema);

let saveRepos = (repos) => {
  // This function should save a repo or repos to the MongoDB
  //console.log("repo length: ", repos.length);

  //loop through all the repos, then create docs
  for(var i = 0; i < repos.length; i++){
    //create documents instances from Repo model
    var newRepos = new Repo({
      id: repos[i].id,
      userName: repos[i].owner.login,
      fullName: repos[i].full_name,
      forkCount: repos[i].forks_count
    })
    //save new repos to db
    //console.log("print this: ", newRepos._doc);
    var mongoDatabase = newRepos._doc;
    console.log("data in database: ", newRepos._doc);
    newRepos.save();
  }
}

module.exports.saveRepos = saveRepos;
// module.exports.db = db; //test if mongodb connected to mongoose