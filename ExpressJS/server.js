const express = require('express');
const app = express();
const port = 5500;

//Set up a GET route in the Express application for the home page. 
//When this route is accessed, execute a function that takes the request and response objects as arguments. 
//Inside this function, log the response object to the console.
app.get( "/" , (req, res) => console.log(req)); 
// browser: http://localhost:5500/ daaloge toh tab hi chalega
app.listen(port, () => console.log(`Server listening on port ${port}!`));
