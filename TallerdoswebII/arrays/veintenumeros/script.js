// Crear un array vacío
let randomNumbers = [];

// Generar 20 números al azar y guardarlos en el array
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
}

// Mostrar los números generados en pantalla
document.write("<h3>Números al azar generados:</h3>");
randomNumbers.forEach(function(number) {
    document.write(number + " ");
});
