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
        'chat/index.ejs', 
        { 
            title: 'Messagerie'
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
                    if (result.length === 0){
                        notificationBO = new NotificationBO(null, false, 'Compte ou mot de passe incorrect');
                    } else {
                        notificationBO = new NotificationBO('/' + req.body.module + '/');
                    }
                    // -- Send like response -- //
                    res.send(notificationBO);
                }
            );
});

// define the about route
// router.get('/main', (req, res) => {
//     res.send('chat main page Get');
// });

module.exports = router;