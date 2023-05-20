const axios = require("axios").default;
axios.defaults.withCredentials = true;

const config = {
  baseUrl: "http://localhost:8088",
};

function getCurrentUser() {
  return axios
    .get(`${config.baseUrl}/About`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

function changeUserInfo(firstName, email) {
  return axios
    .put(
      `${config.baseUrl}/Edit`,
      {
        firstName: firstName,
        email: email,
        lastName: "String",
        birthDate: "2023-05-18T09:55:00.781Z",
        patronymic: "String",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => res.data);
}

function changePassword(currentPassword, newPassword) {
  return axios.put(
    `${config.baseUrl}/ChangePassword`,
    {
      currentPassword: currentPassword,
      newPassword: newPassword,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

function getAllEvents() {
  return axios.get(`${config.baseUrl}/Get/20/1/true`).then((res) => res.data);
}

function getTopEvents() {
  return axios.get(`${config.baseUrl}/GetTop/3`).then((res) => res.data);
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

function createEvent(values) {
  return axios
    .post(
      `${config.baseUrl}/CreateEvent`,
      {
        title: values.title,
        description: values.description,
        address: values.address,
        startDate: values.startDate,
        endDate: values.startDate,
        coordinates: values.coordinates,
        posterUrl: values.posterUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => res.data);
}

function sendEmailToSubscribe(email) {
  return axios
    .post(
      `${config.baseUrl}/SubscribeToNewsletter`,
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => res.data);
}

function sendCodeToSubscribe(email, code) {
  return axios.post(
    `${config.baseUrl}/FinalSubToNewsletter`,
    {
      email: email,
      code: code,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

export {
  getAllEvents,
  getTopEvents,
  getEvent,
  getCurrentUser,
  changeUserInfo,
  changePassword,
  addLike,
  removeLike,
  createEvent,
  sendEmailToSubscribe,
  sendCodeToSubscribe,
};
