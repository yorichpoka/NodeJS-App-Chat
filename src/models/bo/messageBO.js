// -- Module -- //
var bo = require("./bo"),
    moment = require("moment"),
    userBO = require("../bo/userBO");

// -- Exportation -- //
module.exports = class MessageBO extends bo {

  constructor(id = 0) {
    super(id);
    // -- Attributes -- //
    this.id_user = 0;
    this.message = '';
    this.date = moment();
    this.user = new userBO();
  }

};