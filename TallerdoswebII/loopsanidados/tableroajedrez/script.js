function drawChessBoard(size) {
    for (let i = 0; i < size; i++) { // Bucle para cada fila
        for (let j = 0; j < size; j++) { // Bucle para cada columna
            // Alternar entre asteriscos y espacios
            if ((i + j) % 2 === 0) {
                document.write('*');
            } else {
                document.write(' ');
            }
        }
        document.write('<br>'); // Salto de línea después de cada fila
    }
}

// Tamaño del tablero de ajedrez (8x8)
const size = 8;

// Llamar a la función para dibujar el tablero de ajedrez
drawChessBoard(size);
