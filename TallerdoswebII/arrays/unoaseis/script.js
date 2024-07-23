// Definir el array
let array = [1, 2, 3, 4, 5, 6];

// Iterar por todos los elementos utilizando while y mostrarlos en pantalla
document.write("<h3>Iterar utilizando while:</h3>");
let i = 0;
while (i < array.length) {
    document.write(array[i] + " ");
    i++;
}
document.write("<br>");

// Iterar por todos los elementos utilizando for y mostrarlos en pantalla
document.write("<h3>Iterar utilizando for:</h3>");
for (let j = 0; j < array.length; j++) {
    document.write(array[j] + " ");
}
document.write("<br>");

// Iterar por todos los elementos utilizando .forEach y mostrarlos en pantalla
document.write("<h3>Iterar utilizando .forEach:</h3>");
array.forEach(function(element) {
    document.write(element + " ");
});
document.write("<br>");

// Mostrar todos los elementos dentro de un array sumándole uno a cada uno
document.write("<h3>Elementos del array sumándoles uno:</h3>");
array.forEach(function(element) {
    document.write((element + 1) + " ");
});
document.write("<br>");

// Generar una copia de un array pero con todos los elementos incrementados en 1
let newArray = array.map(function(element) {
    return element + 1;
});
document.write("<h3>Copia del array con elementos incrementados en 1:</h3>");
newArray.forEach(function(element) {
    document.write(element + " ");
});
document.write("<br>");

// Calcular el promedio
let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
let average = sum / array.length;
document.write("<h3>El promedio de los elementos del array es: " + average + "</h3>");
