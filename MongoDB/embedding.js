const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define the Fruit Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  taste: Number
});

// Define the FruitBasket Schema with embedded Fruit documents
const fruitBasketSchema = new mongoose.Schema({
  title: String,
  fruits: [fruitSchema] // Embedding Fruit documents directly
});

const FruitBasket = mongoose.model('FruitBasket', fruitBasketSchema);

// Create and save a FruitBasket with embedded Fruits
const myFruitBasket = new FruitBasket({
  title: "My Tropical Fruit Basket",
  fruits: [
    { name: "Mango", taste: 8 },
    { name: "Papaya", taste: 9 }
  ]
});

myFruitBasket.save()
  .then(() => console.log("FruitBasket with embedded fruits saved successfully."))
  .catch(err => console.error("Error saving FruitBasket:", err));
