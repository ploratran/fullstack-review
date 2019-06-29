//DATABASE MODEL
const mongoose = require('mongoose');

// open a connection to the fetcher database
mongoose.connect('mongodb://localhost/fetcher'); //connect mongoose to server

const getRepos = require('../helpers/github.js');

//define a schema named "repoSchema"
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  fullName: String, //"octocat/git-consortium"
  repoURL: String,
  id: Number,
  forkCount: Number
});

//compiling our schema into a Model named "Repo".
let Repo = mongoose.model('Repo', repoSchema);


let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB

}

module.exports.save = save;