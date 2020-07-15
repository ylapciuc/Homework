'use strict';

function createPerson(first , last ,age){

 
   return {
    firstName: first,
    lastName: last,
    age: age,
    print: function(){
      console.log(this.firstName,this.lastName,this.age);
    }
  };
}

let jared = createPerson('Jared','Kushner',38);

jared.print();

 const potus = {
  firstname: 'Donald',
  lastname: 'Trump',
  Age: 75

 };

 console.log(potus.firstname , potus.lastname,potus.Age);







 