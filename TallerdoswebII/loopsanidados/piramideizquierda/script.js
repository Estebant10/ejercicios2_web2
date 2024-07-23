function drawLeftPyramid(size) {
    for (let i = 1; i <= size; i++) { // Bucle para cada fila
        for (let j = 1; j <= size; j++) { // Bucle para cada columna
            if (j <= i) {
                document.write('*');
            } else {
                document.write(' ');
            }
        }
        document.write('<br>'); // Salto de línea después de cada fila
    }
}

// Tamaño de la pirámide
const size = 5;

// Llamar a la función para dibujar la pirámide izquierda
drawLeftPyramid(size);
