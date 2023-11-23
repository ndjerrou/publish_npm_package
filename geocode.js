const axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';

module.exports = async (city, keyAPiOpenWeatherMap) => {
  const {
    data: [tempData],
  } = await axios(BASE_URL, {
    params: {
      q: city,
      appid: keyAPiOpenWeatherMap,
    },
  });

  return { lat: tempData.lat, lg: tempData.lon };
};
