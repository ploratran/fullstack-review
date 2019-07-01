const mongoose = require('mongoose');

// open a connection to mongodb fetcher database
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true }); //connect mongoose to server

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected!");
});

//define a schema named "repoSchema"
let repoSchema = mongoose.Schema({
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
        console.log("successfully saved", repo._id, repo.url);
      }
    })
  }
}

let findReposGt20000 = (githubUser, response) => {
  //select query to get repos gt 20000
  console.log('git ', githubUser);
  Repo.find({owner: githubUser, size: { $gt: 10000 }}, (err, data) => {
    if(err){
      console.log("error finding data", err);
    }else{
      var newData = data.map(doc => {
        return doc._doc;
      });
      console.log("new data" , newData);
      response.json(newData);
      //callback(newData);
    }
  });
}

module.exports.save = save;
module.exports.findReposGt20000 = findReposGt20000;