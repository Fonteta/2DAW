var nombreVar = 'Jesus';
let nombreLet = 'Ramon';
const nombreConst = 'Juan';

document.getElementById("salida1").textContent =
    "Antes:\n" +
    nombreVar + "\n" +
    nombreLet + "\n" +
    nombreConst + "\n\n";

nombreVar = "Carlos";
nombreLet = "Pedro";
// nombreConst = "Jose" como es constante da error

document.getElementById("salida1").textContent +=
    "Después:\n" +
    nombreVar + "\n" +
    nombreLet + "\n" +
    nombreConst;