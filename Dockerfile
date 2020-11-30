FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

COPY . .
# Installing dependencies
RUN npm install
RUN npm install -g db-migrate
RUN npm install -g db-migrate-pg
# Copying source files

RUN db-migrate up

RUN npm run build

CMD npm start