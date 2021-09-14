import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import DashboardPage from '../pages/DashboardPage';
import FavoritesPage from '../pages/FavoritesPage';
import ProfilePage from '../pages/ProfilePage';
import ProspectListPage from '../pages/ProspectListPage';
import ProspectPage from '../pages/ProspectPage';
import SearchPage from '../pages/SearchPage';

export const PrivateRoute: FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/prospect" component={ProspectPage} />
        <Route path="/prospect-list" component={ProspectListPage} />
        <Route path="/profile" component={ProfilePage} />
        <Redirect to="/search" />
      </Switch>
    </MainLayout>
  );
};
