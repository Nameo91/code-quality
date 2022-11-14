const Account = require("./account");

describe("Account", () => {
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
});
