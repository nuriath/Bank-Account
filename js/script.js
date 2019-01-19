function BankAccount(deposit, withdraw){
    this.deposit = diposit;
    this.withdraw = withdraw;
}

$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedDepodit = $("input#deposit").val();
        var inputtedWithdraw = $("input#withdraw").val();

        var balance = new balance (inputtedDepodit, inputtedWithdraw)

        $("ul#balance").append("<li><span class='contact'>" + newbalance.deposite + "</span></li>");

        $("input#deposit").val("");
        $("input#withdraw").val("");
      });
});
