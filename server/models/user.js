const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  displayName: String,
  emails: String,
  isVerified: Boolean,
  photosUrl: String,
  provider: String
});

module.exports = mongoose.model('users', UserSchema);
