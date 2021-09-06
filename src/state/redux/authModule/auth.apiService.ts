import { ApiService, IHttpClientPostParameters } from "../../services/ApiService"

const apiUrl = process.env.REACT_APP_API_URL ? (process.env.REACT_APP_API_URL) : ("");

export const httpClient = new ApiService(apiUrl)

export const LOGIN_URL = '/login';

export const login = (): Promise<string> => {
  console.log('action request')
  const getParameters: IHttpClientPostParameters = {
    endpoint: LOGIN_URL,
    requiresToken: false
  }
  // just return httpClient.get (which is a promise) or again use async/await if you prefer
  return httpClient.get<string>(getParameters)
};