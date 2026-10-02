// Autor: Jesús Fontestad Royo

let mensaje6 = "Números del 20 al 1:";

for (let i = 20; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
        mensaje6 += "\nFizzBuzz";
    } else if (i % 3 === 0) {
        mensaje6 += "\nFizz";
    } else if (i % 5 === 0) {
        mensaje6 += "\nBuzz";
    } else {
        mensaje6 += "\n" + i;
    }
}

document.getElementById("salida6").textContent = mensaje6;