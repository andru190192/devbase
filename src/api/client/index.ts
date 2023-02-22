import {AxiosRequestConfig} from 'axios';
import httpClient from './implementation';
const client = {
  get: (url: string, config: AxiosRequestConfig) => httpClient.get(url, config),

  post: async (url: string, data = {}, config: AxiosRequestConfig) => {
    const augmentedData = {
      ...data,
    };

    return httpClient.post(url, augmentedData, config);
  },

  put: (url: string, data, config: AxiosRequestConfig) =>
    httpClient.put(url, data, config),

  patch: (url: string, data, config: AxiosRequestConfig) =>
    httpClient.patch(url, data, config),

  delete: (url, config: AxiosRequestConfig) => httpClient.delete(url, config),

  modifyHeaders: headers => {
    httpClient.defaults.headers = {
      ...httpClient.defaults.headers,
      ...headers,
    };
  },

  setBaseUrl: url => {
    httpClient.defaults.baseURL = url;
  },

  setTimeout: timeout => {
    httpClient.defaults.timeout = timeout;
  },
};

export default client;
