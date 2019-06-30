const mongoose = require('mongoose');

// open a connection to mongodb fetcher database
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true }); //connect mongoose to server

mongoose.Promise = global.Promise;
//get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected!");
});

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

  for(var i = 0; i < repos.length; i++){

    var repoDoc = new Repo(repos[i]); //mongoose docs instances

    repoDoc.save((err, repo) => {
      if(err){
        console.log("error saving doc ", err);
      }else{
        console.log("here: ", repo._id, repo.url);
      }
    })
  }
}

module.exports.save = save;