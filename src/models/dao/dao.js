
// -- Exportation -- //
module.exports = class DAO {

  constructor(id = 0, tableName) {
    // -- Attributes -- //
    this.id = id;
    this.tableName = tableName;
  }

  toString() {
    return JSON.stringify(this);
  }

}