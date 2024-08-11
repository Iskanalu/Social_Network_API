const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

//Connect to MondoDB and start server
mongoose.connect('mongodb://localhost/social-network-api', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () =>{
        CONSOLE.LOG(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});