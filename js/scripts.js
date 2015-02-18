var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },

  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

var myBankAccount = Object.create(BankAccount);
myBankAccount.balance;
myBankAccount.deposit(20);
myBankAccount.balance;

var yourBankAccount = Object.create(BankAccount);
yourBankAccount.balance;
yourBankAccount.withdraw(1000000);
yourBankAccount.balance;
