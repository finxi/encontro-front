export type InputTypes =
  | 'text'
  | 'number'
  | 'submit'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'date'
  | 'datetime-local'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'time'
  | 'url'
  | 'week';
export type ButtonTypes = 'button' | 'reset' | 'submit';

export interface RawUser {
  name: string;
  email: string;
  phone: string;
}
export interface IUser extends RawUser {
  id: number;
}

export interface StateUser {
  users: RawUser[];
}
