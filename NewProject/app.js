const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/newproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
