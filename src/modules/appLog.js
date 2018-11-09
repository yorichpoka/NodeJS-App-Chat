// -- Modules -- //
var fs = require('fs');
    appInit = require('./appInit');
    moment = require('moment');

// -- Variables -- //
appInit.init();

// -- Public -- //
function log(exception, type) {
    // -- Create log objet -- //
    var obj = JSON.stringify({
                message: exception,
                type: type,
                date: moment()
                }
            )  + '\n';
    
    // -- Write in the log file -- //
    fs.appendFile(global.$logFileName, obj, (error, file) => {
        console.log(obj);
    });
}

// -- Exportation -- //
exports.log = log;