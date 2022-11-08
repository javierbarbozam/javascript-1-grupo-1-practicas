/*
Ejercicio 1:
Escriba un programa que solicite al usuario una lista de números y que, a partir de ellos, calcule e imprima en la consola los siguientes valores estadísticos:
- Mediana

El programa debe solicitar números al usuario y almacenarlos en un array. El programa continuará solicitando números hasta que el usuario ingrese un string vacío. Cuando esto ocurra se calcularán e imprimirán los resultados. 
*/

let listaNumeros = [];

function solicitarDatos () {
  while (true) {
  let consulta = Number(prompt('Inserte el número que desea agregar'))
    if (consulta > 0) {
      listaNumeros.push(consulta)
    } else if (consulta === 0) {
      break;
    }
  }
};

function promedioDatos (x) {
  let cantidadItem = 1;
  let promedio = 0;
  
  for (i = x.length; i > 0; i --) {
    promedio = x.pop() + promedio;
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
};


// Llamado de las funciones

solicitarDatos()
promedioDatos(listaNumeros);
valorMax(listaNumeros)
valorMin(listaNumeros)
