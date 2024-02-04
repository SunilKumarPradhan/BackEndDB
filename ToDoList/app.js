const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 5500;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";


    switch(currentDay){
        case 0:
            day = "Sunday !";
            break;
        case 1:
            day = "Monday !";
            break;
        case 2:
            day = "Tuesday !";
            break;
        case 3:
            day = "Wednesday !";
            break;
        case 4:
            day = "Thursday !";
            break;
        case 5:
            day = "Friday !";
            break;
        case 6:
            day = "Saturaday !";
            break;
    }

    
    res.render('list', {kindOfDay: day});
    // upar waala function views folder mein jaayega , wahaan jo list(.js) naam ki file hai usse dhoondke...
    // ...usmein jo kindOfDay waala vairable hai usse day se replace karega.. aur kuchh issi tarah ye ejs templating kaam karti hai
    
});









app.listen(port, () => console.log(`Server listening on port ${port}!`));