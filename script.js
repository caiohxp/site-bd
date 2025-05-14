const carousel = document.querySelector('#carouselHero');
const animatedTexts = document.querySelectorAll('.animated-text');
let typingTimeouts = []; // Array para armazenar os timeouts ativos

carousel.addEventListener('slid.bs.carousel', () => {
    const arrayContent = ['Agência', 'Arch & Design', 'Immersive 3D', 'Film Studio'];

    // Limpa todos os timeouts ativos antes de iniciar novos
    typingTimeouts.forEach(timeout => clearTimeout(timeout));
    typingTimeouts = []; // Reseta o array de timeouts

    animatedTexts.forEach((text, i) => {
        text.textContent = ''; // Limpa o texto
        let index = 0;

        // Função para simular o efeito de digitação
        const typeEffect = () => {
            if (index < arrayContent[i].length) {
                text.textContent += arrayContent[i][index];
                index++;
                const timeout = setTimeout(typeEffect, 100); // Ajuste o tempo para controlar a velocidade
                typingTimeouts.push(timeout); // Armazena o timeout
            }
        };

        typeEffect(); // Inicia o efeito de digitação
    });
});