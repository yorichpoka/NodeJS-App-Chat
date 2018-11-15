//#region Modules ans variables
// -- Modules -- //
var mysql = require('mysql'),
    moment = require('moment'),
    cryptoJS = require('crypto-js'),
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

// -- Encrypt value -- //
function toEncryptAES(value, key = null){
    try {
        return cryptoJS.AES.encrypt(
                JSON.stringify(value), 
                key ===null ? global.$appSettings.cryptoJSAESKey
                            : key
                ).toString();
    } catch (ex){
        console.log(ex);
    }
    return null;
}

// -- Encrypt value -- //
function toDecryptAES(value, key = null){
    try {
        return JSON.parse(
                    cryptoJS.AES.decrypt(
                        value, 
                        key ===null ? global.$appSettings.cryptoJSAESKey
                                    : key
                    ).toString(cryptoJS.enc.Utf8));
    } catch (ex){
        console.log(ex.message);
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
        toDateToString: toDateToString,
        toEncryptAES: toEncryptAES,
        toDecryptAES: toDecryptAES
    }
}
// -- browser -- //
global.appModule = module.exports;
//#endregion