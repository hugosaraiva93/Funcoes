// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let fib1 = 0, fib2 = 1, nextFib;
    if (num === fib1 || num === fib2) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    nextFib = fib1 + fib2;
    while (nextFib <= num) {
        if (nextFib === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        fib1 = fib2;
        fib2 = nextFib;
        nextFib = fib1 + fib2;
    }
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Função para verificar Fibonacci e exibir o resultado
function verificarFibonacci() {
    const numero = document.getElementById("numeroFibonacci").value;
    const resultado = isFibonacci(Number(numero));
    document.getElementById("resultadoFibonacci").textContent = resultado;
}
