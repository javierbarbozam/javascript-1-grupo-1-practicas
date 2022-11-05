let numero = Number(prompt("Digite el número que desea utilizar"));
let palabra = String(prompt("Digite la palabra que desea utilizar"));
let frase = String(prompt("Digite la frase que desea utilizar"));
let palabraArray = [...palabra];
let palabraAbecedario = [];

function main () {

  function ejercicioUno(numero) {
    let parImpar = "";
    let divisible = "";

    if (numero % 2 === 0) {
      parImpar = numero + " es un número par";
    } else {
      parImpar = numero + " es un número impar";
    }

    if (numero % 3 === 0) {
      divisible = numero + " es divisible entre 3";
    } else if (numero % 5 === 0) {
      divisible = numero + " es divisible entre 5";
    } else {
      divisible = numero + " no es divisible entre 3 y 5";
    }

    console.log(parImpar);
    console.log(divisible);
  }

  function ejercicioDos(numero) {
    if (numero === 0) return 0;
    return numero + ejercicioDos(numero - 1);
  }

  function ejercicioTres(palabra) {
    let palabraInvertida = [];
    let contador = palabraArray.length;

    while (contador > 0) {
      let caracter = palabraArray.pop();
      palabraInvertida.push(caracter);
      contador--;
    }
    return palabraInvertida.join("");
  }

  function ejercicioCuatro(frase) {
    let fraseArray = [...frase];

    for (i = 0; i < fraseArray.length; i++) {
      if (
        fraseArray[i] === "a" ||
        fraseArray[i] === "e" ||
        fraseArray[i] === "o" ||
        fraseArray[i] === "u"
      ) {
        fraseArray[i] = "i";
      }
    }

    return fraseArray.join("");
  }

  function ejercicioCinco (palabraArray) {
    return palabraArray.sort().join('');
  }
}