//Autor: Jesús Fontestad Royo

let mensaje9 = "Diagonal con N=20:\n";

for (let i = 20; i >= 1; i--) {
    for (let j = 1; j <= 20; j++) {
        if (i >= j) {
            mensaje9 += "* ";
        } else {
            mensaje9 += "  ";
        }
    }
    mensaje9 += "\n"; // fin de la fila
}
document.getElementById("salida9").textContent = mensaje9;