function increaseWidth(x) {  //incrementar el tamaño de input a medida que se escribe, campo : Razon Social
  var numberOfCharacters = x.value.length;
  if (numberOfCharacters >= 10) {
    var length = numberOfCharacters + "ch";
    x.style.with = length;
  }
}

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto
  const botonAlternar = document.getElementById('alternarTexto'); 
  const texto = document.getElementById('texto');
  const textoAdicional = texto.querySelector('.texto-adicional');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo')) {
      texto.classList.remove('texto-completo');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Más'; // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto2');
  const texto = document.getElementById('texto2');
  const textoAdicional = texto.querySelector('.texto-adicional2');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo2')) {
      texto.classList.remove('texto-completo2');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo2');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Más'; // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('signature-canvas');
  const contexto = canvas.getContext('2d');
  const limpiarBtn = document.getElementById('limpiarFirma');

  limpiarBtn.addEventListener('click', function () {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
  })
}) 