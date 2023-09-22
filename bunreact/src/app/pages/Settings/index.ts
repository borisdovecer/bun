import Settings from "./Settings.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const SettingsEntity: IPage = {
  name: "Settings",
  path: "/settings",
  element: Settings,
  permissions: [],
  header: false,
  sidebar: true
};
