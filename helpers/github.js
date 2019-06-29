const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    //https://api.github.com/mimimama/hrsf119-fullstack-overview
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback (error, response, body) {
    if(!error && response.statusCode == 200){
      let github = JSON.parse(body);
      //console.log('user github ', repos);
      for(var i = 0; i < github.length; i++){
        console.log(github[i].full_name, 'repos');
      }
    }
  }

  //read: https://github.com/request/request
  request.get(options,callback);
}

module.exports.getReposByUsername = getReposByUsername;