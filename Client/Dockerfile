# Stage 1 — build
FROM node:20.11.0-alpine AS build

WORKDIR /app

# 👇 добавляем аргумент
ARG VITE_SERVER_URL

# 👇 устанавливаем его как переменную окружения
ENV VITE_SERVER_URL=$VITE_SERVER_URL

COPY package*.json ./
RUN npm install

COPY . .

# 👇 теперь переменная будет доступна Vite при сборке
RUN npm run build


# Stage 2 — serve
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
