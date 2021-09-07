import React, {FC} from 'react';
import { AuthRoute } from './AuthRoute';
import { MainRoute } from './MainRoute';

export const RootRouter: FC = () => {
  const isAuth = true;
  return isAuth ? <MainRoute/> : <AuthRoute/>
};
