FROM node:14.15.4

RUN mkdir -p /opt/app

RUN apt-get -q update && apt-get -qy install netcat
RUN npm i npm@latest -g

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
# RUN chmod +x /wait
# RUN chmod +x ./wait-for.sh

ADD https://raw.githubusercontent.com/mrako/wait-for/master/wait-for /wait-for
RUN chmod +x /wait-for

CMD sh -c '/wait-for mysql-db:3306 -- sequelize db:migrate && nodemon index.js'

EXPOSE 5000
