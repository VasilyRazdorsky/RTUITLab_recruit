const axios = require("axios").default;

const config = {
  baseUrl: "http://localhost:8088",
};

function getAllEvents() {
  return axios
    .get(`${config.baseUrl}/Get/20/1/true`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export { getAllEvents };
