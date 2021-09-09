import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import DashboardPage from '../pages/DashboardPage';
import FavoritesPage from '../pages/FavoritesPage';
import ProfilePage from '../pages/ProfilePage';
import ProspectsPage from '../pages/ProspectsPage';
import SearchPage from '../pages/SearchPage';

export const PrivateRoute: FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/prospecting" component={ProspectsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect to="/search" />
      </Switch>
    </MainLayout>
  );
};
