FROM imbios/bun-node:1.1.26-22.7.0-slim

WORKDIR /app

# copy package.json and lockfile
COPY package.json ./
COPY bun.lockb ./

# Add curl for docker healthcheck
RUN apt-get update && apt-get install -y curl

# Install deps
RUN bun install

# Copy source code
COPY . .

CMD bun start
