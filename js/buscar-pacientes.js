var botonBuscar = document.querySelector("#buscar-pacientes");

botonBuscar.addEventListener("click", function () {
  //x (XML)h(HTPP)r(request);
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"
  );
  //El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
  xhr.addEventListener("load", function () {
    var respuesta = xhr.responseText;
    console.log(respuesta);
    console.log(typeof respuesta);
  });
  xhr.send();
});
