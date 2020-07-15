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


const calculatorMod = (function(){
   
    'use strict';
 
    return{
 
    setRate: function(rate){

        return rate;
    },

    setYears: function(years){
        
        return years;
    },

    calculateInterest:function(principle, rate , years){
      return Math.round(principle * this.setRate(rate) * this.setYears(years));
    }
 };
  
})();

console.log(calculatorMod.calculateInterest(200,1.1 ,1));





 // console.log('Rate:', calculatorMod.setRate(1.1) ,`  
//Years: ${calculatorMod.setYears(2)}  
 //${calculatorMod.calculateInterest()}`);