// const que interactúan con el HTML vía DOM con los IDs
const numGenerado = document.getElementById("operacion");
const valorIntroducido = document.getElementById("valor");
const message = document.getElementById('message');

//coso inicial de puntaje, no puede empezar con 0 porque se multiplica por sí mismo
//se podría ver de hacer un mejor sistema
let puntaje = 1;


//funcion que genera y returnea dos ranInts
function numeros_aleatorios(){
    num1 = Math.round(Math.random() * 20);
    num2 = Math.round(Math.random() * 20);
    return num1, num2;
}

//funcion terminar juego, una vez que pasan 15s se ejecuta y cierra el input field ademas de dar
//el mensaje de terminado, adjuntando el puntaje total
function terminar_juego(){
    document.getElementById("valor").disabled = true;
    message.innerText = `¡Juego terminado! Tu puntaje fue de ${puntaje} puntos. ¡Felicidades! o ¡Lástima!`
}

//funca pero estaría para repasar las Fat Arrow o funciones anónimas..
document.getElementById("start").addEventListener("click", () => {
    console.log(`hola :-)`);
    numeros_aleatorios();
    //esto presenta el numGenerado como texto sobre el <p> "operacion" 
    numGenerado.innerText = `${num1} + ${num2}`;
    //acá empieza el timer de los 15s hasta que termina el juego
    setTimeout(terminar_juego, 15000);
    //una vez que se dio a Empezar, se desactiva el botón de Empezar jua
    document.getElementById("start").disabled = true;
});

valorIntroducido.addEventListener("input", () => {

    //convirtiendo el input a int porque si no es str y no funca
    const numeroIntroducido = parseInt(valorIntroducido.value)
    //const de la suma de los 2 ranInts para comparar
    const numeroActual = num1 + num2;
    if (numeroIntroducido === numeroActual){
        //el peor sistema de puntaje que vi en mi vida
        puntaje += Math.round(puntaje*1.2);
        //debugging?
        console.log(puntaje);
        //a partir de acá se vuelve a llamar a la funcion que genera números y reemplaza
        //los viejos con los nuevos generados
        numeros_aleatorios();
        numGenerado.innerText = `${num1} + ${num2}`;
        //coso de puntaje, nada wow
        message.innerText = `Puntaje: ${puntaje}`;
        //esto clearea el input a medida que se aciertan los números
        valorIntroducido.value = "";
        }

})