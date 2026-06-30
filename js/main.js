import { handleCardAudio } from './audio-player.js';

// Инициализация всех модулей после загрузки DOM структуры
document.addEventListener('DOMContentLoaded', () => {

    // Слушаем клики по всему документу для управления музыкой
    document.body.addEventListener('click', handleCardAudio);

});