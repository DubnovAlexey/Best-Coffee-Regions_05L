document.addEventListener('DOMContentLoaded', () => {
    console.log('Кастомный кофейный гид успешно загружен!');

    // Шаг 1: Запускаем выделенный рендеринг карточек из базы данных
    if (typeof window.renderCoffeeCards === 'function') {
        window.renderCoffeeCards();
    }

    // Шаг 2: Только после отрисовки карточек навешиваем на них плеер
    if (typeof window.initAudioPlayer === 'function') {
        window.initAudioPlayer();
    }
});