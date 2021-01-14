## STEP 1: Build
FROM node:15.5.1-alpine3.10 AS build
# FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . . 
RUN npm run build --prod

## STEP 2: NGINX
FROM nginx:1.19.6-alpine AS prod-stage
COPY --from=build /app/dist/ebarn-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]