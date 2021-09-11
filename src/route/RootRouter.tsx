import React, {FC} from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const RootRouter: FC = () => {
  const isAuth = false;
  return isAuth ? <PrivateRoute/> : <PublicRoute/>
};
