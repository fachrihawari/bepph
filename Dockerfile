FROM imbios/bun-node:1.1.10-20.12.2-slim

# Env
ENV PORT=3000
ENV NODE_ENV=production
ENV DATABASE_URL=file:./production.db

VOLUME ./prisma

WORKDIR /app

# copy package.json and lockfile
COPY package.json ./
COPY bun.lockb ./

# Install deps
RUN bun install

# Copy source code
COPY . .

# Generate prisma client
RUN bunx prisma generate
RUN bunx prisma migrate deploy

CMD bun start

EXPOSE $PORT
