const  prompt = require("prompt-sync")();
const fruit= prompt('enter a fruit');
switch (fruit){
    case 'mango': console.log("mango is 50/kg")
    break;
case 'orange': console.log ('orange is 45/kg')
break;
case 'apple' : console.log ('apple is 120/kg')
break;
 case 'banana':console.log ('banana is 30/kg')
 break;
 case 'melon' : console.log ('melon is 10/kg')
 break;
 default: console.log(` sorry, we are out of ${fruit}.`)
}
