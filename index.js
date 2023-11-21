require('dotenv').config();
const calcTemperature = require('./calcTemperature');
const geocode = require('./geocode');

async function main() {
  const city = process.argv[2] || 'Puteaux';

  try {
    const { lat, lg } = await geocode(city);
    const temperature = await calcTemperature({ lat, lg });

    console.log(`temperature à ${city} = ${temperature}°`);
  } catch (err) {
    console.error(err.message);
  }
}

main();
