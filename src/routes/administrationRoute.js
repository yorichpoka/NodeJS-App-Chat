// -- Modules -- //
var express = require('express'),
    router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    next();
});

// define the home page route
router.get('/', (req, res) => {
    res.send('Administration home page Get');
});

// define the about route
router.get('/createUser', (req, res) => {
    res.send('Administration createUser page Get');
});

module.exports = router;