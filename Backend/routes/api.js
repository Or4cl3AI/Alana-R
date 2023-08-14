const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const conversationController = require('../controllers/conversationController');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/user/:id', userController.getUserProfile);

// Conversation routes
router.get('/conversation/:id', conversationController.getConversation);
router.post('/conversation', conversationController.createConversation);
router.put('/conversation/:id', conversationController.updateConversation);

module.exports = router;