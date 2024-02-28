#!/bin/bash

sudo apt-get update
sudo apt-get install -y docker.io


sudo docker rm -f frontend || date
sudo docker rm -f backend || date
sudo docker run -d -p 3001:3001 --rm --name backend docker.io/moqaddas/hellobackend:latest
sudo docker run -d -p 80:3000 --rm --name frontend docker.io/moqaddas/reactdemo:latest

