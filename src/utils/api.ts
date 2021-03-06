/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosResponse } from "axios";
import AuthToken from "./token";
import { SERVER_BASE_URL } from "./urls";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config: any) => {
    const token = AuthToken.getToken();
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

const postRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .post(requestUrl, data)
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
};

const getRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .get(requestUrl, data)
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
};

const putRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .put(requestUrl, data)
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
};

const patchRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .patch(requestUrl, data)
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
};

const deleteRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .delete(requestUrl, data)
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
};

export default {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
};
