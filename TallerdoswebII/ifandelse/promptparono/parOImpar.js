// Pedir al usuario que ingrese un número
let numero = prompt("Ingrese un número:");

// Convertir el valor ingresado de string a número
numero = parseFloat(numero); // Usamos parseFloat para manejar números decimales también

// Verificar si la conversión a número fue exitosa
if (!isNaN(numero)) {
    // Determinar si el número es par o impar
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
} else {
    // Mostrar un mensaje de error si el valor ingresado no es un número válido
    alert("Por favor, ingrese un número válido.");
}
