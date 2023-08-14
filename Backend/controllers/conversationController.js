const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');

// Get all conversations
router.get('/', async (req, res) => {
  try {
    const conversations = await Conversation.find();
    res.json(conversations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one conversation
router.get('/:id', getConversation, (req, res) => {
  res.json(res.conversation);
});

// Create one conversation
router.post('/', async (req, res) => {
  const conversation = new Conversation({
    user: req.body.user,
    messages: req.body.messages
  });

  try {
    const newConversation = await conversation.save();
    res.status(201).json(newConversation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one conversation
router.patch('/:id', getConversation, async (req, res) => {
  if (req.body.user != null) {
    res.conversation.user = req.body.user;
  }
  if (req.body.messages != null) {
    res.conversation.messages = req.body.messages;
  }
  try {
    const updatedConversation = await res.conversation.save();
    res.json(updatedConversation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one conversation
router.delete('/:id', getConversation, async (req, res) => {
  try {
    await res.conversation.remove();
    res.json({ message: 'Deleted Conversation' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for getting conversation by ID
async function getConversation(req, res, next) {
  let conversation;
  try {
    conversation = await Conversation.findById(req.params.id);
    if (conversation == null) {
      return res.status(404).json({ message: 'Cannot find conversation' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.conversation = conversation;
  next();
}

module.exports = router;