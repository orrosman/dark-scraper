FROM node:16

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 8080

CMD ["npm","start"]

