const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let items = ["Buy Food", "Cook Food", "Eat Food"]; 

app.get('/', (req, res) => {
    let today = new Date(); // var 1
    let options = { // var 2 which is actally a list of options
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options); // var 3 which tells the current date in a specific format

    res.render('list', {kindOfDay: day, newListItem: items}); // upar ek list naam ka array hai jisme kuch items hain
    // uss ko hum ek ejs variable ke through pass kar rahe hain
});

// to handle post request
app.post('/', (req, res) => {
    let newItem = req.body.newItem; // Use 'newItem' to avoid confusion with the 'items' array
    console.log(newItem);
    items.push(newItem); // Add the new item to the 'items' array
    res.redirect('/'); // Redirect to the home route to display the updated list
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
