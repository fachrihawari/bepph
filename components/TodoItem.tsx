import { TodoPayload } from "@prisma/client"

type TodoItemProps = {
  todo: TodoPayload['scalars']
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <li class="list-group-item d-flex flex-row align-items-center justify-content-between">
      <div class="form-check">
        <input checked={todo.completed} class="form-check-input" name='completed' type="checkbox" hx-patch={`/todos/${todo.id}`} hx-trigger="click" hx-swap="outerHTML" hx-target="closest li" />
        <label class="form-check-label" for="flexCheckDefault">
          {todo.title}
        </label>
      </div>

      <button class="btn btn-danger" hx-delete={`/todos/${todo.id}`} hx-swap="outerHTML" hx-target="closest li">delete</button>
    </li>
  )
}
