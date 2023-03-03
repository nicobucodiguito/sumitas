// const que interactúan con el HTML vía DOM con los IDs
const numGenerado = document.getElementById("operacion");
const valorIntroducido = document.getElementById("valor");
const message = document.getElementById('message');
const switcher = document.getElementById('switcher');

//coso inicial de puntaje, no puede empezar con 0 porque se multiplica por sí mismo
//se podría ver de hacer un mejor sistema
let puntaje = 1;
document.getElementById("valor").disabled = true;

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
    message.innerText = `¡Juego terminado! Tu puntaje fue de ${puntaje} puntos. ¡Felicidades!`
}

//funca pero estaría para repasar las Fat Arrow o funciones anónimas..
document.getElementById("start").addEventListener("click", () => {
    document.getElementById("valor").disabled = false;
    message.innerText = `Puntaje: `;
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

//dark mode switcher, estado inicial definido en el style
switcher.addEventListener('click', function() {

    document.body.classList.toggle('modo-oscuro');
    document.body.classList.toggle('modo-claro');

    //variable for checking the className with a conditional to determine the current CSS theme, and update the button label
    const className = document.body.className;
    if(className == "modo-oscuro") {
        this.textContent = "Tocame para el modo claro!";
    } else {
        this.textContent = "Tocame para el modo oscuro!";
    }

    //console log to check the current class name
    console.log('current class name: ' + className);

});

//INTRODUCIR DARK MODE Y QUIZA VER DE INTRODUCIR ALGUNA CUE VISUAL CUANDO SE INTRODUCE EL NÚMERO CORRECTAMENTE
//QUE SE LIGHTEE VERDE ALGO? O ALGUN SONIDITO TAMBIÉN ESTARÍA BUENO PARA IR PROBANDO
//PONER UN POCO MÁS LINDO EL SITIO. NO SOLO STYLING, ALGÚN FONDO ESTARÍA COPADO PARA PROBAR UN POCO EL CSS