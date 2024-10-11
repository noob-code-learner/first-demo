/* let Name ="Mr. Deepak Kumar Sahu";
console.log(Name.length);
for(let i=0;i<=Name.length;i++){
   console.log(Name[i]) // to print every char of a string
}
*/
// let sentence=`the name"is" deepak 'sahu'`
// console.log (sentence);

// escape sequence char
  

 /* let fruit= 'bana\'na'  
console.log (fruit,fruit.length)
let fruit2= "bana\"na"  
console.log (fruit2,fruit2.length)
let fruit3= `bana\`na`  
console.log (fruit3,fruit3.length)

console.log(fruit,"\n",fruit2,"\t",fruit3)
console.log(fruit,"\r",fruit2,"\r",fruit3) */





// let Name= "    dEEpak KUmar SaHu"
// console.log(Name.length,Name.toLowerCase(),Name.toUpperCase(), Name.slice(4), Name.slice(5,9));
// console.log(Name.replace("dEEpak","heMAnt"), Name.trim())
// console.log(Name.concat(" is son of ramjilal sahu"))

// original string never changes

//console.log("har\"".length)
// const prompt = require("prompt-sync")();
// const word = prompt("Enter word: ");

// const string = "a quick brown fox jumps upon a lazy dog";

// console.log(`${string} ${string.includes(word) ? 'does' : 'does not'} contain the word "${word}" in the sentence.`);

const str= 'please give Rs 1000'

console.log(str.startsWith('please'));
console.log(str.startsWith('please',5));
console.log(str.startsWith('ease',2));
console.log(str.endsWith('please'));
console.log(str.endsWith('1000'));

console.log(str.endsWith('ve',11));
console.log(str.endsWith('please',6));
console.log(str.length);
console.log('please give Rs 1'.length);
console.log(str.endsWith('000',19));
let amount = Number.parseInt(str.slice('please give Rs'.length ));
console.log(amount, typeof(amount));
