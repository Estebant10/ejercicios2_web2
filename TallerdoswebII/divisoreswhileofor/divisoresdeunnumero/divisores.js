// Función para validar si un número es entero
function isInteger(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

// Función para encontrar todos los divisores de un número
function findDivisors() {
    // Solicitar al usuario que ingrese un número
    const inputNumber = prompt('Ingrese un número:');

    // Validar que la entrada sea un número entero positivo
    if (!isInteger(inputNumber) || parseInt(inputNumber) <= 0) {
        console.log('Por favor, ingrese un valor numérico entero positivo.');
        return;
    }

    // Convertir la entrada a un número entero
    const number = parseInt(inputNumber, 10);

    // Encontrar los divisores del número
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    // Mostrar los divisores en la consola
    console.log(`Los divisores de ${number} son: ${divisors.join(', ')}`);
}

// Llamar a la función para realizar la operación
findDivisors();
