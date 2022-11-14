class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(num) {
    this.#errorMessage(num);
    this.balance += num;
    this.transactions.push([this.#timeStamp(), "", num, this.balance]);
  }

  withdraw(num) {
    this.#errorMessage(num);
    this.balance -= num;
    this.transactions.push([this.#timeStamp(), num, "", this.balance]);
  }

  #timeStamp() {
    const date = new Date().toLocaleDateString("en-GB");
    return date;
  }

  #errorMessage(num) {
    if (isNaN(num)) {
      throw "This is not a number";
    }
  }
}
module.exports = Account;
