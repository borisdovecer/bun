import Register from "./Register.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const RegisterEntity: IPage = {
  name: "Register",
  path: "/register",
  element: Register,
  permissions: [],
  header: true,
  sidebar: true
};
