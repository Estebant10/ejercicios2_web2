function drawDiamond(height) {
    // Parte superior del diamante (pirámide ascendente)
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

    // Parte inferior del diamante (pirámide descendente)
    for (let i = height - 2; i >= 0; i--) { // Bucle para cada fila
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

// Altura de la pirámide (número de filas para la mitad superior)
const height = 5;

// Llamar a la función para dibujar el diamante
drawDiamond(height);
