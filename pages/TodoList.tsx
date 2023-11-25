import { TodoPayload } from "@prisma/client"
import { Layout } from "./Layout"
import { TodoItem } from "../components/TodoItem"

type HomeProps = {
  todos: TodoPayload['scalars'][]
}

export function TodoList({ todos }: HomeProps) {
  return (
    <Layout>
      <input
        type="text"
        x-model="input"
        class='form-control my-4'
        placeholder="Add new todo"
        name="title"
        hx-post="/todos"
        hx-trigger="keyup[keyCode==13]"
        hx-target=".list-group"
        hx-swap="beforeend"
        hx-on="htmx:after-request: this.value = ''"
      />
      <ul class='list-group'>
        {todos.map(todo => <TodoItem todo={todo} />)}
      </ul>
    </Layout>
  )
}
