// -- Modules -- //
var fs = require('fs');

// -- Variables -- //

// -- Public -- //
function log(value) {
    console.log(value);
}

function logStringify(value) {
    try {
        console.log(
            JSON.stringify(value)
        );
    } catch (ex) {
        log(ex);
    }
}

function appSettings(name) {
    try {
        var value = 
            // -- Convert to JSON object -- //
            JSON.parse(
                // -- Read content file -- //
                fs.readFileSync('appSettings.json', 'UTF-8')
            )
            // -- Get value of specified attribute -- //
            [name];

        return value;
    } catch (ex) {
        log(ex);
    }
}

// -- Exportation -- //
exports.log = log;
exports.logStringify = logStringify;
exports.appSettings = appSettings;