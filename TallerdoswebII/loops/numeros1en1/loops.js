function showNumbers() {
    // Solicitar al usuario que ingrese el valor de n
    const n = parseInt(prompt('Ingrese un número (n):'), 10);

    // Verificar si la entrada es válida
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = 'Por favor, ingrese un número entero mayor o igual a 1.';
        return;
    }

    // Inicializar la variable para el bucle while
    let i = 1;
    let numbers = '';

    // Bucle while para mostrar todos los números del 1 al n
    while (i <= n) {
        numbers += i + ' ';
        i++;
    }

    // Mostrar los números en el elemento HTML
    document.getElementById('result').innerText = numbers;
}
