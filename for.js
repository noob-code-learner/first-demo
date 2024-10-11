const  prompt = require("prompt-sync")();
let number= prompt("enter your number")
number= Number.parseInt(number)
sum=0;
for( let h=1;h<=number;h++){
    sum+=h;

}
console.log(`sum of first ${number} numbers is ${sum}`)