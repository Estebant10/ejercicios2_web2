// Función para validar si un número es entero
function isInteger(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Función para calcular el factorial de los primeros N números
function factorialOfFirstNNumbers() {
    // Solicitar al usuario que ingrese el valor de N
    const inputN = prompt('Ingrese el valor de N:');

    // Validar que la entrada sea un número entero positivo
    if (!isInteger(inputN) || parseInt(inputN) <= 0) {
        console.log('Por favor, ingrese un valor numérico entero positivo.');
        return;
    }

    // Convertir la entrada a un número entero
    const N = parseInt(inputN, 10);

    // Calcular y mostrar el factorial de los primeros N números
    for (let i = 1; i <= N; i++) {
        console.log(`El factorial de ${i} es: ${factorial(i)}`);
    }
}

// Llamar a la función para realizar la operación
factorialOfFirstNNumbers();
