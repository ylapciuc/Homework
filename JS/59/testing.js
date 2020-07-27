let b = (function incrementingFunc(name){
      'use strict';



     return{
         num:0,
         name:name,
        
          setIncrement: function(){
              return ++this.num;
         } 

     };

})();

b.setIncrement();
b.setIncrement();
b.setIncrement();
b.setIncrement();
b.setIncrement();
b.setIncrement();



console.log(b.num);

/*
let test1 = incrementingFunc('jack');

test1.setIncrement();
test1.setIncrement();
test1.setIncrement();

console.log(test1.name,test1.num);

let test2 = incrementingFunc('john');

test2.setIncrement();
test2.setIncrement();

console.log(test2.name,test2.num);


*/



