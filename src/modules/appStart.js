// -- Modules -- //
var fs = require('fs'),
    log4js = require('log4js');
    appSettingsJson = require('../appSettings.json');

// -- Exportation -- //
module.exports = function() {
    // -- Define global variable -- //
    global.$appSettings = appSettingsJson;
    
    // -- configure log4js -- //
    log4js.configure({
            appenders: { 
                toFileText: { 
                    type: 'file', 
                    filename: global.$appSettings.logFileName 
                } 
            },
            categories: { 
                default: { 
                    appenders: ['toFileText'], 
                    level: 'error' 
                }
            }
          }
    );

    global.$logger = log4js.getLogger('toFileText');
};