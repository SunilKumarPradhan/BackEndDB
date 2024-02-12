const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var item = ["Buy Food", "Cook Food", "Eat Food"]; // this array will be used to add the individual list items

// to send a get request
app.get('/', (req, res) => {
    //This part just handles the current date of the day
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var day = today.toLocaleDateString('hi-IN', options);



    res.render('list', {kindOfDay: day, newListItem:item});
//GET: backend server to website
});




// to handle post request
app.post('/', (req, res) => {
    var item = req.body.newItem;
    console.log(item);
});
//POST: website to backend server

app.listen(port, () => console.log(`Server listening on port ${port}!`));