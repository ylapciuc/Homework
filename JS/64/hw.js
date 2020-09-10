(function(){
'use strict';
const nameElem = $('#name');
const addressElem = $('#address');
const nameResultElem = $('#nameResult');
const addressResultElem = $('#addressResult');


$('#signup').submit( function(event){
 event.preventDefault();
 console.log(nameElem.val(), addressElem.val());
 
 nameResultElem.text(nameElem.val());
 addressResultElem.text(addressElem.val());
 this.reset();
});

//let accepted = false;
const submitButton = $('#signupBtn');

const acceptedCheckbox = $('#accept');
const allInputs = $('#signup input');

acceptedCheckbox.change(function(){
    //accepted = !accepted;

    //submitButton.prop('disabled',!accepted);
    
    submitButton.prop('disabled',!acceptedCheckbox.is(' :checked'));

    allInputs.prop('disabled',!acceptedCheckbox.is(' :checked'));
});

}());