// Pedir al usuario que ingrese un número
let numero = prompt("Ingrese un número:");

// Convertir el valor ingresado de string a número
numero = Number(numero);

// Verificar si la conversión a número fue exitosa
if (!isNaN(numero)) {
    // Dividir el número por 10
    let resultado = numero / 10;

    // Mostrar el resultado en una alerta
    alert(`El resultado de dividir ${numero} por 10 es: ${resultado}`);
} else {
    // Mostrar un mensaje de error si el valor ingresado no es un número válido
    alert("Por favor, ingrese un número válido.");
}
