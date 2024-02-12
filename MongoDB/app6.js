const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const YourCustomSchema = new mongoose.Schema({
    name: String,
    taste: Number,
    review: String
});

const model = mongoose.model('fruit_basket', YourCustomSchema);

const fruits = [
    new model({ name: "Apple", taste: 10, review: "This is a kashmiri fruit."}),
    new model({ name: "Guava", taste: 50, review: "This is a U.P fruit."}),
    new model({ taste: 2000, review: "This is a tasteless fruit."})
];

fruits.forEach(fruit => {
    fruit.save()
        .then(doc => console.log('Document inserted', doc))
        .catch(err => console.error("Document could not be saved ", err));
});
