FROM node:14-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application
COPY src/ ./src
COPY angular.json ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./

# Compile the angular application
RUN npm run build --prod

# Usa l'immagine di Nginx come base dell'immagine finale
FROM nginx:alpine

# Copia il file di configurazione di Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia i file compilati dell'applicazione nella directory di lavoro predefinita di Nginx
COPY --from=0 /app/dist/ /usr/share/nginx/html

# Espone la porta 80 per il traffico HTTP
EXPOSE 80

# Avvia Nginx quando l'immagine viene avviata
CMD ["nginx", "-g", "daemon off;"]
