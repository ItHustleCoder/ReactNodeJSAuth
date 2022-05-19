import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../reducers/userReducer";

export const registration = async (email, password, name) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/registration`,
      {
        name,
        email,
        password,
      }
    );

    if (response.status === 200) {
      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (err) {
    toast.error(`${err.response.data.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        {
          email,
          password,
        }
      );

      console.log(response.data);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      toast.error(`${err.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("auth err", err);
      localStorage.removeItem("token");
    }
  };
};
