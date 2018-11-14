//#region Modules ans variables
// -- Modules -- //
var mysql = require('mysql'),
    moment = require('moment'),
    log4js = require('log4js');
//#endregion

//#region Methodes
function consoleOut(value) {
    console.log(value);
}

function consoleOutStringify(value) {
    try {
        console.log(
            JSON.stringify(value)
        );
    } catch (ex) {
        consoleOut(ex);
    }
}

function redirection(url) {
	window.location.href = url;
}
//#endregion

//#region Functions
// function appSettings(name) {
//     try {
//         var value = 
//             // -- Convert to JSON object -- //
//             JSON.parse(
//                 // -- Read content file -- //
//                 fs.readFileSync('../appSettings.json', 'UTF-8')
//             )
//             // -- Get value of specified attribute -- //
//             [name];

//         return value;
//     } catch (ex) {
//         consoleOut(ex);
//     }
// }

function mysqlConnection() {
    try {
        return mysql.createConnection(
            global.$appSettings.mysqlConnection
        );
    } catch (ex) {
        consoleOut(ex);
    }

    return null;
}

function log() {
    try {
        return mysql.createConnection(
            global.$appSettings.mysqlConnection
        );
    } catch (ex) {
        consoleOut(ex);
    }

    return null;
}

// -- Convert -- //
function toDateToString(value) {
    try {
        var date = moment();
        date = Object.assign(new moment(), value);
        
        return date.format('YYYY-MM-DD hh:mm:ss')
    } catch (ex) {
        consoleOut(ex);
    }

    return null;
}
//#endregion

//#region Exportation
// -- Exportation -- //
module.exports = {
    consoleOut: consoleOut,
    consoleOutStringify: consoleOutStringify,
    mysqlConnection: mysqlConnection,
    redirection: redirection,
    convert: { 
        toDateToString: toDateToString
    }
}
// -- browser -- //
global.appModule = module.exports;
//#endregion