(function(){
'use strict';

const filenameInput = $('#fileName');
const result = $('#result');


$('#load').click(()=>{
  
    fetch(filenameInput.val())
    .then(r => r.text())
    .then(rt => result.text(rt))
    .catch(err => console.log('oops', err));
 
});


}());