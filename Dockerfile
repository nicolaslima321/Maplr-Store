FROM node:16.11.0

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install
