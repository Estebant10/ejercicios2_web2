function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true;
}

function generatePrimes() {
    const count = parseInt(document.getElementById('count').value);
    
    // Validar que el número sea mayor o igual a 1
    if (isNaN(count) || count < 1) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número mayor o igual a 1.';
        return;
    }
    
    let primes = [];
    let number = 2;
    
    // Generar los primeros N números primos
    while (primes.length < count) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }
    
    document.getElementById('result').innerText = 'Primeros ' + count + ' números primos: ' + primes.join(', ');
}
