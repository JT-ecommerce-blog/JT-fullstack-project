const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Post Schema
const PostSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  author: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model('post', PostSchema);