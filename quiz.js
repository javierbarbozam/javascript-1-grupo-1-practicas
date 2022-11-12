function hora () {
  let valor = Number (prompt('inserte un número'));
  let hour = Math.floor(valor / 60);
  let minutes = valor % 60;
  console.log(valor, 'corresponde a', hour, 'horas y', minutes, 'minutos.');
}

hora()
