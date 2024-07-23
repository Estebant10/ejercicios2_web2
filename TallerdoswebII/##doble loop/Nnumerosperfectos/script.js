function isPerfect(number) {
    let sumOfDivisors = 0;
    
    // Encontrar los divisores del número
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    
    // Verificar si la suma de los divisores es igual al número
    return sumOfDivisors === number;
}

function generatePerfectNumbers() {
    const count = parseInt(document.getElementById('count').value);
    
    // Validar que el número sea mayor o igual a 1
    if (isNaN(count) || count < 1) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número mayor o igual a 1.';
        return;
    }
    
    let perfectNumbers = [];
    let number = 2;  // Los números perfectos comienzan desde 2
    
    // Generar los primeros N números perfectos
    while (perfectNumbers.length < count) {
        if (isPerfect(number)) {
            perfectNumbers.push(number);
        }
        number++;
    }
    
    document.getElementById('result').innerText = 'Primeros ' + count + ' números perfectos: ' + perfectNumbers.join(', ');
}
