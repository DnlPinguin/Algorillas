FROM node:alpine as builder
RUN apk add g++ make py3-pip
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ./Algorillas/package.json .
COPY ./Algorillas/package-lock.json .


RUN npm install --production

COPY ./Algorillas/ .

RUN npm run build





FROM caddy:2
COPY ./webserver/caddy/production/Caddyfile /etc/caddy/Caddyfile
RUN mkdir /app-data
COPY --from=builder /app/build /usr/share/caddy/html