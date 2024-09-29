# syntax=docker/dockerfile:1
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine
LABEL maintainer="Vedansh <https://github.com/offensive-vk>"
LABEL repository="AwesomeTesting"
LABEL url="https://github.com/offensive-vk/AwesomeTesting"
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y gcc gnupg
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

USER node
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
# ===================================