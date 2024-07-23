// Definir el array de colores
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

// Pedir al usuario que introduzca un color
let colorUsuario = prompt("Introduce un color:");

// Convertir el color introducido a minúsculas para una comparación insensible a mayúsculas/minúsculas
colorUsuario = colorUsuario.toLowerCase();

// Determinar si el color está en el array
if (colores.includes(colorUsuario)) {
    document.write("El color " + colorUsuario + " se encuentra en el array.");
} else {
    document.write("El color " + colorUsuario + " no se encuentra en el array.");
}
