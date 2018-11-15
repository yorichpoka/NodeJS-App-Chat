// -- Modules -- //
var express = require('express'),
    NotificationBO = require('../models/bo/notificationBO'),
    UserDAO = require('../models/dao/userDAO'),
    router = express.Router()
    userDAO = new UserDAO();
    notificationBO = new NotificationBO();

// middleware that is specific to this router
router.use(function(req, res, next) {
    next();
});

// define the home page route
router.get('/', function(req, res) {
    res.render(
        'authentication/index.ejs', 
        { 
            title: 'Authentication', 
            version: global.$appSettings.build_version.version,
            cryptoJSAESKey: global.$appSettings.cryptoJSAESKey,
            appParameters: global.$appModule.convert.toEncryptAES({
                messageBoxVisibilityDelay: global.$appSettings.messageBoxVisibilityDelay
            })
        }
    );
});

// -- Get post -- //
router.post('/', function(req, res) {
    // -- Login user -- //
    userDAO.getCodePassword(req.body.code, req.body.password)
            .then(
                function(result){
                    // -- isSuccess -- //
                    if (!(Array.isArray(result) && result.length != 0)){
                        notificationBO = new NotificationBO(null, false, 'Compte ou mot de passe incorrect');
                    } else {
                        notificationBO = new NotificationBO('/' + req.body.module + '/');
                        // -- Update user in session -- //
                        req.session.con.user = result[0];
                    }
                    // -- Send like response -- //
                    res.send(notificationBO);
                }
            );
});

// define the about route
// router.get('/main', (req, res) => {
//     res.send('Authentication main page Get');
// });

module.exports = router;