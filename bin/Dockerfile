FROM node:latest
COPY . .
 
RUN npm install
RUN npm audit fix
 
EXPOSE 3000 27017
 
CMD npm start