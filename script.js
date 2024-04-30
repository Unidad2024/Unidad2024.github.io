function generarTexto() {
  // Obtener los datos del formulario de entrada
  var campos = document.querySelectorAll("#inputForm textarea");
  var textoGenerado = "";

  // Concatenar los datos en un solo texto
  campos.forEach(function(campo) {
    textoGenerado += campo.value + "\n";
  });

  // Mostrar el texto generado en el formulario de salida
  document.getElementById("resultado").innerText = textoGenerado;
}
