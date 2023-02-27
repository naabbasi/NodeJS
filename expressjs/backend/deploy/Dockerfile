FROM node:19-alpine

WORKDIR /opt/project
COPY . .
RUN ls -la /opt/project/
RUN npm install
EXPOSE 8000
ENTRYPOINT ["npm","run","start"]