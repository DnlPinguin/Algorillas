FROM node:alpine as builder
RUN apk add g++ make py3-pip
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .



COPY . .
RUN npm install
RUN npm run build



FROM caddy:2
COPY ./webserver/caddy/production/Caddyfile /etc/caddy/Caddyfile
RUN mkdir /app-data
COPY --from=builder /app/dist /usr/share/caddy/html