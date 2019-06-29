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

  request(options, (error, response, body) => {
    if(error) {
      console.error("error", error);
    }else {
      //get only certain values from api data
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
      console.log(gitArray);
      callback(null, gitArray);
    }
  });
}
module.exports.getReposByUsername = getReposByUsername;
