FROM ubuntu:latest

RUN apt update && \
    apt install --yes nodejs && \
    apt install --yes npm && \
    npm install express && \
    npm install express-session && \
    npm install ejs