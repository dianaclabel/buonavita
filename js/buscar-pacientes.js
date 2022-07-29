var botonBuscar = document.querySelector("#buscar-pacientes");

botonBuscar.addEventListener("click", function () {
  //x (XML)h(HTPP)r(request);
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacie111ntes.json"
  );
  //El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
  xhr.addEventListener("load", function () {
    var errorAjax = document.querySelector("#error-ajax");

    if (xhr.status == 200) {
      errorAjax.classList.add("invisible");
      var respuesta = xhr.responseText;
      var pacientes = JSON.parse(respuesta);

      pacientes.forEach(function (paciente) {
        adicionarPacienteTabla(paciente);
      });
    } else {
      errorAjax.classList.remove("invisible");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });

  xhr.send();
});
