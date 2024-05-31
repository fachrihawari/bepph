# beth-stack

This is just simple proof of concept, how we can build a simple reactive web without a fancy framework

This web is built using:

- <a href="https://bun.sh">Bun</a> as the JavaScript Runtime
- <a href="https://elysiajs.com">Elysia</a> as Web Framework
- <a href="https://www.prisma.io">Prisma</a> as the ORM
- <a href="https://preactjs.com">Preact</a> as the template engine
- <a href="https://htmx.org">HTMX</a> as the reactivity libs
- <a href="https://www.typescriptlang.org/">TypeScript</a> as type system

## Setup Project

1. install deps
  ```bash
  bun install
  ```

2. update env values
  ```bash
  copy .env.example .env
  ```

3. run
  ```bash
  bun run dev
  ```

