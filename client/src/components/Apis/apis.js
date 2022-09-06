import axios from "axios";

export const register = async (data) => {
  let config = {
    method: "post",
    url: "http://localhost:5000/api/user/register",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  return await axios(config);
};

export const login = async (data) => {
  let config = {
    method: "post",
    url: "http://localhost:5000/api/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  return await axios(config);
};
