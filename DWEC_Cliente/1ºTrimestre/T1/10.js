//Autor: Jesús Fontestad Royo

let mensaje10 = "Diagonal con N=20:\n";

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
        if (i >= j) {
            mensaje10 += "* ";
        } else {
            mensaje10 += "  ";
        }
    }
    mensaje10 += "\n"; // fin de la fila
}
document.getElementById("salida10").textContent = mensaje10;