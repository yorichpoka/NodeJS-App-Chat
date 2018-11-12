// -- Module -- //
var userBO = require("../bo/userBO"),
    mysql = require('mysql'),
    dao = require('./dao'),
    appLib = require('../../modules/appLib');

// -- Exportation -- //
module.exports = class UserDAO extends dao {

    constructor(id = 0) {
        super(id, 'users');
    }

    add(obj = new userBO()) {
        var that = this;

        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appLib.mysqlConnection();
                
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                    
                    // -- Query -- //
                    con.query(
                        "INSERT INTO " + that.tableName + " (code, title, password) VALUES ('" + obj.code + "', '" + obj.title + "', '" + obj.password + "')", 
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

    upd(obj = new userBO()) {
        var that = this;        
        
        return new Promise((successCallback) => {
            try {
                // -- Create connecion -- //
                var con = appLib.mysqlConnection();
                
                // -- Execute query -- //
                con.connect(function(err) {
                    // -- Check if error -- //
                    if (err) { global.$logger.error(err); throw err; }
                    
                    // -- Query -- //
                    con.query( 
                        "UPDATE " + that.tableName + " SET code='" + obj.code + "', title='" + obj.title + "', password='" + obj.password + "'  WHERE id=" + obj.id,
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
                var con = appLib.mysqlConnection();
                
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
                var con = appLib.mysqlConnection();
            
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

