function checkAge() {
    // Obtener el valor de la edad desde el campo de entrada
    const age = parseInt(document.getElementById('age').value, 10);
    
    // Validar que la edad sea un número positivo
    if (isNaN(age) || age < 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese una edad válida.';
        return;
    }
    
    // Verificar el grupo de edad
    let resultMessage;
    if (age < 13) {
        resultMessage = "Es niño";
    } else if (age < 18) {
        resultMessage = "Es adolescente";
    } else {
        resultMessage = "Es adulto";
    }
    
    // Mostrar el resultado
    document.getElementById('result').innerText = resultMessage;
}
