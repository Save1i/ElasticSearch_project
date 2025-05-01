# Используем Node.js для сборки и запуска dev-сервера
FROM node:20.11.0-alpine as build

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

# Открываем порт (по умолчанию Vite работает на 5173)
EXPOSE 5173

# Запускаем Vite dev-сервер
CMD ["npm", "run", "dev", "--", "--host"]
