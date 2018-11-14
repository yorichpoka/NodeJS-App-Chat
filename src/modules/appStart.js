// -- Modules -- //
var log4js = require('log4js'),
    appModule = require('./appModule'),
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
    
    // -- Define global variable -- //
    global.$logger = log4js.getLogger('toFileText');
    global.$appModule = appModule;
};