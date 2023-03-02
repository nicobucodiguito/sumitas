// const que interactúa con el HTML vía DOM con id?
const numGenerado = document.getElementById("operacion");
const valorIntroducido = document.getElementById("valor");
const message = document.getElementById('message');
let indice = 0;
let puntaje = 1;
let startTime = Date.now();

function numeros_aleatorios(){
    num1 = Math.round(Math.random() * 10);
    num2 = Math.round(Math.random() * 10);
    return num1, num2;
} 

function terminar_juego(){
    document.getElementById("valor").disabled = true;
    message.innerText = `¡Juego terminado! Tu puntaje fue de ${puntaje} puntos. ¡Felicidades! o ¡Lástima!`
}

//ESTO FUNCIONA PERO TENGO QUE REPASAR LAS FUNCIONES ANONIMAS XD
document.getElementById("start").addEventListener("click", () => {
    numeros_aleatorios()
    //esto presenta el numeroFinal como texto sobre el <p> "operacion" 
    numGenerado.innerText = `${num1} + ${num2}`;
    setTimeout(terminar_juego, 15000);
    document.getElementById("start").disabled = true;
});

valorIntroducido.addEventListener("input", () => {

    const numeroIntroducido = parseInt(valorIntroducido.value)
    const numeroActual = num1 + num2;
    if (numeroIntroducido === numeroActual){
        puntaje += Math.round(puntaje*1.2);
        indice++;
        console.log(puntaje);
        numeros_aleatorios();
        numGenerado.innerText = `${num1} + ${num2}`;
        message.innerText = `Puntaje: ${puntaje}`
        }

})