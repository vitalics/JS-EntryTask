import { DotenvResult } from 'dotenv';

export interface User {
  [name: string]: string;
  username: string;
  password: string;
}
