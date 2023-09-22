import About from "./About.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const AboutEntity: IPage = {
  name: "About",
  path: "/about",
  element: About,
  permissions: ["admin"],
  header: false,
  sidebar: true
};
