import { UserCredential } from '../store/user';
import { AxiosPromise } from 'axios';
import ApiClient from './ApiClient';

export const signUp = (data: UserCredential): AxiosPromise => {
  return ApiClient.post('v1/auth/sign_up', { data });
};

export const signIn = (data: UserCredential): AxiosPromise => {
  return ApiClient.post('v1/auth/sign_in', { data });
};
