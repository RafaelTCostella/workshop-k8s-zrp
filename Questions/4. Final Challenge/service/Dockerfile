FROM node:alpine

WORKDIR /home/node/app

COPY ./src ./src
COPY ./server.js ./server.js
COPY package.json package.json

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]

# This image is public available in Dockerhub at costella/workshop-k8s-service
