//This example demonstrates how to create a relationship between two collections: Fruit and Farmer. A Farmer can have multiple Fruit documents associated with them, establishing a one-to-many relationship.

// The Farmer collection will have a reference to the Fruit collection. This is done by adding a field to the Farmer schema that references the Fruit schema.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Fruit Schema
const fruitSchema = new mongoose.Schema({
    name: String,
    taste: Number
});

// Farmer Schema with reference to Fruit documents
const farmerSchema = new mongoose.Schema({
    name: String,
    fruits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fruit'
    }]
});

const Fruit = mongoose.model('Fruit', fruitSchema);
const Farmer = mongoose.model('Farmer', farmerSchema);

// Assume apple is saved and has an _id
const appleId = new mongoose.Types.ObjectId('65c99a86a7cab4f8389224f6'); 
const guavaId = new mongoose.Types.ObjectId('65c99a86a7cab4f8389224f7');// Placeholder ID, replace with actual ID

// Create and save a Farmer with reference to the Fruit
const farmerJohn = new Farmer({ name: "John", fruits: [appleId] });
farmerJohn.save()
    .then(() => console.log('Farmer John saved with reference to Apple.'))
    .catch(err => console.error(err));

// Create and save Farmer Ramesh Kumar with a reference to the Guava
const farmerRamesh = new Farmer({ name: "Ramesh Kumar", fruits: [guavaId] });
farmerRamesh.save()
    .then(() => console.log('Farmer Ramesh Kumar saved with reference to Guava.'))
    .catch(err => console.error(err));
