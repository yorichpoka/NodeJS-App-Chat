// -- Modules -- //
var bo = require("./bo");

// -- Exportation -- //
module.exports = class UserBO extends bo {

  constructor(id = 0) {
    super(id);
    
    // -- Attributes -- //
    this.id = id;
    this.code = '';
    this.title = '';
    this.password = '';
  }

}