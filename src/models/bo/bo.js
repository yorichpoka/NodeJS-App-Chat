
// -- Exportation -- //
module.exports = class BO {

  constructor(id = 0) {
    // -- Attributes -- //
    this.id = id;
  }

  toString() {
    return JSON.stringify(this);
  }

}