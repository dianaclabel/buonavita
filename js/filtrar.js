var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.textContent;
      //Es un objecto que describe el padron de elemntos , regex es usado para buscar y reemplazar
      //"i" es un parametro de regex lo utilizamos cuando no queremos diferenciar entre minuscula y mayuscula
      var expresion = new RegExp(this.value, "i");
      //regex tiene una funcionalidad para testear si el valor se encuentra en otro  elemnto.
      //"a" hace parte de pablo se ejecuta el else
      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});
