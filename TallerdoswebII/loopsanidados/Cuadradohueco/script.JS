function drawHollowSquare(size) {
    for (let i = 0; i < size; i++) { // Bucle para cada fila
        for (let j = 0; j < size; j++) { // Bucle para cada columna
            // Imprimir asteriscos en los bordes
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                document.write('*');
            } else {
                // Imprimir espacios en el interior
                document.write(' ');
            }
        }
        document.write('<br>'); // Salto de línea después de cada fila
    }
}

// Tamaño del cuadrado
const size = 5;

// Llamar a la función para dibujar el cuadrado hueco
drawHollowSquare(size);
