const Letra = document.getElementById("txtLetra");
const PalabraOculta  = document.getElementById("PalabraOculta");
const Intentos1    = document.getElementById("Intentos");
const Mensaje = document.getElementById("Mensaje");
const Dguiones = document.getElementById("guiones");

let intentos = 10;
const pOculta = PalabraOculta.value;
let palabra="";
console.log(pOculta.length)
for(let i = 0; i< pOculta.length; i++ )
{
    palabra += "-";
}

Dguiones.innerHTML = palabra;
Intentos1.innerHTML = ("Tus intentos: " + intentos);

function ArriesgarLetra()
{

let letraIngresada = Letra.value.toUpperCase();
let encontrada = false;

for(let i = 0; i < pOculta.length; i++)
    {
        if(pOculta[i] == letraIngresada)
        {
            pOculta[i] = letraIngresada;
            encontrada = true;
        }
    }

    if(letraIngresada === ""){
        encontrada = false;
    }

       if(intentos > 0 && encontrada == false)
    {
        intentos --; 
        document.getElementById("Intentos").innerHTML = intentos;
    }


}



