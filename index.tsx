import { Elysia } from 'elysia'
import { render } from 'preact-render-to-string'
import { VNode } from 'preact'

import { Home } from './pages/Home'

const app = new Elysia()
  .decorate('render', (element: VNode) => {
    const html = render(element)
    return new Response(html, { headers: { 'content-type': 'text/html' } })
  })
  .get('/', async ({ render }) => {
    return render(<Home message='Hell world' />)
  })
  .listen(3000)

export type App = typeof app

console.log(`Server is running at http://localhost:${app.server?.port}`)
