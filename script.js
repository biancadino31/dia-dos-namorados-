// Selecionando os elementos do DOM
const buttonEnviar = document.getElementById('enviar');
const mensagemArea = document.getElementById('mensagem');
const resultSection = document.getElementById('result');
const mensagemFinal = document.getElementById('mensagem-final');
const musica = document.getElementById('musica');
const buttonPlayPause = document.getElementById('play-pause');

// Função para mostrar a mensagem após envio
buttonEnviar.addEventListener('click', function() {
    const mensagem = mensagemArea.value.trim();

    if (mensagem.length > 0) {
        // Adicionando emoji à mensagem
        mensagemFinal.innerText = `"${mensagem}" 😘💖`;

        // Exibindo a seção de resultado com animação
        resultSection.style.display = 'block';
        resultSection.classList.add('pulse');

        // Remover animação após alguns segundos
        setTimeout(() => {
            resultSection.classList.remove('pulse');
        }, 2000);
    } else {
        // Caso o usuário não escreva nada
        alert('Por favor, escreva uma mensagem de amor antes de enviar.');
    }
});

// Função para alternar o estado de play/pause da música
buttonPlayPause.addEventListener('click', function() {
    if (musica.paused) {
        musica.play();
        buttonPlayPause.textContent = '🎶 Pausar Música 🎶';
    } else {
        musica.pause();
        buttonPlayPause.textContent = '🎵 Tocar Música 🎵';
    }
});
