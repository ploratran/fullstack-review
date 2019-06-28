const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log(res.send('hello client from server!'));
  res.status(200).end();
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // get data from client and insert to database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //get data from database and send back to client
  //db.find()
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

