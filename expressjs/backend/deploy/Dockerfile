FROM node:19-alpine

WORKDIR /opt/project
RUN npm install tsc-alias
COPY . .
RUN ls -la /opt/project/
RUN npm install
EXPOSE 8000
ENTRYPOINT ["npm","run","start"]