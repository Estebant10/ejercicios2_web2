function checkTriangle() {
    // Obtener los valores de los ángulos desde los campos de entrada
    const angle1 = parseFloat(document.getElementById('angle1').value);
    const angle2 = parseFloat(document.getElementById('angle2').value);
    const angle3 = parseFloat(document.getElementById('angle3').value);
    
    // Validar que todos los ángulos sean números y mayores a 0
    if (isNaN(angle1) || isNaN(angle2) || isNaN(angle3) || angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese ángulos válidos.';
        return;
    }
    
    // Verificar si la suma de los ángulos es igual a 180
    if (angle1 + angle2 + angle3 === 180) {
        document.getElementById('result').innerText = 'El triángulo es válido.';
    } else {
        document.getElementById('result').innerText = 'El triángulo no es válido.';
    }
}
