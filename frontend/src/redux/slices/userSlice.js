import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
    },
    token: null,
  },
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
  },
});

export const { loginSuccess, setToken } = userSlice.actions;

export default userSlice.reducer;