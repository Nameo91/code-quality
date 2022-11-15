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
      let date = transaction.date;
      let credit = transaction.credit;
      let debit = transaction.debit;
      let balance = transaction.balance.toFixed(2);

      this.#bodyFromatter(date, credit, debit, balance);
    });
  }

  #header() {
    return "date || credit || debit || balance";
  }

  #bodyFromatter(date, credit, debit, balance) {
    this.statement += `${date} || ${credit} || ${debit} || ${balance}\n`;
    return this.statement;
  }
}

module.exports = Statement;
