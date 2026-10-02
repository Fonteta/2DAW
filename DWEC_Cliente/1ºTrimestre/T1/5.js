//Autor: Jesús Fontestad Royo

let total = 0;

for (let numero = 1; numero <= 50; numero++) {
    if (numero % 4 === 0) {
        total += numero;
    }
}
document.getElementById("salida5").textContent = "La suma de los múltiplos de 4 entre 1 y 50 es: " + total;