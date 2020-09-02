(function(){
'use strict';



function get(id){
    return document.getElementById(id);
}


function setCss(element,property,value){
    element.style[property] = value;
}



let contacts = [];

const contactForm = get('contactForm');
const firstInput = get('first');
const lastInput = get('last');
const emailInput = get('email');
const phoneInput = get('phone');



   get('add').addEventListener('click', () =>{
        setCss(contactForm,'display','block');
      
  }); 

  function hideAddContactForm(){
    contactForm.reset();
    setCss(contactForm,'display','none');
  }

    
  


 
    contactForm.addEventListener('submit', e =>{

    e.preventDefault();

  




   const contactsTable = get('contacts');

   if(!contacts.length){
       contactsTable.deleteRow(1);
   }



   const newContacts = {
     first: firstInput.value,
     last: lastInput.value,
     email: emailInput.value,
     phone: phoneInput.value
   };

   contacts.push(newContacts);
   contactForm.reset();
                             
   const newRow = contactsTable.insertRow();
  
   const firstCell = newRow.insertCell();
   const lastCell = newRow.insertCell();
   const emailCell = newRow.insertCell();
   const phoneCell = newRow.insertCell();
   const deleteCell = newRow.insertCell();
   

   firstCell.innerHTML = newContacts.first;
   lastCell.innerHTML = newContacts.last;
   emailCell.innerHTML = newContacts.email;
   phoneCell.innerHTML = newContacts.phone;
      
    const deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';
    deleteCell.appendChild(deleteButton);
    

    //const index = contacts.length;


    deleteButton.addEventListener('click',() =>{
         contacts = contacts.filter(c => c !== newContacts);
         contactsTable.deleteRow(newRow.rowIndex);
         
      if(!contacts.length){
        const newRow = contactsTable.insertRow();
        const cell = newRow.insertCell();
        cell.innerHTML = 'Now Contacts Loaded';
        cell.setAttribute('colspan','5');

      }
    });

 hideAddContactForm();
    
 });


 get('cancel').addEventListener('click',hideAddContactForm);
}());