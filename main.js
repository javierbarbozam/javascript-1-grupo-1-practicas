function main () {
  function ejercicioUno (numero) {
    let flag = false;
  
    if (numero === 1) {
      console.log (numero,'no es primo');
    } else if (numero === 4) {
      console.log (numero,'no es primo')
    } else if (numero > 1 && numero !== 4) {
      for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) {
          flag = true;
          break;
        }
      }
    
      if (flag === true) {
        console.log(numero, 'no es primo')
      } else {console.log(numero, 'es primo')};
    } else {console.log(numero,'no es primo')};
  }
  
  function ejercicioDos(a,b,c) {
  
    if (a === 0 && b === 0 && c === 0) {
      console.log ('Ingrese nuevos valores, la ecuación no se puede realizar.');
    } else {
      
      let discriminant = (b * b) - 4 * (a*c);
      let xAddition = -b + Math.sqrt(discriminant) / 2 * a;
      let xSubstraction = -b - Math.sqrt(discriminant) / 2 * a;
      
      if (discriminant < 0) {
        console.log ('La ecuación no tiene solución.')
      } else if (discriminant === 0) {
        console.log ('El resultado es', xAddition);
      } else {
        console.log ('El resultado es', xAddition.toFixed(2), 'y', xSubstraction.toFixed(2));
      }
    } 
  }  

  function ejercicioTres () {
    let contador = 0;
    for (i = 0; i < 100; i++) {
      contador += 1;
      console.log(contador);
    }
  }
  
  function ejercicioCuatro () {
    let contador = 0;
    for (i = 0; i < 100; i++) {
      contador += 1;
      if (contador % 2 === 0) {
        console.log(contador);
      }
    }
  }
  
  function ejercicioCinco () {
    let array1= [];
    let array2= [];
    let array3= [];
    let array4= [];
    let array5= [];
    let array6= [];
    let array7= [];
    let array8= [];
    let array9= [];
    let array10= [];
    let contador = 0;
    
    for (i = 0; i < 100; i++) {
      contador += 1;
      if (array1.length < 10) {
        array1.push(contador)
      } else if (array2.length < 10) {
        array2.push(contador)
      } else if (array3.length < 10) {
        array3.push(contador)
      } else if (array4.length < 10) {
        array4.push(contador)
      } else if (array5.length < 10) {
        array5.push(contador)
      } else if (array6.length < 10) {
        array6.push(contador)
      } else if (array7.length < 10) {
        array7.push(contador)
      } else if (array8.length < 10) {
        array8.push(contador)
      } else if (array9.length < 10) {
        array9.push(contador)
      } else {
        array10.push(contador)
      }
    }
    console.log (array1,array2,array3,array4,array6,array7,array8,array9,array10);
  }
  
  ejercicioUno (107);
  ejercicioDos (1,10,15);
  ejercicioTres();
  ejercicioCuatro()
  ejercicioCinco();
}

main ()