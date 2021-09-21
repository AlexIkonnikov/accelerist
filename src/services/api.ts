import { ChangePasswordPayload, EmailPayload, UserCredential } from '../store/user';
import { AxiosPromise, AxiosResponse } from 'axios';
import ApiClient from './ApiClient';
import { SearchCompanyResponse } from '../store/company';
import { ICompany } from '../store/company/types';
import { CreateSavedListPayload, GetSavedListResponse, IList } from '../store/savedList/types';

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

export const getSavedList = (query: string): AxiosPromise<GetSavedListResponse> => {
  return ApiClient.get(`v1/saved-list?${query}`);
}

export const getFavoritesCompany = (query: string):  AxiosPromise<SearchCompanyResponse> => {
  return ApiClient.get(`v1/companies/favorites?${query}`);
}

export const getCompanyById = (id: string):  AxiosPromise<ICompany> => {
  return ApiClient.get(`v1/companies/${id}`);
}

export const getSaveListById = (id: string):  AxiosPromise<IList> => {
  return ApiClient.get(`v1/saved-list/${id}`);
}

export const createSavedList = (data: CreateSavedListPayload): AxiosPromise<IList> => {
  return ApiClient.post('v1/saved-list', {data});
}

export const likeCompany = (id: string): AxiosPromise => {
  return ApiClient.get(`v1/companies/${id}/like`);
}

export const dislikeCompany = (id: string): AxiosPromise => {
  return ApiClient.get(`v1/companies/${id}/dislike`);
}
