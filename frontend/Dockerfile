FROM alpine
RUN apk add nginx
COPY /build /usr/share/nginx/html
COPY default.conf /etc/nginx/http.d/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]