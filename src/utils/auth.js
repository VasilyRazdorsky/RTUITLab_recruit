import { cookies } from "next/dist/client/components/headers";
import { getCookieParser } from "next/dist/server/api-utils";

const axios = require("axios").default;
axios.defaults.withCredentials = true;

const config = {
  baseUrl: "http://localhost:8088",
};

function login(email, password) {
  return axios
    .post(
      `${config.baseUrl}/Login`,
      {
        email: email,
        password: password,
        rememberMe: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

function logout() {
  return axios.post(`${config.baseUrl}/Logout`).then((res) => res);
}

export { login, logout };
