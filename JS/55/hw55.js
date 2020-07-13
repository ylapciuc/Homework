'use strict';

const lower = ['a','e','d'];
const upper =['A','B','C'];
//const mix = ['z','b','C'];

function ourvery(myArray , callback){

        for(let i = 0 ; i < myArray.length;i++){
           if(!callback(myArray[i])){
             return false;
           }
        }

        return true;
        
}

 

const checkForLower = ourvery(lower, x => x === x.toLowerCase());
const checkForUpper = ourvery(upper, x => x !== x.toLowerCase());



console.log('bool =',checkForLower);
console.log('bool =',checkForUpper);



/*
function lowcheck(x){
  if(x === x.toUpperCase()){
    console.log('upper');
  }
  else{
    console.log('lower');
  }
 
}


lowcheck('I');
*/