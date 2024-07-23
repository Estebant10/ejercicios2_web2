// Función para generar un número aleatorio entre 1 y 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función principal para manejar la lógica del juego
function playGuessingGame() {
    // Generar el número aleatorio
    const randomNumber = getRandomNumber();
    
    // Pedir al usuario que introduzca su adivinanza
    const userGuess = parseInt(prompt('Adivina un número entre 1 y 10:'), 10);
    
    // Verificar si la entrada del usuario es válida
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Por favor, ingrese un número válido entre 1 y 10.');
        return;
    }
    
    // Comparar la adivinanza del usuario con el número aleatorio
    if (userGuess === randomNumber) {
        alert('¡Buen trabajo! Adivinaste el número.');
    } else {
        alert(`No corresponde. El número era ${randomNumber}.`);
    }
}
