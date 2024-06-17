var express = require('express');

var app = express();

// Respond with "changed not" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('welcome dev');
});

// Listen on port 3000 by default or the port defined in the environment variables
app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on port ' + (process.env.PORT || 3000));
});

module.exports = app;


