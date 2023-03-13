function inverter() {
  const inserido = document.getElementById("texto").value;
  var resposta = document.getElementById("resposta");

  let novaString = "";
  for (var i = inserido.length - 1; i >= 0; i--) {
    novaString += inserido[i];
    toString(novaString);
  }

  resposta.innerHTML = `O iverso de ${inserido} = ${novaString}`;
}
