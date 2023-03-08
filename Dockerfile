FROM node:14-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application
COPY src/ ./src
COPY angular.json ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./

# Compile the angular application as production
RUN npm run build --prod

# Use Nginx as final container
FROM nginx:alpine

# Copy the compiled files from the builder container
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Copy configuration file for Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
