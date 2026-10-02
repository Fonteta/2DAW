//Autor: Jesús Fontestad Royo

var nombreVar = 'Jesus';
let nombreLet = 'Ramon';
const nombreConst = 'Juan';

document.getElementById("salida1").textContent =
    "Antes:\n" +
    "var: " + nombreVar + "\n" +
    "let: " + nombreLet + "\n" +
    "const: " + nombreConst + "\n\n";

nombreVar = "Carlos";
nombreLet = "Pedro";
// nombreConst = "Jose" como es constante da error

document.getElementById("salida1").textContent +=
    "Después:\n" +
    "var: " + nombreVar + "\n" +
    "let: " + nombreLet + "\n" +
    "const: " + nombreConst;