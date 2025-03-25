const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 280
  },
  media: [{
    type: String
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  retweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add user information to tweet object
tweetSchema.virtual('userDetails', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
  justOne: true
});

// Make virtuals available when converting to JSON
tweetSchema.set('toJSON', { virtuals: true });

tweetSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Tweet', tweetSchema);
