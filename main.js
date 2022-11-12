let listaNumeros = [];

function main (x) {

  function solicitarDatos () {
    let listaNumeros = [];
    while (true) {
      let consulta = prompt ('inserte un número');
      if (consulta === '') {
        break;
      } else if (!isNaN(parseInt(consulta))) {
        listaNumeros.push(parseInt(consulta));
      }
    }
  };

  function promedioDatos (x) {
    let cantidadItem = 1;
    let promedio = 0;
  
    for (i = 0; i < x.length; i++) {
      promedio = x[i] + promedio;
      cantidadItem ++
    }
    
    promedio = promedio / cantidadItem;
    console.log ('El promedio es',promedio);
  };
  
  function valorMax (x) {
    let numeroMax = 0;
    for (i = 0; i < x.length; i++) {
      if (numeroMax < x[i]) {
        numeroMax = x[i];
      }
    }
    console.log ('El valor máximo es',numeroMax);
  };
  
  function valorMin (x) {
    let numeroMin = x[0];
    for (i = 0; i < x.length; i++) {
      if (numeroMin > x[i]) {
        numeroMin = x[i];
      }
    }
    console.log ('El valor mínimo es',numeroMin);
  }
  
  function mediana (x) {
  
    x.sort();
    let total = 0;
    let posicion = x.length / 2;
  
    if (x.length % 2 === 0) {
      total = (x[posicion] + x[posicion - 1]) / 2
      console.log('la mediana es',total);
    } else {
      total = x[Math.floor(posicion)];
      console.log('la mediana es',total)
    }
  }
  
  // Llamado de las funciones
  
  solicitarDatos();
  promedioDatos(x);
  valorMax(x);
  valorMin(x);
  mediana(x);
}

main (listaNumeros);
