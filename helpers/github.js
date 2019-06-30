const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, callbackExecute) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  var processResponse = (error, response, body) => {
    if(error) {
      console.error("error get repos from API ", error);
    }else {
      var gitData = JSON.parse(body);
      var gitArray = [];
      for(var i = 0; i < gitData.length; i++){
        gitArray.push({
          id_: gitData[i].id,
          owner: gitData[i].owner.login,
          size: gitData[i].size,
          url: gitData[i].html_url
        });
      }
      console.log("helper function called: ", gitArray);
      callbackExecute(null, gitArray);
    }
  }
  request(options, processResponse);
}

module.exports.getReposByUsername = getReposByUsername;
