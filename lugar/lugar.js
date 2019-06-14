const axios = require('axios');


const getLatitudLongitud = async ( direccion ) => {
  //KEY API
  const apiKey = 'tuapikey';


  const encodedUrl = encodeURI(direccion);
  //console.log(encodeUrl);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    //timeout: 1000,
    headers: {'X-RapidAPI-Key': apiKey}
  });

  const respuesta = await instance.get();

  if(respuesta.data.Results.length === 0){
    throw new Error(`No hay datos para ${ direccion }`);
  }

  const data = respuesta.data.Results[0],
        dir = data.name,
        lat = data.lat,
        lng = data.lon;
        
  return {
    dir : dir,
    lat : lat,
    lng : lng    
  }
}

module.exports = {
  getLatitudLongitud
}
