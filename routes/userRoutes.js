const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('friends');
        res.json(users);
    }   catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by its _id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('friends');
        res.json(user);
    }   catch (err) {
        res.status(400).json(err);
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

router.post('/:id/friends', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.friends.push(req.body.friendId);
        await user.save();
        res.json(user);
    }   catch (err) {
        console.log('err >', err);
        res.status(400).json(err);
    }
});

router.delete('/:id/friends/:friendId', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.friends.id(req.params.friendId).remove();
        await user.save();
        res.json(user);
    }   catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})


module.exports = router;