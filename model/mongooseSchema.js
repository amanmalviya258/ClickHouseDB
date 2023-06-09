const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
  database: {
    type: String,
    required: true,

  },
  table: {
    type: String,
    required: true,

  },
  name: {
    type: String,
    required: true,

  },
  type: {
    type: String,

  }
}
);
module.exports = mongoose.model("tableSchema", TableSchema)