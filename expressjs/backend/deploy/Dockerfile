FROM node:19-alpine

WORKDIR /opt/project
#COPY package*.json ./
#RUN npm install
COPY . .
RUN ls -la /opt/project/
EXPOSE 8000
ENTRYPOINT ["npm","run","start"]