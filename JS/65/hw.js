(function(){
'use strict';

const filenameInput = $('#fileName');


$('#load').click(()=>{
  
    fetch(filenameInput.val())
    .then(r => r.text())
    .then(rt => console.log(rt))
    .catch(err => console.log('oops', err));
 
});


}());