ARG PORT

FROM node:12-alpine
RUN mkdir -p /usr/hadouken
WORKDIR /usr/hadouken
COPY dist/ .
EXPOSE ${PORT}
CMD ["node", "server.js"]
