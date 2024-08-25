FROM imbios/bun-node:1.1.26-22.7.0-alpine

WORKDIR /app

# copy package.json and lockfile
COPY package.json ./
COPY bun.lockb ./

# Add curl for docker healthcheck
RUN apk update && apk add curl

# Install deps
RUN bun install

# Copy source code
COPY . .

CMD bun start
