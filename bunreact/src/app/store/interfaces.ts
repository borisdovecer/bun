import { Reducer } from "@reduxjs/toolkit";
export interface IUserState {
  username: string | null;
  role: string | null;
}

export interface IReducers {
  user: Reducer<IUserState>,
}
