// -- Exportation -- //
module.exports = class NotificationBO {

  constructor(data = null, isSuccess = true, message = null) {
    
    // -- Attributes -- //
    this.data = data;
    this.isSuccess = isSuccess;
    this.message = (message != null)  ? message
                                      : isSuccess ? 'success' 
                                                  : 'fail';
  }

}