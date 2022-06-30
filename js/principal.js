var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

pesosEsValido = true;
alturaEsValida = true;

if (peso < 0 || peso > 1000) {
  console.log("Peso incorrecto");
  tdIMC.textContent = "Peso incorrecto";
  pesosEsValido = false;
}

if (altura < 0 || altura > 3.0) {
  console.log("Altura incorrecto");
  tdIMC.textContent = "Altura incorrecta";
  alturaEsValida = false;
}

if (pesosEsValido && alturaEsValida) {
  var imc = peso / (altura * altura);
  tdIMC.textContent = imc;
}