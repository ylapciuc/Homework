//Question  1


(function(){
    'use strict';
   
   
    const lowercaseArray =['jack','donald','jared'];
    const numberArray = [2,4,6];


    function mapArray(theArray,callback){
       
        const newArray = [];
        let bool = true;
 
         theArray.forEach(element => {
             bool = callback(element);
           
             if(bool){
                newArray.push(callback(element));
             }
        
           
        });
            return newArray;
    }


  



//Making a new array that all numbers are double the first array 
 const double = mapArray(numberArray, x => x * 2);
  //console.log(double);
//Making a new array that makes all strings uppercasae
  const uppercase = mapArray(lowercaseArray, x => x.toUpperCase());
 // console.log(uppercase);


  // Makes a new array for numbers that are larger than 2
  const numbers = mapArray(numberArray, x => {
                if(x > 2){
                    return x;
                }
        
           
         });
 
      //  console.log(numbers);





    }());


//Question 2 / A:

window.app = (function(app){
 'use strict';

 app.getcounter = 0;
 
 app.increment = function(){
   

    return ++this.getcounter;
  };



return app;

}(window.app|| {}));







/*
let t1 = window.app;
let t2 = window.app;

console.log('Hi',t1.increment());
console.log('Hi',t1.increment());
console.log('Hi',t1.increment());
console.log('Hi',t1.increment());


console.log('Bye',t2.increment());
console.log('Bye',t2.increment());
console.log('Bye',t2.increment());
console.log('Bye',t2.increment());





console.log('TEST 1 increment',test1.increment());

console.log(window.app.increment());
//console.log('Get Counter',window.app.getcounter);

console.log(window.app.increment());
//console.log('Get Counter',window.app.getcounter);

console.log(window.app.increment());
//console.log('Get Counter',window.app.getcounter);
*/





















//console.log();