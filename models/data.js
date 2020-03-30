const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = mongoose.model('Data', dataSchema);
