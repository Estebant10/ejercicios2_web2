// Pedir al usuario que ingrese un número
let numero = prompt("Ingrese un número:");

// Convertir el valor ingresado de string a número
numero = parseFloat(numero); // Usamos parseFloat para manejar números decimales también

// Verificar si la conversión a número fue exitosa
if (!isNaN(numero)) {
    // Determinar si el número es divisible por 11 y 5
    if (numero % 11 === 0 && numero % 5 === 0) {
        console.log(`El número ${numero} es divisible por 11 y 5.`);
    } else {
        console.log(`El número ${numero} no es divisible por 11 y 5.`);
    }
} else {
    // Mostrar un mensaje de error en la consola si el valor ingresado no es un número válido
    console.log("Por favor, ingrese un número válido.");
}
