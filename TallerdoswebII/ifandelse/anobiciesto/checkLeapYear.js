function checkLeapYear() {
    // Obtener el valor del año desde el campo de entrada
    const year = parseInt(document.getElementById('year').value);
    
    // Validar que el año sea un número positivo
    if (isNaN(year) || year <= 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese un año válido.';
        return;
    }
    
    // Verificar si el año es bisiesto
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    if (isLeapYear) {
        document.getElementById('result').innerText = `${year} es un año bisiesto.`;
    } else {
        document.getElementById('result').innerText = `${year} no es un año bisiesto.`;
    }
}
