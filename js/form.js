var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  //captura el emento del formulario
  var form = document.querySelector("#form-adicionar");
  var paciente = capturandoDatosPaciente(form);

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
  imcTd.textContent = calcularImc(peso, altura);
  // insertamos los td  dentro del  tr
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);
});

function capturandoDatosPaciente(form) {
  //se busca y captura la infromacion dentro del formulario
  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  return;
}
