// Función para validar si un número es entero
function isInteger(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

// Función para calcular la suma de los números pares entre N y M
function sumEvenNumbers() {
    // Solicitar al usuario que ingrese los valores de N y M
    const inputN = prompt('Ingrese el valor de N:');
    const inputM = prompt('Ingrese el valor de M:');

    // Validar que las entradas sean números enteros
    if (!isInteger(inputN) || !isInteger(inputM)) {
        console.log('Por favor, ingrese valores numéricos enteros válidos.');
        return;
    }

    // Convertir las entradas a números enteros
    const N = parseInt(inputN, 10);
    const M = parseInt(inputM, 10);

    // Asegurarse de que N sea menor o igual que M
    if (N > M) {
        console.log('El valor de N debe ser menor o igual al valor de M.');
        return;
    }

    // Calcular la suma de los números pares entre N y M
    let sum = 0;
    for (let i = N; i <= M; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    // Mostrar el resultado en la consola
    console.log(`La suma de los números pares entre ${N} y ${M} es: ${sum}`);
}

// Llamar a la función para realizar la operación
sumEvenNumbers();
