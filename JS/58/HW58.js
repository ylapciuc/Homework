(function () {
    'use strict';
   
/*
  const btnDeposit = document.getElementById('btnDeposit');
  
  const  ui = document.getElementById('UIdiv');

  let counter = 0;
       
  btnDeposit.addEventListener('click',function(){
        
         ui.innerHTML = ++counter;

         if(counter > 10){
           
            counter = 0;
            ui.innerHTML = 0;
         }


  });

  
*/






    function performTransaction(amount){
        this.balance += amount;
        console.log(`Transaction for ${this.name} ${this.balance}`);
       
    }
   
    
    const bank1 = function(balance){

        return{
         
          balance: balance,
          Transaction:  function(amount){
              this.balance += amount;

          }

         
        };
    };
   

    const bank2 = function(name,balance){

        return{
         name: name,
          balance: balance,
          Transaction:  performTransaction
        };
    };
   
   let oldBalance;
   const transaction1 = bank1(100);
   
   oldBalance = transaction1.balance;
   
   console.log(`Bank1 Balance: ${oldBalance}`);
 
   
   transaction1.Transaction(100);
   console.log(`Bank1 Deposit +${oldBalance} ---- New Balance: ${transaction1.balance}`);
     
   transaction1.Transaction(-50);
  // oldBalance = transaction1.balance;

   console.log(`Bank1 Withdrawal -50 ---- New Balance: ${transaction1.balance}`);



   const transaction2 = bank2('Bank2',50);

   oldBalance = 50;
    
   console.log(`Bank2 Balance ${oldBalance}`);

    
   performTransaction.call(transaction2, 40);
  

   
 }());