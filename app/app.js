/*eslint-env node*/
var fs = require('fs')
var express = require('express');
var app = express();

app.use(express.static('.'))

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/server', function (req, res) {
  let serverUrl = process.env['OS_MASTER_URL']
  res.send(serverUrl);
});

app.get('/token', function (req, res) {
  
  let tokFile = '/var/run/secrets/kubernetes.io/serviceaccount/token';
  let secr = fs.readFileSync(tokFile,'ascii');
  res.send(secr);
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
