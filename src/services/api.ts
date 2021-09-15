import { ChangePasswordPayload, EmailPayload, UserCredential } from '../store/user';
import { AxiosPromise} from 'axios';
import ApiClient from './ApiClient';
import { SearchCompanyResponse } from '../store/company';

export const signUp = (data: UserCredential): AxiosPromise => {
  return ApiClient.post('v1/auth/sign_up', { data });
};

export const signIn = (data: UserCredential): AxiosPromise => {
  return ApiClient.post('v1/auth/sign_in', { data });
};

export const sendLinkToEmail = (data: EmailPayload): AxiosPromise => {
  return ApiClient.post('v1/auth/change_password/send_mail', { data });
};

export const passwordChangeRequest = (data: ChangePasswordPayload): AxiosPromise => {
  return ApiClient.post('v1/auth/change_password/change', { data });
};

export const getCompanies = (query: string): AxiosPromise<SearchCompanyResponse> => {
  return ApiClient.get(`v1/companies?${query}`);
}
