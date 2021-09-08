import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StartLayout } from '../layouts/StartLayout';
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
        <Redirect to="/signup" />
      </Switch>
    </StartLayout>
  );
};
