# Используем Node.js с Alpine — лёгкий образ
FROM node:20.11.0-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем nodemon глобально (если он нужен как CLI)
RUN npm install -g nodemon

# Копируем остальные файлы проекта
COPY . .

# Открываем порт (замени на нужный, если у тебя не 3000)
EXPOSE 3000

# Запускаем приложение через nodemon
CMD ["npm", "run", "dev"]
