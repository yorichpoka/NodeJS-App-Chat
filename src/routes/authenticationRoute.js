// -- Modules -- //
var express = require('express'),
    router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    next();
});

// define the home page route
router.get('/', (req, res) => {
    res.render(
        'authentication/index.ejs', 
        { 
            title: 'Authentication', 
            version: global.$appSettings.build_version.last_updated
        }
    );
});

// define the about route
// router.get('/main', (req, res) => {
//     res.send('Authentication main page Get');
// });

module.exports = router;