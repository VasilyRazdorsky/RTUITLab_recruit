const axios = require("axios").default;

const config = {
  baseUrl: "http://localhost:8088",
};

function getCurrentUser() {
  return axios
    .get(`${config.baseUrl}/About`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

function getAllEvents() {
  return axios
    .get(`${config.baseUrl}/Get/20/1/true`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

function addLike() {
  return axios
    .post(`${config.baseUrl}/Like/2`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export { getAllEvents, getCurrentUser, addLike };
