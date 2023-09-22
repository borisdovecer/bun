import Login from "./Login.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const LoginEntity: IPage = {
  name: "Login",
  path: "/login",
  element: Login,
  permissions: [],
  header: true,
  sidebar: false
};
