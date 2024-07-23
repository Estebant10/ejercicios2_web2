// Pedir al usuario que ingrese una cadena de texto
let texto = prompt("Ingrese una cadena de texto:");

// Verificar si la cadena ingresada no está vacía
if (texto) {
    // Obtener el primer carácter de la cadena
    let primerCaracter = texto.charAt(0);
    
    // Verificar si el primer carácter es un número
    if (!isNaN(primerCaracter) && primerCaracter !== ' ') {
        alert(`La cadena comienza con un número: ${primerCaracter}`);
    } else if (/[a-zA-Z]/.test(primerCaracter)) {
        // Verificar si el primer carácter es una letra
        alert(`La cadena comienza con una letra: ${primerCaracter}`);
    } else {
        alert("El primer carácter no es una letra ni un número.");
    }
} else {
    alert("Por favor, ingrese una cadena de texto.");
}
