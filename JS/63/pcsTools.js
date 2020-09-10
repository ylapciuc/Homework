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

    function getRandomColorPart(){
        return Math.floor(Math.random()*256);
    }

    function getRandomColor(){
        const r = getRandomColorPart();
        const g = getRandomColorPart();
        const b = getRandomColorPart();


        return `rgb(${r},${g},${b})`;
    }

    function getSpeed(speed){
       if(typeof speed !== 'number'){
        return speeds[speed] || speeds.default;
       }
      return speed;
    }

    const speeds = {
      slow:1000,
      fast: 100,
      default: 500

    };
     
    const data = {};

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
               },

               sparkle: function(duration = 5000 , speed = speeds.default){
                const speedInput = getSpeed(speed);
                const originalColor = getCss(theElem , 'color');
                
                const sparkleInterval = setInterval(()=> setCss(theElem, 'color', getRandomColor()),speedInput);
                setTimeout(()=>{
                    clearInterval(sparkleInterval);
                    setCss(theElem,'color',originalColor);
                } ,duration);
               
                return this;
               },

               data: function(key, value){
                if(arguments.length < 2){
                  return data[key];
                }
                data[key] = value;
                return this;
            }
              
         };
        }
    

    };


}());