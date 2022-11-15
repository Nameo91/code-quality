const Account = require("../src/account");

describe("Account", () => {
  beforeEach(() => {
    mockDateObject = new Date("2021-02-26T22:42:16.652Z");
    spy = jest.spyOn(global, "Date").mockImplementation(() => mockDateObject);
  });

  it("initially has zero balance", () => {
    const account = new Account();
    expect(account.balance).toBe(0.0);
  });

  it("adds the deposit to balance", () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.balance).toBe(1000.0);
  });

  it("adds the deposits to balance", () => {
    const account = new Account();
    account.deposit(1000);
    account.deposit(500);
    expect(account.balance).toBe(1500);
  });

  it("throw an error if the given argument is not a number", () => {
    const account = new Account();
    expect(() => account.deposit("NaN")).toThrow("This is not a number");
  });

  it("calculates the balance after withdrawal", () => {
    const account = new Account();
    account.balance = 1000;
    account.withdraw(500);
    expect(account.balance).toBe(500.0);
  });

  it("calculates the balance after withdrawals", () => {
    const account = new Account();
    account.balance = 1000;
    account.withdraw(500);
    account.withdraw(120);
    expect(account.balance).toBe(380);
  });

  it("throw an error if the given argument is not a number", () => {
    const account = new Account();
    expect(() => account.withdraw("NaN")).toThrow("This is not a number");
  });

  it("returns a deposit transaction in an array", () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.transactions[0].balance).toBe(1000);
  });

  it("returns a withdrawal transaction in an array", () => {
    const account = new Account();
    account.withdraw(300);
    expect(account.transactions[0].debit).toEqual("300.00");
  });

  it("returns all transactions in an array", () => {
    const account = new Account();
    account.deposit(1000);
    account.withdraw(300);
    expect(account.transactions[1].balance).toBe(700);
  });
});
