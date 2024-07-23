// Paso 1: Pedir al usuario que ingrese el primer número
let numero1 = prompt("Ingrese el primer número:");

// Paso 2: Pedir al usuario que ingrese el segundo número
let numero2 = prompt("Ingrese el segundo número:");

// Convertir los números ingresados de string a número (ya que prompt devuelve string)
numero1 = Number(numero1);
numero2 = Number(numero2);

// Paso 3: Realizar la suma de los dos números
let suma = numero1 + numero2;

// Paso 4: Mostrar el resultado en una alerta
alert(`El resultado de la suma es: ${suma}`);
