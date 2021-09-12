import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StoreType } from '../store/store';

const baseUrl = 'https://accelerist.herokuapp.com/api';

const getToken = () => {
  return new URLSearchParams(location.search).get('passwordResetToken');
}

let store: StoreType;

export const injectStore = (_store: StoreType): void => {
  store = _store
}

class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use((config) => {
      const token = store.getState().user.accessToken || getToken();
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  post(url: string, { data }: AxiosRequestConfig) {
    return this.api.post(url, data);
  }

  get(url: string) {
    return this.api.get(url);
  }

  put(url: string, { data }: AxiosRequestConfig) {
    return this.api.put(url, data);
  }

  delete(url: string) {
    return this.api.delete(url);
  }

}

export default new ApiClient;

