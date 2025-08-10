import { Elysia, t } from 'elysia'
import { render } from 'preact-render-to-string'
import { VNode } from 'preact'
import { PrismaClient } from '@prisma/client'

import { TodoList } from './pages/TodoList'
import { TodoItem } from './components/TodoItem'
import { About } from './pages/About'

const app = new Elysia()
  .decorate('render', (element: VNode) => {
    const html = render(element)
    return new Response(html, { headers: { 'content-type': 'text/html' } })
  })
  .decorate('db', () => {
    const prisma = new PrismaClient()
    return prisma
  })
  .get('/', async ({ render, db }) => {
    const todos = await db().todo.findMany()
    return render(<TodoList todos={todos} />)
  })
  .get('/about', async ({ render }) => {
    return render(<About />)
  })
  .post('/todos', async ({ db, render, body }) => {
    const todo = await db().todo.create({
      data: body
    })
    return render(<TodoItem todo={todo} />)
  }, {
    body: t.Object({ title: t.String() })
  })
  .patch('/todos/:id', async ({ db, render, params, body }) => {
    const todo = await db().todo.update({
      where: { id: params.id },
      data: {
        completed: body.completed === 'on'
      }
    })

    return render(<TodoItem todo={todo} />)
  }, {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({ completed: t.Optional(t.String()) }),
  })
  .delete('/todos/:id', async ({ db, params }) => {
    await db().todo.delete({
      where: { id: params.id }
    })
  }, {
    params: t.Object({ id: t.Numeric() })
  })

  .get('/api/heartbeat', async () => {
    return { status: "OK" }
  })
  .get('/api/seed', async ({ db }) => {
    await db().todo.deleteMany()
    await db().todo.createMany({
      data: [
        { title: "Bun as the JavaScript Runtime" },
        { title: "Elysia as Web Framework" },
        { title: "Prisma as the ORM" },
        { title: "Preact as the template engine" },
        { title: "HTMX as the reactivity libs" },
        { title: "TypeScript as type system" },
      ]
    })
    return { status: "OK" }
  })

  .listen({
    port: Bun.env.PORT || 3000,
    hostname: '0.0.0.0'
  })

export type App = typeof app

console.log(`Server is running at http://${app.server?.hostname}:${app.server?.port}`)
