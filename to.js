const  prompt = require("prompt-sync")();
let age= prompt("enter your age")
age= Number.parseInt(age)
console.log(age>=18?'you can drive': 'you cannot drive')