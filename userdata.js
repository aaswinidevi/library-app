const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/library'
);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, default: 'user' }
});

const Userdata = mongoose.model('userData', UserSchema);

module.exports = Userdata;
