#!/bin/bash

sudo apt-get update
sudo apt-get install -y docker.io


sudo docker rm -f frontend || date
sudo docker run -d -p 80:80 --rm --name frontend your-dockerhub-username/your-image-name:latest
