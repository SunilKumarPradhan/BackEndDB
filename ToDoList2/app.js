const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let items = ["Buy Food", "Cook Food", "Eat Food"]; // Renamed to 'items' to reflect it's a collection

// to send a get request
app.get('/', (req, res) => {
    // This part just handles the current date of the day
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let day = today.toLocaleDateString('hi-IN', options);

    res.render('list', {kindOfDay: day, newListItem: items}); // Pass 'items' to the template
});

// to handle post request
app.post('/', (req, res) => {
    let newItem = req.body.newItem; // Use 'newItem' to avoid confusion with the 'items' array
    console.log(newItem);
    items.push(newItem); // Add the new item to the 'items' array
    res.redirect('/'); // Redirect to the home route to display the updated list
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
