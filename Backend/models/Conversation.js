const mongoose = require('mongoose');

// Define the Conversation schema
const ConversationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  messages: [{
    text: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
});

// Define the model for Conversation
const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;