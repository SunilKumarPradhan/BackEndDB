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

// Retrieve and print only the names of all documents from the 'fruit_basket' collection
FruitBasket.find({}, 'name') // Second argument 'name' specifies that only the name field should be included in the result
    .then(fruits => {
        console.log('Names of fruits in the fruit_basket collection:');
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    })
    .catch(err => console.error('Error retrieving documents:', err));
