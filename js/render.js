// Модуль отрисовки интерфейса (Рендеринг)
window.renderCoffeeCards = function() {
    const grid = document.getElementById('coffee-grid');
    const countries = window.coffeeCountries;

    // Проверяем, есть ли на странице сетка и загрузилась ли база данных
    if (!grid || !countries) {
        console.error("Не удалось запустить рендеринг: отсутствует сетка или база данных стран.");
        return;
    }

    // Генерируем HTML для всех карточек на основе нашей библиотеки
    const cardsHTML = countries.map(country => `
        <li class="country-card card-${country.id}" data-audio="${country.audio}">
            <div class="card-content">
                <h2>${country.name}</h2>
                <p>${country.description}</p>
                <a href="${country.link}" target="_blank" class="card-link">Learn more about ${country.name}</a>
            </div>
        </li>
    `).join('');

    // Вставляем сгенерированный контент в HTML
    grid.innerHTML = cardsHTML;
};