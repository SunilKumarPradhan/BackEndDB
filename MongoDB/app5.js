const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const YourCustomSchema = new mongoose.Schema({
    name: String,
    taste: Number,
    review: String
});

const FruitBasket = mongoose.model('fruit_basket', YourCustomSchema);

// Retrieve and print all documents from the 'fruit_basket' collection
FruitBasket.find({})
    .then(fruits => {
        console.log('Retrieved documents from fruit_basket collection:');
        fruits.forEach(fruit => {
            console.log(`Name: ${fruit.name}, Taste: ${fruit.taste}, Review: ${fruit.review}`);
        });
    })
    .catch(err => console.error('Error retrieving documents:', err));
