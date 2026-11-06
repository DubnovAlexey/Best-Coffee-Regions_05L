// ФАЙЛ: js/audio-player.js
// НАЗНАЧЕНИЕ: Один проигрыватель карточек, защита от запоздалых play()/ended.
// РАЗДЕЛЫ: 1. Состояние плеера; 2. Запуск и остановка; 3. Подключение карточек.
let currentAudio = null;
let currentCard = null;
let playbackRequest = 0;

// НАЧАЛО ФУНКЦИИ handleCardAudio
function handleCardAudio(card) {
    const audioSrc = card.getAttribute('data-audio');
    if (!audioSrc) return;
    const request = ++playbackRequest;
    if (currentCard === card && currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        card.classList.remove('playing');
        return;
    }
    if (currentCard !== card || !currentAudio) {
        if (currentAudio) currentAudio.pause();
        if (currentCard) currentCard.classList.remove('playing');
        const audio = new Audio(audioSrc);
        currentAudio = audio;
        currentCard = card;
        audio.addEventListener('ended', () => {
            if (currentAudio !== audio) return;
            playbackRequest++;
            card.classList.remove('playing');
            currentAudio = null;
            currentCard = null;
        });
    }
    const audio = currentAudio;
    audio.play().then(() => {
        if (request === playbackRequest && currentAudio === audio && !audio.paused) card.classList.add('playing');
    }).catch(error => {
        // Отклонённое обещание старого трека не сбрасывает уже выбранную карточку.
        if (request !== playbackRequest || currentAudio !== audio) return;
        console.warn('Не удалось воспроизвести аудио: ' + audioSrc, error);
        card.classList.remove('playing');
        currentAudio = null;
        currentCard = null;
    });
}
// КОНЕЦ ФУНКЦИИ handleCardAudio

// НАЧАЛО ФУНКЦИИ initAudioPlayer
window.initAudioPlayer = function () {
    document.querySelectorAll('.country-card').forEach(card => {
        if (card.dataset.audioBound === 'true') return;
        card.dataset.audioBound = 'true';
        card.addEventListener('click', event => {
            if (event.target.closest('a')) return;
            handleCardAudio(card);
        });
    });
};
// КОНЕЦ ФУНКЦИИ initAudioPlayer
