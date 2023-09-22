import Home from "./Home.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const HomeEntity: IPage = {
  name: "Home",
  path: "/",
  element: Home,
  permissions: [],
  header: true,
  sidebar: false
};
