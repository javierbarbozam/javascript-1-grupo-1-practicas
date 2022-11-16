// Variables Globales

let numero = 5;

function main () {

  // let year = Number(prompt('inserte el año que desea consultar'));
  // let numero = Number(prompt('inserte el número al que quiere sacar su factorial'));
  let year = 2002;

  function factorial (x) {
    if (x === 0) {
      return 1
    };
    return x * factorial (x - 1)
  };

  function bisiesto () {}
  


 factorial(numero)
 bisiesto()
}

main ()
