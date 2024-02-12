// Assuming the Farmer document has been saved with a reference to a Fruit document
// and you want to verify the relationship

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const fruitSchema = new mongoose.Schema({
    name: String,
    taste: Number
});

const farmerSchema = new mongoose.Schema({
    name: String,
    fruits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fruit'
    }]
});

const Fruit = mongoose.model('Fruit', fruitSchema);
const Farmer = mongoose.model('Farmer', farmerSchema);

// Function to verify the relationship
function verifyFarmers() {
    Farmer.find().populate('fruits')
        .then(farmers => {
            console.log('Farmers with populated fruits:', farmers);
        })
        .catch(err => console.error('Error fetching farmers:', err));
}

// Call the verification function
verifyFarmers();
