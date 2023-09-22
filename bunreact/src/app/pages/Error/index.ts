import Error from "./Error.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const ErrorEntity: IPage = {
  name: "Error",
  path: "*",
  element: Error,
  permissions: [],
  header: false,
  sidebar: false
};
