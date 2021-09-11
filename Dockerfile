FROM node:12.20
WORKDIR /app
COPY api /app/
RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN npm install
EXPOSE 8090
CMD npm start
