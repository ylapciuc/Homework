const week = (function(){
  'use strict';

  

  return {
   
     
    weekday:['Sunday' ,'Monday','Tuesday','Wednesday','Thursday','Friday','Shabbos'],

     getday:function (index){
        return this.weekday[index - 1];
    },
  
    getIndex:function(day){
        return this.weekday.findIndex(elem => elem.toLowerCase()=== day.toLowerCase()) + 1 ;
    }

  };


})();

console.log(week.getday(7));
console.log(week.getIndex('sunday'));
