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
    var initialDeposit = $("input#initial-deposit").val();
    var newAccount = Object.create(BankAccount);
    newAccount.balance = initialDeposit;
    newAccount.customerName = customerName;
    $("ul.show-account").append("<li><span class='new-account'>" + newAccount.customerName + " " + newAccount.balance + "</span></li>").show();


    $("form#account").submit(function(event) {
      var deposit = $("input#deposit").val();
      var withdraw = $("input#withdraw").val();
      var account = Object.create(BankAccount);
      account.deposit = deposit;
      account.withdraw = withdraw;

      account.balance = newAccount.balance + deposit;

      $("ul.show-account").append("<li><span class='new-account'>" + newAccount.customerName + " " + newAccount.balance + "</span></li>");


      $("input#customer-name").val("");
      $("input#initial-deposit").val();
      $("input#deposit").val();
      $("input#withdraw").val();



      $("ul.show-account").last().click(function() {
        $("ul.show-account").show();
        $("ul.show-account").text(newAccount);
      });
    });
  });
});
