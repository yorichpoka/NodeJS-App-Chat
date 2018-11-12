// -- Modules -- //
var appStart = require('./modules/appStart')(),
    fs = require('fs'),
    express = require('express'),
    appLib = require('./modules/appLib'),
    $ = require('jquery'),
    bodyParser = require('body-parser'),
    http = require('http');

// -- Variables -- //
var app = express();

// -- Define public repositorie -- //
app.use(bodyParser.urlencoded);
app.use(express.static('./resources'));

// -- Routes -- //
app.get('/', (req, res, next) => {
    res.writeHead(200, {"content-type": "text/html"});
   
    res.write("Je suis bien démarré.");
});

app.get('/Index', (req, res, next) => {
    res.writeHead(200, {"content-type": "text/html"});
   
    res.render('/views/authentication/Index', {});
});

// -- Start server -- //
app.listen(global.$appSettings.port, () => {
    appLib.consoleOut('Tha app is statrting on the url: ' + global.$appSettings.host + ':' + global.$appSettings.port + '/')
});