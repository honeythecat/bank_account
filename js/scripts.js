var BankAccount = {
  name: "",
  balance: 0,

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },

  deposit: function(amount) {
    this.balance = this.balance + amount;

  }
};


// ------------------------------------------

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var customerName = $("input#customer-name").val();
    var intialDeposit = $("input#initial-deposit").val();
    // var deposit = $("input#deposit").val();
    // var withdraw = $("input#withdraw").val();
    var newAccount = Object.create(BankAccount);
    newAccount.balance = initialDeposit;
    newAccount.customerName = customerName;

    $("ul#show-contacts").append("<li><span class='newAccount'>" + newAccount.customerName + " " + newAccount.balance + "</span></li>");


    $("input#customer-name").val("");
    $("input#initial-deposit").val();
    $("input#deposit").val();
    $("input#withdraw").val();



    $("#new-account").last().click(function() {
      $("#show-contacts").show();
      $(".newAccount").text(newAccount);
    });
  });
});
