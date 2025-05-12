const carousel = document.querySelector('#carouselHero');
const animatedTexts = document.querySelectorAll('.animated-text');

carousel.addEventListener('slid.bs.carousel', () => {
    animatedTexts.forEach((text) => {
        const content = text.textContent; // Captura o texto original
        text.textContent = ''; // Limpa o texto
        let index = 0;

        // Função para simular o efeito de digitação
        const typeEffect = () => {
            if (index < content.length) {
                text.textContent += content[index];
                index++;
                setTimeout(typeEffect, 100); // Ajuste o tempo para controlar a velocidade
            }
        };

        typeEffect(); // Inicia o efeito de digitação
    });
});