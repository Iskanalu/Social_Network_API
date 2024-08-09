const express = require('express');
const router = express.Router();
const User = require('../model/User');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().populare('friends');
        res.jason(users);
    }   catch (err) {
        res.status(500).json(err);
    }
});

// POST create a new user
router.post(('/'))