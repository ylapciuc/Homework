

window.app = (function(app){
 'use strict';
 

   //app.number = 0 ;

     app.createIncrement = function(){
       
           
        return{
       
             count: 0,
             
            setIncrement: function(){
              // let count = 0;
               //return ++app.number;

               return ++this.count;
                
            }
            
             


        };
  };
 
    



return app;
}(window.app|| {}));

/*
let test1 = window.app.createIncrement();
let test2 = window.app.createIncrement();


console.log(test1.setIncrement());
console.log(test1.setIncrement());
console.log(test1.setIncrement());


console.log(test2.setIncrement());
console.log(test2.setIncrement());
console.log(test2.setIncrement());





console.log(test1.createIncrement());
console.log(test1.createIncrement());
console.log(test1.createIncrement());



console.log(test2.createIncrement());
console.log(test2.createIncrement());
console.log(test2.createIncrement());
*/
















 









