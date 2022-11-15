class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(num) {
    this.#errorMessage(num);
    this.balance += num;
    this.transactions.push({
      date: new Date(),
      credit: num,
      balance: this.balance,
    });
  }

  withdraw(num) {
    this.#errorMessage(num);
    this.balance -= num;
    this.transactions.push({
      date: new Date(),
      debit: num,
      balance: this.balance,
    });
  }

  #errorMessage(num) {
    if (isNaN(num)) {
      throw "This is not a number";
    }
  }
}
module.exports = Account;
