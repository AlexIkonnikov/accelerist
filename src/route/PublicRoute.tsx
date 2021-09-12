import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StartLayout } from '../layouts/StartLayout';
import NewPasswordPage from '../pages/NewPasswordPage';
import PasswordResetPage from '../pages/PasswordResetPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

export const PublicRoute: FC = () => {
  return (
    <StartLayout>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/reset" component={PasswordResetPage} />
        <Route exact path="/change_password" component={NewPasswordPage} />
        <Redirect to="/signup" />
      </Switch>
    </StartLayout>
  );
};
