// Pedir al usuario que introduzca el número de elementos
let N = parseInt(prompt("Introduce el número de elementos que deseas generar:"));

// Crear un array vacío
let randomNumbers = [];

// Generar N números al azar y guardarlos en el array
for (let i = 0; i < N; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
}

// Mostrar los números generados en pantalla
document.write("<h3>Números al azar generados:</h3>");
randomNumbers.forEach(function(number) {
    document.write(number + " ");
});
