import User from "./User.tsx";
import Usermanagement from "./Usermanagement.tsx";
import { IPage } from "@app/global/Interfaces.ts";

export const UsermanagementEntity: IPage = {
  name: "Usermanagement",
  path: "/users",
  element: Usermanagement,
  permissions: [],
  header: false,
  sidebar: true
};

export const UserEntity: IPage = {
  name: "User",
  path: "/users/:id",
  element: User,
  permissions: [],
  header: false,
  sidebar: false
};
