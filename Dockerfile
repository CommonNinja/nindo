FROM node:lts

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json .
COPY yarn.lock .

# packages
COPY /packages/create-nindo-app/package.json /app/packages/create-nindo-app/package.json
COPY /packages/dev-app/package.json /app/packages/dev-app/package.json
COPY /packages/nindo/package.json /app/packages/nindo/package.json
COPY /packages/storybook/package.json /app/packages/storybook/package.json

RUN yarn

ADD . .