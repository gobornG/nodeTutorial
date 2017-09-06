var express = require('express'); //npm package that needs to be installed...use 'require'

var server = express(); //gives me a server


server.get('/', function(req, res) {
    res.send('you got to the server, you are a hacker');
})

server.get('/name', (req, res) => {
    res.send('this is my name, Garry with two R');
});

server.listen(3000, function() {
    console.log('server listening on port 3000');
});

//npm i -g nodemon