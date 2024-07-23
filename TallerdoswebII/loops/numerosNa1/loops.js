function showNumbers() {
    // Solicitar al usuario que ingrese el valor de n
    const n = parseInt(prompt('Ingrese un número (N):'), 10);

    // Verificar si la entrada es válida
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número entero mayor o igual a 1.';
        return;
    }

    // Inicializar la variable para el bucle while
    let i = n;
    let numbers = '';

    // Bucle while para mostrar todos los números de n a 1, disminuyendo de 1 en 1
    while (i >= 1) {
        numbers += i + ' ';
        i--;
    }

    // Mostrar los números en el elemento HTML
    document.getElementById('result').innerText = numbers;
}
