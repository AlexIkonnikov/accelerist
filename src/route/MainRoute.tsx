import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';

export const MainRoute: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Redirect to="/search" />
      </Switch>
    </BrowserRouter>
  );
};
