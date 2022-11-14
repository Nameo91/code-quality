class Account {
  constructor() {
    this.balance = 0;
  }
  deposit(num) {
    this.balance += num;
    return this.balance;
  }
}
module.exports = Account;
