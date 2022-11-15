const Statement = require("../src/statement");

describe("Statement", () => {
  it("displays the header", () => {
    const statement = new Statement();
    console.log = jest.fn();
    statement.print();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" + "\n"
    );
  });

  it("prints a transaction in the formatted order", () => {
    const mockedTransactions = [
      { date: "15/11/2022", credit: "1000.00", debit: "", balance: 1000 },
    ];
    const statement = new Statement(mockedTransactions);
    console.log = jest.fn();
    statement.body();
    statement.print();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" +
        "\n" +
        "15/11/2022 || 1000.00 ||  || 1000.00\n"
    );
  });

  it("prints transactions in the formatted order", () => {
    const mockedTransactions = [
      { date: "10/01/2023", credit: "1000.00", debit: "", balance: 1000 },
      { date: "13/01/2023", credit: "2000.00", debit: "", balance: 3000 },
      { date: "14/01/2023", credit: "", debit: "500.00", balance: 2500 },
    ];

    const statement = new Statement(mockedTransactions);
    console.log = jest.fn();
    statement.body();
    statement.print();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" +
        "\n" +
        "14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00\n"
    );
  });
});
