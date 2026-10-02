//Autor: Jesús Fontestad Royo

var nota = 10;

if (nota <= 10 && nota >= 9) {
    document.getElementById("salida4").textContent = "Sobresaliente";
    document.getElementById("salida4").textContent += "\nFelicidades :)";
} else if (nota < 9 && nota >= 7) {
    document.getElementById("salida4").textContent = "Notable";
} else if (nota < 7 && nota >= 5) {
    document.getElementById("salida4").textContent = "Aprobado";
} else if (nota < 5 && nota >= 0) {
    document.getElementById("salida4").textContent = "Suspenso";
} else {
    document.getElementById("salida4").textContent = "Nota no válida";
}