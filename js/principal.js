var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  //captura el emento del formulario
  var form = document.querySelector("#form-adicionar");
  //se busca y captura la infromacion dentro del formulario
  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var tabla = document.querySelector("#tabla-pacientes");

  //createElemnt() nos permite crear un elemnto de HTML desde js
  pacienteTr = document.createElement("tr");
  nombreTd = document.createElement("td");
  alturaTd = document.createElement("td");
  pesoTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");

  nombreTd.textContent = nombre;
  alturaTd.textContent = altura;
  pesoTd.textContent = peso;
  gorduraTd.textContent = gordura;
  // insertamos los td  dentro del  tr
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  tabla.appendChild(pacienteTr);
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
