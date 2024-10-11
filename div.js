const  prompt = require("prompt-sync")();
let number= prompt("enter your number")
number= Number.parseInt(number)
console.log(number%6==0?`${number} is divisiable by 2 and 3`: `${number} nodeis not diviable by 2 and 3`)
