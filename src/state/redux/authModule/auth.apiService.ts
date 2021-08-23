import { ApiService, IHttpClientPostParameters } from "../../services/ApiService"

export const httpClient = new ApiService()

export const LOGIN_URL = 'http://yourapiurl/items';

export const login = (): Promise<string> => {
  console.log('action request')
  const getParameters: IHttpClientPostParameters = {
    url: LOGIN_URL,
    requiresToken: false
  }

  // just return httpClient.get (which is a promise) or again use async/await if you prefer
  return httpClient.get<string>(getParameters)
};