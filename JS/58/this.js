(function () {
 'use strict';

 
 function printPerson(){
  console.log(this.name, this.age);
 }
 
 
 
 
 const potus = {
   
     name: 'Donald Trump',
     age: 75,
     print: printPerson/*function(){
         console.log(this.name , this.age);
        }*/
};
 
   potus.print();
 

printPerson.call(potus);

}());