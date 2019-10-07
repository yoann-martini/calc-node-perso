const express = require('express');
const bodyParser = require('body-parser');
const ejs = require ('ejs');

const app = express();

let operation = 0;





app.set("view engine","ejs");
app.use(bodyParser());

app.get("/", function(req, res){
    res.render('index', {
  resultat : operation
  });
});


//addition
function addition(number1, number2) {
  let addition = number1 + number2 ;
  return addition;
}

app.post("/addition", function (req, res){
operation = addition(Number(req.body.number1), Number(req.body.number2));
res.redirect('/');
});

//soustraction
function soustraction(number1, number2) {
  let soustraction = number1 - number2 ;
  return soustraction;
}

app.post("/soustraction", function (req, res){
operation = soustraction(Number(req.body.number1), Number(req.body.number2));
res.redirect('/');
});

//multiplication
function multiplication(number1, number2) {
  let multiplication = number1 * number2 ;
  return multiplication;
}

app.post("/multiplication", function (req, res){
operation = multiplication(Number(req.body.number1), Number(req.body.number2));
res.redirect('/');
  });

//division
function division(number1, number2) {
  let division = number1 / number2 ;
  return division;
}

app.post("/division", function (req, res){
operation = division(Number(req.body.number1), Number(req.body.number2));
res.redirect('/');
});


// Clear
app.post("/clear", function (req, res) {
operation = 0;
  res.redirect('/');
});



// Gestion erreur 404
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});


app.listen(8080);





