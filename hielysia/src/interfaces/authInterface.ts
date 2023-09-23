import {Document} from "mongoose";
import {User} from "../models/UserModel";
import {Cookie} from "elysia/dist/bun";

export type newUserType = Document<unknown, {}, User> & User & {_id: any};

export type ElysiaAuthContextType = {
  body: { username: string, password: string },
  query: Record<string, string | null>,
  params: never, headers: Record<string, string | null>,
  cookie: Record<string, Cookie<any>>,
  set: { status?: string | number},
  path: string,
  request: Request,
  store: {},
  jwtPlugin: { sign: (data: {username: string}) => Promise<string>, verify: (body: string, user: string) => Promise<boolean> },
  setCookie: (access: string, token: string, obj: {maxAge: number, path: string}) => void
};

export interface ILoginReturn {
  message: string,
  username?: string,
  role?: string,
  token?: string
}
