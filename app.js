const lugar = require('./lugar/lugar'),
      clima = require('./clima/clima');
const argv = require('yargs').options({
        direccion: {
          alias: 'd',
          desc: 'Direccion para obtener el clima',
          demand: true
        }
      }).argv;
//argv.direccion

// lugar.getLatitudLongitud(argv.direccion)
//       .then(console.log);

// clima.getClima('32.529999', '-117.019997')
//       .then(console.log)
//       .catch(err => {
//         console.log(err);
//       });

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLatitudLongitud(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${coords.dir} es de ${temp}°C`;
  } catch (error) {
    return`No se pudo obtener el clima de ${direccion}`;
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);