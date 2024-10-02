// Função para calcular a soma conforme o trecho de código dado
function calcularSoma() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    // Enquanto K < INDICE, faz o loop para somar
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;

        // Mostra os valores de K e SOMA em cada iteração
        console.log(`Iteração: K = ${K}, Soma = ${SOMA}`);
    }


    // Exibir o resultado da soma no parágrafo com o id "resultadoSoma"
    document.getElementById("resultadoSoma").textContent = `O valor final de SOMA é: ${SOMA}`;
}
