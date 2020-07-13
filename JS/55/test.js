'use strict';
/*
const numb = [1,2,3,4,5,6,7,8];

function numbfilter(theArray ,callback ){
   const results = [];
     for(let i = 0 ; i < numb.length;i++){
   
         if(callback(theArray[i])){
           results.push(theArray[i]);
         }
          
         
     }
  return results;
}

const evens = numbfilter(numb, x => x % 2 === 0);

console.log('even',evens);

function od(x){
    return x % 2 !== 0;
}


const odds = numbfilter(numb,od);
console.log('odd',odds);


*/

  const letters = ['a','b','c'];

function ourForEach(theArray , callback){
   for (let i = 0; i < theArray.length; i++) {
     
       callback(theArray[i]);
     
   }
}

ourForEach(letters , console.log);

const num =[1,2,3];

let sum = 0;




//ourForEach(num , x => sum += x);

function sums(x){
  return sum+=x;
}


ourForEach(num , sums);

console.log(num,sum);