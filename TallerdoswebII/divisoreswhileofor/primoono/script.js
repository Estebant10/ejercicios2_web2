function checkPrime() {
    const number = parseInt(document.getElementById('number').value);
    
    // Validar que el número sea mayor o igual a 2
    if (isNaN(number) || number < 2) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número mayor o igual a 2.';
        return;
    }
    
    let isPrime = true;
    let i = 2;
    
    // Verificar si el número es primo usando un bucle while
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    
    if (isPrime) {
        document.getElementById('result').innerText = 'El número es primo.';
    } else {
        document.getElementById('result').innerText = 'El número no es primo.';
    }
}
