var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function () {
  console.log("escribieron");
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes);
});
