// -- Modules -- //
var fs = require('fs'),
    express = require('express'),
    appJS = require('./modules/appJS'),
    http = require('http');

// -- Variables -- //
var app = express();

// -- Routes -- //
app.get('/', (req, res, next) => {
    res.writeHead(200, {"content-type": "text/html"});
    
    res.write("Je suis bien démarré.");
});

// -- Start server -- //
app.listen(
    appJS.appSettings('port')
);