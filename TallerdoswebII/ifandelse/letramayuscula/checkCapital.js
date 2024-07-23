function checkCapital() {
    // Obtener el valor de la palabra desde el campo de entrada
    const word = document.getElementById('word').value.trim();
    
    // Verificar que el campo no esté vacío
    if (word.length === 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese una palabra.';
        return;
    }
    
    // Obtener la primera letra de la palabra
    const firstChar = word.charAt(0);
    
    // Verificar si la primera letra es una mayúscula
    if (firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase()) {
        document.getElementById('result').innerText = 'La palabra empieza con mayúscula.';
    } else {
        document.getElementById('result').innerText = 'La palabra no empieza con mayúscula.';
    }
}
