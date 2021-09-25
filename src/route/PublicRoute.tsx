import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StartLayout } from '../layouts/StartLayout';
import NewPasswordPage from '../pages/NewPasswordPage';
import PasswordResetPage from '../pages/PasswordResetPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import { ROUTES } from './routes';

export const PublicRoute: FC = () => {
  return (
    <StartLayout>
      <Switch>
        <Route path={ROUTES.signUp} component={SignUpPage} />
        <Route path={ROUTES.signIn} component={SignInPage} />
        <Route path={ROUTES.resetPassword} component={PasswordResetPage} />
        <Route exact path={ROUTES.changePassword} component={NewPasswordPage} />
        <Redirect to={ROUTES.signUp} />
      </Switch>
    </StartLayout>
  );
};
