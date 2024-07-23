// Pedir al usuario que ingrese dos números
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

// Convertir los valores ingresados de string a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verificar si las conversiones a número fueron exitosas
if (!isNaN(numero1) && !isNaN(numero2)) {
    // Determinar cuál número es mayor usando el operador ternario
    let mayor = (numero1 > numero2) ? numero1 : (numero2 > numero1) ? numero2 : "Ambos números son iguales";
    // Mostrar el resultado en una alerta
    alert(`El número mayor es ${mayor}.`);
} else {
    // Mostrar un mensaje de error si uno de los valores no es un número válido
    alert("Por favor, ingrese números válidos.");
}
