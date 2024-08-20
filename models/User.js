const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid email address'] },
   friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
   thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }]
});

// Create a virtual field for the friend count
UserSchema.virtual('friendCount').get(function() {
   return this.friends.length;
 });

// Ensure virtual fields are serialized
UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;