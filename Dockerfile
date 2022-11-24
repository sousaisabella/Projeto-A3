FROM ubuntu:latest

COPY  / /opt/projeto_a3

WORKDIR /opt/projeto_a3

RUN rm -r -f /opt/projeto_a3/node_modules && \
    rm -r -f /opt/projeto_a3/package-lock.json 


RUN apt update && \
    apt install --yes nodejs && \
    apt install --yes npm && \
    npm install
