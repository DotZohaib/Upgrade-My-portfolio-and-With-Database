const mongoose = require('mongoose');

let plm = require("passport-local-mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/portfolio');


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
  
  userSchema.plugin(plm)
  // Create a model from the schema
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;



