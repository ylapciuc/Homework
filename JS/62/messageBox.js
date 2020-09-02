window.pcs = window.pcs || {};

window.pcs.messageBox = (function(){

   'use strict';

   const offset = 30;
   let leftOffset = -150;
   let topOffset = -75;
   const width = 400;
   const height = 170;
   let nextZindex = 1;




function show(msg , buttons, callback){
   buttons = buttons || ['OK'];
    const messageBox = document.createElement('div');
    const span = document.createElement('span');
    span.style.overflow = 'auto';
    span.innerHTML = msg;
    messageBox.appendChild(span);

    const buttonsDiv = document.createElement('div');
    messageBox.appendChild(buttonsDiv);
    document.body.appendChild(messageBox);
    

     for(let i = 0 ; i < buttons.length;i++){
    const button = document.createElement('button');
    button.innerHTML = buttons[i];
    buttonsDiv.appendChild(button);
     button.addEventListener('click',()=>{
        document.body.removeChild(messageBox);
        if(callback){
           callback(buttons[i]);
        }
     });
   }
    
     span.style.overflow = 'auto';
     span.style.height = '100%';
     span.style.display = 'inline-block';
    
    messageBox.addEventListener('click',()=>{
        messageBox.style.zIndex = nextZindex++;
    });

     messageBox.style.fontSize = '20px';
     messageBox.style.padding = '1em';
     messageBox.style.paddingBottom = '40px';

     messageBox.style.backgroundColor = 'lightblue';
     messageBox.style.padding = '1.5em';
     messageBox.style.boxSizing = 'border-box';
     messageBox.style.width = `${width}px`;
     messageBox.style.height = `${height}px`;
     messageBox.style.position = 'absolute';
     messageBox.style.top = '50%';
     messageBox.style.left = '50%';
     messageBox.style.marginLeft = `${leftOffset}px`;
     messageBox.style.marginTop = `${topOffset}px`;
     messageBox.style.border = '1.5px solid black';


  buttonsDiv.style.position = 'absolute';
  buttonsDiv.style.bottom = '1px';
  buttonsDiv.style.left = '0';
  buttonsDiv.style.width = '100%';
  buttonsDiv.style.textAlign = 'center';

  leftOffset += offset;
  topOffset+= offset;
  
 
   if(parseFloat(getComputedStyle(messageBox).left,10) + leftOffset + width > window.innerWidth){
      leftOffset -= window.innerWidth - width;
   }


   if(parseFloat(getComputedStyle(messageBox).top,10) + topOffset + height > window.innerHeight){
    topOffset -= window.innerHeight - height;
 }
   
  }


  return {
      show: show
  };

}());