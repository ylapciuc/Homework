(function(){
  'use strict';
  
  
  function get(id){
     return document.getElementById(id);
  }

  function bodyAppend(child){
      document.body.append(child);
  }
 

  let clock ;
  let stopwatch;
  let seconds =0;
  let mintues = 0;
  let hours = 0;
  
  //const btn = document.getElementById('btn');

  const label = document.createElement("h1");
  const btnTime = document.createElement('button');
  const btnStopwatch = document.createElement('button');
  const btnStop = document.createElement('button');
  
  btnTime.innerHTML = 'Current Time';
  btnStopwatch.innerHTML = 'Stopwatch';
  btnStop.innerHTML = 'Stop';

  let btnArray = [btnTime , btnStopwatch , btnStop];

    for(let x = 0 ; x < btnArray.length;x++){
         if(x > 0){
            btnArray[x].style.marginLeft = '12px';
         }
    }


  document.body.append(label);
  //document.body.append(btnTime);
  bodyAppend(label);
  bodyAppend(btnTime);
  bodyAppend(btnStopwatch);
  bodyAppend(btnStop);
  
  btnTime.addEventListener('click',()=>{
  
  clearIntervals();
   
    clock = setInterval(()=>{
  
     
        //This is the current time
   let d  = new Date();
   label.innerHTML = d.toLocaleTimeString();
   
        
   },10);
   
 });


  
  btnStopwatch.addEventListener('click',()=>{
   clearIntervals();
  stopwatch = setInterval(() => {
   
   // This is a clock that doesnt tell time its more like a stopwatch
   


       if(seconds > 59){
           seconds = 0;
           ++mintues;
       }
   
       if(mintues > 59){
           
       
           ++hours;
           mintues = 0;
       }
       
   
       if(hours > 23){
           hours = 0;
       }
   
        if(mintues< 10){
   
          label.innerHTML = `${hours}:0${mintues} ${seconds++}`;
        }
        else{
          label.innerHTML = `${hours}:${mintues} ${seconds++}`;
        }
        
   
  


}, 100);

});
   
function clearIntervals(){
  hours = 0 ;
  mintues = 0 ;
  seconds = 0;
   clearInterval(clock);
   clearInterval(stopwatch);
   
}


  
  btnStop.addEventListener('click',()=>{
     clearIntervals();
  });
  
  
  
  }());
  