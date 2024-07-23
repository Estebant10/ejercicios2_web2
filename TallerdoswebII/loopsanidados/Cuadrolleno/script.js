function drawSquare(size) {
    let pattern = '';
    for (let i = 0; i < size; i++) { // Bucle para cada fila
        for (let j = 0; j < size; j++) { // Bucle para cada columna
            pattern += '*'; // Agrega un asterisco al patrón
        }
        pattern += '<br>'; // Agrega un salto de línea después de cada fila
    }
    
    // Imprime el patrón en el contenedor con id 'pattern'
    document.getElementById('pattern').innerHTML = pattern;
}

// Tamaño del cuadrado
const size = 5;

// Llamar a la función para dibujar el cuadrado
drawSquare(size);
