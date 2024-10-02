// Função para resolver o problema dos interruptores e lâmpadas
function resolverInterruptores() {
    const explicacao = `
    <p>1. Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.</p>
    <p>2. Após alguns minutos, desligue o primeiro interruptor e ligue o segundo interruptor.</p>
    <p>3. Vá para a sala das lâmpadas:</p>
    <ul>
        <li>A lâmpada que estiver acesa é controlada pelo segundo interruptor.</li>
        <li>A lâmpada que estiver apagada, mas quente, é controlada pelo primeiro interruptor.</li>
        <li>A lâmpada que estiver apagada e fria é controlada pelo terceiro interruptor.</li>
    </ul>
`;
document.getElementById("resultadoInterruptores").innerHTML = explicacao;
}
