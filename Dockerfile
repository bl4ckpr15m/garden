FROM node:alpine

RUN mkdir /code
WORKDIR /code
COPY . /code/

# Install our requirements.
RUN npm install -g gulp
RUN npm install
RUN gulp compile
