const  prompt = require("prompt-sync")();
let temp= prompt("enter temp ");
temp= Number.parseInt(temp);
if (temp>30){
    var weather= prompt("enter weather ");
    if (weather=="sunny")
    {console.log("wear light clothing");}
    else if (weather=="cloudy")
       { console.log("carry a light jacket")
}}
else if (temp<15)
{ var weather= prompt("enter weather ");
    if (weather=="windy")
       { console.log("wear a thick coat");}
        else
            {console.log("wear a sweater")}}


else{console.log("temp is moderate")}