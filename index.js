document.addEventListener("DOMContentLoaded", function() {
    var resultadoDiv = document.getElementById("resultado");

  
    function factorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * factorial(numero - 1);
        }
    }

    
    function esNumero(valor) {
        return !isNaN(valor) && isFinite(valor);
    }

   
    function calcularFactorial() {
        var numero = prompt("Ingrese un número para calcular su factorial:");

        if (esNumero(numero)) {
            numero = parseFloat(numero);
            var resultado = factorial(numero);
            resultadoDiv.textContent = "El factorial de " + numero + " es: " + resultado;
        } else {
            resultadoDiv.textContent = "Error: Debe ingresar un número válido.";
            calcularFactorial(); 
        }
    }

    
    calcularFactorial();
});