FROM node:12.5.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD npm start -- --port ${PORT:-8080}