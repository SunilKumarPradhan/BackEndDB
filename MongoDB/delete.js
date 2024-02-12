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

// Delete a specific fruit by name
Fruit.deleteOne({ name: "Cucumber" })
    .then(result => console.log('Document deleted', result))
    .catch(err => console.error("Document could not be deleted", err));

// Example of deleting multiple documents that match a condition
// Let's say you want to delete all fruits with a taste rating less than 20
Fruit.deleteMany({ taste: { $gt: 40 } })
    .then(result => console.log('Documents deleted', result))
    .catch(err => console.error("Documents could not be deleted", err));
