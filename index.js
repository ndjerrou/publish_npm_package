const calcTemperature = require('./calcTemperature');
const geocode = require('./geocode');

async function getTemperature(city = 'Puteaux', keyAPiOpenWeatherMap) {
  if (!keyAPiOpenWeatherMap)
    throw new Error('API key for openweathermap APi not provided');
  try {
    const { lat, lg } = await geocode(city, keyAPiOpenWeatherMap);
    return calcTemperature({ lat, lg });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = {
  getTemperature,
};

// nodejs's project

('pwd /');
