const { middleware } = require("yargs");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(num) {
    this.balance += num;
    return this.balance;
  }

  withdraw(num) {
    this.balance -= num;
    return this.balance;
  }
}
module.exports = Account;
