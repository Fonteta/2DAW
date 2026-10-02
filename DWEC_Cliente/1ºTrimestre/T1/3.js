//Autor: Jesús Fontestad Royo

var mensaje = "Hola";

if (true) {
    let mensaje = "Adiós";
    document.getElementById("salida3").textContent = "Dentro del if: " + mensaje;
}
document.getElementById("salida3").textContent += "\nFuera del if: " + mensaje;