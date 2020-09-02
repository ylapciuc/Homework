function counter(){
 'use strict';
  let i = 0;

  function setIncerment(){
     return ++i;
  }

 function getIncerement(){
     return i;
 }
  
return{
  
     setIncrement:setIncerment,
     getIncerement:getIncerement
};

}

const counts = counter();
const counts2 = counter();

counter().setIncrement();
counter().setIncrement();
counter().setIncrement();


console.log(counter().getIncerement());