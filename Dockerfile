FROM ubuntu:latest

RUN apt update && apt install -y nodejs && apt install -y npm

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start
