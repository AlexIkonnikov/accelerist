import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PasswordResetPage from '../pages/PasswordResetPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

export const AuthRoute: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/reset" component={PasswordResetPage} />
        <Redirect to="/signup" />
      </Switch>
    </BrowserRouter>
  );
};
