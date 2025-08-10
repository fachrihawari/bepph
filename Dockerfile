FROM imbios/bun-node:1.2.19-23.11.0-slim

WORKDIR /app

# Add curl for docker healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# copy package.json and lockfile
COPY package.json bun.lockb ./
# Install deps
RUN bun install --frozen-lockfile
# Copy source code
COPY . .

CMD bun start
