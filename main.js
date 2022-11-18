// Variables Globales

function main () {
  
  let numero = 5;
  let palabra = 'otorrinolaringolo';
  let caracter = 'o';
  let frase = 'hola soy yo';

  function factorial (numero) {
    if (numero === 0) {
      return 1
    };
    return numero * factorial (numero - 1)
  };

  // agregar ejercicio 2

  function caracteres (palabra) {
    let contador = 0;
  
    for (i = 0; i < palabra.length; i ++) {
      if (palabra[i] === caracter) {
        contador ++;
      }
    };
    return contador;
  }

  function numeroSecreto () {

    let numeroSecreto = 34;
  
    while (true) {
      let oportunidad = Number (prompt('Inserte un numero del 1 al 100'));
      if (oportunidad === numeroSecreto) {
        alert ('ganaste');
        break;
      } else { alert ('intentelo nuevamente')}
    };
  }

  function EspacioBlanco (frase) {
    let nuevaFrase = '';
  
    for (i = 0; i < frase.length; i++) {
      if (frase[i] !== ' ') {
        nuevaFrase += frase[i];
      }
    };
  
    return nuevaFrase;
  }

  numeroSecreto ();
  console.log('el caracter', caracter, 'aparece', caracteres(palabra), 'veces.');
  console.log('el factorial de', numero, 'es',factorial (numero));
  console.log('la frase sin espacios es',EspacioBlanco (frase));
}

main ()
