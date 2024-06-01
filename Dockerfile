FROM oven/bun:1.1.10-alpine

ENV PORT=3000
ENV NODE_ENV=production
ENV DATABASE_URL=file:./production.db

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

CMD bunx prisma db push && bun start

EXPOSE $PORT
