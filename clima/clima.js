const axios = require('axios');

const apiKey = 'tuapikey',
      units = 'metric';

const  getClima = async (lat, lng) => {
  const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=${units}`);

  return respuesta.data.main.temp;
}

module.exports = {
  getClima
}