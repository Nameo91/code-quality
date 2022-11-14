const Account = require("./account");

describe("Account", () => {
  it("initially displays the format of bank statement", () => {
    const account = new Account();
    expect(account.statement()).toBe("date || credit || debit || balance");
  });
});
