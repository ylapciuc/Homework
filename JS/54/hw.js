'use strict';


function multiply(a , b){
   
   
    return a * b;
}


console.log(`Multiplication 20 * 20 =`, multiply(20,20));



function getMultiplier(){
     
    return multiply;
   
}

let multiplier = getMultiplier();

console.log('10 * 10',multiplier(10,10));



function getMultiplier2(num1){
   
     return function(num2){
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
     }

}

var multiplyBy5 = getMultiplier2(5);
multiplyBy5(5);


var multiplyBy10 = getMultiplier2(5);

multiplyBy10(10);



