FROM alpine AS build  
WORKDIR /app
COPY ./frontend/package*.json ./
RUN apk update && \
	apk add nodejs npm && \
	npm i

COPY ./frontend .
RUN npm run build


FROM alpine
RUN apk add nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY ./frontend/default.conf /etc/nginx/http.d/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]