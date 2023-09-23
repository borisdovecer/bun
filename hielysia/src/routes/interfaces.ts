import {Cookie, Elysia} from "elysia";

export type ElysiaAppType = Elysia<(`${string}/users` | `${string}/auth` | `${string}/api`), {request: {}, store: {}}, {type: {}, error: {}}, {}, {}, false>;

export type BodyType = {
  message: string
}

export type ElysiaContextType = {
  body: BodyType | unknown,
  query: Record<string, string | null>,
  params: never, headers: Record<string, string | null>,
  cookie: Record<string, Cookie<any>>,
  set: { status?: string | number},
  path: string,
  request: Request,
  store: {}
};
