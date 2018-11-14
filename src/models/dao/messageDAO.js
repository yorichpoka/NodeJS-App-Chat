// -- Module -- //
var messageBO = require("../bo/messageBO"),
    mysql = require('mysql'),
    dao = require('./dao'),
    appModule = require('../../modules/appModule');

// -- Exportation -- //
module.exports = class messageDAO extends dao {

    constructor(id = 0) {
        super(id, 'messages');
    }

    add(obj = new messageBO()) {
        var that = this;

        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appModule.mysqlConnection();
                
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                    
                    // -- Query -- //
                    con.query(
                        "INSERT INTO " + that.tableName + " (id_user, message, date) VALUES ('" + obj.id_user + "', '" + obj.message + "', '" + appModule.convert.toDateToString(obj.date) + "')", 
                        function (err, result) {
                            // -- Check if error -- //
                            if (err) { global.$logger.error(err); throw err; }
                            
                            // -- Execute successCallback -- //
                            successCallback(result);
                        }
                    );
                });
            } catch (ex) {
                global.$logger.error(ex);
            }
        });
    }  

    upd(obj = new messageBO()) {
        var that = this;        
        
        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appModule.mysqlConnection();
                
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                    
                    // -- Query -- //
                    con.query( 
                        "UPDATE " + that.tableName + " SET id_user='" + obj.id_user + "', message='" + obj.message + "', date='" + appModule.convert.toDateToString(obj.date) + "'  WHERE id=" + obj.id,
                        function (err, result) {
                            // -- Check if error -- //
                            if (err) { global.$logger.error(err); throw err; }
                            
                            // -- Execute successCallback -- //
                            successCallback(result);
                        }
                    );
                });
            } catch (ex) {
                global.$logger.error(ex);
            }
        });
    }  

    del(id = 0) {
        var that = this;
        
        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appModule.mysqlConnection();
                
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                    
                    // -- Query -- //
                    con.query( 
                        "DELETE FROM " + that.tableName + " WHERE id=" + id,
                        function (err, result) {
                            // -- Check if error -- //
                            if (err) { global.$logger.error(err); throw err; }
                            
                            // -- Execute successCallback -- //
                            successCallback(result);
                        }
                    );
                });
            } catch (ex) {
                global.$logger.error(ex);
            }
        });
    }  

    get(id = 0) {
        var that = this;

        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appModule.mysqlConnection();
            
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                
                    // -- Query -- //
                    con.query( 
                        (id != 0) ? "SELECT *  FROM " + that.tableName + " WHERE id=" + id 
                                  : "SELECT *  FROM " + that.tableName,
                        function (err, result) {
                            // -- Check if error -- //
                            if (err) { global.$logger.error(err); throw err; }
                            
                            // -- Execute successCallback -- //
                            successCallback(result);
                        }
                    );
                });
            } catch (ex) {
                global.$logger.error(ex);
            }
        });
    }  
  }

