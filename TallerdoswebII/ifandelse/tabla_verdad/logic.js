function updateValues() {
    // Obtener los valores de a y b
    const a = document.getElementById('a').checked;
    const b = document.getElementById('b').checked;
    
    // Calcular las expresiones
    const expr1 = !a && !b;
    const expr2 = !a || !b;
    const negExpr1 = a || b; // Negación de !a && !b
    const negExpr2 = a && b; // Negación de !a || !b

    // Mostrar los resultados en el HTML
    document.getElementById('expr1').innerText = `!a && !b: ${expr1}`;
    document.getElementById('expr2').innerText = `!a || !b: ${expr2}`;
    document.getElementById('negExpr1').innerText = `Negación de !a && !b: ${negExpr1}`;
    document.getElementById('negExpr2').innerText = `Negación de !a || !b: ${negExpr2}`;
}

// Inicializar los valores al cargar la página
document.addEventListener('DOMContentLoaded', updateValues);
