import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: () => initialState,
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export default authSlice.reducer;

export const { resetAuth, setUser } = authSlice.actions;

export const authState = (state) => state.auth;
