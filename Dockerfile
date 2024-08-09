FROM imbios/bun-node:1.1.10-20.12.2-debian

# Env
ENV PORT=3000
ENV NODE_ENV=production
ENV DATABASE_URL=file:./production.db

WORKDIR /app
VOLUME /app/prisma

# copy package.json and lockfile
COPY package.json ./
COPY bun.lockb ./

# Add curl for coolify healthcheck
RUN apt-get install curl

# Install deps
RUN bun install

# Copy source code
COPY . .

CMD bun start

EXPOSE $PORT
