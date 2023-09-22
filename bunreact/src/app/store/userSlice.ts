import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./interfaces.ts";

const initialState: IUserState = {
  username: null,
  role: null,
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<{ username: string; role: string }>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    logout: (state: IUserState) => {
      state.username = null;
      state.role = null;
    },
  },
});

// Export the actions
export const { setUser, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
