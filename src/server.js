//#region Modules
var appStart = require('./modules/appStart')(),
    express = require('express'),
    authenticationRoute = require('./routes/authenticationRoute'),
    administrationRoute = require('./routes/administrationRoute'),
    chatRoute = require('./routes/chatRoute'),
    http = require('http'),
    socketIo = require('socket.io'),
    uniqid = require('uniqid'),
    cookieSession = require('cookie-session'),
    cookieParser = require('cookie-parser'),
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

// trust first proxy
app.set('trust proxy', 1);
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

// -- Define cookieSession -- //
app.use(cookieSession({
    secret: 'todotopsecret'
    // name: 'session',
    // keys: ['id', 'user'],
    // maxAge: (24 * 60 * 60 * 1000),
    // httpOnly: false,
}));

// -- Define cookieParser -- //
app.use(cookieParser());
//#endregion

//#region Define routes
// -- Init -- //
app.use(function(req, res, next){
    // -- Update session value -- //
    if (typeof(req.session.con) == 'undefined') {
        req.session.con = {
            id: uniqid(),
            user: {
                name: '',
                code: ''
            }
        }
    }
    next();
});

// -- The main page -- //
app.get('/', (req, res, next) => {    
    // -- Redirection to the login -- //
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
app.use('/chat', chatRoute);
//#endregion

//#region  Execute application
server.listen(global.$appSettings.port, global.$appSettings.host, () => {
    global.$appModule.consoleOut('Tha app is statrting on the url: ' + global.$appSettings.host + ':' + global.$appSettings.port + '/');
});
//#endregion