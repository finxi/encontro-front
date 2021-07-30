import { api } from '@/utils/api.instance';
import * as Types from '@/types';

const BASE_USER_URL = '/users';

export function postUser(user: Types.RawUser): Promise<Types.IUser> {
  return api.post(BASE_USER_URL, user);
}
export function listUser(): Promise<Types.IUser> {
  return api.get(BASE_USER_URL);
}
export function putUser(user: Types.RawUser, id: string): Promise<Types.IUser> {
  return api.put(`${BASE_USER_URL}/${id}`, user);
}
