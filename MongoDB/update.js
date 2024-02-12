const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Define the schema
const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    taste: Number,
    review: String
});

// Create a model from the schema
const Fruit = mongoose.model('fruit_basket', FruitSchema);

// Update the taste of "Cucumber"
Fruit.updateOne({ name: "Cucumber" }, { taste: 20 })
    .then(result => console.log('Document updated', result))
    .catch(err => console.error("Document could not be updated", err));

// Example of updating multiple documents
// Let's say you want to update the review for all fruits with a taste rating above 25
Fruit.updateMany({ taste: { $gt: 25 } }, { review: "Delicious fruit." })
    .then(result => console.log('Multiple documents updated', result))
    .catch(err => console.error("Documents could not be updated", err));
