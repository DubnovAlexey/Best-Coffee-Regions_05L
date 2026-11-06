# The Best Coffee Regions

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

<a name="english"></a>

## English

A page about six famous coffee regions — Brazil, Colombia, India, Ethiopia, Costa Rica and Kenya. The cards are rendered from a data file, and each region has its own music.

**Live demo:** https://dubnovalexey.github.io/Best-Coffee-Regions_05L/

### Quick tour

Choose a region, play its music, then select another card to compare the content and playback. The external “Learn more” link opens a reference page.

For source review, follow `js/data.js` → `js/render.js` → `js/audio-player.js`; `js/main.js` initializes rendering before binding playback. No build step or account is required.

The language links above switch the documentation; they do not translate the existing demo interface.

### How it is built

- `js/data.js` — the regions: name, description, track and a link to read more.
- `js/render.js` — builds the cards from the data; `js/audio-player.js` — the music; `js/main.js` connects everything.

### Music

Each region plays its own track.

- India — Carbon Based Lifeforms, "Photosynthesis"
- Kenya — Kazdoura, "Khayal"

The music belongs to its authors and is used only in this non-commercial study project. If you hold the rights to a track and want it removed, please open an issue and I will remove it.

### Tech stack

HTML5 · CSS3 · JavaScript (DOM, data-driven rendering) · `<audio>` · GitHub Pages

### Run locally

Open `index.html` in a browser.

### Planned improvements

These are proposals, not currently implemented features.

- Visual: add a compact taste profile and a coffee-bean favicon that remains legible at small sizes.
- Engineering: make Play/Pause a keyboard-accessible control and keep a permanent regression test for rapid track changes.
- Functionality: add taste filters and an optional map; keep the current six-region guide usable without them.

---

<a name="russian"></a>

## Русский

**Лучшие кофейные регионы**

Страница о шести знаменитых кофейных регионах — Бразилии, Колумбии, Индии, Эфиопии, Коста-Рике и Кении. Карточки строятся из файла данных, у каждого региона своя музыка.

**Демо:** https://dubnovalexey.github.io/Best-Coffee-Regions_05L/

### Быстрый просмотр

Выберите регион, включите музыку и перейдите к другой карточке: сравните содержание и переключение треков. Ссылка «Learn more» открывает внешний справочный материал.

Для разбора кода проследите `js/data.js` → `js/render.js` → `js/audio-player.js`; `js/main.js` сначала строит карточки, затем связывает плеер. Сборка и аккаунт не нужны.

Языковые ссылки выше переключают документацию, а не переводят существующий интерфейс демо.

### Как устроено

- `js/data.js` — регионы: название, описание, трек и ссылка «подробнее».
- `js/render.js` строит карточки из данных; `js/audio-player.js` — музыка; `js/main.js` соединяет всё вместе.

### Музыка

У каждого региона свой трек.

- Индия — Carbon Based Lifeforms, «Photosynthesis»
- Кения — Kazdoura, «Khayal»

Музыка принадлежит авторам и используется только в этом некоммерческом учебном проекте. Если вы правообладатель и хотите, чтобы трек убрали, откройте issue — уберу.

### Стек

HTML5 · CSS3 · JavaScript (DOM, вывод из данных) · `<audio>` · GitHub Pages

### Как запустить

Откройте `index.html` в браузере.

### План развития

Это предложения, а не уже реализованные возможности.

- Визуал: добавить компактный профиль вкуса и читаемый в малом размере favicon кофейного зерна.
- Инженерия: выделить доступный с клавиатуры Play/Pause и постоянный регрессионный тест быстрых смен трека.
- Функции: добавить фильтр вкуса и необязательную карту, сохранив простой просмотр шести регионов.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

**אזורי הקפה הטובים ביותר**

דף על שישה אזורי קפה מפורסמים — ברזיל, קולומביה, הודו, אתיופיה, קוסטה ריקה וקניה. הכרטיסים נבנים מקובץ נתונים, ולכל אזור מוזיקה משלו.

**הדגמה:** https://dubnovalexey.github.io/Best-Coffee-Regions_05L/

### סיור קצר

בחרו אזור, הפעילו את המוזיקה ועברו לכרטיס אחר כדי להשוות תוכן והחלפת רצועות. הקישור “Learn more” פותח מקור מידע חיצוני.

לעיון בקוד: `js/data.js` → `js/render.js` → `js/audio-player.js`. הקובץ `js/main.js` בונה את הכרטיסים לפני חיבור הנגן. אין צורך בבנייה או בחשבון.

קישורי השפה למעלה מחליפים את התיעוד, ולא מתרגמים את ממשק ההדגמה הקיים.

### מוזיקה

לכל אזור רצועה משלו.

- הודו — Carbon Based Lifeforms, "Photosynthesis"
- קניה — Kazdoura, "Khayal"

המוזיקה שייכת ליוצריה ומשמשת רק בפרויקט לימודי לא מסחרי זה. בעלי זכויות שרוצים שרצועה תוסר מוזמנים לפתוח issue ואסיר אותה.

### טכנולוגיות

HTML5 · CSS3 · JavaScript · GitHub Pages

### הרצה מקומית

פתחו את `index.html` בדפדפן.

### שיפורים מתוכננים

אלה הצעות, לא יכולות שכבר מומשו.

- חזות: להוסיף פרופיל טעם תמציתי וסמל פולי קפה קריא גם בגודל קטן.
- הנדסה: להוסיף כפתור Play/Pause נגיש במקלדת ובדיקת נסיגה קבועה להחלפת רצועות מהירה.
- יכולות: סינון לפי טעם ומפה אופציונלית, תוך שמירת הגישה הפשוטה לששת האזורים.

</div>
