const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a schema with validation
const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'] // Making the name field required
    },
    taste: Number,
    review: String
});

// Create a model from the schema
const Fruit = mongoose.model('fruit_basket', FruitSchema);

// Create an array of fruits, one without a name to test validation
const fruits = [
    new Fruit({ name: "Fruit name 1", taste: 10, review: "This is a summer fruit."}),
    new Fruit({ name: "Fruit name 2", taste: 50, review: "This is a nostalgic fruit."}),
    new Fruit({ taste: 2000, review: "This is a tasteless fruit."}) // This will fail validation and wont be pushed to the database
];
// it will throw an error (it will be printed in console )and will not be saved to the database

// Iterate over each fruit and save it to the database
fruits.forEach(fruit => {
    fruit.save()
        .then(doc => console.log('Document inserted', doc))
        .catch(err => console.error("Document could not be saved ", err));
});
