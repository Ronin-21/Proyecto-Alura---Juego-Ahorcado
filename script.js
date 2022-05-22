let btnIniciar = document.querySelector(".btn-iniciar");
let btnAgregar = document.querySelector(".btn-agregar");
let campoTexto = document.querySelector(".input");
const listaPalabras = ["abel", "aldo", "chipy", "jonny"];
let palabraSorteada = "";
let resultado = [];

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
    palabraSorteada = listaPalabras[sortearPalabra(listaPalabras.length)].toUpperCase();
    console.log(palabraSorteada);
    document.addEventListener("keydown", comprobarLetra);
    return palabraSorteada;
}

function comprobarLetra(event){
    let letraSeleccionada = event.key.toUpperCase();
    if (palabraSorteada.includes(letraSeleccionada)){
        resultado.push(letraSeleccionada);
        console.log(resultado);
    }
    else {
        console.log(letraSeleccionada);
    }
}

campoTexto.focus();
btnIniciar.addEventListener("click", iniciarJuego);
btnAgregar.addEventListener("click", agregarPalabra);