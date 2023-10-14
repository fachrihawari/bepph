import { Elysia, t } from 'elysia'
import { render } from 'preact-render-to-string'
import { VNode } from 'preact'
import { PrismaClient } from './prisma/client-js'

import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { About } from './components/About'

const port = process.env.PORT || 3000

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
  .get('/about', async ({ render, db }) => {
    return render(<About />)
  })
  .post('/todos', async ({ db, render, body }) => {
    const todo = await db().todo.create({
      data: body
    })
    console.log(todo)

    return render(<TodoItem todo={todo} />)
  }, {
    body: t.Object({ title: t.String() })
  })
  .patch('/todos/:id', async ({ db, params, body }) => {
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
    console.log(params)
    await db().todo.delete({
      where: { id: params.id }
    })
  }, {
    params: t.Object({ id: t.Numeric() })
  })
  .listen(port)

export type App = typeof app

console.log(`Server is running at http://localhost:${app.server?.port}`)
