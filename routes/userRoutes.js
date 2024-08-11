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
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// PUT update a user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.json(user);
    }   catch (err) {
        res.status(400).json(err);
    }
});

//DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }   catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;