let btnIniciar = document.querySelector(".btn-iniciar");
let btnAgregar = document.querySelector(".btn-agregar");
let campoTexto = document.querySelector(".input");
const listaPalabras = ["abel", "aldo", "chipy", "jonny"];
let palabraSorteada = "";
let letraSeleccionada;
let aciertos = [];
let errores = [];

function sortearPalabra(maximo){
    return Math.floor(Math.random()*maximo);
}

function agregarPalabra(){
    listaPalabras.push(campoTexto.value);
    console.log(listaPalabras);
    campoTexto.value = "";
}

function iniciarJuego(){
    document.querySelector(".seccion-inicio").classList.add("oculto");
    document.querySelector(".seccion-juego").classList.remove("oculto");
    palabraSorteada = listaPalabras[sortearPalabra(listaPalabras.length)].toUpperCase();
    console.log(palabraSorteada);
    document.addEventListener("keydown", comprobarLetra);
    return palabraSorteada;
}

function comprobarLetra(event){
    letraSeleccionada = event.key.toUpperCase();
    if (palabraSorteada.includes(letraSeleccionada)){
        if (aciertos.includes(letraSeleccionada)){
            return false;
        }
        aciertos.push(letraSeleccionada);
        console.log(aciertos);
    }
    else {
        if (errores.includes(letraSeleccionada)){
            return false;
        }
        errores.push(letraSeleccionada);
        console.log(errores);
    }
}

campoTexto.focus();
btnIniciar.addEventListener("click", iniciarJuego);
btnAgregar.addEventListener("click", agregarPalabra);