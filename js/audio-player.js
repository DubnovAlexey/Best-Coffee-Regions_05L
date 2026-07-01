// Модуль управления аудио плеером (Только логика звука)
let currentAudio = null;
let currentCard = null;

function handleCardAudio(card) {
    const audioSrc = card.getAttribute('data-audio');

    if (currentCard === card) {
        if (currentAudio.paused) {
            currentAudio.play().catch(err => console.log("Ошибка воспроизведения:", err));
            card.classList.add('playing');
        } else {
            currentAudio.pause();
            card.classList.remove('playing');
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            if (currentCard) currentCard.classList.remove('playing');
        }

        currentAudio = new Audio(audioSrc);
        currentCard = card;

        currentAudio.play()
            .then(() => {
                card.classList.add('playing');
            })
            .catch(error => {
                console.warn(`Аудиофайл отсутствует или не может быть воспроизведен по пути: ${audioSrc}`, error);
                // ИСПРАВЛЕНИЕ: если произошла ошибка, карточка НЕ должна гореть активной
                card.classList.remove('playing');
                currentAudio = null;
                currentCard = null;
            });

        currentAudio.addEventListener('ended', () => {
            card.classList.remove('playing');
            currentAudio = null;
            currentCard = null;
        });
    }
}

// Инициализация обработчиков клика
window.initAudioPlayer = function () {
    const cards = document.querySelectorAll('.country-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Если кликнули по ссылке, музыку не запускаем
            if (e.target.classList.contains('card-link')) return;
            handleCardAudio(card);
        });
    });
};