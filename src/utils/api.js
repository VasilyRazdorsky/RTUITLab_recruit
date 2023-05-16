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
  return axios.get(`${config.baseUrl}/Get/20/1/true`).then((res) => res.data);
}

function getEvent(eventId) {
  return axios.get(`${config.baseUrl}/Get/${eventId}`).then((res) => res.data);
}

function addLike(eventId) {
  return axios
    .post(`${config.baseUrl}/Like/${eventId}`)
    .then((res) => res.data);
}

function removeLike(eventId) {
  return axios
    .post(`${config.baseUrl}/RemoveLike/${eventId}`)
    .then((res) => res.data);
}

export { getAllEvents, getEvent, getCurrentUser, addLike, removeLike };
