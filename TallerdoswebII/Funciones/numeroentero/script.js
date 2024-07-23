// Función que verifica si el valor ingresado es un número entero
function checkInteger() {
    // Pedir al usuario que ingrese un valor
    let input = prompt("Ingrese un número entero:");

    // Intentar convertir el valor ingresado a un número entero
    let number = parseInt(input);

    // Verificar si el valor ingresado es un número y si es un entero
    if (isNaN(number) || !Number.isInteger(number)) {
        console.error("Error: El valor ingresado no es un número entero.");
        document.write("Error: El valor ingresado no es un número entero.");
    } else {
        console.log("El número ingresado es: " + number);
        document.write("El número ingresado es: " + number);
    }
}

// Llamar a la función para ejecutar el código
checkInteger();
