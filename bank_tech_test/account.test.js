const Account = require("./account");

describe("Account", () => {
  it("initially has zero balance", () => {
    const account = new Account();
    expect(account.balance).toBe(0.0);
  });

  it("add the deposit to balance", () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.balance).toBe(1000.0);
  });
});
