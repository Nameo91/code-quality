class Account {
  constructor() {
    this.balance = 0;
    // this.transactions = [];
  }

  deposit(num) {
    this.#errorMessage(num);
    this.balance += num;
    // this.transactions.push({
    //   date: new Date(),
    //   credit: num.toFixed(2),
    //   debit: "",
    //   balance: this.balance,
    // });
  }

  withdraw(num) {
    this.#errorMessage(num);
    this.balance -= num;
    // this.transactions.push({
    //   date: new Date(),
    //   credit: "",
    //   debit: num.toFixed(2),
    //   balance: this.balance,
    // });
  }

  // #timeStamp() {
  //   const date = new Date().toLocaleDateString("en-GB");
  //   return date;
  // }

  #errorMessage(num) {
    if (isNaN(num)) {
      throw "This is not a number";
    }
  }
}
module.exports = Account;
