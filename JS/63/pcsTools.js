window.pcs = window.pcs || {};

window.pcs.tools = (function () {
    'use strict';


    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element , property){
        return element.style[property];
    }


    return {
        wrap: function(id){
            const theElem = get(id);
            return{
            /*
                setCss: function(property , value){
                  setCss(theElem , property ,value);
              },
               getCss:property => getCss(theElem,property),
            */
             css: function(property , value){
                 if(arguments.length < 2){
                     return getCss(theElem,property);
                 }
                setCss(theElem,property , value);
                return this;
             },

               click: function(callback){
                   theElem.addEventListener('click',callback);
                   return this;
               },

               hide: function(){
                setCss(theElem , 'display','none');

                  return this;
               },
               show: function(){
                setCss(theElem , 'display','block');
                return this;
               } 
            
               
            
            };
        }
        //get: get,
        //setCss: setCss



    };


}());