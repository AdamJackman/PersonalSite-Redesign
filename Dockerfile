FROM node

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

COPY src /usr/src/app/src
COPY index.html /usr/src/app/index.html
COPY package.json /usr/src/app/package.json

RUN npm install
RUN npm install -g pushstate-server
RUN npm build
COPY build /usr/src/app/build

CMD ["/usr/local/bin/pushstate-server", "build", "80"]
