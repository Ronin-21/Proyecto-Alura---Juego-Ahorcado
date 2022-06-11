// Dibujar la Horca
let lienzo = document.querySelector(".lienzo").getContext("2d");

function dibujarHorca(){
    lienzo.strokeStyle = "#0a2d48";
    lienzo.lineWidth = "15";
    lienzo.lineCap = "round";
    lienzo.lineJoin = "round";
    lienzo.beginPath();
    lienzo.moveTo(0,500);
    lienzo.lineTo(350,500);
    lienzo.stroke();
}

function agregarPartesAhorcado(cont){
// Cada case dibuja una parte del Ahorcado segun el numero de errores
    switch (cont) {
        case 0:
            lienzo.moveTo(100,500);
            lienzo.lineTo(100,150);
            lienzo.stroke(); 
            break;
        case 1:
            lienzo.lineTo(250,150);
            lienzo.stroke();
            break;
        case 2:
            lienzo.lineTo(250,200);
            lienzo.stroke();
            lienzo.closePath();
            break;
        case 3:
            lienzo.beginPath();
            lienzo.lineWidth = "10";
            lienzo.strokeStyle = "#ffd782";
            lienzo.arc(250,245,40,1.5*Math.PI,4.7);
            lienzo.stroke();
            break;
        case 4:
            lienzo.moveTo(250,290);
            lienzo.lineTo(250,400);
            lienzo.stroke();
            break;
        case 5:
            lienzo.lineTo(200,460);
            lienzo.stroke();
            break;
        case 6:
            lienzo.moveTo(250,400);
            lienzo.lineTo(300,460);
            lienzo.stroke();
            break;
        case 7:
            lienzo.moveTo(250,310);
            lienzo.lineTo(300,360);
            lienzo.stroke();
            break;
        default:
            lienzo.moveTo(250,310);
            lienzo.lineTo(200,360);
            lienzo.stroke();
            break;
    }
}