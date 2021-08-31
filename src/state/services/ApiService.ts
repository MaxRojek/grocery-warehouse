import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>
  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>
}

export interface IHttpClientPostParameters {
  endpoint: string
  requiresToken: boolean
}

export interface IHttpClientRequestParameters<T> {
  endpoint: string
  requiresToken: boolean
  payload?: T
}

export class ApiService implements IHttpClient {

  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getToken() {
    return ""
  }

  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // extract the individual parameters
      const { endpoint, requiresToken } = parameters

      // axios request options like headers etc
      const options: AxiosRequestConfig = {
        headers: { }
      }

      // if API endpoint requires a token, we'll need to add a way to add this.
      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      // finally execute the GET request with axios:
      axios
        .get(this.apiUrl + endpoint, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })

    })
  }

  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { endpoint, payload, requiresToken } = parameters

      // axios request options like headers etc
      const options: AxiosRequestConfig = {
        headers: { }
      }

      // if API endpoint requires a token, we'll need to add a way to add this.
      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      // finally execute the GET request with axios:
      axios
        .post(this.apiUrl + endpoint, payload, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
    })
  }

  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { endpoint, payload, requiresToken } = parameters

      const options: AxiosRequestConfig = {
        headers: { }
      }

      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      axios
        .put(endpoint, payload, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
    })
  }
}