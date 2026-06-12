const Letra = document.getElementById("Letra");
const PalabraOculta = document.getElementById("PalabraOculta");
const Intentos1 = document.getElementById("Intentos");
const Mensaje = document.getElementById("Mensaje");
const Dguiones = document.getElementById("guiones");

let intentos = 10;
let pOculta = PalabraOculta.value.toUpperCase();
let palabraMostrada = Array(pOculta.length).fill("_");

Dguiones.innerHTML = palabraMostrada.join(" ");
Intentos1.innerHTML = "Tus intentos: " + intentos;

function ArriesgarLetra() {
    let letraIngresada = Letra.value.toUpperCase();

    if (letraIngresada === "") {
        return;
    }

    let encontrada = false;

    for (let i = 0; i < pOculta.length; i++) {
        if (pOculta[i] === letraIngresada) {
            palabraMostrada[i] = letraIngresada;
            encontrada = true;
        }
    }

    Dguiones.innerHTML = palabraMostrada.join(" ");

    if (!encontrada) {
        intentos--;
        Intentos1.innerHTML = "Tus intentos: " + intentos;
    }

    if (!palabraMostrada.includes("_")) {
        Mensaje.innerHTML = "¡GANASTE!";
    }

    if (intentos <= 0) {
        Mensaje.innerHTML = "PERDISTE. La palabra era: " + pOculta;
    }

    Letra.value = "";
}



