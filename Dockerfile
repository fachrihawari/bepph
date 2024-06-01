FROM imbios/bun-node:1.1.10-20.12.2-alpine

ENV PORT=3000
ENV NODE_ENV=production
ENV DATABASE_URL=file:./production.db

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install
RUN bunx prisma generate

COPY . .

CMD bunx prisma db push && bun start

EXPOSE $PORT
