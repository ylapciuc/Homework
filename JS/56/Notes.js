
/*
const months = ['January','February','March','April','May','June','July',"Augest",'September',
                'October','November','December'];

function getMonth(index){
    return months[index-1];

}

function getIndex(name){
    return months.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
}




console.log(getMonth(1));

console.log(getIndex('December'));


const monthUtils = {
    'use strict';

    months: ['January','February','March','April','May','June','July',"Augest",'September',
    'October','November','December'],

    getMonth: function getMonth(index){
        
        return this.months[index-1];
    
    },
 
    getIndex: function(name){
        return this.months.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
    }

    
};

console.log(monthUtils.getMonth(2));
console.log(monthUtils.getIndex('April'));



function monthUtils(){
    const months =['January','February','March','April','May','June','July',"Augest",'September','October','November','December'];

    return{
 
    getMonth:function(index){
        return months[index - 1];
    },

    getIndex:function(name){
      return months.findIndex(elem => elem.toLocaleLowerCase()=== name.toLocaleLowerCase()) + 1;
    }


    };

}

const month  = monthUtils();

console.log(month.getMonth(2));
console.log(month.getIndex('January'));

*/

const mu = (function(){

    'use strict';

    const months = ['January','February','March','April','May','June','July',"Augest",
                   'September','October','November','December'];
   
return{
  getmonth: function(index){

    return months[index -1];
  },

  getIndex:function(name){
    return months.findIndex(elem => elem.toLowerCase()=== name.toLowerCase()) + 1;
  }


};

}());

console.log(mu.getmonth(12));
console.log(mu.getIndex('December'));




