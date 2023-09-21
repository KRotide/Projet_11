import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  },
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.userName,
      };
    },
    setToken(state, action) {
      state.token = action.payload.body.token;
    },
    logout() {
      return initialState;
    },
  },
});

export const { loginSuccess, setToken, logout } = userSlice.actions;

export default userSlice.reducer;