import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '.';
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
        <Route path={ROUTES.dashboard} component={DashboardPage} />
        <Route path={ROUTES.search} component={SearchPage} />
        <Route path={ROUTES.favorites} component={FavoritesPage} />
        <Route path={ROUTES.prospectsId()} exact component={ProspectPage} />
        <Route path={ROUTES.prospects} exact component={ProspectListPage} />
        <Route path={ROUTES.profile()} component={ProfilePage} />
        <Redirect to={ROUTES.dashboard} />
      </Switch>
    </MainLayout>
  );
};
