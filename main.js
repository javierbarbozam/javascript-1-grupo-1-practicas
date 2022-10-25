// Variables Globales

function PushIntoArray () {
  while (true) {
    let numero = Number(prompt("Digite un número."));
    arreglo.push(numero);
  
    let finCiclo = prompt("¿Desea ingresar más valores?");
    if (finCiclo == "no") {
      break;
    }
  }
}
let arreglo = [];
let numeroMax = 0;

let palindromo = String(prompt ("Ingrese un palíndromo"));
let palindromoReversa = '';

let matriz = [[1,0,0],[0,1,1],[0,1,0]];
let contador = 0;

let arregloRepetido = [];
let numeroRepetido = Number;

let parametro = Number (prompt('Digite un número igual o mayor a 5.'));

// Ejercicios

function main () {
  function ejercicioUno () {
    PushIntoArray()
    
    for (let i = 0; i < arreglo.length; i++) {
      if (numeroMax < arreglo[i]) {
        numeroMax = arreglo[i];
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
  /*
  profe en este ejercicio quedé con la duda sobre por qué tuve que poner un -1 en el for
  si no lo hacía, el primer valor del palindroReversa era un 'undefined' y no tengo idea del por qué.
  Si usted supiera y me pudiera explicar se lo agradecería porque sigo sin saber el motivo.
  */
  function ejercicioTres () {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] == 0) {
          contador++
        }
      }
    }
    console.log('La matriz contiene', contador, 'ceros.')
  }
  function ejercicioCuatro () {
    PushIntoArray()
  
    for (i = 0; i < arreglo.length; i++) {
      if (numeroRepetido !== arreglo[i]) {
        numeroRepetido = arreglo[i]
      } else {arregloRepetido.push(arreglo[i])}
    }
  
    console.log('Los números repetidos son', arregloRepetido);
  }
  function ejercicioCinco () {
    if (parametro < 5) {
      alert ('El parámetro debe ser mayor a 5, por favor intente nuevamente.')
    } else {
      for(let i = 1; i <= parametro; i++) {
        let resultado = '';
        for(let j = 1; j <= i; j++){
          resultado += '* ';
        }
        console.log(resultado)
      }
    }
  }
}
