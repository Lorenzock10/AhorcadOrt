namespace Ahorcado.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;


public PalabrasAhorcado()
{

this.palabras = new List<string>()
{
    "COMPUTADORA",
    "BIBLIOTECA",
    "UNIVERSIDAD",
    "MARIPOSAS",
    "AVENTURAS",
    "MONTANAS",
    "DICCIONARIO",
    "ELECTRICO",
    "DESARROLLO",
    "ARQUITECTO"
};

}

public string ObtenerPalabra()
        {
            Random random = new Random();
            int numero = random.Next(0, palabras.Count);

            return palabras[numero];
        }




}
