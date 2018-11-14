//#region Modules
var appStart = require('./modules/appStart')(),
    express = require('express'),
    authenticationRoute = require('./routes/authenticationRoute'),
    administrationRoute = require('./routes/administrationRoute'),
    http = require('http'),
    socketIo = require('socket.io'),
    bodyParser = require('body-parser');
//#endregion

//#region  Variables
var app = express(),
    server = http.createServer(app),
    io = socketIo(server);
//#endregion

//#region  View engine parameters
// -- Define views repositori -- //
app.set('views', './views');

// -- Define views engine -- //
app.set('views engine', 'ejs');
//#endregion

//#region Middlewares
// -- Define public repositorie -- //
app.use('/modules', express.static('./node_modules'));
app.use('/js', express.static('./public/js'));
app.use('/css', express.static('./public/css'));
app.use('/lib', express.static('./public/lib'));
app.use('/images', express.static('./public/images'));

// -- Define others middlewares -- //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//#endregion

//#region Define routes
// -- The main page -- //
app.get('/', (req, res, next) => {
    // -- Redirection to the login -- /
    res.redirect('/authentication/');
});

// -- The error page -- //
app.get('/error', (req, res, next) => {
    res.render(
        'error.ejs', 
        {

        }
    );
});

// -- Laod all routes modules -- //
app.use('/authentication', authenticationRoute);
app.use('/administration', administrationRoute);
//#endregion

//#region  Execute application
server.listen(global.$appSettings.port, global.$appSettings.host, () => {
    global.$appModule.consoleOut('Tha app is statrting on the url: ' + global.$appSettings.host + ':' + global.$appSettings.port + '/')
});
//#endregion