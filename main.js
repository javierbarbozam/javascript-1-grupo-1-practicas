function main() {
  let array = [1, 2, 3, 4];

  function ejercicioUno() {
    let triangulo = "***********";
    let nuevoTriangulo = "";

    for (i = 10; i >= 1; i--) {
      nuevoTriangulo = triangulo.substring(0, i);
      while (nuevoTriangulo.length < 10) {
        nuevoTriangulo += "#";
      }
      console.log(nuevoTriangulo);
    }
  }

  function ejercicioDos(a, b) {
    let result = a;
    let counter = 1;

    do {
      result *= a;
      counter++;
    } while (counter < b);

    console.log(result);
  }

  function ejercicioTres(a, b) {
    let resultado = a;
    if (b === 0) {
      return 1;
    } else {
      return resultado * ejercicioTres(a, b - 1);
    }
  }

  function ejercicioCuatro(array, sumatoria) {
    if (array.length === 0) {
      console.log(sumatoria);
      return sumatoria;
    }
    ejercicioCuatro(array.slice(1, array.length), sumatoria + array[0]);
  }

  ejercicioUno();
  ejercicioDos(2, 3);
  console.log(ejercicioTres(2, 3));
  ejercicioCuatro(array, 0);
}

main();
