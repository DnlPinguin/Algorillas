# Step 1: Build the Vue application
FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Step 2: Serve the built application with Caddy
FROM caddy:2-alpine

COPY --from=build /app/dist /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile
