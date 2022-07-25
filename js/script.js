// Asignaciones de variablas globales
const teclas = document.querySelectorAll(".teclas");
let tecladoVirtual = document.querySelector(".teclado-virtual");
let campoTexto = document.querySelector(".nueva-palabra");
let palabraSecreta = document.querySelector(".palabra-secreta");
let letrasErroneas = document.querySelector(".letras-usadas");
let palabraSorteada;
let auxErrores;
let auxAciertos;
let aciertos;
let errores;

// Asignacion de funciones
function sortearPalabra(maximo) {
  return Math.floor(Math.random() * maximo);
}

function agregarPalabra() {
  listaPalabras.push(campoTexto.value).toUpperCase;
  campoTexto.value = "";
}

function rendirse() {
  // Volvemos al menu inicial
  document.querySelector(".seccion-inicio").classList.toggle("oculto");
  document.querySelector(".seccion-juego").classList.toggle("oculto");
}

function reiniciarJuego() {
  // Reseteamos todos los valores a cero
  aciertos = 0;
  errores = 0;
  auxAciertos = [];
  auxErrores = [];
  palabraSecreta.innerHTML = "";
  letrasErroneas.innerHTML = "";
  lienzo.clearRect(0, 0, 350, 500);
  teclas.forEach((tecla) => {
    tecla.style.backgroundColor = "#46a8a7";
    tecla.style.color = "#eaebed";
  });
}

function dibujarPalabraSecreta() {
  // Agregamos un span por cada letra de la palara
  palabraSorteada.forEach((letra) => {
    palabraSecreta.insertAdjacentHTML(
      "beforeend",
      `<span class="transparente">${letra}</span>`
    );
  });
}

function mostrarLetras(letra) {
  palabraSecreta.children[letra].classList.remove("transparente");
}

function finDelJuego() {
  if (aciertos === palabraSorteada.length) {
    document.removeEventListener("keydown", comprobarLetra);
    letrasErroneas.innerHTML = "Felicidades Ganaste!!";
  } else if (errores === 9) {
    document.removeEventListener("keydown", comprobarLetra);
    letrasErroneas.innerHTML = `Perdiste la palabra era ${palabraSorteada.join(
      ""
    )}!!`;
  }
}

function teclasQwerty() {
  teclas.forEach((tecla) => {
    tecla.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "#ffd782";
      e.target.style.color = "#0a2d48";
      let tecla = e.target.innerHTML;
      comprobarLetra(tecla);
    });
  });
}

function iniciarJuego() {
  document.querySelector(".seccion-inicio").classList.add("oculto");
  document.querySelector(".seccion-juego").classList.remove("oculto");
  palabraSorteada =
    listaPalabras[sortearPalabra(listaPalabras.length)].split("");
  //console.log(palabraSorteada);
  reiniciarJuego();
  dibujarHorca();
  dibujarPalabraSecreta();

  if (window.innerWidth <= 768) {
    tecladoVirtual.classList.remove("oculto");
    teclasQwerty();
  } else {
    tecladoVirtual.classList.add("oculto");
    document.addEventListener("keydown", (e) => {
      let tecla = e.key.toUpperCase();
      comprobarLetra(tecla);
    });
  }
}

// Comprobar las teclas presionadas por el teclado //
function comprobarLetra(letra) {
  let letraSeleccionada = letra;
  // Primero validamos que se ingrese un caractér correcto
  if (
    !letraSeleccionada.match(/^[A-ZÑ]$/i) ||
    auxAciertos.includes(letraSeleccionada)
  ) {
  } else {
    // Inicia el bucle donde comprueba la letra presionada
    for (let i = 0; i < palabraSorteada.length; i++) {
      if (letraSeleccionada == palabraSorteada[i]) {
        mostrarLetras(i);
        auxAciertos.push(letraSeleccionada);
        aciertos++;
      } else if (
        auxErrores.includes(letraSeleccionada) ||
        palabraSorteada.includes(letraSeleccionada)
      ) {
        continue;
      } else {
        auxErrores.push(letraSeleccionada);
        letrasErroneas.insertAdjacentHTML(
          "beforeend",
          `<span>${letraSeleccionada}</span>`
        );
        agregarPartesAhorcado(errores);
        errores++;
      }
    }
  }
  finDelJuego();
}

// Declaro variables de botones y se les coloca el evento click en la misma linea
let btnIniciar = document
  .querySelector(".btn-iniciar")
  .addEventListener("click", iniciarJuego);
let btnAgregar = document
  .querySelector(".btn-agregar")
  .addEventListener("click", agregarPalabra);
let btnNuevoJuego = document
  .querySelector(".btn-nuevojuego")
  .addEventListener("click", iniciarJuego);
let btnRendirse = document
  .querySelector(".btn-rendirse")
  .addEventListener("click", rendirse);
