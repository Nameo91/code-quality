/* eslint no-use-before-define: 0 */
const Statement = require("../src/statement");

describe("Statement", () => {
  beforeEach(() => {
    mockDateObject = new Date("2022-11-15T22:42:16.652Z");
    spy = jest.spyOn(global, "Date").mockImplementation(() => mockDateObject);
  });

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
      {
        date: mockDateObject,
        credit: 1000,
        balance: 1000,
      },
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
      { date: mockDateObject, credit: 1000, balance: 1000 },
      { date: mockDateObject, credit: 2000, balance: 3000 },
      { date: mockDateObject, debit: 500, balance: 2500 },
    ];

    const statement = new Statement(mockedTransactions);
    console.log = jest.fn();
    statement.body();
    statement.print();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" +
        "\n" +
        "15/11/2022 ||  || 500.00 || 2500.00\n15/11/2022 || 2000.00 ||  || 3000.00\n15/11/2022 || 1000.00 ||  || 1000.00\n"
    );
  });
});
