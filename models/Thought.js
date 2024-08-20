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

// Create a virtual field for the friend count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
 
 // Ensure virtual fields are serialized
 ThoughtSchema.set('toJSON', { virtuals: true });
 ThoughtSchema.set('toObject', { virtuals: true });

const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;
