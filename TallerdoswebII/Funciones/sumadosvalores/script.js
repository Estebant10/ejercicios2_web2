// Función que pide dos valores al usuario, los suma y muestra el resultado
function sumAndDisplay() {
    // Pedir el primer valor al usuario
    let a = parseFloat(prompt("Ingrese el primer valor:"));
    
    // Pedir el segundo valor al usuario
    let b = parseFloat(prompt("Ingrese el segundo valor:"));
    
    // Calcular la suma
    let result = a + b;
    
    // Mostrar el resultado en la consola
    console.log("La suma de " + a + " y " + b + " es: " + result);
    
    // Mostrar el resultado en la página
    document.write("La suma de " + a + " y " + b + " es: " + result);
}

// Llamar a la función para ejecutar el código
sumAndDisplay();
