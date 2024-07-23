function checkPerfect() {
    const number = parseInt(document.getElementById('number').value);
    
    // Validar que el número sea mayor o igual a 1
    if (isNaN(number) || number < 1) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número mayor o igual a 1.';
        return;
    }
    
    let sumOfDivisors = 0;
    
    // Calcular la suma de los divisores usando un bucle for
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    
    if (sumOfDivisors === number) {
        document.getElementById('result').innerText = 'El número es perfecto.';
    } else {
        document.getElementById('result').innerText = 'El número no es perfecto.';
    }
}
