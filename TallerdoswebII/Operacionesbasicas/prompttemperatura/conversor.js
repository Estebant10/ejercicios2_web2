// Pedir al usuario que ingrese la temperatura en Celsius
let celsius = prompt("Ingrese la temperatura en Celsius:");

// Convertir el valor ingresado de string a número
celsius = Number(celsius);

// Verificar si la conversión a número fue exitosa
if (!isNaN(celsius)) {
    // Convertir la temperatura de Celsius a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Mostrar el resultado en una alerta
    alert(`La temperatura en Fahrenheit es: ${fahrenheit}`);
} else {
    // Mostrar un mensaje de error si el valor ingresado no es un número válido
    alert("Por favor, ingrese un número válido para la temperatura en Celsius.");
}
