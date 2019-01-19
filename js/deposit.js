 /*var deposit = "";
 var withdrow = "";

 function deposit(){

 }*/

 var deposit = document.getElementById('deposit').value();
deposit = Number(deposit);

var withdraw = document.getElementById('withdraw');

deposit.addEventListener('click', depositCash);

function depositCash () {
  var depositAmt = prompt('How much would you like to deposit?');
  depositAmt = Number(depositAmt);
  balance = document.getElementById('deposit').value = balance
 
}
