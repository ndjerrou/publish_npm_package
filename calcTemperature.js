const axios = require('axios');
const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

module.exports = async ({ lat: latitude, lg: longitude }) => {
  const {
    data: {
      current: { temperature },
    },
  } = await axios(BASE_URL, {
    params: {
      latitude,
      longitude,
      current: 'temperature',
    },
  });

  return temperature;
};
