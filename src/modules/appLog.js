// -- Modules -- //
var fs = require('fs');
    moment = require('moment');

// -- Public -- //
function log(exception) {
    // -- Create log objet -- //
    var obj = JSON.stringify({
                    message: exception,
                    date: moment()
                })  + '\n';
                
    // -- Write in the log file -- //
    fs.appendFile(global.$appSettings.logFileName, obj, (error, file) => {
        console.log(error);
        console.log(obj);
    });
}

// -- Exportation -- //
module.exports.log = log;