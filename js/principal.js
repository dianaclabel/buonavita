var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdIMC.textContent = imc;

if (peso < 0 || peso > 1000) {
  console.log("Peso incorrecto");
}

if (altura < 0 || altura > 4.0) {
  console.log("Altura incorrecto");
}
