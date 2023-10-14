FROM oven/bun:1.0.6-alpine

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

CMD bun start
