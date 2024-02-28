FROM alpine

WORKDIR /app

COPY ./backend .

RUN apk add --no-cache  nodejs npm && \
        rm -rf /var/cache/apk/* && \
        npm i 
        


EXPOSE 3001
CMD ["npm", "start"] 