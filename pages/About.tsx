import { Layout } from "./Layout";

export function About() {
  return (
    <Layout>
      <p class='mt-4'>This is just simple proof of concept, how we can build a simple reactive web without a fancy framework</p>
      <p>This web is built using:</p>
      <ul>
        <li><a href="https://bun.sh">Bun</a> as the JavaScript Runtime</li>
        <li><a href="https://elysiajs.com">Elysia</a> as Web Framework</li>
        <li><a href="https://www.prisma.io">Prisma</a> as the ORM</li>
        <li><a href="https://preactjs.com">Preact</a> as the template engine</li>
        <li><a href="https://htmx.org">HTMX</a> as the reactivity libs</li>
        <li><a href="https://www.typescriptlang.org/">TypeScript</a> as type system</li>
      </ul>
    </Layout>
  )
}
