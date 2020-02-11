var express = require("express");
var app = express();
var PORT = 8080;
const math = require("./math.js")

app.get('/:operator/:num1/:num2', function(req,res){
	
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result;

	switch(operator){
		case "addition":
		result = math.add(num1, num2);
		break;

		case "subtraction":
		result = math.subtract(num1, num2);
		break;

		case "multiplication":
		result = math.multiply(num1, num2);
		break;

		case "division":
		result = math.divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});