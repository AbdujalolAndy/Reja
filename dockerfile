FROM node:20.9.0
COPY    . /reja
WORKDIR /reja
CMD npm install && node server.js
