var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function (event) {
  //event.bubling se dispara primero a los elemntos mas internos y luegoa sus antepasados.
  //el even.target nos da info  donde sucedio el evento
  //ParentNode hace que se refiera al padre donde se selecciono.es decir "tr"
  event.target.parentNode.remove();
});

/*
pacientes.forEach(function (paciente) {
  paciente.addEventListener("dblclick", function () {
    this.remove();
  });
});
*/
