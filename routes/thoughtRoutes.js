const express = require ('express');
const router = express.Router();
const Thought = require('../models/Thought');
const User =  require('../models/User');

// GET all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single thought by its _id
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// POST create a new thought
router.post('/', async (req, res) => {
    try {
        const thought = new Thought(req.body);
        await thought.save();
        res.status(201).json(thought);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// PUT update a thought
router.put('/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(thought);
    }   catch (err) {
        res.status(400).json(err);
    }
});

//DELETE  a thought
router.delete('/:id', async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }   catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// POST add a reaction
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.push(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a reaction
  router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.id(req.params.reactionId).deleteOne();
      await thought.save();
      res.json(thought);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });
  
  module.exports = router;

