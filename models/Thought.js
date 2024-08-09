const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const ThoughtSchema = new Schema({
    thoughtText: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    reactions: [ ReactionSchema]
});

const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;
