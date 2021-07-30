import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

function onError(error: AxiosError) {
  console.log(error);
}
api.interceptors.request.use((request) => {
  console.log(request);

  return request;
});

api.interceptors.response.use(({ data }) => data, onError);

export default { api };
