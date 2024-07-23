function drawCenteredPyramid(height) {
    for (let i = 0; i < height; i++) { // Bucle para cada fila
        // Imprimir espacios antes de los asteriscos
        for (let j = 0; j < height - i - 1; j++) {
            document.write(' ');
        }
        // Imprimir asteriscos
        for (let k = 0; k < (2 * i + 1); k++) {
            document.write('*');
        }
        document.write('<br>'); // Salto de línea después de cada fila
    }
}

// Altura de la pirámide
const height = 5;

// Llamar a la función para dibujar la pirámide centrada
drawCenteredPyramid(height);
