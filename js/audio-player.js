// Переменные инкапсулированы внутри модуля, чтобы не загрязнять глобальную видимость
let currentAudio = null;
let currentCard = null;

export function handleCardAudio(event) {
    if (event.target.classList.contains('card-link')) return;

    const card = event.target.closest('.country-card');
    const isHeader = event.target.closest('.header') || event.target.matches('.header');

    // Логика паузы/воспроизведения
    if (currentAudio) {
        if (isHeader || !card || currentCard === card) {
            if (!currentAudio.paused) {
                currentAudio.pause();
                if (currentCard) currentCard.classList.remove('playing');
            } else {
                currentAudio.play();
                if (currentCard) currentCard.classList.add('playing');
            }
            return;
        }
    }

    // Логика запуска нового трека
    if (card) {
        const audioSrc = card.getAttribute('data-audio');
        if (!audioSrc) return;

        if (currentAudio) {
            currentAudio.pause();
            if (currentCard) currentCard.classList.remove('playing');
        }

        currentAudio = new Audio(audioSrc);
        currentCard = card;

        currentAudio.play().then(() => {
            card.classList.add('playing');
        }).catch(error => {
            console.warn("Аудиофайл пока отсутствует по пути: " + audioSrc);
        });
    }
}