
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import BorrowerDashboard from './BorrowerDashboard';
import LenderDashboard from './LenderDashboard';
import AdminDashboard from './AdminDashboard';
import LoanRequestForm from './LoanRequestForm';
import { Loans } from '../../api/loans/loans';

const App = ({ user, loans }) => {
  if (!user) return <RegisterForm />;

  return (
    <Router>
      <Switch>
        <Route path="/borrower">
          <BorrowerDashboard loans={loans} />
          <LoanRequestForm />
        </Route>
        <Route path="/lender">
          <LenderDashboard loans={loans} />
        </Route>
        <Route path="/admin">
          <AdminDashboard loans={loans} />
        </Route>
      </Switch>
    </Router>
  );
};

export default withTracker(() => {
  Meteor.subscribe('loans');
  return {
    user: Meteor.user(),
    loans: Loans.find({}).fetch(),
  };
})(App);
