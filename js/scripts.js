var BankAccount = {
  name: "",
  balance: 0,

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },

  deposit: function(amount) {
    this.balance = this.balance + amount;

  }
}


// ------------------------------------------

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var customerName = $("input#customer-name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());
    var newAccount = Object.create(BankAccount);


    newAccount.balance = initialDeposit;
    newAccount.customerName = customerName;
    $(".customer-name").text(customerName);
    $(".account-balance").show();
    $(".result").text(newAccount.balance);
    $("input#initial-deposit").val();
        // $("input#customer-name").val(""); <<deleted after Tuck left


    $("form#account").submit(function(event) {
      var newDeposit = parseInt($("input#deposit").val()) || 0;
      var newWithdraw = parseInt($("input#withdraw").val()) || 0;
        // Adding the || 0 makes a NaN return to zero
      newAccount.deposit(newDeposit);
      newAccount.withdraw(newWithdraw);
      $(".result").text(newAccount.balance);

      $("input#deposit").val();
      $("input#withdraw").val();
      event.preventDefault();

    });

  });
});
