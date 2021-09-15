import React, {FC} from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAppSelector } from '../store/hooks';
import { selectors } from '../store/ducks';

export const RootRouter: FC = () => {
  const token = useAppSelector(selectors.user.selectUserToken);
  const isAuth = true/*token ? true : false*/;
  return isAuth ? <PrivateRoute/> : <PublicRoute/>
};
