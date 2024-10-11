/*const hello=()=>{
    console.log("hello, how are you"); // basic function with no return value and no value pass

}
hello();
const hello1=()=>{
    console.log("hello, how are you"); // basic function with no value pass but has return value
return "hello there"
}
v=hello1();    //basic  avarage function with return value and value pass
console.log(v);
let a=4,b=6,c=4,d=6,h=7;

const avg=(x,y,z)=>{
    console.log(`avg of ${x},${y} and ${z} is`,);
    return((x+y+z)/3);
}

console.log (avg(b,c,h));
console.log (avg(a,c,10));   */

const  prompt = require("prompt-sync")();
let n1= prompt("enter first number ")
n1= Number.parseInt(n1)
let n2= prompt("enter second number ")
n2= Number.parseInt(n2)
let n3= prompt("enter third number ")
n3= Number.parseInt(n3)
let n4= prompt("enter fourth number ")
n4= Number.parseInt(n4)
let n5= prompt("enter fifth number ")
n5= Number.parseInt(n5)






function mean (x,y,z,a,b){ 
    console.log(`mean of ${x},${y},${z},${a},${b} is` )
return ((x+y+z+a+b)/5)
}
console.log(mean(n1,n2,n3,n4,n5));




