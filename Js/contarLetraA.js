// Função para contar quantas vezes a letra 'a' (maiúscula ou minúscula) aparece
function countLetterA(str) {
    return str.toLowerCase().split('a').length - 1;
}

// Função para contar a letra 'A' e exibir o resultado
function contarLetraA() {
    const texto = document.getElementById("texto").value;
    const contagem = countLetterA(texto);
    const mensagem = contagem > 0 ? `A letra 'a' aparece ${contagem} vez(es).` : "A letra 'a' não foi encontrada.";
    document.getElementById("resultadoLetraA").textContent = mensagem;
}
