// Función para calcular la suma de los dígitos
function sumDigits() {
    // Solicitar al usuario que ingrese un número
    const input = prompt('Ingrese un número:');

    // Validar si la entrada es un número válido
    if (!input || isNaN(input) || /[a-zA-Z]/.test(input)) {
        console.log('Por favor, ingrese un número válido sin letras.');
        return;
    }

    // Convertir la entrada a una cadena para procesar los dígitos
    const numStr = input.toString();
    let sum = 0;

    // Calcular la suma de los dígitos
    for (let char of numStr) {
        sum += parseInt(char, 10);
    }

    // Mostrar el resultado en la consola
    console.log(`La suma de los dígitos es: ${sum}`);
}

// Llamar a la función para realizar la operación
sumDigits();
