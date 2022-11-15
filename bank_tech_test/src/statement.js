class Statement {
  constructor(transactions) {
    this.transactions = transactions;
    this.statement = "";
  }

  print() {
    console.log(this.#header() + "\n" + this.statement);
  }

  body() {
    this.transactions.reverse().forEach((transaction) => {
      let date = this.#timeStamp(transaction.date);
      let credit = this.#currency(transaction.credit);
      let debit = this.#currency(transaction.debit);
      let balance = transaction.balance.toFixed(2);

      this.#bodyFromatter(date, credit, debit, balance);
    });
  }

  #header() {
    return "date || credit || debit || balance";
  }

  #timeStamp(date) {
    const dateString = date.toLocaleDateString("en-GB");
    return dateString;
  }

  #bodyFromatter(date, credit, debit, balance) {
    this.statement += `${date} || ${credit} || ${debit} || ${balance}\n`;
    return this.statement;
  }

  #currency(num) {
    if (!isNaN(num)) {
      return num.toFixed(2);
    } else {
      return "";
    }
  }
}

module.exports = Statement;
