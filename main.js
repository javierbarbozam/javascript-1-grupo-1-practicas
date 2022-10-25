// Variables Globales
let arrayEjercicioUno = [];
let numeroMax = 0;

let palindromo = String(prompt ("Ingrese un palíndromo"));
let palindromoReversa = '';

// Ejercicios

function ejercicioUno () {
  while (true) {
    let numero = Number(prompt("Digite un número."));
    arrayEjercicioUno.push(numero);
  
    let finCiclo = prompt("¿Desea ingresar más valores?");
    if (finCiclo == "no") {
      break;
    }
  }
  
  for (let i = 0; i < arrayEjercicioUno.length; i++) {
    if (numeroMax < arrayEjercicioUno[i]) {
      numeroMax = arrayEjercicioUno[i];
    }
  }
  console.log (numeroMax);
}
function ejercicioDos () {
  for (let i = palindromo.length - 1; i >= 0; i--) {
    palindromoReversa = palindromoReversa + palindromo[i];
  }
  if (palindromoReversa === palindromo){
    console.log (palindromoReversa, 'es un palindromo.')
  } else {console.log(palindromo, 'no es un palindromo.')};
}


// Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
// cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
// ciclos for (Valor: 10pts)

// 4. Cree un programa que reciba un array de números, verifique cuáles números
// están repetidos y retorne un array con dichos números (los que estan
// duplicados), si no hay números repetidos en el array debe retornar el
// siguiente mensaje: “No se encontraron números repetidos en la lista de
// números recibida”. Debe usar un ciclo for. (Valor: 10pts)

// 5. Haga un programa que reciba un parámetro numérico x, el cual debe ser
// mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
// asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
// problema. (Valor: 10pts)

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
