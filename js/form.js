botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  //captura el emento del formulario
  var form = document.querySelector("#form-adicionar");
  var paciente = capturandoDatosPaciente(form);
  var pacienteTr = construirTr(paciente);

  var errores = validarPaciente(paciente);
  if (errores.length > 0) {
    exhibirMensajesErrores(errores);
    return;
  }
  // el return no permitira que se ejecute las demas lineas de codigo
  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
  form.reset();
});

function capturandoDatosPaciente(form) {
  //se busca y captura la infromacion dentro del formulario
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function construirTr(paciente) {
  //createElemnt() nos permite crear un elemnto de HTML desde js
  var pacienteTr = document.createElement("tr");

  var nombreTd = construirTd(paciente.nombre, "info-nombre");
  var pesoTd = construirTd(paciente.peso, "info-altura");
  var alturaTd = construirTd(paciente.altura, "info-peso");
  var gorduraTd = construirTd(paciente.gordura, "info-gordura");
  var imcTd = construirTd(paciente.imc, "info-imc");

  // insertamos los td  dentro del  tr
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  /*
  pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
*/

  return pacienteTr;
}

function construirTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

function validarPaciente(paciente) {
  var errores = [];

  if (!validarPeso(paciente.peso)) {
    errores.push("El peso es incorrecto");
  }

  if (!validarAltura(paciente.altura)) {
    errores.push("El altura  es incorrecto");
  }

  return errores;
}

function exhibirMensajesErrores(errores) {
  var ul = document.querySelector("#mensajes-errores");
  errores.forEach(function (error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}
