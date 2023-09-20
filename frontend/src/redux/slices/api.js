import axios from "axios";
import { loginSuccess, setToken } from "./userSlice";

const API_URL = "http://localhost:3001/api/v1";

export const userLogin = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    if (response.status === 200) {
      const { token } = response.data.body;

      dispatch(loginSuccess({ email, password }));
      dispatch(setToken({ body: { token } }));
      navigate("/user");
      
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert("Your email or password is incorrect. Please try again.");
      } else if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.")
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};