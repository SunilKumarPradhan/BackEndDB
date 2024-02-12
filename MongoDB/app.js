const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fruitsDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  
// Corrected part: Define Schema
const Schema = mongoose.Schema;

// Define a schema for Fruit
const fruitSchema = new Schema({
    name: String,
    rating: {
        type: Number,
        min: 1, // Adding simple validation for demonstration
        max: 10
    },
    review: String
});

// Create a model from the schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a fruit document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// Save the fruit document to the database
fruit.save().then(() => console.log('Fruit saved to the database')).catch(err => console.error('Error saving fruit', err));
