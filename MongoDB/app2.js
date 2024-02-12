const mongoose = require('mongoose');

// Updated connection string without the deprecated options
mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const YourCustomSchema = new mongoose.Schema({
    name: String,
    taste: Number,
    review: String
});

const model = mongoose.model('fruit_basket', YourCustomSchema);

const data = new model({ name: "Dragon fruit", taste: 10 , review: "This is a tasteless fruit."});
//const data = new model({ name: "Star fruit", taste: 50 , review: "This is a tasteless fruit."});
//const data = new model({ name: "Cacao fruit", taste: 20 , review: "This is a tasteless fruit."});

// if you want to insert multiple documents, you can refer app4.js

data.save()
    .then(doc => console.log('Document inserted', doc))
    .catch(err => console.error("Document could not be saved ",err));
