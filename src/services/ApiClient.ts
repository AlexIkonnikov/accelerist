import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { StoreType } from '../store/store';
import { ParsedQuery, stringify } from 'query-string';

const baseUrl = 'https://accelerist.herokuapp.com/api';

const getToken = () => {
  return new URLSearchParams(location.search).get('passwordResetToken');
};

let store: StoreType;

export const injectStore = (_store: StoreType): void => {
  store = _store;
};

class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: function (params) {
        return stringify(params, { arrayFormat: 'bracket' });
      },
    });

    this.api.interceptors.request.use((config) => {
      if (config.params !== undefined) {
        const { limit, page, ...outerParams } = config.params;

        if (page === undefined) {
          config.params.page = 1;
        }

        if (limit === undefined) {
          config.params.limit = 12;
        }

        let params;
        if (Object.keys(outerParams).length > 0) {
          params = { ...outerParams };
        }
        if (page > 1) {
          params = { ...params, page, limit };
        }

        if (params && Object.keys(params).length > 0) {
          history.replaceState(location.search, '', '?' + stringify({ ...params }, { arrayFormat: 'bracket' }));
        }
      }

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

  get(url: string, config?: AxiosRequestConfig) {
    return this.api.get(url, { ...config });
  }

  put(url: string, { data }: AxiosRequestConfig) {
    return this.api.put(url, data);
  }

  patch(url: string, { data }: AxiosRequestConfig) {
    return this.api.patch(url, data);
  }

  delete(url: string) {
    return this.api.delete(url);
  }
}

export default new ApiClient();
