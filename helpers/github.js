const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, callback) => { //takes in a cb
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let options = {
    //https://api.github.com/mimimama/hrsf119-fullstack-overview
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  //read: https://github.com/request/request
  request.get(options,(error, response, body) => {
    if(error) {
      console.log('error', error);
    }else{
      callback(body);
    }
  });
  // function callback (error, response, body) {
  //   if(!error && response.statusCode == 200){
  //     let github = JSON.parse(body);
  //     for(var i = 0; i < github.length; i++){
  //       console.log(github[i].full_name); //ploratran/ToyProblemsJS
  //     }
  //   }
  // }
  //request.get(options, (error, response, body) {});
}
module.exports.getReposByUsername = getReposByUsername;
