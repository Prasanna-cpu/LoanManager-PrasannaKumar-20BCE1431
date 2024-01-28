import { Meteor } from 'meteor/meteor';


Meteor.methods({
  "loans.requestLoan"(amount) {
    if (!this.userId || !Roles.userIsInRole(this.userId, "borrower")) {
      throw new Meteor.Error("not-authorized");
    }

    Loans.insert({
      userId: this.userId,
      amount,
      status: "pending",
      createdAt: new Date(),
    });
  },

  "loans.confirmPayment"(loanId) {
    if (!this.userId || !Roles.userIsInRole(this.userId, "lender")) {
      throw new Meteor.Error("not-authorized");
    }

    Loans.update(loanId, { $set: { status: "paid" } });
  },
});