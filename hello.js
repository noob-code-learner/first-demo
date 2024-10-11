const  prompt = require("prompt-sync")();
let a="ram"
let b="singh"
console.log(a+" "+b);
let age= prompt("what is your age"); 
console.log(age)
console.log(typeof age)
age=Number.parseInt(age); // converting string to number
console.log(typeof age) 

