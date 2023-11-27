var express = require('express'), fs = require('fs'), morgan = require('morgan'),
    path = require('path'), app = express(),
    accessLogStream = fs.createWriteStream(path.join('logs', 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }))
    .get('/', function (req, res) {
    res.send('hello, world!')
}).listen(6000);

