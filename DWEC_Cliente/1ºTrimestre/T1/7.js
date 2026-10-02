//Autor: Jesús Fontestad Royo

let mensaje7 = "Diagonal con N=20:\n";

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
        if (i == j) {
            mensaje7 += "*";
        } else {
            mensaje7 += "  ";
        }
    }
    mensaje7 += "\n"; // fin de la fila
}
document.getElementById("salida7").textContent = mensaje7;