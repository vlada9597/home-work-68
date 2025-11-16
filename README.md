# Home Work 68: Docker, Express, MongoDB

## Мета
Навчитися створювати та запускати Express-додатки у Docker контейнерах з інтеграцією MongoDB.

--------------------

## Встановлення та запуск

1. Клонуємо або створюємо проект:
git clone <repo_url>
cd home-work-68

Встановлюємо Node.js залежності:
npm install

Запускаємо Docker Compose:
docker-compose up --build

Відкриваємо браузер:
http://localhost:3000

Повинно відобразитися: Вітаю! Express з Docker та MongoDB працює!

---------

Файли проекту
app.js – головний додаток Express.

Dockerfile – опис образу Docker.

docker-compose.yml – запуск Express та MongoDB разом.

package.json – залежності Node.js.



Перевірка роботи
Зміни коду автоматично застосовуються у контейнері.

Логи покажуть MongoDB підключено.

Сервер слухає порт 3000.

Зупинка контейнерів:
docker-compose down
