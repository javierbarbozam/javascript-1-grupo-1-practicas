function main() {
  let firstArray = [3, "hola", "l", 2];
  let secondArray = ["hola", "k", 4, 2];

  function ejercicioUno(number) {
    let matriz = [];
    let izquierda = 0;
    let derecha = number - 1;

    if (number <= 1) {
      console.log(
        "El parámetro es muy pequeño para realizar el ejercicio, ingrese un número mayor."
      );
    } else {
      for (i = 0; i < number; i++) {
        let array = [];
        matriz.push(array);
        for (j = 0; j < number; j++) {
          array[j] = "";
          array[izquierda] = "X";
          array[derecha] = "X";
        }
        izquierda++;
        derecha--;
      }
      console.log(matriz);
    }
  }

  // Ejercicio hecho con Heylin Loaiza
  function ejercicioDos(a, b) {
    a.sort();
    b.sort();
    let repetidos = [];

    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        repetidos.push(a[i], b[i]);
      }
    }

    if (repetidos.length < 1) {
      console.log("Los dos arreglos contienen los mismos elementos");
    } else {
      console.log(
        "Los dos arreglos no contienen los mismos elementos.",
        repetidos
      );
    }
  }

  function ejercicioTres() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let operation = document.getElementById("operators").value;

    if (operation === "add") {
      document.getElementById("result").value = n1 + n2;
    } else if (operation === "substract") {
      document.getElementById("result").value = n1 - n2;
    } else if (operation === "divide") {
      document.getElementById("result").value = n1 / n2;
    } else if (operation === "multiply") {
      document.getElementById("result").value = n1 * n2;
    }
  }
  let execute = document.getElementById("execute");
  execute.addEventListener("click", ejercicioTres);

  ejercicioUno(6);
  ejercicioDos(firstArray, secondArray);
}

main();
