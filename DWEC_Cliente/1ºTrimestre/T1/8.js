//Autor: Jesús Fontestad Royo

let mensaje8 = "Diagonal con N=20:\n";

for (let i = 20; i >= 1; i--) {
    for (let j = 1; j <= 20; j++) {
        if (i == j) {
            mensaje8 += "*";
        } else {
            mensaje8 += "  ";
        }
    }
    mensaje8 += "\n"; // fin de la fila
}
document.getElementById("salida8").textContent = mensaje8;