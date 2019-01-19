function DepositWithdraw(deposit, withdraw){
    this.name = fullName
    this.initial = initial;
    this.deposit = deposit;
    this.withdraw = withdraw;
}



        var inputtedName = $("input#fullname").val();
        var inputtedInitial = $("input#initial"). val();
        var inputtedDeposit = $("input#deposit").val();
        var inputtedWithdraw = $("input#withdraw").val();

        var balance = new balance (inputtedDeposit, inputtedWithdraw)

        DepositWithdraw.prototype.deposit = function() {
            var totalAmount = this.initial + deposit;
          }
        
        DepositWithdraw.prototype.withdraw = function() {
            var totalAmount = this.initial - withdraw
        
            if(totalAmount > 0 ) {
                var balance = this.initial - withdraw;
            } else (totalAmount ===0)
            alert "your balance is zero"
        }

    $(document).ready(function() {
    $("form#registration").submit(function(event) {
        event.preventDefault();

        $("ul#balance").append("<li><span class='balance'>" + newbalance.deposite + "</span></li>");
        $("#show-balance").show();
        $("#show-balance p").text(newContact.firstName);
        $("input#deposit").val("");
        $("input#withdraw").val("");
      });
});
$(".contact").last().click(function() {
   
    $("#deposit").text(newDeposit.deposit);
    $("#withdraw").text(newWithdraw.withdraw);
  });  


