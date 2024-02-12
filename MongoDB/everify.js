const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const fruitBasketSchema = new mongoose.Schema({
  title: String,
  fruits: [{
    name: String,
    taste: Number
  }] // Assuming this schema is already defined as shown above
});

const FruitBasket = mongoose.model('fruitbaskets', fruitBasketSchema);// collections ka naam thik se dena

// Function to fetch and log all FruitBasket documents
function verifyFruitBaskets() {
  FruitBasket.find({})
    .then(baskets => {
      console.log('All FruitBaskets with embedded fruits:', JSON.stringify(baskets, null, 2));
    })
    .catch(err => console.error('Error fetching FruitBaskets:', err));
}

// Call the function to verify the embeddings
verifyFruitBaskets();
