// Sequência a): 1, 3, 5, 7, ___
// Lógica: Números ímpares, então o próximo número é 9
function sequenciaA() {
    const proximo = 9;
    document.getElementById("resultadoA").textContent = `O próximo número é: ${proximo}`;
}

// Sequência b): 2, 4, 8, 16, 32, 64, ____
// Lógica: Multiplicação por 2, então o próximo número é 128
function sequenciaB() {
    const proximo = 128;
    document.getElementById("resultadoB").textContent = `O próximo número é: ${proximo}`;
}

// Sequência c): 0, 1, 4, 9, 16, 25, 36, ____
// Lógica: Quadrados perfeitos, então o próximo número é 49 (7^2)
function sequenciaC() {
    const proximo = 49;
    document.getElementById("resultadoC").textContent = `O próximo número é: ${proximo}`;
}

// Sequência d): 4, 16, 36, 64, ____
// Lógica: Quadrados perfeitos multiplicados por 4, então o próximo número é 100 (10^2)
function sequenciaD() {
    const proximo = 100;
    document.getElementById("resultadoD").textContent = `O próximo número é: ${proximo}`;
}

// Sequência e): 1, 1, 2, 3, 5, 8, ____
// Lógica: Sequência de Fibonacci, então o próximo número é 13
function sequenciaE() {
    const proximo = 13;
    document.getElementById("resultadoE").textContent = `O próximo número é: ${proximo}`;
}

// Sequência f): 2, 10, 12, 16, 17, 18, 19, ____
// Lógica: Números alternados entre adicionar 8 e números consecutivos, o próximo é 20
function sequenciaF() {
    const proximo = 20;
    document.getElementById("resultadoF").textContent = `O próximo número é: ${proximo}`;
}
