const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/calc", (req, res) => res.sendFile(__dirname + "/index2.html"));

app.post("/calc", (req, res) => {
    const operand1 = parseFloat(req.body.operand1); // Convert to number
    const operand2 = parseFloat(req.body.operand2); // Convert to number
    const operator = req.body.operator;

    let result; // yahaan named variable use hua hai, for this smaller scope | ECMA Script 5 mein ye feature aaya thha . let is block scoped and 
    let error = false; // Declare error here so that it is accessible in the switch statement
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                error = true;
                result = "Cannot divide by zero.";
                break;
            }
            result = operand1 / operand2;
            break;
        default:
            error = true;
            result = "Invalid operator.";
            break;
    }

    fs.readFile('result.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send("Error loading result page");
            return;
        }

        let resultColor = error ? 'red' : 'limegreen';
        html = html.replace('{{result}}', result)
                   .replace('{{resultColor}}', resultColor);

        res.send(html);
    });
});


/*<input type="number" class="form-input" name="operand1" placeholder="Enter first number" required>
  <input type="number" class="form-input" name="operand2" placeholder="Enter second number" required>
*/   
//Kaunse form element se data fetch karega woh cheez yahaan se pata chalti hai
app.listen(port, () => console.log(`Server listening on port ${port}!`));







/*const express = require('express');
const bodyParser=require('body-parser');
const app = express();

const port = 5500;


app.use(bodyParser.urlencoded({extended:true})); ///read?   //to get the data from the form
app.get( "/" , (req, res) => res.send("Hello World!"));

app.get( "/calc",(req,res)=> res.sendFile(__dirname + "/index2.html")); //http://localhost:5500/index.html
app.post( "/calc",(req,res)=> res.send("Haan Bhai Calculation hogaya !!"));//<form action="/calc" method="post"> ye hona chahiye warna kaam nahi karega

console.log(req.body.operand1);
console.log(req.body.operand2);
app.listen(port, () => console.log(`Server listening on port ${port}!`));
*/
