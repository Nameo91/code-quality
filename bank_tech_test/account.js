class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(num) {
    if (isNaN(num)) {
      throw "This is not a number";
    }
    this.balance += num;
    this.transactions.push([this.timeStamp(), "", num, this.balance]);
  }

  withdraw(num) {
    if (isNaN(num)) {
      throw "This is not a number";
    }
    this.balance -= num;
    this.transactions.push([this.timeStamp(), num, "", this.balance]);
  }

  timeStamp() {
    const date = new Date().toLocaleDateString("en-GB");
    return date;
  }
}
module.exports = Account;
