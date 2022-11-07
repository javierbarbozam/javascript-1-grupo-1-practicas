// Realizar un objeto que tenga al menos 5 propiedades y 3 métodos que modifiquen propiedades internas.

let consultaExtras = [];
function nuevaExtra () {
  while (true) {
    let consulta = String(prompt('Digite la extra que quiere agregar al vehículo'));
    consultaExtras.push(consulta);
    var siguiente = String(prompt('Digite "fin" para terminar la solicitud'));
    if (siguiente === 'fin') {
      break;
    }
  }
};
let cambioModelo = String(prompt('Inserte el modelo que desea'));
let agotado = 'Santa Fe';

let vehiculo = {
  auto: 'Hyundai',
  modelo: 'Elantra',
  anio: '2022',
  color: 'azul',
  extras: '',
  
  // métodos
  agregarExtra: function (x) {
    this.extras = [...consultaExtras]
  },
  
  nuevoModelo: function (x) {
    this.modelo = x
  },
  
  modeloAgotado: function (x) {
    if (x === agotado) {
      vehiculo = 'Hyundai Santa Fe no está disponible.'
    }
  }
}

nuevaExtra()

vehiculo.agregarExtra(consultaExtras);
vehiculo.nuevoModelo(cambioModelo);
vehiculo.modeloAgotado (cambioModelo);
console.log(vehiculo);