# base image
FROM node:latest

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# Install yarn package
RUN npm install -g yarn

# install dependencies
RUN yarn install

# start app
RUN yarn build
EXPOSE 3000
CMD yarn start