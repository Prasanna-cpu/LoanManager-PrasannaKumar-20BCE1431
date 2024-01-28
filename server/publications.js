import { Meteor } from "meteor/meteor";
import { Loans } from "../imports/api/loans/loans";

Meteor.publish("loans", function () {
  if (Roles.userIsInRole(this.userId, "admin")) {
    return Loans.find({});
  } else if (Roles.userIsInRole(this.userId, "borrower")) {
    return Loans.find({ userId: this.userId });
  } else if (Roles.userIsInRole(this.userId, "lender")) {
    return Loans.find({ status: "pending" });
  } else {
    this.stop();
    return;
  }
});
