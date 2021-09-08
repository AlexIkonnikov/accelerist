import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import FavoritesPage from '../pages/FavoritesPage';
import ProspectsPage from '../pages/ProspectsPage';
import SearchPage from '../pages/SearchPage';

export const PrivateRoute: FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/prospecting" component={ProspectsPage} />
        <Redirect to="/search" />
      </Switch>
    </MainLayout>
  );
};
