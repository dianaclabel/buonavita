var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");
  console.log(form.altura);
});

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
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
    paciente.classList.add("paciente-incorrecto");
  }

  if (altura < 0 || altura > 3.0) {
    console.log("Altura incorrecto");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesosEsValido && alturaEsValida) {
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}
