import React, {FC} from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const RootRouter: FC = () => {
  const isAuth = true;
  return isAuth ? <PrivateRoute/> : <PublicRoute/>
};
