 
 
 // Función para calcular el factorial y mostrar el proceso
 function factorial(n) { /*Nos da la funcion de ingresar n numero osea un numero cualquiera  */

    if (n < 0) return 'No se puede calcular el factorial de un número negativo';/*Nos muestra una condicion que si "n" es menor que 0 no se puede calcular  */
    if (n === 0) return { resultado: 1, proceso: '0! = 1' };/*Damos una condicionque si es igual a 0 su resultado sera 1*/

    let resultado = 1; /* Damos una variable que la respuesta empiece desde 1 hasta "n" numeros  */
    let proceso = `${n}! = `; /* Mostramos el valor del factorial  */

    for (let i = 1; i <= n; i++) { /* Damos una variable que repita desde 1 hasta "n" numeros   */
        resultado *= i; /* Multiplicamos el valor actual  */
        proceso += i + (i < n ? ' × ' : ' = '); /* Nos muestra el proceso que tiene un factorial  */
    }
    proceso += resultado;
    return { resultado, proceso }; /* Hacemos que nos devuelva el resultado  */
}
    

// Función para manejar el evento de clic
function calcularFactorial() { /*Aqui es donde se ejecuta cuando hacemos click */
    const numero = parseInt(document.getElementById('numero').value); /*Busca el id numero y convertimos el valor entero  */
    const { resultado, proceso } = factorial(numero);  /*Retornamos el resultado  */
    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${resultado}`; /*Analiza el dato ingresado para dar el factorial calculado  */
    document.getElementById('proceso').innerText = proceso; /*Mostramos el proceso analizando el dato ingresado  */
}