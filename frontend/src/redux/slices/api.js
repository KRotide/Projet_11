import axios from "axios";
import { setUser, setToken } from "./userSlice";

const API_URL = "http://localhost:3001/api/v1";

const handleErrors = (error) => {
  if (error.response) {
    const status = error.response.status;
    if (status === 400) {
      alert("Invalid fields. Please try again.");
    } else if (status === 401) {
      alert("Unauthorized. Please sign up.");
    } else if (status === 500) {
      alert("Internal Server Error. Please try again later.");
    }
  } else {
    console.error("An unexpected error occurred:", error);
  }
};

export const userLogin = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/login`,
      JSON.stringify({ email, password }),
      { 
        headers: {
        "Content-Type": "application/json", 
        },
      }
    );

    if (response.status === 200) {
      const { token } = response.data.body;

      dispatch(setUser({ email, password }));
      dispatch(setToken({ body: { token } }));
      navigate("/user");

      return token;
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const userProfile = (token) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/profile`,
      JSON.stringify({token}),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    );

    if (response.status === 200) {
      const { firstName, lastName, email, userName } = response.data.body;

      dispatch(setUser({ firstName, lastName, email, userName }));

    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const changeUserName = (token, newUserName) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${API_URL}/user/profile`,
      JSON.stringify({ userName: newUserName }),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    );

    if (response.status === 200) {
      const { firstName, lastName, email } = response.data.body;

      dispatch(setUser({ firstName, lastName, email, userName: newUserName }));

    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    handleErrors(error);
  }
};